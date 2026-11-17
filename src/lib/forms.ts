/**
 * The contact form's rules, shared by the browser (in-place errors) and the
 * Site API (`src/server/routes/inbox.ts`), so both enforce exactly the same
 * limits. Pure functions: no DOM, no server code.
 */

export const CONTACT_TOPICS = ['general', 'strategy', 'coaching', 'agency', 'tools', 'partnership'] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export const TOPIC_LABELS: Record<ContactTopic, string> = {
  general: 'A general question',
  strategy: 'Booking a strategy call',
  coaching: 'Business coaching',
  agency: 'Building my own agency',
  tools: 'Choosing and setting up the tools',
  partnership: 'A partnership',
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** One rule: returns the message to show, or null when the value is fine. */
type Rule = (value: string) => string | null;

const required = (label: string): Rule => v => (v.trim() ? null : `Enter ${label}.`);
const max = (n: number, label: string): Rule => v => (v.trim().length > n ? `Keep ${label} under ${n + 1} characters.` : null);
const min = (n: number, label: string): Rule => v => (v.trim() && v.trim().length < n ? `Write at least ${n} characters for ${label}.` : null);

export const FIELD_RULES: Record<string, Rule[]> = {
  name: [required('your name'), max(80, 'your name')],
  businessOptional: [max(120, 'the business name')],
  email: [
    required('an email address'),
    max(160, 'the email'),
    v => (v.trim() && !EMAIL.test(v.trim()) ? 'Use an address like name@example.com.' : null),
  ],
  message: [required('a message'), min(10, 'your message'), max(4000, 'your message')],
  topic: [v => ((CONTACT_TOPICS as readonly string[]).includes(v) ? null : 'Choose what your message is about.')],
};

/** The first problem with `value` under `rule`, or null. */
export function check(rule: string, value: string): string | null {
  for (const r of FIELD_RULES[rule] ?? []) {
    const message = r(value);
    if (message) return message;
  }
  return null;
}
