# PORTFOLIO_CHANGELOG.md — improvement pass (2026-09-23)

Goal: credible WordPress freelance portfolio for Indian SMBs. No fabricated content anywhere.

## Positioning
- Hero headline now states the service: "I build professional WordPress websites for businesses."
  with a business supporting line. Removed developer-flavored "win trust" headline.
- Sub-positioning kept: Elementor / WooCommerce / full-stack, WordPress first everywhere.

## New sections
- "Website problems I can help with" (15 items, respectful wording, links to review CTA).
- "Website review" CTA section (scoped free review offer + secondary problems link).
- Contact band now has id="contact"; primary "Discuss Your Website", secondary "Get a Quote".

## Rewritten
- CTAs: header + hero + contact now "Get a Website Quote" / "View My Work" / "Discuss Your Website".
- WhatsApp messages: quote / discuss / review variants, all mention the portfolio, none auto-send.
- Services: 4 → 7 (development, redesign, Elementor, WooCommerce, speed, maintenance, migration).
- Work: retitled "Selected WordPress Work" with professional-experience attribution line;
  each card now has Type / Platform / Role / My Contribution / Focus / View Live Website.
- ADVO corrected to printing-agency reality (was mislabeled).

literals
- Stats contextualized: "Years of experience", "Product users supported", "Product performance
  gain", plus per-stat role context in the Why section. Nothing reads as freelance client results.
- Experience section now explicitly separates employment history from direct services.
- Process: 4 → 6 steps (Discover/Plan/Build/Review/Launch/Support), support scoped by agreement.
- FAQ replaced with the 6 business Q&As (scratch/redesign/Elementor/store/speed/maintenance).
- Toolkit renamed "Technical skills", WordPress stack first, full-stack labeled supporting.
- Head: India-keyword description, canonical, og:url, og:image. Added public/sitemap.xml.

## Design/UX
- No visual redesign (approved brutalist design kept); new sections reuse existing tokens/cards.
- Floating WhatsApp button added (mobile-first contact, aria-labeled).
- Marquee updated to the 7 services. Reduced-motion, focus states, touch targets unchanged.

## Technical QA (actually run)
- `bun run format` + `bun run lint`: 0 errors (1 pre-existing react-refresh warning in shadcn button).
- `bun run build`: green (client + SSR + Nitro).
- Dev serve QA script: 8/8 anchors resolve; banned-phrase scan clean (no fake-client language);
  portrait + 4 screenshots + icon + sitemap + robots all HTTP 200.
- Live link check: dsusvip.ae 200, humd.ae 200; advo.ae / tierone.ae / LinkedIn return 403 to
  bots (WAF) but render for real browsers (verified via screenshot renders + prior fetches).
- Not verifiable here (no browser tool): real-device widths, console runtime check — flagged,
  owner to confirm on phone.

## Remaining issues
- Testimonials: none (correctly absent — no fakes).
- Contact form: none (correct — no backend to receive it).
- OG/social preview: verify by sharing the URL once after deploy.
