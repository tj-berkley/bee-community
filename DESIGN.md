---
version: alpha
name: BEE Honey & Ink
description: "Business Efficiency Experts: huge tight-tracked grotesk headlines on white, ink-black buttons, the logo's honey gold as the highlight, and quiet warm hairlines everywhere else."
colors:
  primary: "#16130E"
  primary-strong: "#3A3226"
  primary-tint: "#FDF3D7"
  primary-tint-strong: "#F9E3A6"
  on-primary-tint: "#6B4800"
  honey: "#E8A512"
  honey-strong: "#F2BE3C"
  honey-ink: "#8A5D00"
  background: "#FFFFFF"
  surface: "#FBF9F4"
  surface-sunken: "#F4F0E6"
  ink: "#16130E"
  ink-body: "#514B40"
  ink-label: "#3A352C"
  ink-muted: "#6B6458"
  ink-placeholder: "#A39C8E"
  line: "#EDE8DD"
  line-strong: "#D9D1C1"
  inverse: "#15120C"
  inverse-raised: "#241F16"
  inverse-outline: "#4D4433"
  on-inverse: "#FBF7EE"
  on-inverse-muted: "#BDB4A2"
  on-inverse-accent: "#F2BE3C"
  success: "#067647"
  success-bg: "#ECFDF3"
  warning: "#B54708"
  warning-bg: "#FFFAEB"
  error: "#B42318"
  error-bg: "#FEF3F2"
  error-bar: "#F04438"
typography:
  hero:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(48px, 7vw, 96px)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.055em"
  page-h1:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(44px, 6vw, 80px)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.055em"
  heading:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(36px, 4.6vw, 60px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.048em"
  heading-md:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 46px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  card-title:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(48px, 5vw, 68px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.055em"
  lead:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
  small:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  xs: "5px"
  sm: "6px"
  default: "8px"
  md: "10px"
  lg: "12px"
  xl: "14px"
  2xl: "16px"
  frame: "18px"
  3xl: "20px"
  full: "999px"
spacing:
  unit: "4px"
  container: "1240px"
  container-narrow: "900px"
  gutter: "32px"
  gutter-mobile: "16px"
  section: "112px"
  section-secondary: "96px"
  card-padding: "24px"
  card-padding-lg: "32px"
  control-sm: "34px"
  control: "40px"
  control-lg: "48px"
  input: "42px"
  input-lg: "46px"
---

# BEE Honey & Ink

The brand of **Business Efficiency Experts (BEE)**. The logo (`public/brand/`) is a gold, geometric
bee with a rising arrow on black: the site is black and white, and the logo's gold is the highlight.
One family (Schibsted Grotesk, on Google Fonts, weights 400-800) does everything; headings are the
same face at 800 with very tight tracking. There is no separate display font.

## Look and feel

1. **White page, warm bands.** The page background is `background` #FFFFFF. Alternate sections sit on `surface` #FBF9F4 with a 1px `line` #EDE8DD hairline top and bottom. No gradients behind content.
2. **Headlines are the hero.** Hero headings run `clamp(48px,7vw,96px)` / 0.94 / -0.055em / 800, capped at about 13 characters per line (`max-width: 13ch`, `text-wrap: balance`). Section H2s cap at 16-18ch. Big, black (`ink` #16130E), tight.
3. **Ink does the work, honey is the highlight.** `primary` ink #16130E is the colour for buttons, links and the focus border. `honey` #E8A512 is the logo's gold: hexagon markers (kicker dots), icon tiles (on `primary-tint`), the "Most popular" badge, and the buttons on the dark band. Gold text on white is always `honey-ink` #8A5D00 (5:1); never honey #E8A512 as text on white.
4. **Body copy is warm slate.** Paragraphs use `ink-body` #514B40; the lead under a hero is 19px / 1.5, max width 32rem.
5. **One dark band per page.** The closing call to action (`CtaBand`) or the featured plan sits on `inverse` #15120C, text `on-inverse` #FBF7EE, secondary text `on-inverse-muted` #BDB4A2, ticks and kickers in `on-inverse-accent` #F2BE3C. Its primary button is honey with ink text.
6. **Hairlines, not boxes.** Feature lists are columns separated by a 2px `ink` top rule (`border-top: 2px solid #16130E; padding-top: 20px`) rather than shadowed cards.
7. **Hexagons, sparingly.** The honeycomb is the motif: small hexagon markers (`clip-path`) are fine; never honeycomb wallpaper, cartoon bees or bee emoji.
8. **Flat at rest.** Shadows are soft and warm (from #16130E at low alpha), for lifted images and floating panels only. Focus is a 4px honey halo `0 0 0 4px rgba(232,165,18,.35)`, keyboard (`:focus-visible`) only.
9. **Logical CSS.** Use `start`/`end` and inline/block properties so the site mirrors for right-to-left languages.

## Components

**Brand lockup** - the logo (`/brand/bee-mark-96.png`, shown at 40px) + "BEE" (21px / 800 / -0.035em) with "Business Efficiency Experts" under it (11px / 600, `ink-muted`; hidden in the header under 1100px). Favicons: `/favicon.ico`, `/brand/favicon-192.png`, `/brand/apple-touch-icon.png`.

**Buttons** - base: inline-flex, centred, gap 8px, `rounded.md` 10px, 1px border, weight 600, line-height 1, transition 150ms ease.
- Sizes: compact 34px / 0 12px / 14px; default 40px / 0 16px / 14px; large 48px / 0 22px / 16px with 12px radius.
- Primary: bg #16130E, text #FFFFFF; hover #3A3226.
- Secondary: bg #FFFFFF, border #D9D1C1, text #16130E; hover bg #FBF9F4.
- Ghost: transparent, text #3A352C; hover bg #F4F0E6.
- On dark band: bg honey #E8A512, text #16130E; hover #F2BE3C. Outline on dark: border #4D4433, text #FBF7EE.
- Disabled: bg #F4F0E6, text #A39C8E, no shadow.
- At most one primary button per section; pair it with a secondary.

**Cards** - `rounded.xl` 14px (tool and pricing cards 20px), padding 24-32px, 1px #EDE8DD border, bg #FFFFFF, no shadow at rest. Card title 22px / 800 / -0.025em. Featured card: bg #15120C, text #FBF7EE, a honey pill badge with ink text.

**Icon tile** - 44px square, radius 12px, bg `primary-tint` #FDF3D7, a 22px line icon in `on-primary-tint` #6B4800.

**Big figures** - `figure` style in `ink`, label underneath 14px `ink-muted`.

**Inputs** - full width, height 42px, padding 0 14px, radius 10px, bg #FFFFFF, 1px border #D9D1C1, text 15px #16130E, placeholder #A39C8E. Focus: border #16130E + the honey halo. Invalid: border #F04438 + `0 0 0 4px rgba(240,68,56,.12)`, error text #B42318.

**Badges** - height 24px, pill, padding 0 10px, 12px / 600. Tint: bg #FDF3D7, text #16130E. Spark: bg honey, text ink. Colour never carries meaning alone; the word does.

**Nav (header)** - sticky, white, 1px #EDE8DD bottom border. Links 15px/600 #3A352C, padding 8px 12px, radius 8px; current page on `primary-tint`. "Book a call" primary CTA at the end. Phones: a menu button.

**Footer** - 1px #EDE8DD top border, white, the brand lockup, three link columns (Programs, Company, Community), text 14px `ink-muted`.

**FAQ** - narrow 900px column; each row a `<details>` with an 18px / 700 summary and a plus icon that turns into a cross.

## Layout & spacing

- 4px base scale. Content max width 1240px with a 32px side gutter (16px on phones). Narrow reading column 900px.
- Sections: 112px top and bottom; secondary sections 96px; on phones about 64px.
- Hero: two columns that wrap - text `flex: 1 1 520px`, image `flex: 1 1 400px`, gap 64px / 48px.
- Card grids: `repeat(auto-fit, minmax(260px, 1fr))`, gap 24-32px.
- No horizontal scroll at 360px width; headings use `clamp()`.

## Photography & imagery

- Real photographs of real people at work: owners, teams, coaching sessions, the community. The current Unsplash photos are stand-ins: replace them with your own.
- Images sit in a frame: radius 16-18px, 1px #EDE8DD border, shadow `0 40px 80px -40px rgba(22,19,14,.35)`, fixed aspect ratio, `object-fit: cover`.
- Warm, natural daylight sits best with the gold; avoid cold blue casts and heavy filters.
- Every image has meaningful `alt` text.

## Do / Don't

**Do**
- Do make the headline the loudest thing on the page.
- Do use ink #16130E for every primary action, and honey for highlights.
- Do end every page with one dark #15120C band (`CtaBand`) with a honey button.
- Do show the BEE logo in the header and footer, never stretched or recoloured.

**Don't**
- Don't use honey #E8A512 for body text or as text on white (use #8A5D00).
- Don't introduce other brand colours, gradients, or Tailwind's default palette.
- Don't use cartoon bees, bee emoji or honeycomb backgrounds; icons are thin line icons (Lucide style, 2px stroke).
- Don't write "Loading..." text; use skeleton shapes on #F4F0E6.
