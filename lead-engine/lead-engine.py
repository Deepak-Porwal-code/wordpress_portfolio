#!/usr/bin/env python3
"""Lead engine: CSV in -> auto website audit -> weak points + WhatsApp pitch out.
Stdlib only, zero deps. Input CSV cols: name,phone,address,website,rating
Usage: python lead-engine.py leads.csv [-o out.csv]
Get input CSV from: Google Places API (official) or Apify/Outscraper export.
# ponytail: single file, stdlib urllib, CSV out opens in Sheets. DB/dashboard later, only if this earns.
"""
import csv, re, sys, time, ssl, urllib.request, urllib.parse, html

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LeadAudit/1.0"}
NEW_SITE_PITCH = (
    "Namaste {name}! I found your business on Google Maps, but there's no website linked — "
    "so Maps visitors can't see services/prices and go to competitors. I build business sites in 7 days "
    "(Rs 25k, UPI, GST invoice) with WhatsApp booking + Maps + basic SEO. I built 4 live business sites already. "
    "Want a free 2-min plan for yours? - Deepak, WordPress Developer"
)
FIX_PITCH = (
    "Namaste {name}! Quick free audit of {site}: {weak}. I fix exactly this for Jaipur/Bengaluru businesses — "
    "most fixes in 2-3 days, fixed quote, UPI, GST invoice. I built 4 live business sites (incl. e-commerce). "
    "Want the 2-min video audit? - Deepak, WordPress Developer"
)

def fetch(url):
    t0 = time.time()
    req = urllib.request.Request(url, headers=UA)
    ctx = ssl.create_default_context()
    try:
        with urllib.request.urlopen(req, timeout=20, context=ctx) as r:
            raw = r.read(1_500_000)
            ms = int((time.time() - t0) * 1000)
            enc = r.headers.get_content_charset() or "utf-8"
            return ms, len(raw), raw.decode(enc, "replace"), r.status, r.geturl()
    except Exception as e:
        return None, 0, "", 0, f"ERR:{e}"

def audit(url):
    weak, fix = [], []
    if not re.match(r"^https?://", url, re.I):
        url = "https://" + url
    ms, size, body, code, final = fetch(url)
    if ms is None:
        return {"site": url, "status": "DOWN", "weak": ["site does not open (" + final[:80] + ")"],
                "fix": ["rebuild/fix hosting + SSL, relaunch in days"], "ms": "", "kb": ""}
    if size == 0:
        return {"site": url, "status": "DOWN", "weak": ["site returns empty page (hosting/DNS issue)"],
                "fix": ["fix hosting, relaunch"], "ms": ms, "kb": 0}
    low = body.lower()
    if not url.startswith("https"):
        weak.append("no HTTPS (visitors see 'Not Secure')"); fix.append("free SSL + redirect")
    if ms > 4000 or size > 2_500_000:
        weak.append(f"slow (~{ms}ms, {size//1024}KB page)")
        fix.append("cache + image compression + cleanup for <2.5s load")
    elif ms > 2500:
        weak.append(f"slightly slow (~{ms}ms)"); fix.append("cache + image tuning")
    if 'name="viewport"' not in low:
        weak.append("not mobile-friendly (no viewport tag)"); fix.append("responsive rebuild")
    for pat, label, how in [
        ("<title>", "no page title (Google shows blank)", "SEO titles + meta"),
        ('name="description"', "no meta description (low clicks)", "click-ready meta"),
        ("<h1", "no H1 heading (Google confused)", "proper H1 structure"),
    ]:
        if pat not in low:
            weak.append(label); fix.append(how)
    if "wa.me" not in low and "whatsapp" not in low:
        weak.append("no WhatsApp chat (Indian buyers bounce)"); fix.append("WhatsApp button + abandoned-chat recovery")
    if "tel:" not in low:
        weak.append("no tap-to-call button"); fix.append("click-to-call header")
    if "google.com/maps" not in low and "g.page" not in low:
        weak.append("Maps not embedded/linked"); fix.append("Maps + reviews section")
    if "og:title" not in low:
        weak.append("no social preview tags (ugly WhatsApp shares)"); fix.append("OG/Twitter cards")
    imgs = len(re.findall(r"<img", low)); alts = len(re.findall(r"<img[^>]+alt=", low))
    if imgs and alts < imgs / 2:
        weak.append(f"images lack alt text ({alts}/{imgs})"); fix.append("alt text + WebP")
    if not weak:
        weak.append("looks technically OK — only conversion polish left")
        fix.append("CTA + speed fine-tune + review widgets")
    return {"site": final, "status": "LIVE", "weak": weak, "fix": fix,
            "ms": ms, "kb": size // 1024}

def main():
    src = sys.argv[1] if len(sys.argv) > 1 else "leads.csv"
    out = sys.argv[sys.argv.index("-o") + 1] if "-o" in sys.argv else "leads-audited.csv"
    rows = list(csv.DictReader(open(src, encoding="utf-8-sig")))
    done = []
    for r in rows:
        name = (r.get("name") or "").strip()
        site = (r.get("website") or "").strip()
        print(f"... {name} [{site or 'NO SITE'}]")
        if not site:
            done.append({**r, "verdict": "NO_SITE", "load_ms": "", "page_kb": "",
                         "weak_points": "no website on Maps listing",
                         "fixes": "new 7-day site: pages + WhatsApp + Maps + SEO",
                         "pitch": NEW_SITE_PITCH.format(name=name)})
            continue
        a = audit(site)
        if a["status"] == "DOWN":
            verdict = "BROKEN_SITE"
        elif len(a["weak"]) == 1 and a["weak"][0].startswith("looks technically"):
            verdict = "HEALTHY"
        else:
            verdict = "WEAK_SITE"
        weak_str = "; ".join(a["weak"][:4])
        pitch = FIX_PITCH.format(name=name, site=site, weak=weak_str) if verdict == "WEAK_SITE" else ""
        done.append({**r, "verdict": verdict, "load_ms": a["ms"], "page_kb": a["kb"],
                     "weak_points": "; ".join(a["weak"]),
                     "fixes": "; ".join(dict.fromkeys(a["fix"])), "pitch": pitch})
        time.sleep(1)
    fields = list(rows[0].keys()) + ["verdict", "load_ms", "page_kb", "weak_points", "fixes", "pitch"] if rows else []
    w = csv.DictWriter(open(out, "w", encoding="utf-8", newline=""), fieldnames=fields)
    w.writeheader()
    w.writerows(done)
    n = lambda v: sum(1 for d in done if d["verdict"] == v)
    print(f"\nDONE: {len(done)} leads -> {out} | NO_SITE={n('NO_SITE')} WEAK={n('WEAK_SITE')} BROKEN={n('BROKEN_SITE')} HEALTHY={n('HEALTHY')}")

if __name__ == "__main__":
    main()
