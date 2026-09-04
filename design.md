Build a modern, professional developer portfolio using React, Tailwind CSS,
and Framer Motion. The visual concept is "antigravity": elements feel
weightless — they drift, hover, and settle rather than sliding or fading in
flatly. Priorities: clean UI/UX, purposeful motion, and a fully-aligned color
system — this should read as senior frontend/design work, not a template.

STACK
- React (Vite)
- Tailwind CSS for styling and layout (use a custom theme, not defaults)
- Framer Motion for animation
- lucide-react for icons

COLOR SYSTEM (define once, use everywhere — no ad hoc colors anywhere else)
- --bg: base page background
- --surface: card/panel background, one step off --bg
- --surface-raised: modal/elevated panel background
- --text-primary / --text-secondary / --text-muted: three fixed text tones
- --accent: single primary accent — used for links, active states, primary
  buttons, focus rings, and motion highlights, and nowhere else
- --accent-soft: a low-opacity tint of --accent for hover backgrounds only
- --border: one hairline border color, used consistently instead of shadows
Provide the palette as 6–8 named hex values up front. Every color used in
every component must trace back to one of these tokens — check for drift
(no stray grays, no second accent color, no inconsistent border colors)
before considering the design finished. Confirm contrast ratios meet
WCAG AA for text on background.

ANTIGRAVITY MOTION CONCEPT
- Idle float: hero visual and key cards have a very slow, subtle continuous
  vertical drift (a few px, several-second loop) — like they're weightless,
  not animated for attention
- Entrance: elements arrive with a soft upward drift + fade + slight scale
  settle (not a hard slide-up), staggered by section on scroll (whileInView,
  once only)
- Hover "lift": interactive cards and buttons rise slightly on hover with
  the shadow growing softer and wider beneath them, like they're escaping
  gravity, then settle back down on hover-out with a spring, not a linear ease
- Parallax drift: background shapes or decorative elements move slightly
  slower than foreground content on scroll/mouse-move, reinforcing depth
  without being distracting
- All motion uses spring physics (not linear/ease-in-out) for anything that
  suggests weight or gravity
- Respect prefers-reduced-motion: disable float/parallax, keep only
  necessary state-change transitions

ICONS
- Icons get a small state change on hover tied to what they represent (a
  rotate, stroke-draw-in, or scale-lift), not the same generic bounce
  everywhere
- Icons use --text-secondary at rest, --accent on hover/active — no
  separate icon color palette

SECTION DIVISION
- Sections separated by curved SVG dividers (alternating curve direction)
  instead of hard straight edges, using --bg and --surface so the curve
  itself is a color transition, not decoration
- Vary card treatment by content type — don't reuse one identical rounded-
  card-with-shadow style for every section

STRUCTURE
- Sticky nav with active-section indicator
- Hero: name, role, one clear value statement, primary + secondary CTA,
  antigravity-floating visual element
- Projects: cards with live-deploy links, hover-lift preview, detail/
  case-study view (modal or route)
- Skills/capabilities: grouped by category, icon-led
- Process/approach: how you work, step by step
- Contact: direct, low-friction (email + social links)

QUALITY BAR
- Fully responsive (mobile-first), accessible (keyboard nav, visible focus
  rings in --accent, semantic HTML, alt text)
- Real content, not lorem ipsum
- Animate only transform/opacity for performance; lazy-load below-the-fold
  images
- Componentized, easy to extend with new projects