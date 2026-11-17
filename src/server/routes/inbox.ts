import {Hono} from 'hono';
import {validator} from 'hono/validator';

import {UPCOMING} from '../../content/site';
import {check, type ContactTopic} from '../../lib/forms';
import type {ContactMessagesPage, TicketRequestsPage} from '../../lib/types';
import {problem, requireMember, requirePermission, withDb, withViewer} from '../../platform/guards';
import {CODENAMES} from '../../platform/permissions';

/**
 * The site's inbox, stored in the Site Database.
 *
 * Public (the forms on `/`, `/schedule` and `/contact`; `sameOrigin` refuses
 * cross-site posts, a hidden `website` field catches simple bots):
 *   POST /site-api/inbox/tickets     reserve seats at an upcoming event
 *   POST /site-api/inbox/contact     send a message
 *
 * Site admins (`MANAGE_INBOX`), from `/portal/inbox`:
 *   GET /site-api/inbox/tickets?before=    newest first, keyset-paged
 *   GET /site-api/inbox/contact?before=
 *
 * Field limits come from `src/lib/forms.ts`, the same rules the forms show.
 */

/** Who may read what visitors sent: the community's site admins. */
export const MANAGE_INBOX = CODENAMES.SITE_UPDATE;

const PAGE_SIZE = 25;

const cursorOf = (value: unknown) => {
  const n = Number(value);
  return Number.isSafeInteger(n) && n > 0 ? n : undefined;
};

const pageQuery = validator('query', value => ({
  before: typeof value.before === 'string' ? value.before : undefined,
}));

/** A validated form: its trimmed fields, or `bot` when the honeypot was filled. */
type Parsed = {bot: boolean; fields: Record<string, string>};

/**
 * Validates `fields` (name → rule) from a JSON body. Answers 422 with the
 * first bad field's name so the form can show the message under it.
 */
function body(fields: Record<string, string>) {
  return validator('json', (value, c) => {
    const v = (value ?? {}) as Record<string, unknown>;
    // The honeypot: people never see it, simple bots fill it in. Pretend it worked.
    if (typeof v.website === 'string' && v.website.trim()) return {bot: true, fields: {}} satisfies Parsed;
    const out: Record<string, string> = {};
    for (const [field, rule] of Object.entries(fields)) {
      const raw = v[field];
      const text = typeof raw === 'string' ? raw.trim() : typeof raw === 'number' ? String(raw) : '';
      const message = check(rule, text);
      if (message) return c.json({...problem('invalid_field', message), field}, 422);
      out[field] = text;
    }
    return {bot: false, fields: out} satisfies Parsed;
  });
}

const ticketBody = body({
  event: 'event',
  name: 'name',
  business: 'business',
  trade: 'trade',
  email: 'email',
  phone: 'phone',
  seats: 'seats',
});

const contactBody = body({
  topic: 'topic',
  name: 'name',
  email: 'email',
  business: 'businessOptional',
  message: 'message',
});

export const inboxRoutes = new Hono()
  // ---- public ---------------------------------------------------------------
  .post('/tickets', ticketBody, withDb, async c => {
    const {bot, fields: input} = c.req.valid('json');
    if (bot) return c.json({ok: true}, 201);
    // Only events that are still upcoming take reservations.
    const event = UPCOMING.find(e => e.slug === input.event && new Date(e.start).getTime() > Date.now());
    if (!event) {
      return c.json({...problem('invalid_field', 'That event is no longer taking reservations. Choose another.'), field: 'event'}, 422);
    }
    await c.var.db.ticketRequest.create({
      data: {
        eventSlug: event.slug,
        name: input.name,
        business: input.business,
        trade: input.trade,
        email: input.email,
        phone: input.phone,
        seats: Number(input.seats),
      },
      select: {id: true},
    });
    return c.json({ok: true}, 201);
  })

  .post('/contact', contactBody, withDb, async c => {
    const {bot, fields: input} = c.req.valid('json');
    if (bot) return c.json({ok: true}, 201);
    await c.var.db.contactMessage.create({
      data: {
        topic: input.topic as ContactTopic,
        name: input.name,
        email: input.email,
        business: input.business,
        message: input.message,
      },
      select: {id: true},
    });
    return c.json({ok: true}, 201);
  })

  // ---- site admins ------------------------------------------------------------
  .get('/tickets', pageQuery, withViewer, requireMember, requirePermission(MANAGE_INBOX), withDb, async c => {
    const cursor = cursorOf(c.req.valid('query').before);
    const rows = await c.var.db.ticketRequest.findMany({
      select: {id: true, eventSlug: true, name: true, business: true, trade: true, email: true, phone: true, seats: true, createdAt: true},
      where: cursor ? {id: {lt: cursor}} : undefined,
      orderBy: {id: 'desc'},
      take: PAGE_SIZE + 1,
    });
    const tickets = rows.slice(0, PAGE_SIZE);
    const page: TicketRequestsPage = {
      tickets: tickets.map(row => ({...row, createdAt: row.createdAt.toISOString()})),
      nextBefore: rows.length > PAGE_SIZE ? tickets.at(-1)!.id : null,
    };
    return c.json(page);
  })

  .get('/contact', pageQuery, withViewer, requireMember, requirePermission(MANAGE_INBOX), withDb, async c => {
    const cursor = cursorOf(c.req.valid('query').before);
    const rows = await c.var.db.contactMessage.findMany({
      select: {id: true, topic: true, name: true, email: true, business: true, message: true, createdAt: true},
      where: cursor ? {id: {lt: cursor}} : undefined,
      orderBy: {id: 'desc'},
      take: PAGE_SIZE + 1,
    });
    const messages = rows.slice(0, PAGE_SIZE);
    const page: ContactMessagesPage = {
      messages: messages.map(row => ({...row, createdAt: row.createdAt.toISOString()})),
      nextBefore: rows.length > PAGE_SIZE ? messages.at(-1)!.id : null,
    };
    return c.json(page);
  });
