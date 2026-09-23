# Website Intelligence & Direct-Client Lead Generation System
## Master Build Specification for OpenCode + Nemotron 3 Ultra

**Version:** 1.0  
**Status:** Build from this document  
**Primary goal:** Find high-quality business leads and generate deep, evidence-based website opportunity reports that help a business owner clearly understand what should be improved.  
**Primary development model:** Nemotron 3 Ultra Free  
**Operating principle:** Evidence first → analysis second → qualification third → human verification → outreach.

---

# 0. READ THIS FIRST

You are the coding agent responsible for implementing this system.

Do not treat this document as a suggestion list. Treat it as the product specification.

Do not build everything in one giant uncontrolled change.

Build in phases, test every phase, keep the code modular, and preserve working functionality while adding new modules.

The system is intentionally allowed to be heavyweight and slow.

**The priority is output quality, evidence quality, lead quality, and client understanding — not minimum CPU usage or minimum processing time.**

The system must never fabricate:

- website problems
- business information
- client relationships
- testimonials
- reviews
- website results
- conversations
- payments
- decision-maker identities
- technical measurements
- screenshots
- successful actions

If evidence is unavailable, explicitly mark it unavailable.

---

# 1. PRIMARY BUSINESS OBJECTIVE

The system exists for one business purpose:

> Find businesses that have a genuine website improvement opportunity and produce enough verified evidence that the owner can understand why improving the website may be valuable.

The system is NOT primarily a generic SEO scanner.

It is NOT primarily a Lighthouse dashboard.

It is NOT primarily a crawler.

It is a:

# Website Intelligence + Lead Qualification + Client Opportunity System

The final workflow should be:

```text
Business discovery
        ↓
Lead collection
        ↓
Website discovery
        ↓
Website validation
        ↓
Deep crawl
        ↓
Technical analysis
        ↓
Performance analysis
        ↓
SEO analysis
        ↓
Accessibility analysis
        ↓
Security/technical health
        ↓
Technology detection
        ↓
Mobile analysis
        ↓
Desktop analysis
        ↓
Visual UX analysis
        ↓
Conversion analysis
        ↓
Content analysis
        ↓
Business/trust analysis
        ↓
Evidence normalization
        ↓
Business-impact interpretation
        ↓
Jev qualification
        ↓
Lead priority
        ↓
Human verification
        ↓
Client report
        ↓
Personalized outreach brief
```

---

# 2. TWO TYPES OF OUTPUT

Every website must produce two different reports.

## 2.1 Internal Intelligence Report

This can be extremely detailed.

It should contain:

- all raw measurements
- all findings
- page-by-page findings
- screenshots
- URLs
- selectors where relevant
- source tool
- confidence
- severity
- technical explanation
- business explanation
- recommendation
- evidence
- failed checks
- unavailable checks
- crawl statistics
- technology detection
- performance metrics
- SEO metrics
- accessibility metrics
- UX observations
- conversion observations
- business observations
- lead score
- qualification result

The internal report is for:

- Deepak
- ChatGPT
- the qualification engine
- sales preparation
- future analysis

## 2.2 Client-Facing Report

The client-facing report must be significantly easier to understand.

It should contain:

- business summary
- website summary
- overall opportunity summary
- strongest 3–7 problems
- screenshots/evidence
- why each issue matters
- recommended improvement
- priority
- positive observations
- improvement roadmap
- clear next step

Do not dump raw technical data on the client.

---

# 3. IMPORTANT LANGUAGE RULE

Never tell a prospect:

> "Your website is bad."

Prefer:

> "We identified several opportunities that may be limiting the website's ability to attract, engage, and convert visitors."

Never claim:

> "Fixing this will increase revenue by 40%."

Instead:

> "Improving this may reduce friction for visitors and create a clearer path to enquiry."

Never guarantee:

- Google ranking improvement
- traffic growth
- revenue growth
- conversion growth
- sales growth
- customer growth

unless the system is reporting an externally verified historical result.

---

# 4. SYSTEM ARCHITECTURE

Implement a modular architecture.

Recommended logical architecture:

```text
                    ┌──────────────────────┐
                    │   LEAD DISCOVERY     │
                    │ Google Maps / input  │
                    └──────────┬───────────┘
                               ↓
                    ┌──────────────────────┐
                    │ NORMALIZE / DEDUPE   │
                    └──────────┬───────────┘
                               ↓
                    ┌──────────────────────┐
                    │ WEBSITE DISCOVERY    │
                    └──────────┬───────────┘
                               ↓
                    ┌──────────────────────┐
                    │ WEBSITE VALIDATION   │
                    └──────────┬───────────┘
                               ↓
                    ┌──────────────────────┐
                    │ DEEP CRAWLER        │
                    └──────────┬───────────┘
                               ↓
          ┌────────────────────┼────────────────────┐
          ↓                    ↓                    ↓
   TECHNICAL AUDIT       BROWSER/VISUAL       PERFORMANCE
          ↓                    ↓                    ↓
          └────────────────────┼────────────────────┘
                               ↓
                  ┌────────────────────────┐
                  │ EVIDENCE DATASET       │
                  └────────────┬───────────┘
                               ↓
      ┌────────────┬───────────┼────────────┬─────────────┐
      ↓            ↓           ↓            ↓             ↓
     SEO     ACCESSIBILITY   SECURITY      UX        CONVERSION
      └────────────┴───────────┼────────────┴─────────────┘
                               ↓
                     BUSINESS ANALYSIS
                               ↓
                 ISSUE NORMALIZATION
                               ↓
                  CONFIDENCE / SEVERITY
                               ↓
                        JEV QUALIFIER
                               ↓
                    LEAD PRIORITIZATION
                               ↓
                    HUMAN VERIFICATION
                               ↓
             ┌─────────────────┴─────────────────┐
             ↓                                   ↓
       INTERNAL REPORT                     CLIENT REPORT
             ↓
       OUTREACH BRIEF
```

---

# 5. RECOMMENDED TECHNOLOGY STACK

Use a modular stack.

## Backend

Preferred:

- Python 3.12+
- FastAPI
- Pydantic
- SQLAlchemy
- SQLite for local development
- PostgreSQL-compatible schema
- httpx
- asyncio
- Playwright
- BeautifulSoup
- lxml

## Frontend

Preferred:

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts or another simple chart library

## Browser

- Playwright
- Chromium

## Analysis providers

Implement adapters for:

- Lighthouse
- PageSpeed Insights API
- Web Auditor
- Wappalyzer
- axe-core
- HTTP/SSL/header checks
- broken-link checker
- gstack browser workflows where available

## Decision provider

- Jev adapter
- deterministic local fallback

Never make Jev mandatory for the system to function.

---

# 6. PROVIDER ADAPTER ARCHITECTURE

Every external tool must have an adapter.

Example:

```text
providers/
    lighthouse/
    pagespeed/
    wappalyzer/
    web_auditor/
    axe/
    gstack/
    jev/
```

Each provider must expose a stable internal interface.

Example:

```python
class AuditProvider(Protocol):
    name: str

    async def analyze(self, target: AuditTarget) -> ProviderResult:
        ...
```

Do not spread provider-specific JSON structures throughout the application.

Normalize them into our own schema.

---

# 7. CONFIGURATION

Create a central configuration system.

Environment variables:

```text
PAGESPEED_API_KEY=
JEV_API_KEY=
WAPPALYZER_API_KEY=
DATABASE_URL=
MAX_PAGES=
MAX_DEPTH=
CRAWL_CONCURRENCY=
REQUEST_DELAY_MS=
SCREENSHOT_ENABLED=
DEEP_ANALYSIS_ENABLED=
```

Never hard-code secrets.

Provide `.env.example`.

Never commit `.env`.

---

# 8. LEAD DISCOVERY

The system must accept leads from:

1. Google Maps scraper output.
2. CSV.
3. JSON.
4. Manual entry.
5. Future provider adapters.

Google Maps scraper integration must support fields such as:

- business name
- category
- address
- city
- phone
- website
- email where legally/publicly available
- rating
- review count
- social links where available
- source URL

Treat scraped data as unverified until checked.

Respect source terms and applicable laws.

Do not bypass anti-bot protections.

Do not scrape aggressively.

Do not automatically send outreach.

---

# 9. LEAD NORMALIZATION

Normalize:

- business name
- phone
- URL
- domain
- address
- category
- city
- social links

Normalize URLs:

```text
http://example.com
https://example.com/
https://www.example.com
```

should resolve to one canonical domain representation where appropriate.

Remove duplicate businesses using:

- normalized domain
- phone
- business name + address
- other high-confidence identifiers

Do not merge two businesses merely because their names are similar.

---

# 10. LEAD DATA MODEL

Create:

```text
Lead
```

Fields:

```text
id
business_name
category
address
city
state
country
phone
email
website
source
source_url
rating
review_count
social_links
business_description
decision_maker_name
decision_maker_role
decision_maker_source
discovered_at
updated_at
website_status
lead_status
lead_priority
lead_score
human_verified
verification_notes
outreach_status
notes
```

Decision-maker fields must remain empty unless evidence exists.

Never infer a person's identity.

---

# 11. WEBSITE DATA MODEL

Create:

```text
Website
```

Fields:

```text
id
lead_id
canonical_url
homepage_url
domain
protocol
status_code
redirect_chain
ssl_valid
title
meta_description
cms
technologies
crawl_started_at
crawl_finished_at
crawl_status
pages_discovered
pages_analyzed
overall_health_score
opportunity_score
confidence
```

---

# 12. PAGE DATA MODEL

Create:

```text
Page
```

Fields:

```text
id
website_id
url
canonical_url
status_code
content_type
title
meta_description
h1_count
h2_count
word_count
language
canonical
robots
noindex
viewport
images
scripts
stylesheets
links
forms
buttons
ctas
phone_links
email_links
whatsapp_links
social_links
structured_data
screenshot_paths
```

---

# 13. FINDING DATA MODEL

Every issue must become a normalized finding.

Fields:

```text
id
website_id
page_id
category
subcategory
title
severity
confidence
source
source_version
url
selector
evidence
measurement
business_impact
recommendation
status
verification_status
screenshot_path
created_at
```

Categories:

```text
performance
seo
accessibility
security
technical
mobile
desktop
ux
conversion
content
trust
local_seo
technology
```

---

# 14. CRAWL MODES

Implement:

## Quick

5 pages.

## Standard

25 pages.

## Deep

50 pages.

## Maximum

100+ pages, manually enabled.

Default for prospect analysis:

**Deep**

The system may take several minutes per website.

That is acceptable.

---

# 15. CRAWL RULES

Default:

- same domain only
- maximum depth 5
- concurrency 2
- configurable delay
- respect robots guidance where appropriate
- do not bypass blocks
- no authentication
- no destructive actions
- persist crawl state
- deduplicate URLs
- normalize query parameters
- skip obvious tracking URLs
- avoid infinite calendars
- avoid faceted navigation explosions

---

# 16. PAGE PRIORITY

Prioritize:

1. homepage
2. about
3. services
4. service detail pages
5. products
6. portfolio
7. case studies
8. pricing
9. contact
10. booking
11. testimonials
12. FAQ
13. blog
14. location pages

---

# 17. WEBSITE STATES

Possible states:

```text
ACTIVE
ACTIVE_BUT_WEAK
BROKEN
PARKED
COMING_SOON
SOCIAL_ONLY
NO_WEBSITE
BLOCKED
UNKNOWN
```

Never call a website broken just because one tool failed.

Require corroborating evidence.

---

# 18. TECHNOLOGY DETECTION

Use Wappalyzer or equivalent.

Detect where possible:

- WordPress
- Elementor
- WooCommerce
- Shopify
- Wix
- Webflow
- Squarespace
- React
- Next.js
- Vue
- Angular
- Bootstrap
- Tailwind
- jQuery
- analytics
- tag managers
- CDN
- payment systems
- booking tools
- chat tools

Store detection confidence:

```text
confirmed
probable
possible
```

Never present low-confidence detection as fact.

---

# 19. LIGHTHOUSE INTEGRATION

Run Lighthouse against important pages.

Collect:

- performance
- accessibility
- best practices
- SEO
- diagnostics
- opportunities
- audits
- screenshots where available

Persist the raw JSON.

Persist normalized results.

Do not rely only on aggregate scores.

The actual audit details matter more than the score.

---

# 20. PAGESPEED INTEGRATION

Use PageSpeed Insights API where configured.

Collect:

- Core Web Vitals
- lab data
- field data where available
- performance opportunities
- diagnostics
- page-level results

Clearly distinguish:

```text
field data
lab data
```

Never represent lab data as real-user measurements.

If field data is unavailable, say so.

---

# 21. PERFORMANCE CHECKS

Analyze:

- LCP
- FCP
- CLS
- INP when available
- TBT when applicable
- Speed Index
- TTFB
- page weight
- transfer size
- request count
- image weight
- JS weight
- CSS weight
- font weight
- third-party weight

Detect:

- oversized images
- inefficient image formats where applicable
- render-blocking resources
- unused CSS
- unused JS
- excessive JS
- excessive third-party scripts
- font loading problems
- caching opportunities
- compression opportunities
- redirect chains
- slow server response
- excessive DOM complexity where measurable

---

# 22. PERFORMANCE BUSINESS TRANSLATION

Do not show:

```text
LCP = 6.8
```

alone.

Generate:

```text
Technical evidence:
LCP = 6.8 seconds.

Visitor interpretation:
The main page content appears slowly.

Business interpretation:
A visitor may leave before seeing the company's main service/value proposition.

Recommended improvement:
Optimize critical rendering resources, images, scripts, and server response.
```

Never promise a conversion increase.

---

# 23. MOBILE ANALYSIS

Use a realistic mobile viewport.

Check:

- responsive layout
- horizontal overflow
- navigation
- hamburger menu
- CTA visibility
- tap target size
- font readability
- image cropping
- forms
- phone links
- WhatsApp links
- content order
- hero section
- sticky elements
- popups
- cookie banners
- footer
- scrolling
- broken sections

Take screenshots of meaningful problems.

---

# 24. DESKTOP ANALYSIS

Check:

- max width
- spacing
- visual hierarchy
- navigation
- hero
- CTA
- typography
- images
- forms
- footer
- content density
- section consistency
- excessive empty space
- clutter

---

# 25. VISUAL DESIGN ANALYSIS

Use browser screenshots plus DOM evidence.

Analyze:

- visual hierarchy
- typography
- spacing
- alignment
- consistency
- color usage
- CTA prominence
- card consistency
- image quality
- icon consistency
- navigation clarity
- visual clutter
- outdated design patterns
- excessive animation
- contrast

Do not make purely subjective claims without explanation.

Instead of:

> "The design looks terrible."

Use:

> "The primary CTA has similar visual weight to secondary navigation elements, making the intended next action less obvious."

---

# 26. UX ANALYSIS

The system must answer:

1. What does the business do?
2. Who is it for?
3. Where does it operate?
4. Why should a visitor trust it?
5. What should the visitor do next?
6. How can the visitor contact it?
7. What services/products are offered?
8. What proof exists?
9. What happens after enquiry?

Create structured UX findings.

---

# 27. CONVERSION ANALYSIS

Check:

- CTA presence
- CTA clarity
- CTA placement
- phone CTA
- email CTA
- WhatsApp CTA
- contact form
- booking flow
- quote request
- enquiry flow
- purchase flow
- service discovery
- testimonials
- trust signals
- portfolio
- case studies
- social proof

Browser-test important public interactions.

Do NOT submit real forms unless explicit authorization exists.

---

# 28. SEO ANALYSIS

Check:

- page title
- title uniqueness
- title quality
- meta description
- meta uniqueness
- H1
- H1 count
- heading hierarchy
- canonical
- robots
- noindex
- sitemap
- robots.txt
- internal links
- broken links
- image alt text
- descriptive URLs
- structured data
- Open Graph
- social metadata
- language
- hreflang where relevant
- schema
- breadcrumbs
- local business schema where relevant

Do not claim guaranteed ranking improvements.

---

# 29. LOCAL SEO

For local businesses check:

- business name
- address
- phone
- city
- service areas
- location page
- map
- LocalBusiness schema
- opening hours
- services
- local content
- local CTA

Only report inconsistencies when evidence exists.

---

# 30. ACCESSIBILITY

Use axe-core and Lighthouse where available.

Check:

- missing alt text
- form labels
- contrast
- heading structure
- buttons
- links
- keyboard focus
- ARIA
- landmarks
- language
- duplicate IDs
- tap targets
- viewport
- semantic structure

Record severity.

---

# 31. SECURITY / TECHNICAL HEALTH

Only passive, non-destructive checks.

Check:

- HTTPS
- SSL
- certificate expiry
- HTTPS redirects
- mixed content
- security headers
- HSTS
- CSP
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- cookie attributes where observable
- server header exposure

Do NOT:

- exploit vulnerabilities
- brute force
- attack forms
- bypass authentication
- attempt SQL injection
- attempt XSS
- discover credentials
- scan private infrastructure

If a serious concern is found, recommend professional security review.

---

# 32. BROKEN LINKS

Check internal links.

Store:

- source URL
- target URL
- status
- anchor
- redirect chain
- error

Classify:

- 404
- 403
- 5xx
- timeout
- malformed
- redirect chain

---

# 33. IMAGE ANALYSIS

For important images:

- URL
- size
- dimensions
- type
- alt
- loading mode
- responsive source
- aspect ratio
- duplicate status

Flag:

- oversized images
- missing alt
- poor dimensions
- unnecessary eager loading
- legacy formats where improvement is reasonable

Do not claim one image format is universally superior.

---

# 34. CONTENT ANALYSIS

Analyze:

- headline clarity
- grammar
- spelling
- duplicate content
- vague copy
- generic copy
- weak service descriptions
- missing benefits
- missing FAQs
- outdated information
- inconsistent information
- unclear contact instructions
- missing location context
- weak trust proof

---

# 35. CONTENT FRESHNESS

Look for evidence of:

- old copyright
- old announcements
- expired offers
- outdated team information
- discontinued services
- broken social links
- old events

Only call something outdated when evidence supports it.

Otherwise use:

`possible outdated information`

---

# 36. TRUST ANALYSIS

Look for:

- testimonials
- reviews
- client logos
- certifications
- awards
- case studies
- portfolio
- team
- address
- phone
- email
- social profiles
- trust badges
- guarantees
- years-in-business claims

Do not independently verify claims unless a source is available.

---

# 37. SERVICE DISCOVERY

Determine whether visitors can quickly find:

- main services
- service detail
- benefits
- process
- industries
- service areas
- pricing/quote path
- contact method

Flag confusing information architecture.

---

# 38. WEBSITE AGE SIGNALS

Never claim an exact website age without evidence.

Possible signals:

- copyright year
- technology versions
- old libraries
- old content
- design patterns
- metadata
- archived evidence if separately integrated

Store:

```text
age_signal:
low
medium
high
```

---

# 39. BUSINESS OPPORTUNITY ANALYSIS

This is a core feature.

For every major issue:

```text
Problem
  ↓
Evidence
  ↓
Visitor effect
  ↓
Potential business effect
  ↓
Recommended improvement
  ↓
Relevant service
```

Example:

```text
Problem:
Large unoptimized hero image.

Evidence:
Hero image = 4.2 MB.

Visitor effect:
Main content loads slowly.

Potential business effect:
Visitors may wait longer before seeing the primary offer.

Recommended improvement:
Resize/compress image, use appropriate responsive formats and loading strategy.

Relevant service:
Performance optimization.
```

---

# 40. POSITIVE FINDINGS

Do not make every report negative.

Find:

- strong performance areas
- good mobile sections
- clear CTA
- strong trust
- good content
- good navigation
- good accessibility
- strong service structure

A credible report should say:

> "What is already working"

before:

> "What should be improved."

This increases trust.

---

# 41. ISSUE SEVERITY

Use:

### Critical

Major failure of an important user/business journey.

### High

Significant performance, UX, SEO, accessibility, technical, or conversion problem.

### Medium

Meaningful improvement opportunity.

### Low

Minor issue.

### Informational

Observation.

Do not inflate severity to sell services.

---

# 42. FINDING CONFIDENCE

Use:

```text
0.95–1.00 = very high
0.85–0.94 = high
0.70–0.84 = medium
0.50–0.69 = low
below 0.50 = do not present as definitive
```

Direct measurements should generally have high confidence.

AI subjective judgments should have lower confidence unless supported by evidence.

---

# 43. EVIDENCE TYPES

Supported evidence:

- measurement
- screenshot
- DOM
- HTTP response
- crawl result
- browser interaction
- source code
- structured data
- technology detection
- public business source

Every important finding must link to evidence.

---

# 44. SCREENSHOT SYSTEM

Capture screenshots for:

- homepage desktop
- homepage mobile
- important service page
- contact page
- major UX issue
- CTA issue
- navigation issue
- broken layout
- important visual evidence

Store:

```text
screenshots/
    {lead_id}/
        desktop/
        mobile/
        issues/
```

Do not take hundreds of useless screenshots.

Capture evidence screenshots.

---

# 45. GSTACK ROLE

Use gstack as a browser/engineering workflow layer.

Potential uses:

- browser inspection
- screenshots
- interactive testing
- QA
- application review
- design review
- debugging
- engineering planning
- code review

Do not treat gstack as the sole truth source for website auditing.

The audit must combine:

- deterministic tools
- browser evidence
- normalized data
- business analysis

If gstack is unavailable, the system must continue using Playwright.

---

# 46. WEB AUDITOR ROLE

Use Web Auditor as a crawl/audit provider where practical.

It can contribute:

- multi-page crawling
- SEO findings
- accessibility findings
- performance
- security/technical observations
- resource information
- structured audit output

Do not make the system dependent on its exact output schema.

Create an adapter.

---

# 47. LIGHTHOUSE ROLE

Lighthouse is a core technical evidence provider.

Use it for:

- performance
- accessibility
- SEO
- best practices
- diagnostics
- opportunities

Keep raw Lighthouse JSON for traceability.

---

# 48. PAGESPEED ROLE

PageSpeed is a performance evidence provider.

Use it for:

- lab data
- field data when available
- Core Web Vitals
- performance opportunities

Clearly label unavailable field data.

---

# 49. WAPPALYZER ROLE

Wappalyzer is a technology intelligence provider.

Use it to identify:

- CMS
- frameworks
- plugins/technologies
- analytics
- infrastructure indicators

Never treat technology detection as a website quality score.

---

# 50. JEV ROLE

Jev is NOT the website scanner.

Jev is the decision/qualification layer.

Give Jev structured evidence.

Example input:

```json
{
  "business_active": true,
  "website_exists": true,
  "website_status": "ACTIVE_BUT_WEAK",
  "performance_score": 38,
  "mobile_performance_score": 24,
  "seo_score": 56,
  "accessibility_score": 63,
  "high_findings": 5,
  "medium_findings": 11,
  "broken_links": 4,
  "weak_cta": true,
  "mobile_ux_issue": true,
  "contact_available": true,
  "review_count": 180,
  "technology": ["WordPress", "Elementor"]
}
```

Jev should answer structured questions such as:

- Is this a legitimate prospect?
- Is the website opportunity meaningful?
- Is outreach justified?
- Should human verification happen?
- Priority class?
- Main opportunity category?
- What evidence should be reviewed before outreach?

If Jev is unavailable, deterministic scoring must continue.

---

# 51. LEAD SCORING

Create a transparent scoring system.

Do not allow AI to create an unexplained score.

Suggested dimensions:

```text
Business quality
Website weakness
Commercial relevance
Evidence strength
Reachability
Potential service fit
```

Example:

```text
Business quality: 0–20
Website opportunity: 0–30
Evidence strength: 0–20
Service fit: 0–15
Reachability: 0–15
Total: 100
```

These weights are starting points, not permanent truth.

Log how each point was calculated.

---

# 52. LEAD PRIORITY

Use:

```text
A = strong evidence + strong opportunity
B = meaningful opportunity + some uncertainty
C = weak opportunity or insufficient evidence
D = ignore
```

Do not call A leads guaranteed clients.

Priority means:

> "Worth more attention."

It does not mean:

> "Will buy."

---

# 53. HUMAN VERIFICATION GATE

No prospect becomes outreach-ready automatically.

The system must show:

```text
AI/automated findings
+
evidence
+
screenshots
+
confidence
```

Then require:

```text
Human verified: YES/NO
Verification notes:
```

Only `Human verified = YES` should be eligible for outreach generation.

---

# 54. OUTREACH BRIEF

Generate a short personalized brief.

Example structure:

```text
Business:
XYZ Interiors

Website:
https://example.com

Verified observations:

1. Mobile hero loads slowly.
2. Service navigation is difficult to scan.
3. Primary enquiry CTA is not prominent.

Best outreach angle:
Mobile experience + service discovery.

Do not mention:
Unverified assumptions.

Suggested message:
...
```

Do not automatically send.

---

# 55. CLIENT REPORT STRUCTURE

Generate:

## Cover

Business name  
Website  
Audit date

## Executive Summary

Short explanation.

## What Is Already Working

3–5 positive findings.

## Main Opportunities

3–7 strongest issues.

For each:

- issue
- evidence
- screenshot
- why it matters
- recommended improvement
- priority

## Technical Overview

Performance, SEO, accessibility, technology.

## Mobile Experience

Screenshots + findings.

## Conversion Journey

How a visitor reaches contact/enquiry.

## SEO Opportunities

Important findings.

## Recommended Roadmap

### Phase 1
Critical issues.

### Phase 2
UX/conversion improvements.

### Phase 3
SEO/content/performance improvements.

## Final Summary

Neutral, professional conclusion.

Do not pressure the client.

---

# 56. CLIENT REPORT TONE

The report must be:

- professional
- factual
- respectful
- specific
- easy to understand
- evidence-based
- non-aggressive

Avoid:

- fear
- fake urgency
- insults
- exaggerated claims
- guaranteed revenue claims
- fake statistics

---

# 57. INTERNAL REPORT TONE

Can be technical.

Include:

- raw values
- selectors
- source
- provider
- timestamps
- evidence
- confidence
- logs

---

# 58. REPORT GENERATION

Support:

- HTML
- Markdown
- JSON
- PDF later

Generate a structured report object first.

Then render different formats from the same report object.

Do not create separate business logic for each output format.

---

# 59. DATABASE

Use migrations.

Suggested entities:

```text
leads
websites
pages
crawl_runs
findings
screenshots
technology_detections
performance_metrics
seo_metrics
accessibility_findings
ux_findings
conversion_findings
business_findings
qualification_results
outreach_briefs
reports
audit_jobs
provider_runs
```

---

# 60. JOB SYSTEM

Website analysis can take a long time.

Implement asynchronous jobs.

States:

```text
QUEUED
RUNNING
PARTIAL
COMPLETED
FAILED
CANCELLED
```

Every job must have:

- job ID
- lead ID
- website ID
- started time
- finished time
- current phase
- progress
- errors
- retry count

---

# 61. RETRIES

Retry transient failures.

Do NOT endlessly retry:

- blocked sites
- invalid URLs
- permanent HTTP errors
- unsupported sites

Use exponential backoff.

---

# 62. PARTIAL RESULTS

If one provider fails:

Do not throw away the entire audit.

Example:

```text
Lighthouse: completed
PageSpeed: unavailable
Wappalyzer: completed
Web Auditor: completed
gstack: completed
```

Report:

> PageSpeed data was unavailable for this audit.

Never fabricate replacement data.

---

# 63. CACHING

Cache:

- URL validation
- technology detection
- crawl results
- screenshots
- Lighthouse results
- PageSpeed results

Use TTL.

Allow manual refresh.

---

# 64. RATE LIMITING

All network operations must have:

- concurrency limits
- request delays
- retries
- timeout
- cancellation

Never implement anti-bot bypassing.

---

# 65. ERROR HANDLING

Errors must be:

- logged
- classified
- visible in job status
- recoverable where possible

Never hide provider failures.

---

# 66. LOGGING

Log:

- job ID
- provider
- URL
- operation
- duration
- status
- error
- retry
- output location

Do not log:

- API secrets
- credentials
- private user information

---

# 67. SECURITY

The application must:

- sanitize URLs
- validate URLs
- prevent SSRF where possible
- restrict internal/private IP access
- block localhost targets by default
- block metadata endpoints
- enforce safe protocols
- sandbox browser where possible
- limit downloads
- limit response size
- limit crawl depth
- prevent infinite recursion

This is essential because the application fetches arbitrary websites.

---

# 68. SSRF PROTECTION

Before fetching a URL:

1. Parse hostname.
2. Resolve DNS.
3. Reject private IP ranges.
4. Reject localhost.
5. Reject link-local addresses.
6. Reject cloud metadata endpoints.
7. Re-check redirects.
8. Apply timeout.
9. Limit response size.

Do not rely only on URL string checks.

---

# 69. DOWNLOAD SAFETY

Do not automatically download arbitrary large files.

Limit:

- response size
- file types
- redirects
- download count

Do not execute downloaded files.

---

# 70. DASHBOARD

Build a simple dashboard.

Views:

## Leads

Columns:

- business
- category
- city
- website
- website status
- opportunity score
- priority
- verification
- outreach status

## Lead detail

Show:

- business information
- website
- scores
- findings
- screenshots
- technologies
- report
- verification
- outreach brief

## Audit progress

Show:

- current phase
- progress
- provider status
- errors

---

# 71. FILTERS

Support:

- city
- category
- website status
- priority
- opportunity score
- human verified
- outreach status
- audit status
- technology
- WordPress
- Elementor

---

# 72. SORTING

Sort by:

- lead score
- opportunity score
- evidence confidence
- business quality
- review count
- audit date

Never sort by an opaque AI-generated label without showing its basis.

---

# 73. REPORT COMPARISON

Allow comparing two audits of the same website later.

Show:

- score changes
- finding changes
- performance changes
- screenshot changes
- resolved issues
- new issues

This is useful after a client redesign.

---

# 74. TESTING REQUIREMENTS

Every module must have tests.

Minimum:

- unit tests
- provider adapter tests
- normalization tests
- scoring tests
- URL security tests
- SSRF tests
- crawler tests
- report rendering tests
- API tests
- frontend tests for important workflows

Use mocks for external providers.

---

# 75. END-TO-END TEST

Create a local test website containing intentional issues:

- slow image
- missing title
- missing meta
- missing alt
- weak CTA
- broken link
- mobile overflow
- form
- heading problem
- accessibility issue

Run the complete pipeline against it.

Verify that the expected issues are discovered.

---

# 76. GOLDEN TEST DATA

Create a fixture dataset.

Example:

```text
fixtures/
    websites/
        healthy-site/
        weak-site/
        ecommerce-site/
        local-business/
```

The expected findings should be version controlled.

This protects against regressions.

---

# 77. AI ANALYSIS RULES

AI can:

- interpret evidence
- summarize
- classify
- translate technical findings
- identify patterns
- suggest business impact
- generate report wording

AI cannot:

- invent evidence
- invent measurements
- invent screenshots
- claim tests were run when they were not
- claim a form worked when it wasn't tested
- claim a business is successful without evidence
- claim a person is the owner without evidence

---

# 78. AI PROMPT STRUCTURE

Whenever an AI model receives website data, provide:

```text
BUSINESS FACTS
WEBSITE FACTS
MEASUREMENTS
FINDINGS
SCREENSHOTS
SOURCE PROVIDERS
CONFIDENCE
KNOWN LIMITATIONS
```

Then ask it to:

1. summarize
2. identify high-value opportunities
3. explain visitor impact
4. explain potential business relevance
5. recommend improvements
6. identify uncertainty

Do not ask:

> "Find problems with this website."

without evidence.

---

# 79. NEMOTRON DEVELOPMENT ROLE

Nemotron 3 Ultra is the primary coding agent.

Use it for:

- architecture
- implementation
- debugging
- integration
- refactoring
- tests
- documentation

When a task is too large, break it into smaller tasks.

Do not overwrite working modules unnecessarily.

---

# 80. MULTI-MODEL DEVELOPMENT

Other models may be used as secondary agents.

Possible roles:

- Muse Spark 1.3: second opinion / difficult coding
- Nemotron Lightning: fast routine implementation
- MiMo: routine transformations/debugging
- Jev: structured lead decisions

Do not add AI models merely because more models exist.

Every model must have a defined role.

---

# 81. GSTACK DEVELOPMENT ROLE

Use gstack to review our own application:

- planning
- engineering review
- browser QA
- design review
- investigation
- code review
- release preparation

The audit engine itself must remain usable without gstack.

---

# 82. CLIENT-READY ISSUE FORMAT

Every important issue should be renderable like:

```text
TITLE:
Mobile page loads slowly

SEVERITY:
High

EVIDENCE:
LCP: 6.8s

WHERE:
Homepage

WHAT WE OBSERVED:
The main content becomes visible slowly on mobile.

WHY IT MATTERS:
Visitors may have to wait before seeing the main service/value proposition.

RECOMMENDATION:
Optimize images, critical resources, scripts and server response.

CONFIDENCE:
0.98

SOURCE:
Lighthouse

SCREENSHOT:
...
```

---

# 83. ISSUE GROUPING

Do not show 30 duplicate findings.

Group related findings.

Example:

Instead of:

- image 1 too large
- image 2 too large
- image 3 too large
- image 4 too large

show:

> **Multiple oversized images are increasing page weight.**

Then list representative evidence.

Keep raw findings internally.

---

# 84. CLIENT REPORT PRIORITIZATION

Show the most meaningful findings first.

Prioritize by:

```text
severity
+
evidence confidence
+
visitor impact
+
business relevance
```

Do NOT prioritize solely by technical score.

---

# 85. POSITIVE + NEGATIVE BALANCE

Every client report should attempt to include:

```text
What is working
What needs improvement
What should happen first
```

If there are no meaningful positive observations, say:

> "The audit focused primarily on improvement opportunities."

Do not invent compliments.

---

# 86. NO FAKE SALES CLAIMS

Never generate:

> "We can increase your revenue by 50%."

Never generate:

> "Your competitors are getting more customers."

unless verified.

Never say:

> "Your website is costing you thousands."

without evidence.

Use cautious language.

---

# 87. OUTREACH GENERATION

After human verification, generate:

- 1 short WhatsApp/message version
- 1 email version
- 1 concise LinkedIn version

Each must reference actual verified observations.

Do not send automatically.

---

# 88. OUTREACH SAFETY

Do not:

- mass spam
- auto-send to hundreds of businesses
- evade platform restrictions
- use deceptive identities
- pretend to be a customer
- fabricate urgency
- fabricate previous conversations

The user reviews and sends outreach.

---

# 89. PROSPECT QUALIFICATION

A high-priority lead should generally have:

- legitimate active business
- reachable public business contact
- active website
- meaningful website opportunity
- strong evidence
- relevant service fit

A business with a weak website is not automatically a buyer.

---

# 90. NO-WEBSITE LEADS

Businesses with no website can be tracked separately.

Report:

```text
NO_WEBSITE
```

Potential opportunity:

> New website

But do not claim that absence of a website is inherently harmful.

Look at:

- business activity
- public presence
- reviews
- services
- social presence
- contact availability

---

# 91. WORDPRESS LEADS

If WordPress is detected:

Do NOT automatically say:

> "WordPress is outdated."

Instead determine:

- current UX
- performance
- mobile
- content
- plugins where detectable
- accessibility
- conversion
- technical issues

WordPress itself is not a problem.

---

# 92. ELEMENTOR LEADS

If Elementor is detected:

Do not treat Elementor as a defect.

Look for actual evidence:

- excessive DOM
- performance problems
- layout problems
- maintenance issues
- poor mobile behavior

Only report what evidence supports.

---

# 93. REPORT SCORE DESIGN

Use multiple independent scores.

Do not create one magical number.

Recommended:

```text
Performance score
SEO score
Accessibility score
UX score
Conversion score
Technical health score
Content score
Trust score
Opportunity score
Evidence confidence
```

Then optionally create:

```text
Overall Opportunity Index
```

but clearly document its formula.

---

# 94. SCORE LIMITATION

Scores are decision aids.

They are not objective truth.

Show the underlying findings.

---

# 95. BUSINESS OPPORTUNITY INDEX

Example conceptual formula:

```text
Opportunity =
website improvement evidence
+
business relevance
+
service fit
+
evidence confidence
+
reachability
```

Do not make business size or review count the dominant factor.

---

# 96. REVIEW COUNT

Google review count can be a business-activity signal.

It must NOT be interpreted as:

> "This business will definitely buy."

---

# 97. BUSINESS ACTIVITY

Signals can include:

- public reviews
- recent social activity where available
- active website
- current service offerings
- current contact information
- physical presence

Do not fabricate activity dates.

---

# 98. HUMAN REVIEW SCREEN

Create a verification interface:

```text
Lead
Website
Top findings
Screenshots
Evidence
Confidence
Suggested priority

[VERIFY]
[REJECT]
[NEEDS MORE DATA]

Verification notes:
____________________
```

---

# 99. AUDIT REPRODUCIBILITY

Store:

- timestamp
- URL
- provider versions
- configuration
- browser version
- viewport
- crawl limits
- analysis mode

So the audit can be reproduced later.

---

# 100. AUDIT DATE

Every report must show:

> Audit performed on: YYYY-MM-DD

Website conditions change.

Never imply an audit is permanently valid.

---

# 101. TIMEOUTS

Set sensible defaults:

- page navigation timeout
- resource timeout
- provider timeout
- total website audit timeout

Allow configuration.

---

# 102. BROWSER CONTEXT

Use:

- desktop viewport
- mobile viewport
- configurable user agent
- JavaScript enabled
- normal browser rendering

Do not impersonate search-engine crawlers unless a legitimate audit specifically requires it.

---

# 103. JAVASCRIPT

Run JavaScript for browser UX analysis.

Also perform static HTML analysis.

This gives:

```text
static evidence
+
rendered evidence
```

---

# 104. CONSOLE ERRORS

Capture browser console errors.

Classify:

- error
- warning
- info

Do not treat every console warning as a client-facing issue.

---

# 105. NETWORK ERRORS

Capture:

- failed requests
- status codes
- slow requests
- blocked resources
- mixed content

Group duplicates.

---

# 106. FORMS

Detect:

- contact forms
- quote forms
- booking forms
- newsletter forms

Check:

- visible labels
- required fields
- obvious errors
- submit button
- privacy notice where relevant
- basic UX

Do not submit forms automatically.

---

# 107. CTA DETECTION

Detect likely CTA text:

- Contact
- Get Quote
- Request Quote
- Book
- Call
- WhatsApp
- Enquire
- Schedule
- Buy
- Order
- Start
- Get Started

Use semantic detection, not only exact text.

---

# 108. CONTACT JOURNEY

Model:

```text
Landing page
    ↓
understand service
    ↓
trust
    ↓
CTA
    ↓
contact
```

Identify friction between each step.

---

# 109. SCREENSHOT ANNOTATION

Later phase may support:

- bounding boxes
- issue labels
- arrows
- highlighted areas

Do not implement image annotation before basic screenshot capture is stable.

---

# 110. REPORT VISUALIZATION

Client report can include:

- score cards
- issue cards
- screenshots
- before/after-style evidence where available
- simple charts
- priority roadmap

Do not make charts misleading.

---

# 111. REPORT EXPORT

MVP:

- HTML
- Markdown
- JSON

Phase 2:

- PDF

PDF should render from the same report model.

---

# 112. API ENDPOINTS

Suggested:

```text
POST /api/leads
GET /api/leads
GET /api/leads/{id}

POST /api/leads/import
POST /api/leads/{id}/audit
GET /api/audits/{id}
GET /api/audits/{id}/findings
GET /api/audits/{id}/report

POST /api/leads/{id}/verify
POST /api/leads/{id}/outreach-brief

GET /api/providers
GET /api/jobs/{id}
```

---

# 113. FRONTEND ROUTES

Suggested:

```text
/
 /leads
 /leads/:id
 /audits/:id
 /audits/:id/report
 /jobs
 /settings
```

---

# 114. IMPORT FORMAT

CSV columns should support:

```text
business_name
category
address
city
state
country
phone
email
website
rating
review_count
source
source_url
```

Unknown columns should not crash import.

---

# 115. EXPORT FORMAT

Allow exporting:

- selected leads
- verified leads
- A-priority leads
- audit summaries
- outreach briefs

---

# 116. AUDIT PIPELINE STATE

Use explicit stages:

```text
DISCOVERY
VALIDATION
CRAWLING
TECHNOLOGY
PERFORMANCE
SEO
ACCESSIBILITY
SECURITY
MOBILE
DESKTOP
UX
CONVERSION
CONTENT
BUSINESS
NORMALIZATION
QUALIFICATION
REPORTING
VERIFICATION
COMPLETED
```

---

# 117. PROVIDER STATUS

For every provider:

```text
NOT_STARTED
RUNNING
COMPLETED
FAILED
SKIPPED
UNAVAILABLE
```

---

# 118. OBSERVABILITY

Dashboard should show:

- number of leads
- audits running
- audits completed
- audits failed
- average audit duration
- provider failure rate
- verified leads
- A-priority leads

Do not optimize for vanity metrics.

---

# 119. SUCCESS METRICS

The system's real success metrics are:

1. Valid leads discovered.
2. High-quality prospects identified.
3. False positives reduced.
4. Verified website problems.
5. Useful client reports.
6. Outreach messages based on real evidence.
7. Positive replies.
8. Discovery calls.
9. Proposals.
10. Closed projects.

The software cannot guarantee the last steps.

---

# 120. PHASED IMPLEMENTATION PLAN

## Phase 1 — Foundation

Build:

- project structure
- configuration
- database
- models
- logging
- job system
- basic API
- basic frontend

Test everything.

---

## Phase 2 — Lead ingestion

Build:

- CSV import
- manual lead creation
- normalization
- deduplication
- lead dashboard

Test.

---

## Phase 3 — Website discovery

Build:

- URL validation
- redirects
- SSL
- website state
- SSRF protection

Test heavily.

---

## Phase 4 — Crawler

Build:

- Playwright crawler
- URL queue
- page priority
- crawl depth
- page limit
- screenshots
- HTML metadata extraction

Test on local fixture websites.

---

## Phase 5 — Technology detection

Integrate Wappalyzer adapter.

Test:

- WordPress
- Elementor
- React
- Shopify
- generic HTML

---

## Phase 6 — Lighthouse

Integrate Lighthouse.

Persist raw + normalized results.

---

## Phase 7 — PageSpeed

Add optional API integration.

Gracefully handle missing API key.

---

## Phase 8 — Web Auditor

Add adapter.

Normalize results.

---

## Phase 9 — Accessibility

Add axe-core.

Normalize findings.

---

## Phase 10 — SEO

Build custom SEO analyzer.

Do not rely solely on Lighthouse.

---

## Phase 11 — Mobile/desktop browser analysis

Implement:

- mobile viewport
- desktop viewport
- screenshots
- layout checks
- CTA checks
- navigation checks

---

## Phase 12 — UX/conversion analysis

Implement deterministic rules first.

Then AI interpretation.

---

## Phase 13 — Content/business analysis

Implement:

- service discovery
- trust signals
- content quality
- freshness
- local business analysis

---

## Phase 14 — Evidence engine

Unify all findings.

Implement:

- severity
- confidence
- source
- evidence
- screenshots
- business impact
- recommendations

---

## Phase 15 — Jev

Add Jev adapter.

Build deterministic fallback.

Test both.

---

## Phase 16 — Lead scoring

Implement transparent scoring.

Show score breakdown.

---

## Phase 17 — Human verification

Build verification UI.

---

## Phase 18 — Reports

Build:

- internal report
- client report
- Markdown
- HTML

---

## Phase 19 — Outreach brief

Generate personalized outreach based only on verified findings.

Do not send automatically.

---

## Phase 20 — gstack QA

Use gstack to inspect our own app:

- browser QA
- design review
- engineering review
- code review
- regression testing

Fix issues.

---

## Phase 21 — Full end-to-end test

Run:

```text
lead
→ website
→ crawl
→ audit
→ evidence
→ qualification
→ report
→ verification
→ outreach brief
```

Use test businesses and controlled fixture websites first.

---

# 121. DEFINITION OF DONE

The project is not done merely because the UI loads.

MVP is done when:

- a lead can be imported
- website can be validated
- website can be crawled
- multiple pages can be analyzed
- Lighthouse works
- PageSpeed optionally works
- technology detection works
- SEO findings work
- accessibility findings work
- mobile analysis works
- desktop analysis works
- screenshots work
- findings are normalized
- confidence exists
- severity exists
- business explanation exists
- recommendations exist
- Jev or fallback qualification works
- lead score is transparent
- human verification works
- client report works
- outreach brief works
- errors are visible
- tests pass

---

# 122. FIRST TASK FOR NEMOTRON

Do NOT immediately build all phases.

First:

1. Inspect the existing repository.
2. Determine language/framework already present.
3. Preserve existing useful code.
4. Create an architecture document.
5. Create the directory structure.
6. Create configuration handling.
7. Create database models.
8. Create provider interfaces.
9. Create job/state architecture.
10. Create tests for the foundation.
11. Run tests.
12. Only then begin Phase 2.

Before changing architecture, inspect the repository and explain what already exists.

---

# 123. CODING RULES FOR NEMOTRON

- Prefer simple modular code.
- Avoid giant files.
- Avoid duplicated business logic.
- Use typed schemas.
- Validate external data.
- Keep provider adapters isolated.
- Write tests alongside features.
- Use meaningful names.
- Add comments only where useful.
- Do not silently catch errors.
- Do not hide failed providers.
- Do not fabricate fallback data.
- Do not hard-code secrets.
- Do not hard-code scores without documenting formulas.
- Do not make external APIs mandatory for local development.

---

# 124. WHEN A TOOL IS UNAVAILABLE

If Lighthouse is unavailable:

Use a provider status:

```text
UNAVAILABLE
```

Continue other analysis.

If Wappalyzer is unavailable:

Use other technology detection methods and lower confidence.

If PageSpeed API key is missing:

Skip PageSpeed and continue Lighthouse.

If Jev is unavailable:

Use deterministic qualification.

If gstack is unavailable:

Use Playwright.

The system should never collapse because one provider is missing.

---

# 125. FINAL PRINCIPLE

The system must optimize for:

```text
MORE VERIFIED INFORMATION
+
BETTER EVIDENCE
+
BETTER BUSINESS EXPLANATION
+
BETTER LEAD QUALIFICATION
=
BETTER OUTREACH OPPORTUNITIES
```

Not:

```text
MORE AI
+
MORE MODELS
+
MORE SCORES
```

AI is an interpretation layer.

Evidence is the foundation.

Human verification is the final gate.

---

# 126. START NOW

When this specification is supplied to OpenCode/Nemotron:

**Do not ask for permission to begin the foundation.**

Start by:

1. Inspecting the repository.
2. Creating a `PROJECT_STATUS.md`.
3. Creating/confirming the architecture.
4. Implementing Phase 1.
5. Running tests.
6. Reporting exactly what was created.
7. Showing failures honestly.
8. Moving to the next phase only after the current phase is stable.

If requirements conflict with the existing repository, inspect the repository first and preserve working functionality.

If a third-party library/API has changed, verify its current installed/API interface before implementing against assumptions.

**The final system must be evidence-driven, modular, testable, reproducible, safe, and designed specifically for finding direct WordPress/web-development prospects and explaining genuine website improvement opportunities to them.**
