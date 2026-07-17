# Marketing & commercial audit — olympialabs.eu

**Reviewed** 16 July 2026 · **Stage** pre-launch waitlist · **Locales** EN/PT · **Method** 24 sources, 117 claims

> Companion artifact (same content, designed): https://claude.ai/code/artifact/8a24c46c-a7eb-4228-bca2-25792dd23b0d

---

## Verdict

The page is **well built and badly sold**. The engineering is finished — 43 KB, ~150 ms to first byte, bilingual, accessible, honest to the last comma. The persuasion never shipped.

Its single best asset — the table that says exactly what OlympiaLabs measures, calculates, guesses, and refuses to claim — is written, translated, and **not rendered on the page**. In a category where independent testing found the market-leading power meter reads 32–48% low, that table is not a disclaimer. It is the product's strongest argument, and no visitor has ever seen it.

**Grades:** 2 strong · 3 adequate · 5 weak · 2 missing

---

## A. What I concluded

**1. Execution is strong; persuasion is weak.**
Nothing on the page is *wrong*. The problem is what it withholds: proof, price, a reason to act now, and the section that would make its biggest advantage visible. A visitor who lands, reads the hero, and leaves has learned that something helps coaches see fatigue — not what it is, what it costs, who else uses it, or why they should believe any of it.

**2. "Coach-first paddling" is already taken — the niche one level down is not.**
Ludum sells *"the performance platform built for coaches and teams in rowing and paddle sport… purpose-built for canoe, kayak, and dragon boat"* under the headline *"Stop coaching blind. Start seeing everything."* — the same problem, framed harder, with Rowing Australia and Princeton logos underneath. OlympiaLabs' defensible ground is narrower and better: sprint-specific, own boat sensor plus phone-video pose, each athlete judged against their own recent work, and claims that survive scrutiny. No competitor combines those four.

**3. The honesty is the wedge, not the handicap.**
The instinct to treat "we don't claim watts" as a weakness to hide is backwards. A 2021 peer-reviewed validation found every tested rowing power system substantially off against reference — NK EmPower by −32 to −48%. Peach's own founder says *"you can row like an absolute donkey and produce more watts."* The category sells numbers it has not validated. Saying so, out loud, is the one thing no incumbent can copy without indicting itself.

**4. The waitlist is running the wrong playbook.**
Harry's and Robinhood are the famous cases, and they are the wrong reference class: mass-market products with hand-seeded referral loops. Portugal has 3,560 federated canoeists across all disciplines, declining. The right model is Superhuman — small, founder-led, deliberately high-friction, with the waitlist used as a research instrument rather than a vanity number. That also fits the 100-submissions/month Netlify tier the form sits on.

**5. The business model is unproven in this category.**
Every hardware comparator sells *once*, with free software: Vaaka $225, Motionize $249, NK SpeedCoach $419, an EmPower force system ~$968, Peach from £2,530. Subscriptions exist only in software-only products sold to clubs (CrewLAB, $200/team/month). Hardware + SaaS is a hybrid this market has not been taught to accept — a pricing decision to make deliberately, before launch, not a detail to defer.

---

## B. Scorecard

| Dimension | Grade | Reason |
|---|---|---|
| Performance & technical craft | **Strong** | 43 KB HTML, ~150 ms TTFB, self-hosted fonts, one inline script, works without JS, skip-link, correct hreflang. |
| Copy craft | **Strong** | Genuinely good problem-led writing and a claims-discipline block most funded startups couldn't sustain. Let down by length, not quality. |
| Positioning & category | Adequate | A real niche is chosen and held — but Ludum already says the same sentence more concretely, and the page never differentiates against it. |
| ICP definition | Adequate | Coach-as-user is stated clearly and consistently. The *payer* — the club — is addressed once, in passing, and never sold to. |
| Form & conversion path | Adequate | Well-built, consent-first, honeypot, no-JS fallback. But six inputs where two would do, and a 100/month ceiling. |
| Value-prop clarity | Weak | Fails a five-second test. The headline names no category; the subhead is one 36-word sentence carrying six ideas. |
| Offer & CTA architecture | Weak | A transitional CTA with no direct CTA behind it. The exchange offered is "product updates" for six fields of personal data. |
| Privacy / GDPR posture | Weak | "GDPR-compliant" sits beside Privacy and Terms links that are both `href="#"`. The claim is currently unbacked. |
| SEO & discoverability | Weak | No sitemap (404), no structured data, no content surface. Meta and hreflang are correct but there is nothing to find. |
| Commercial readiness | Weak | No price band, no timeline, no model. A visitor cannot tell if this is €200 or €20,000, shipping in a month or a decade. |
| Trust & social proof | **Missing** | Zero testimonials, logos, counts, faces, or founder presence — and the Trust section that would carry credibility is not rendered. |
| Measurement readiness | **Missing** | No analytics of any kind. Conversion rate, traffic source and locale split are all unknowable today. |

---

## C. Findings

### The best thing you wrote isn't on the page — *Missing*

`Trust.astro` exists, is fully written, and is translated into Portuguese. It is not imported by `LandingPage.astro`. Confirmed against live HTML: these strings return zero matches. A visitor has never seen them.

> "High-rate sensing, transparent analysis, honest boundaries." … **Not claimed:** "No force, power or watts — there is no force sensor on the boat" · "Nothing is validated against ground truth yet. That validation work is still ongoing" … "We would rather be useful and honest than impressive and vague."
> — `landing/src/copy.ts` — `trust` — rendered nowhere

This is the highest-leverage line item in the audit, because the market context makes that table a weapon rather than a caveat. A 2021 study in *Frontiers in Physiology* tested four commercial rowing power systems against a reference and found **all four substantially wrong**: Peach −7.9 to −17%, NK EmPower −32 to −48%, Weba −7.9 to −16%, Concept2 −11 to −15%. Its framing sentence is damning for the category: *"Instrumentation systems are increasingly used in rowing to measure training intensity and performance but have not been validated for measures of power."*

Meanwhile the buyers are already skeptics. Peach's founder — who sells the force system — says *"you can row like an absolute donkey and produce more watts."* Washington's Michael Callahan: *"How we give the athlete information is more important than the information."* Texas's Dave O'Neill: *"There is still an art to it you can't measure."*

Cialdini's authority principle is the mechanism: credentials stated up front raised estate agents' appointments 20% and signed contracts 15%. Honesty about limits *is* an authority signal in a category full of unvalidated numbers.

**Fix:** Render `Trust.astro`. One import line. Then promote it — it belongs directly under the hero, not near the footer. It is the differentiator, not the fine print.

### The hero doesn't say what this is — *Weak*

> **"See where performance / starts to fade."**
> "OlympiaLabs combines precision boat-motion capture with body-movement analysis from phone video and athlete-specific session review so coaches can spot earlier signs of fatigue-related drift, see how technique changed, and coach the next session with more confidence."
> — `copy.ts` — `hero.titleTop` / `titleBottom` / `body` — 36 words, one sentence

The headline is a mood, not a claim. It could sit on a page for a heart-rate strap, a fatigue-management SaaS, or a sports psychology consultancy. Every concrete noun — sensor, boat, kayak, video — is delegated to the eyebrow and the 36-word subhead. Ludum opens with "Stop coaching blind. Start seeing everything." and tells you it is purpose-built for canoe and kayak in the next line.

Unbounce's benchmark set (41,000+ pages, 464M visitors) finds copy at a 5th–7th grade reading level converts at 11.1%, **56% higher** than 8th–9th grade copy, with negative correlations for difficult words (−24.3%), reading time (−19.4%) and word count (−18.6%). Calibrate that: their data is mostly paid-traffic marketing pages, and your reader is a technical coach who can handle "pitch and roll." The finding isn't "dumb it down." It's that one sentence carries six ideas — boat capture, video pose, athlete-specific review, fatigue drift, technique change, confidence — and no reader holds six.

The irony: a better line already exists in your own repo. `README.md` states the positioning as **"Coach the athlete, not the average"** — concrete, differentiating, six words, and a direct counter to Ludum's "see everything." It never made it to the page.

**Fix:** Promote the README line to the hero. Split the subhead in two; let the highlights carry the rest — that's what they're for. Drafts in section G.

### There is nothing to believe — *Missing*

The page contains no testimonial, no club or federation logo, no user count, no founder name or face, no photograph of the sensor on an actual boat, and no press mention. The `Proof` section — headed *"Real sessions. Real coaching output."* — does not render at all, because `PROOF_MEDIA` ships with every `src` empty and the component correctly hides itself rather than showing placeholder boxes. That self-hiding is good engineering. It also means the page's one promise of evidence silently evaporates.

This matters most precisely here. Cialdini's summary: social proof works hardest *"when we're unsure of ourselves"* and when *"the people we observe seem similar to us."* A coach evaluating an unknown pre-launch sensor from an unknown company is maximally unsure, and sprint kayak is a small world where peers are highly identifiable. The specific-versus-generic effect is measurable: hotel signs citing "75% of guests" lifted towel reuse 26%; localising to "75% of guests *in this room*" lifted it 33%.

Every competitor solves this, none with validation studies: Vaaka names Olympic champion Lisa Carrington. Ludum shows Rowing Australia, Princeton, Leander. CrewLAB claims 20,000+ elite athletes with a Princeton/Harvard/US Rowing logo wall. Peach cites supplying national teams since 2002. NK quotes named biomechanists. The bar is not a peer-reviewed study — it is one identifiable human being willing to be named.

**Fix:** You are in Viana do Castelo with a working system. The honest interim proof is: a real photo of the sensor on a real boat, a named founder with a sentence on why this exists, and one club willing to say "we're testing this." All three are true today; none require the product to be finished.

### The waitlist asks more than it offers — *Weak*

> "Be first to hear when access opens." … **Waitlist members hear about:** "Early access windows" · "Product updates" · "Feature releases" · "Onboarding availability"
> — `copy.ts` — `pilot.title` / `pilot.benefits`

Read that as an exchange. The visitor gives name, email, role, organisation, a message, and marketing consent. They receive… a newsletter. Three of the four stated benefits are the same benefit, and all four describe things good for OlympiaLabs, not for the coach.

StoryBrand's distinction is the useful one: a waitlist is a **transitional** CTA — the low-friction step for people not ready to buy. It is supposed to sit *behind* a direct CTA. This page has no direct CTA at all, so the transitional one is doing work it was never designed for: it is the entire funnel.

On form length the evidence genuinely conflicts, and it's better to show it than smooth it. NN/g states plainly: *"Every time you cut a field or question from a form, you increase its conversion rate"*, and caps optional fields at 1–2 (this form has 3). But my verification rounds split on that claim — one panel refuted it, another confirmed it 3–0 — and Superhuman is live counter-evidence: it required a **30-minute onboarding call before you were allowed to pay**, and grew the list to 450,000. Friction filters as well as deters. The resolution: friction must buy something. Six fields buying a newsletter is bad friction; six fields buying a place in a real pilot is good friction.

Keep `role`. It's the one field that earns its place — it tells you whether coaches, athletes or club directors actually show up, which is the ICP question in section E.

**Fix:** Reframe from newsletter to cohort, and make the scarcity real (see section G warning). Cut `organisation` and `message` to a post-signup follow-up email — which doubles as a second, cheap commitment step, the same foot-in-the-door mechanism that made the small-postcard group 4× more likely to accept the big ask.

### You cannot see whether any of this works — *Missing*

There is no analytics on the site. No Google Analytics, Plausible, Fathom, Umami, PostHog — nothing. I grepped the source and the live HTML; the only client-side JavaScript is the waitlist handler and a Cloudflare email-decoder. Conversion rate, traffic source, EN-versus-PT split, scroll depth, and whether anyone reaches the form are all unknowable.

There is a pointed irony here. The product's entire thesis is that coaching on the finish result is guessing, and that you should measure the process to find where it went wrong. The landing page is being coached on the finish result.

Benchmarks only mean something once you can measure against them: Unbounce's median landing page converts at **6.6%** (SaaS lowest at 3.8%). Waitlister reports a median waitlist converting ~11% of visitors and a typical active waitlist collecting ~148 signups — but that is vendor first-party data about its own customers, so treat it as a directional prior, not a target.

**Fix:** Plausible or Umami — cookieless, no consent banner needed, self-hostable next to the webapp you already run. One script tag. Fits the brand's ethos and is the cheapest item on this list.

### "GDPR-compliant" sits next to two dead links — *Weak*

> Under the submit button: "No spam · GDPR-compliant"
> In the footer: `<a href="#">Privacy</a>` · `<a href="#">Terms</a>` · `<a href="#">About</a>`
> — verified in live HTML, 16 July 2026

The form collects name, email, role, organisation and free-text, and asserts GDPR compliance while offering no privacy policy to read. GDPR Article 13 requires information at the point of collection — controller identity, purpose, legal basis, retention, rights. A consent checkbox referencing no policy does not carry that load.

Flagging this as a marketing problem, not just a legal one, because of who reads it. The page's entire pitch is "we tell you exactly where every number comes from." A claim with a dead link behind it is the one kind of error this brand cannot afford — the same failure mode the copy discipline exists to prevent, committed in the footer.

**Fix:** Write the two pages. They're short for a site with no cookies and one form. Until they exist, soften the claim rather than keep the links dead.

### No price, no date, no reason to act today — *Weak*

The page never indicates a price band, launch window, or business model. "We move toward broader access" is the closest thing to a timeline. A coach cannot self-qualify; a club director — the person with budget — has nothing to take to a committee.

Hidden pricing is defensible: Ludum shows no prices and routes everything to "Request a Demo", the norm when the institution pays. But Ludum is a shipping product with a sales team. A pre-launch page with no price, no date, *and* no proof gives the visitor nothing to hold.

Scarcity is the honest lever — Concorde ticket sales jumped the day after cancellation was announced, with no change to product or price. But CXL's warning is explicit and non-negotiable for this brand: *"Never use fake scarcity — made-up claims of limited supplies or expiring discounts. Your site visitors will see right through you."* A genuinely limited pilot is real scarcity. An invented countdown would violate the discipline that makes this page credible.

**Fix:** State a real constraint you have — how many boats you can instrument this season. If it's six, say six. Add a price band only once you believe it; section F covers how to find it.

### The page is a destination with no road to it — *Weak*

No social links, no press, no founder presence, no content, no sitemap (`/sitemap.xml` → 404), no structured data. `robots.txt` exists but contains only Cloudflare's injected content-signals boilerplate. Meta, OG image and hreflang are all correct — the page is perfectly prepared to be found, and nothing points at it.

Harry's is instructive precisely because the loop is not the lesson. Yes, 77% of ~100,000 signups came via referral. But the team **hand-seeded it**: each of ~10–12 people emailed their own contacts personally 1–2 days before launch, and rewards concentrated in a tiny tail — only ~3,000 of 100,000 earned anything. The loop amplified distribution that already existed. It did not create it.

**Fix:** Your distribution advantage isn't SEO — it's that sprint kayak is small and you're inside it. Federação Portuguesa de Canoagem is an ICF member; Montemor-o-Velho hosted the 2018 World Championships. That's a hand-seeded list, not a search-traffic problem.

---

## D. The category you're entering

Two patterns matter more than any individual row: **hardware sells once and the software is free**, and **credibility is bought with named humans, not studies** — not one of these companies cites a validation study on its own page, despite one existing that ranks them.

| Product | Sells to | Price | Model | Credibility tactic |
|---|---|---|---|---|
| Vaaka Cadence | Athlete | $225 | One-time hardware | Lisa Carrington (Olympic gold), Teneale Hatton; made in NZ |
| Motionize Paddle | Athlete | $249 | One-time hardware | Thin — 2 reviews, both 2016; effectively dormant |
| NK SpeedCoach GPS 2 | Athlete | $419 | One-time, free software | Founded 1978, made in USA, 2-year warranty, user quotes |
| NK EmPower Oarlock | Athlete + coach | $499 (~$968 system) | One-time, free software | Named biomechanists (Kleshnev/BioRow, Volker Nolte) |
| Peach PowerLine | Coach + athlete | £2,530–£7,780 | One-time; software £20 | National teams since 2002; Eton, Oxford Brookes |
| Ludum | Coach / club | Not shown | SaaS, demo-gated | Rowing Australia, Princeton, Leander, Hampton |
| CrewLAB | Club (payer) | $200/team/mo | Freemium SaaS | "20,000+ elite athletes"; Princeton, Harvard, US Rowing |

### Where the white space actually is

Not "coach-first paddling" — Ludum has it, with logos. The unoccupied position is the intersection of four things, and it's worth stating as one sentence because that sentence is your positioning:

> **The only system built specifically for sprint kayak and canoe that measures the boat and the body together, judges each athlete against their own recent work rather than a norm, and tells you exactly which numbers it trusts.**

Each clause is defended by evidence. *Sprint-specific:* NK explicitly says the SpeedCoach GPS 2 "is designed for rowing" and routes SUP and outrigger buyers to other SKUs — there is no sprint kayak variant; Vaaka spreads across five paddle sports; CrewLAB serves rowing, swimming and running and never names canoe. *Boat + body:* nobody in the sweep pairs boat-motion capture with video pose. *Athlete-specific:* a real differentiator against Ludum's "see everything" — and the one thing you cannot claim without the sensor. *Honest claims:* Ludum advertises force curves; EmPower advertises watts that independent testing puts 32–48% low.

One caution on the last clause: **honesty is a wedge, not a moat.** Any competitor can add a limitations page tomorrow. What makes it durable is doing the validation work you currently, correctly, say you haven't done — the same 2021 study that damaged EmPower *recommended* Peach by name. Validation is the only credibility asset in this category a rival cannot simply write.

---

## E. Who to sell to

The ICP was treated as open rather than assuming coach-first is right. Having looked at the market: **coach-first is correct, and the page should keep it** — but it is only half the sale, and the missing half is the half with the money.

**Coach = champion, club = payer.** The coach has the pain, judges the product, and will never expense it. The club signs. This is a classic user≠payer split, and the category resolves it the same way: CrewLAB prices **per team, not per athlete** ($200/team/month; Ultra $500+/month per organisation), and Ludum gates everything behind "Request a Demo." The page speaks fluent coach and says one sentence to the club — *"OlympiaLabs is for clubs that want precision capture…"* — buried in the Stats section body. A club director landing here finds no price, no timeline, no ROI, and nothing to forward.

**Portugal is a beachhead, not a market.** Official IPDJ data via PORDATA: **3,560 federated canoeists in Portugal in 2025** (provisional), down from 3,746 in 2022 — flat-to-declining, and 0.4% of the country's 853,726 federated athletes. That is across all ten ICF disciplines, so the sprint-only pool is smaller still. Portuguese rowing is smaller again (1,305). You cannot build a company on the domestic market; you can absolutely prove one there.

The expansion path is favourable. Eight of the top ten nations in the all-time canoe sprint medal table are European (Hungary leads with 574 medals; Germany 345), only 62 nations have ever medalled, and the ICF's 170 federations route through Paddle Europe. Europe-first is the natural motion, and you're already bilingual for the first step.

**Elite is a credibility channel, not a revenue line.** Recent World Championships contest ~20–30 sprint events. As a volume market that's worthless; as a proof engine it's the most valuable thing in the sport. Vaaka's whole credibility rests on one name. Portugal hosted the 2018 World Championships at Montemor-o-Velho and the 2015/2021 junior/U23 editions; Federação Portuguesa de Canoagem is a listed ICF member. Treat one elite squad as a marketing investment that produces a quotable sentence, and price it accordingly — which may mean free.

**What this changes on the page:** keep the coach voice. Add one club-facing artefact — a short section or linked page answering price band, what a club gets, how many boats — so the coach has something to forward to the person who signs. That single addition converts the page from a coach's curiosity into a club's agenda item. And keep the `role` field: it's currently your only instrument for finding out whether that theory is true.

---

## F. What to do, in order

### 1 — Make the page honest and legible about itself (this week)

- **Render `Trust.astro`, high on the page.** *(1 line)* Your strongest asset, currently invisible. Nothing else has a better ratio.
- **Install Plausible or Umami.** *(1 hour)* Cookieless, no banner, self-hostable. Without it every item below is unfalsifiable opinion — including this audit.
- **Write Privacy and Terms; fix the dead links.** *(half day)* You assert GDPR compliance next to `href="#"`. Fix the assertion or fix the links — don't ship both.
- **Rewrite the hero; promote "Coach the athlete, not the average."** *(1 hour)* Already in your README and it beats what's live. Split the 36-word subhead in two.
- **Add a founder name, a face, and one real photo of the sensor on a boat.** *(1 hour)* All true today. Zero product risk. Cheapest credibility in the audit.

### 2 — Give people something to believe and something to ask for (this month)

- **Wire one real annotated session into Proof.** *(days)* The component already hides itself when empty — it needs media, not code. One session where the finding was right is worth the entire Stats section.
- **Reframe the waitlist as a founding cohort with a true limit.** *(2 hours)* Say how many boats you can actually instrument. Real scarcity only.
- **Cut the form to email + role.** *(1 hour)* Move organisation and message to a follow-up mail — which doubles as a second commitment step.
- **Add an FAQ: price band, timeline, boat/phone compatibility, who owns the data.** *(half day)* The four questions a coach asks; the page answers none. Add FAQ JSON-LD while you're there.
- **Add one club-facing artefact, plus sitemap + Organization schema.** *(half day)*
- **Watch the Netlify cap.** *(minutes)* 100 submissions/month on free tier. Unlikely to bind — but it fails silently, which is the bad kind of limit.

### 3 — Decide the business before you need the answer (before launch)

- **Run the waitlist as a research instrument.** Superhuman's method: Van Westendorp price sensitivity on ~100 early users (that's how $30/month was set), and the PMF question — "How would you feel if you could no longer use OlympiaLabs?" — tracked toward 40%+ "very disappointed" on ~40 respondents. Your list is small; that's exactly why every signup should be a conversation.
- **Decide the pricing architecture deliberately.** The category sells hardware once with free software. Hardware+SaaS asks buyers to accept a model no competitor has taught them. Either justify the subscription with something recurring and visible, or charge for the sensor and make the platform the reason to buy it.
- **Start the validation work — and then say so.** You currently say "nothing is validated against ground truth yet." The 2021 study that found EmPower 32–48% low *recommended Peach by name*. That is the one credibility asset a competitor cannot write in an afternoon.
- **Seed distribution by hand.** Harry's loop worked because 12 people emailed their contacts first. You're in Viana do Castelo; the federation and the clubs are a list, not a funnel.

---

## G. Copy, rewritten

Three hero options and a waitlist reframe, both locales. All stay inside the claims-discipline block in `copy.ts`: no force, no watts, no heart rate, no real-time cues, no validation claims.

### Hero — option A (recommended)

> **Coach the athlete, not the average.**
> A sensor on the boat and the camera in your pocket. Every session comes back as one review: where this athlete's balance and rhythm started to slip, and what to work on next. Built for sprint kayak and canoe.

> **Treina o atleta, não a média.**
> Um sensor no barco e a câmara do telemóvel. Cada sessão volta como uma análise: onde o equilíbrio e o ritmo deste atleta começaram a ceder, e o que trabalhar a seguir. Para kayak e canoa de velocidade.

### Hero — option B (problem-led, closest to your existing voice)

> **The split says the session slowed. It doesn't say why.**
> OlympiaLabs measures how the boat moved and how the athlete moved, and shows you where the session started to fade — so the next correction is a decision, not a guess.

> **O tempo diz que a sessão abrandou. Não diz porquê.**
> A OlympiaLabs mede como o barco se moveu e como o atleta se moveu, e mostra onde a sessão começou a ceder — para que a próxima correção seja uma decisão, não um palpite.

### Hero — option C (keep your line, fix the load)

> **See where performance starts to fade.**
> A boat-motion sensor plus phone video, reviewed against that athlete's own recent sessions. For sprint kayak and canoe coaches.

> **Veja onde o rendimento começa a ceder.**
> Um sensor de movimento no barco e vídeo do telemóvel, analisados face às sessões recentes do próprio atleta. Para treinadores de kayak e canoa de velocidade.

### Waitlist — template, numbers to be replaced with your real ones

> **The first clubs on the water this season.**
> We can fit sensors to **[N]** boats before the season starts. Join and we'll tell you whether yours is one of them — and what we find in the first sessions, whether or not it flatters us.

> **Os primeiros clubes na água esta época.**
> Conseguimos equipar **[N]** barcos antes do início da época. Inscreva-se e dizemos-lhe se o seu é um deles — e o que encontrarmos nas primeiras sessões, mesmo que não nos favoreça.

Replaces "Early access windows / Product updates / Feature releases / Onboarding availability" — four restatements of "a newsletter" — with: a place in the pilot · a say in what gets built · your sessions reviewed with you · founding pricing at launch. **Ship only the lines that are true.**

> ⚠️ **The one rule for the waitlist rewrite.** Every number in it must be true before it ships. If you can fit six boats, say six; if you don't yet know, say "a small group" rather than inventing a figure. CXL's guidance is blunt — *"Never use fake scarcity… Your site visitors will see right through you"* — and for this brand specifically, a manufactured limit would contradict the exact discipline that makes the rest of the page worth believing. The scarcity works *because* you're the company that wouldn't fake it.

---

## H. Sources & method

Page claims come from reading `landing/src/` and the live HTML of both locales on 16 July 2026; every quoted string was checked verbatim against `copy.ts` or the rendered page. External claims come from a fan-out research run: 24 sources, 117 extracted claims, 25 put through three-vote adversarial verification.

Confidence is labelled, because it isn't uniform:

- **Verified** — confirmed by independent adversarial verifiers against the primary source.
- **Sourced** — quoted from the primary source, but its verification round was cut short when the research run hit a spend limit. Trust the quote; treat the framing as unconfirmed.
- **Self-reported** — vendor's own marketing claim about itself. Directional only.

**Two honest caveats.** The NN/g form-length claim split my verifiers — one round refuted it, another confirmed it 3–0 — so the tension is reported rather than resolved in the convenient direction. And there are **no PageSpeed scores** here: the API quota was exhausted, so every performance number is from my own `curl` timings (TTFB ~140–170 ms across three runs, 43 KB HTML, 29 KB CSS), not an invented Lighthouse grade.

| Confidence | Claim | Source |
|---|---|---|
| Verified | 6.6% median LP conversion (41K+ pages, 464M visitors); 5th–7th grade copy converts 11.1%, +56% vs 8th–9th | unbounce.com/conversion-benchmark-report/ |
| Verified | "Every time you cut a field or question from a form, you increase its conversion rate"; 78% vs 42% error-free first submissions (Seckler et al., CHI) — *see caveat* | nngroup.com/articles/web-form-design/ |
| Verified | Harry's Prelaunchr — ~100K signups (85K valid) in one week; 77% via referral; hand-seeded | tim.blog/2014/07/21/harrys-prelaunchr-email/ |
| Verified | Cialdini — 7 principles (unity added 2016); towel reuse +26%/+33%; authority +20%/+15%; commitment 4×; Concorde scarcity | influenceatwork.com/7-principles-of-persuasion/ |
| Verified | Dunford, *Obviously Awesome* — positioning as foundation of GTM; five components; three styles | aprildunford.com/books |
| Verified | Strategyzer VPC — customer profile (jobs/pains/gains), value map (pain relievers/gain creators) | strategyzer.com/library/the-value-proposition-canvas |
| Verified | Vaaka — $225 one-time, no subscription; athlete-first; Lisa Carrington | vaakacadence.com/shop/vaaka-paddle-cadence-sensor/ |
| Sourced | Frontiers in Physiology (2021) — Peach −7.9…−17%, EmPower −32…−48%, Weba −7.9…−16%, Concept2 −11…−15%; Peach recommended | frontiersin.org/journals/physiology/articles/10.3389/fphys.2021.758015/full |
| Sourced | NK — SpeedCoach GPS 2 $419 (from $469), "designed for rowing", no sprint variant; EmPower $499 + $469; 50 Hz, ±2°; Kleshnev/Nolte | nksports.com/speedcoach-gps-2 · nksports.com/empower-oarlock |
| Sourced | Ludum — "built for coaches and teams in rowing and paddle sport"; "Stop coaching blind"; Ludum Paddle; force curves; Rowing Australia/Princeton/Leander/Hampton; demo-gated | ludum.com |
| Sourced | CrewLAB — $0 free, $200/team/mo Pro, $500+/mo Ultra; rowing/swimming/running, no canoe; Princeton/Harvard/US Rowing | crewlab.io/pricing/ |
| Sourced | Peach — £2,530 (1x) to £7,780 (8+) ex-VAT, £20 software; national teams since 2002; Eton/Oxford Brookes | peachinnovations.com |
| Sourced | Motionize — $249 MSRP; athlete-first, real-time audio cues; 2 reviews, both 2016 | paddling.com/gear/motionize-paddle-sensor |
| Sourced | PORDATA/IPDJ — PT canoeing 3,560 (2025 prov.), 3,639 (2024), 3,746 (2022); rowing 1,305; all federations 853,726 | pordata.pt |
| Sourced | ICF — 170 federations, 5 continental assocs (Paddle Europe), 10 disciplines; Fed. Portuguesa de Canoagem listed; 62 nations medalled; Montemor-o-Velho 2018 | canoeicf.com/federation |
| Sourced | Superhuman — 220K+ waitlist vs ~15K paying (2019), 450K by Aug 2021; 30-min onboarding call; $30/mo via Van Westendorp (~100 users); PMF 22%→58% | howtheygrow.co/p/how-superhuman-grows |
| Sourced | StoryBrand SB7 — customer as hero, brand as guide; direct vs transitional CTA (secondary summary; its conversion figures are unnamed and not cited) | umbrex.com/resources/frameworks/marketing-frameworks/storybrand-sb7-framework/ |
| Sourced | CXL — "Never use fake scarcity… Your site visitors will see right through you." | cxl.com/blog/cialdinis-principles-persuasion/ |
| Sourced | Christensen et al., "Know Your Customers' Jobs to Be Done", HBR Sept 2016 — provenance only; body paywalled, not quote-verified | hbr.org/2016/09/know-your-customers-jobs-to-be-done |
| Self-reported | Waitlister — median waitlist ~11% visitor conversion; typical active waitlist ~148 signups; ~7% run referral | waitlister.me/growth-hub/blog/waitlist-and-product-launch-statistics |
| Self-reported | Robinhood — 10K day 1, 50K week 1, ~1M year 1; ">50% LP conversion" repeated by vendor blog with no primary source — not a benchmark | waitlister.me/growth-hub/case-studies/robinhood |
