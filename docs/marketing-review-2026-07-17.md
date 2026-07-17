# Marketing & commercial review — olympialabs.eu

**Reviewed** 17 July 2026 · **Stage** pre-launch waitlist · **Locales** EN/PT
**Method** independent fan-out: 5 angles, 26 sources fetched, 123 claims extracted, 25 put through 3-vote adversarial verification, 108 agents
**Result** **1 claim survived. 24 were killed.**

> Companion artifact (same findings, designed): https://claude.ai/code/artifact/14939a14-ccbb-43eb-8225-e379641fae42

> Independent of, and deliberately not anchored on, `marketing-audit-2026-07.md`. The research
> pass was instructed not to read it. Where the two converge, that is corroboration; the
> divergences are in section H, and they matter more than the agreements.

---

## Verdict

The page is well built and badly sold — but that is the boring half, and the prior audit already
says it. The finding worth the run is this:

**You are defending the wrong flank.** The Trust section refuses to claim watts, force and heart
rate. Good, and now citable. But *"See where performance starts to fade"* — the live `h1` — is a
**change-detection claim**, and change detection is the single hardest measurement problem in this
family of products. You have published no evidence for it. Refusing to claim watts discharges a
promise you never made, while the hero makes one you have not evidenced.

The one verified finding's own sting, stated as the researcher put it:

> **Absence of a claim is not evidence of precision.**

By your own standard — a claim must trace to something real — the hero is currently the least
defensible sentence on the page. Not the boldest. The least defensible.

**And the second finding: almost nothing in the theory I set out to apply survived contact with the
primary sources.** That is reported here as the result, not smoothed over.

---

## A. What the research established — and what it did not

| | |
|---|---|
| Claims verified 3-0 | **1** |
| Claims killed | **24** |
| Frameworks (Schwartz, Dunford, JTBD/VPC, Rogers/Moore, Ehrenberg-Bass, Cialdini, Fogg, StoryBrand, Van Westendorp) | **0 surviving claims** |
| Economics core (Akerlof/Spence, cheap talk, signalling) | **0 surviving claims, in either direction** |

This is not a failed run. It is a result, and it constrains what this document is allowed to say.

**"Refuted" here means "not established as stated" — not "false".** The pipeline demonstrably
produced at least one false negative: the claim that EmPower reads ~25% below its peers was voted
0-3, yet its factual core is verbatim in the paper's Practical Applications. The refutations tracked
*interpretive overreach in the wording*, not the underlying numbers.

**Symmetry check, because it matters.** Both the strong bias claim *and* its mirror-image
adversarial check were refuted. The pipeline genuinely failed to settle the bias question; it was
settled only by re-fetching the primary source by hand. The evidence did not conveniently land on
one side.

---

## B. Finding 1 — The hero writes a cheque the product has not evidenced

**Confidence: medium.** Built on the one 3-0 verified finding plus a direct fetch of the live `h1`.
The application to kayak is reasoning, not evidence. *(This is the most important item here.)*

The chain, each link either verified or labelled:

1. **"Fade" is a change-detection claim** — a within-athlete comparison across time *and* across
   intensity. Not a level claim. *(Reasoning.)*
2. **TEM is exactly the quantity that governs change detection.** The paper defines it verbatim as
   *"random session-to-session changes in error"*. **(Verified.)**
3. **On that quantity, this family of products performs disastrously.** EmPower's TEM ran
   17.3–18.9% across stages and **26.0%** on the 30-s maximal test. The paper's own scale calls
   ≥6.9% *"extremely large"*, and its own stated benchmark is *"Negligible session-to-session
   reliability is represented by TEM values of <0.5%."* EmPower sits at roughly **36× the paper's
   negligible threshold**. **(Verified digit-for-digit on two independent hosts.)**
4. **The bias is load-dependent, which specifically corrupts fade.** EmPower moves from −32…−35% at
   stages 1–7 to **−47.7%** at the 30-s maximal test. A bias that shifts ~13 points between
   submaximal and maximal effort is *not* removable by one calibration constant — and a fade delta
   is measured precisely across changing intensity. **(Verified.)**

**The elegant part:** W. G. Hopkins is a **co-author** of the study *and* the author of the canonical
Hopkins (2000) reliability framework, whose thesis is that within-subject random variation — not
systematic bias — governs the precision of measuring change. The finding applies the co-author's own
framework to his own data.

### Why this reframes everything

Your fallback position — *"we compare each athlete against their own recent work, not a norm"* —
elegantly dodges the **absolute accuracy** problem. It does not dodge the **repeatability** problem.
It runs straight into it. Within-athlete deltas are governed by exactly the quantity this literature
says nobody measures well.

So the highest-value validation work available to you is **not** validating against ground truth
(which, per Finding 2, barely exists in this domain). It is **establishing your own session-to-session
repeatability for the deltas you actually claim.** That is a smaller, cheaper, more tractable study
than a ground-truth validation — and it is the one that defends the sentence you already ship.

> **The differentiator only compounds if the refusal is paired with a repeatability number for the
> deltas the product does claim.** That number does not currently exist on the page in any language.

### The limit, stated plainly

Nothing verified here concerns sprint kayak, on-water conditions, or a boat-mounted IMU. Holt et al.
is **sweep rowing on a stationary Swingulator** (the authors flag the rig itself as a possible error
source), n=15. It supports the **methodological** point — change detection is the hard problem and
needs its own evidence — and it does **not** transfer numerically to your product.

---

## C. Finding 2 — "Unvalidated" is defensible; "wrong" is not. Your copy already knows this.

**Confidence: high.** Hedges verified verbatim against the primary source by hand, after the
pipeline failed to settle it in either direction.

The −32 to −48% figure is real and verbatim in the abstract. But it is measured against a rig the
authors **explicitly disclaim**:

> "It should be noted that the Reference System does not provide a criterion measure of power,
> rather, concurrent validity in comparison to the Reference System is reported."

> "Although the Reference System is not a criterion or gold-standard measure of power in the current
> study … the error arising from a criterion measure is an important component of the total error
> observed in validity studies that is often overlooked."

The authors even float that their own rig may read **~10% high** — which would put EmPower nearer
−22…−38%. The paper's title says **"Concurrent** Validity"; it never claimed criterion validity.

**What survives without a criterion** — relative disagreement, which needs no gold standard:

> "Practitioners should be aware that power measured with EmPower devices may be substantially lower
> (~25%) than when measured with Peach, Weba, or Concept2 devices. It is therefore advisable that
> practitioners use the same device when comparing measures of power output."

**So the defensible line is not "rivals' numbers are wrong". It is "nobody in this family has a
ground truth to be wrong against."**

And here is the payoff: that makes your existing, already-translated sentence —

> *"Nothing is validated against ground truth yet. That validation work is still ongoing."*

— **an accurate description of the category, stated by the category's own literature.** Not a
confession of weakness. The unshipped Trust section already draws the line exactly where the
evidence puts it. The copy was right before the analysis was.

**This constrains the marketing.** Ground the refusal in *reliability* and in *the absence of a
criterion* — claims the literature makes about **itself** — never in an accusation against a named
competitor. A review whose thesis is "refuse to claim what you have not validated" would be
self-refuting if it overstated its own source in the convenient direction. The same rule binds the
page.

---

## D. Finding 3 — The "rigorous core" is unverified. Carry it as hypothesis.

**Confidence: high** — as an *evidence-state* claim, not an economic one.

Every game-theoretic claim failed verification: cheap talk/babbling 0-3 · Chakraborty-Harbaugh 0-3 ·
cheap-talk-vs-verifiable-information 0-3 · Milgrom-Roberts 0-3 · M-R repeat-purchase 1-2 ·
Jin/Luca/Martin unraveling 1-2 · cursed equilibrium 0-3 · Holland credence goods 0-3 · McCluskey 0-3.

**Provenance is the common failure mode, and it is disqualifying:**

- **Milgrom & Roberts** — the canonical dissipative-signalling paper, and the formal basis for
  "a limitations page is costless therefore worthless" — **JSTOR returned HTTP 403.** Only the
  abstract was ever read. *The load-bearing condition of the load-bearing paper was never read.*
- **Crawford-Sobel** and **Chakraborty-Harbaugh** came from **MIT OpenCourseWare lecture notes** — a
  teaching artefact standing in for primary literature.
- **Jin/Luca/Martin** came from an **NBER working-paper revision**, not the published version.

**This is not a one-sided gap.** The sources that would have *cut against* the convenient thesis
failed too:

- **Chakraborty-Harbaugh** would have shown a seller with state-independent preferences — literally
  one who profits regardless of quality — *can* credibly transmit information via **costless
  comparative claims** when the state is multidimensional. A four-column
  measured/calculated/AI-estimated/not-claimed table is exactly such a comparative statement, so
  *"costless therefore worthless"* does not follow. **Its binding constraint is the interesting
  part: credibility requires the honest page to genuinely cost sales in some states.**
- **Jin/Luca/Martin** would have shown unraveling fails empirically — receivers do **not** punish
  non-disclosure, so honesty does not self-reward and rivals rationally keep quoting unvalidated
  watts.
- **Holland** would have shown certification is sought only where buyers **trust the regime and
  distrust the producer** — see Finding 4.

**Consequence, binding on this document:** the most interesting question in the brief — *is a
published limitations page cheap talk, while validation data is a separating signal?* — is **open**.
Any answer is reasoning from unverified secondary sources. It is labelled as such throughout and
must not be cited as a finding.

---

## E. Finding 4 — Unity may *substitute* for validation, not stack with it

**Confidence: low — unverified, and flagged as the most interesting unexplored thread.**

The intuition says: be an embedded local founder (Cialdini's *unity*) **and** do the validation work.
Two credibility assets, stacked.

Holland's (refuted-as-stated, therefore unverified) line predicts the opposite: **certification is
sought only where buyers trust the regime AND distrust the producer.** A founder personally embedded
in the Portuguese paddling community may create precisely the condition under which **validation
spend does not pay** — because the coach already trusts *you*, and no certifying regime exists in
this sport for them to trust instead.

If that holds, frameworks 2 and 7 of the brief are **in tension, not in sequence**. Unity and costly
signalling would be substitutes competing for the same budget, and the "do the validation" advice
would be wrong *for your specific situation* while remaining right in general.

This is unverified and stated as a question, not an answer — but it is the thread most likely to
change what you actually do, because it bears directly on whether to spend scarce pre-launch money
on a validation study at all.

---

## F. Finding 5 — The differentiator is one merge from existing

**Confidence: high.** Directly measured against live HTML on 17 July 2026.

Live at review time: HTTP 200, 43,157 bytes · **zero occurrences of `id="trust"`** — the section has
never been served to a visitor · `"GDPR-compliant"` live · exactly **3 × `href="#"`** live · no
analytics vendor string · `/sitemap.xml` → **404**. Live section ids are only: `top`, `coach`,
`observes`, `loop`, `waitlist`.

**The Proof section is worse than the brief described.** Its heading *"Real sessions. Real coaching
output."* appears **nowhere** in the live HTML. It does not render an empty section — it renders
**nothing at all, not even a heading.** The page's one promise of evidence evaporates silently.

**The exchange, verified:** 6 user-facing fields (name, email, role, organisation, message, consent)
buy four restatements of "a newsletter".

> **Every hour spent arguing whether honesty is a moat is spent on a section that costs one merge to
> ship and that no visitor has ever seen.**

**Status: PR #5** (`feat/restore-trust-and-instrumentation`) renders Trust after Problem, drops the
GDPR claim, removes the dead links, wires analytics, adds the sitemap. Unmerged at the time of
writing.

---

## G. Theory applied — explicitly reasoning, not evidence

Zero framework claims survived verification, so this section is **argument you may reject**, not
sourced finding. It is kept because the question asked for it, and marked so it cannot be mistaken
for evidence.

**Schwartz — awareness & sophistication.** *"See where performance starts to fade"* names no
category. It could head a page for a heart-rate strap or a psychology consultancy. In a category
where rivals compete on watts and force curves (sophistication L3–4), theory prescribes a
**mechanism-led** claim — *how* you know, not *what* you feel. You have a mechanism nobody else has
(boat motion + body movement, athlete-relative) and the hero delegates it to a 36-word subhead. The
better line already exists in your own README: **"Coach the athlete, not the average."**

**Dunford — positioning.** The defensible position is the intersection of four things, and the
research changes one clause of it: *the only system built specifically for sprint kayak and canoe
that measures the boat and the body together, judges each athlete against their own recent work, and
publishes the repeatability of the changes it reports.* That last clause is now the differentiator —
not "honest claims", which anyone can write, but **a number nobody else has published.**

**StoryBrand — CTA.** With no pilot capacity, "Join the waitlist" is the truthful CTA and should
stay transitional. The fix is the **exchange**, not the verb.

**The form-length tension, unresolved on purpose.** NN/g: every field you cut raises conversion.
Superhuman: a mandatory 30-minute onboarding call, and a 450k list. Both are real. The reconciliation
is not "friction is good" or "friction is bad" — it is that **friction must buy something**. Six
fields buying a newsletter is bad friction. The evidence does not settle where your line sits.

---

## H. Where this diverges from the July audit

The research pass never read it. The divergences are therefore independent, and three of them matter.

| | July audit | This review |
|---|---|---|
| **The category's numbers** | *"independent testing found the market-leading power meter reads 32–48% low"* — treated as a fact about rivals | **Overreach.** The study disclaims its own reference as a criterion measure. Defensible: *"nobody has a ground truth to be wrong against"*, and relative disagreement (~25%) |
| **Honesty's status** | "a wedge, not a moat"; validation is "the only credibility asset a rival cannot simply write" | **Unverified.** Milgrom-Roberts never read past the abstract. And Finding 4 suggests validation may not pay *for an embedded founder* |
| **The hero** | "doesn't say what this is" — a clarity problem | **A claims problem.** It promises change detection with no repeatability evidence. The prior audit did not see this |
| Trust must ship | ✅ | ✅ *(agree — now merged in PR #5)* |
| No proof / no analytics / dead links | ✅ | ✅ *(agree — Proof is worse: renders nothing at all)* |

**The July audit's central move — "make the honesty table your weapon because rivals' numbers are
wrong" — does not survive.** The table is still the right thing to ship. The *reason* is different,
and the difference is not cosmetic: one framing accuses a competitor on evidence that does not
support it, and the other describes a category limitation using the category's own literature. Only
the second is safe to publish under your claims discipline.

---

## I. What to do, in order

**1 — Merge PR #5.** One merge. The section has never been seen. *(Done pending review.)*

**2 — Measure your own repeatability.** The sharpest open question, and self-inflicted: what is
OlympiaLabs' session-to-session TEM for the deltas it claims? Same athlete, same boat, repeated
sessions. This is a small study you can run in Viana do Castelo with the hardware you have. It
defends the sentence you already ship, and no competitor has published its equivalent.

**3 — Then rewrite the hero,** with a repeatability number behind it. Not before — a mechanism-led
hero without the number is the same overclaim in better prose.

**4 — Photograph the sensor on a boat.** Proof renders nothing. This is true today and requires no
finished product.

**5 — Fix the exchange, not the CTA.** Waitlist stays; make the six fields buy something real.

**6 — Do not spend on a ground-truth validation study yet.** Findings 2 and 4 both point away from
it: ground truth barely exists in this domain, and for an embedded founder the certification spend
may not pay. Repeatability first — it is cheaper and it defends what you actually claim.

---

## J. Method, confidence, and what I could not check

**Pipeline:** 5 angles → 26 sources → 123 claims → 25 verified (3-vote adversarial) → 1 confirmed,
24 killed → 5 findings after synthesis. 108 agents. The first run died at a spend limit with the
synthesis unrun; it was resumed from cache and completed 108/108.

**The evidence base is thin and asymmetric, and that is the headline caveat.** One claim survived,
resting on a **single 2021 study**. A brief spanning ten frameworks produced **zero** verified claims
outside sports measurement.

**Domain transfer is unestablished — the largest caveat.** Every verified number is sweep rowing on a
stationary trainer, n=15. Not kayak. Not on-water. Not an IMU.

**Time-sensitivity.** Holt et al. is five years old. Targeted searching surfaced no newer validation,
no contradiction, no erratum — but EmPower firmware may have changed. Category-level evidence plus
measurement theory; not a current spec sheet.

**Carried from the brief and NOT verified here:** the ~3,560 federated Portuguese canoeists figure ·
all competitor pricing (Vaaka $225, Motionize $249, NK SpeedCoach $419, Peach £2,530, CrewLAB
$200/team/month) · Ludum's positioning, logos and demo-gating · that no pilot capacity exists. **The
pricing, beachhead and JTBD reasoning rests on unverified inputs.**

**Open questions**, in order of how much they should bother you:

1. What is your own session-to-session repeatability for fade onset and stroke-level change?
2. Does the kayak/on-water/IMU case inherit the rowing TEM result at all — better or worse?
3. Is a self-published limitations page cheap talk, costly signal, or credible comparative claim?
   **Does the Trust section actually cost you anything?** If it is free to write, it is free to
   imitate.
4. Does unity substitute for validation rather than stack with it?
5. Does the user≠payer split survive ~3,560 declining federated canoeists — and do Ehrenberg-Bass's
   laws invert in an enumerable market? *Asked in the brief, unexamined by the evidence.*

### Sources — load-bearing only

| Confidence | Claim | Source |
|---|---|---|
| **Verified 3-0** | EmPower TEM 17.3–18.9% (stages), 26.0% (30-s); Peach 4.0–6.6%; Concept2 0.5–3.5%. Scale: ≥6.9% "extremely large". Benchmark: "Negligible … TEM values of <0.5%" | [Holt et al., *Front Physiol* 12:758015 (2021)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8633434/) |
| **Verified** | "The Reference System does not provide a criterion measure of power" | ibid. |
| **Verified** | EmPower ~25% below peers; "use the same device when comparing" | ibid. |
| **Verified** | Load-dependent bias: −32…−35% (stages) → −47.7% (30-s max) | ibid. |
| **Verified** | Live page: no `id="trust"`, 3 × `href="#"`, no analytics, sitemap 404, Proof renders nothing | olympialabs.eu, 17 Jul 2026 |
| **Unverified** | Cheap talk / costly signalling / "honesty as moat" | Milgrom-Roberts — **JSTOR 403, abstract only** |
| **Unverified** | Costless comparative claims can be informative (multidimensional state) | MIT OCW 14.126 lecture notes — teaching artefact |
| **Unverified** | Unraveling fails; receivers don't punish non-disclosure | Jin/Luca/Martin — NBER working-paper revision |
| **Unverified** | Certification pays only where buyers trust the regime and distrust the producer | Holland |
| **Not researched** | Every framework application in section G | — |
