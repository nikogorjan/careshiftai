# CareShift

Awareness site for CareShift, a mission to fix the nursing handoff.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Design system

Calm, editorial, enterprise-healthcare look inspired by abridge.com: white
space, flat surfaces, 1px borders, light-weight large headlines, natural
photography, and a single accent color.

Hard rules baked into the codebase:

- No box shadows anywhere. Depth comes from 1px `line` borders and the
  `tint` background only.
- No decorative gradients. The only gradients are the neutral dark scrims
  over the hero video and the day-on-the-floor photo.
- Border radius: 4px buttons and inputs (`rounded-sm`), 8px cards and
  contained images (`rounded-lg`), circular avatars. Nothing larger.
- No hover transforms. Only 150ms color transitions, the 300ms carousel
  fade, and the 200ms FAQ accordion.
- Photos in natural color, never tinted.
- No em dashes in any copy.

Tokens live in the `@theme` block of [app/globals.css](app/globals.css):
`ink` / `ink-2` / `ink-3` for text, `line` for borders, `tint` for the one
tinted band, `dark` for the testimonial card, and `accent` /
`accent-strong` (#1A9BA8 / #0F7D88) used only for eyebrows, icons, dots,
links and focus rings.

Type: Instrument Sans display at weight 400 (hero 64/40, H2 48/32), Inter
body at 17px. Breakpoints are Tailwind defaults: `sm` 640, `lg` 1024,
`xl` 1280; multi-column layouts collapse below `lg`.

## Layout

```
app/
  layout.tsx      Root layout: metadata, Instrument Sans + Inter via next/font
  page.tsx        Section composition
  globals.css     Tailwind import, design tokens (@theme), base layer, keyframes
components/       One component per section, plus shared primitives
lib/              Voice data and the reveal / reduced-motion hooks
public/           Logo assets
legacy/           The original static site this project was converted from
```

### Client components

Most sections render on the server. These opt into the client because they hold
state: `Nav`, `Hero`, `Faq`, `Voices`, and the signup form in
`SignupCard`.

### Media

The hero video and the two section photographs are loaded from their existing
S3 URLs (see `Hero`, `Reality`, `DayOnTheFloor`). Photos are CSS background
images, so no `next/image` remote-pattern config is needed.

## Notes

- The signup form has **no backend**. A valid email swaps the card for a
  thank-you panel; nothing is sent anywhere.
- `prefers-reduced-motion` is honoured: transitions collapse, the voice
  carousel switches without fading, and the hero video pauses.
