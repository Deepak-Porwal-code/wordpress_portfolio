# PORTFOLIO_AUDIT.md — inspection before improvement (2026-09-23)

Site: React + TanStack Start + Tailwind (project-prospect-boost-main/), deployed static to GitHub Pages.
Target: direct WordPress freelance clients, Indian SMBs first.

## Current structure

Header nav (Services/Work/Process/Experience/FAQ) → hero → services(4) → selected work(4) →
process(4) → experience(4) → why-me(4) → toolkit → FAQ(5) → CTA band → footer.

## Strengths (keep)

- Real local images (portrait + 3 site screenshots), real live links, zero fake testimonials.
- Responsive prefixes throughout, mobile menu, reduced-motion support, focus states.
- FAQ uses native details/summary; project images lazy-loaded; portrait eager (LCP).
- Lint 0 errors, production build green, no Lovable branding left.

## Positioning problems (fix first)

1. Hero headline "A website built to win trust." — developer-flavored, does not say
   "WordPress websites for businesses" in 5 seconds.
2. CTAs generic ("Discuss a project"); WhatsApp message does not mention portfolio/quote.
3. No "website problems I can help with" section (core to owner's Maps-audit strategy).
4. No website-review/audit CTA section.
5. Services only 4; missing: Elementor (distinct), redesign (distinct), maintenance (distinct),
   migration. "Speed & support" bundles two services.
6. Work titled "Selected work" with type-only labels; no Platform/Role/Contribution/Focus
   structure; attribution doesn't state professional-experience origin.
7. Stats ambiguous: "2+", "500+", "35%", "1,000+" appear twice without context —
   readable as freelance client results. Must be relabeled to product-experience context.
8. Experience vs freelance services not explicitly separated.
9. Toolkit gives MERN/Java equal visual weight — dilutes WordPress positioning.
10. FAQ is generic process FAQ, not the business-focused set (scratch/redesign/Elementor/
    store/speed/maintenance).

## Content to REMOVE

- Nothing fabricated exists, so nothing to purge. DSUSVIP entry now has a real screenshot.
- "Technology & business services" label on ADVO (actually a printing agency site).

## Content to REWRITE

- Hero headline/sub/CTAs, services (7), work cards (attribution structure), stats (context),
  process (6 steps), FAQ (6 business Q&As), WhatsApp messages, toolkit ordering, footer blurb.

## Technical problems

- Contact/CTA section has no id="contact" (deep-link dead).
- No og:image, no canonical, title/desc miss India keywords, no sitemap.xml.
- robots.txt exists and is fine.

## UX problems

- No problems→solution→evidence→contact journey; audit offer (the actual sales motion) absent.
- Mobile menu works; marquee is CSS-only and respectful.

## Mobile problems (code-reviewed, no browser tool available)

- Fixed earlier: hero stats sizing, project meta wrapping. No horizontal-overflow sources found
  (marquee is overflow-hidden; grids all collapse; images w-full).

## SEO problems

- Title/desc lack "India/Freelance" keywords; missing og:image + canonical + sitemap.

## Accessibility problems

- Minor: portrait alt ok, project alts ok, buttons labeled, details native.
  Add: aria-label on icon-only external-link badges (present? verify), sufficient touch targets ok.

## Conversion problems

- Primary CTA does not say "quote"; no review/audit entry point; no problems section
  mirroring the outreach pitch; contact section = CTA band only (acceptable, no fake form).

## Plan

Rewrite src/routes/index.tsx content + head meta; add problems + audit-CTA sections;
reorder to services → problems → work → experience → why → process → toolkit(skills, below) →
audit CTA → FAQ → contact; add sitemap.xml; verify lint/build/serve/links.
