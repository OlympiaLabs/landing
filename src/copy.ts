/**
 * Every user-facing string on the site, in one place.
 *
 * Components import from here and hold no literal prose, so adding Portuguese
 * is a translation of this file rather than a refactor of the markup.
 *
 * ---------------------------------------------------------------------------
 * CLAIMS DISCIPLINE — read before editing any line in this file.
 *
 * Copy here is bounded by what the system actually does. The page's whole
 * argument is that we say where every number comes from, so a loose line here
 * costs more than it would on an ordinary marketing site.
 *
 * MEASURED   acceleration + angular velocity, 3-axis, 833 Hz (LSM6DS3TR-C,
 *            ±4 g / ±500 dps) · GPS position + speed ~1 Hz (phone) · video +
 *            2D pose landmarks (phone)
 * CALCULATED stroke detect/count/rate, L/R balance, pitch + roll, stroke-rate
 *            consistency, stability score — deterministic, no ML. Speed,
 *            distance, pace and distance-per-stroke are GPS-derived, NOT
 *            sensor-derived.
 * ESTIMATED  pose landmarks → joint ROM (offline, cloud) · the phrasing and
 *            ranking of findings (the numbers in them are calculated).
 *
 * Do NOT write: "digital twin", anything that learns / evolves / gets sharper
 * (the baseline is a 10-session rolling average, not a model); force, power,
 * watts, load (no force sensor — "intensity" is peak gyro deg/s); heart rate
 * (not implemented anywhere); stroke phases catch/drive/exit/recovery
 * (research code only, not in the product); heading or yaw (drifts freely with
 * no magnetometer — measured 108° off); sensor fusion (evaluated, rejected);
 * real-time technique cues (pose is capture-only, analysed offline); validated
 * / proven / accurate-to-X (no ground-truth validation exists yet); 3D joint
 * angles or trunk rotation (default backend is 2D; trunk rotation is filtered
 * out); "state-of-the-art AI".
 * ---------------------------------------------------------------------------
 */

export const COPY = {
  nav: {
    /** Keyed by `NAV_LINKS[].key` in config.ts. */
    links: {
      observes: 'What it sees',
      loop: 'How it works',
      coach: 'For coaches',
      trust: 'What’s real',
    },
    signIn: 'Sign in',
    cta: 'Apply for a club pilot',
    /**
     * Phone-width label for the nav button only. The full ask doesn't fit
     * beside the lockup below ~640px and wraps out of its fixed-height button;
     * the hero CTA sits directly underneath carrying the whole phrase, so the
     * ask still reads in full on first screen.
     */
    ctaShort: 'Apply',
  },

  hero: {
    eyebrow: 'Sprint kayak & canoe · Built first for paddling',
    titleTop: 'Coach the athlete,',
    titleBottom: 'not the average.',
    body: 'OlympiaLabs measures every session against the athlete’s own history — not a table of averages that never met them. Boat motion at 833 Hz, GPS, video and body movement, read together.',
    ctaPrimary: 'Apply for a club pilot',
    ctaSecondary: 'See what it measures',
    /**
     * The hero figure is a synthetic waveform, so it says so. It may carry the
     * two readouts that are properties of the hardware (six axes, 833 Hz) and
     * no derived values — a fabricated "symmetry 96%" on this page of all
     * pages would undo the argument the rest of it is making.
     */
    signal: {
      aria: 'Illustration of the gyroscope roll-rate signal the sensor records',
      /** `n` renders in ink, `t` in muted — split so the numeral can be picked out. */
      readouts: [
        { n: '6', t: '-axis imu' },
        { n: '833', t: ' Hz' },
      ],
      caption: 'Illustrative — gyroscope roll-rate, the signal used to detect strokes.',
    },
  },

  stats: {
    label: 'At a glance',
    items: [
      { v: '833 Hz', l: 'Six-axis boat motion' },
      { v: 'L / R', l: 'Balance, stroke by stroke' },
      { v: '0', l: 'Numbers invented by AI' },
      { v: 'Pilot', l: 'Validating with clubs now' },
    ],
  },

  proof: {
    eyebrow: 'See it working',
    title: 'The system, in real conditions.',
    body: 'No renders and no mock-ups — the sensor on a real boat, a real session, and the output a coach actually opens afterwards.',
    /**
     * Keyed by `PROOF_MEDIA[].key` in config.ts. Captions are written ahead of
     * the footage: each one states plainly what the viewer is looking at, so
     * nothing here implies a capability the clip doesn't show.
     */
    captions: {
      sensor: {
        caption: 'The sensor, mounted on the boat.',
        alt: 'The OlympiaLabs sensor fixed to the deck of a sprint kayak.',
      },
      session: {
        caption: 'A session, as the athlete records it.',
        alt: 'An athlete paddling while the phone records the session.',
      },
      pose: {
        caption: 'Body movement, captured from the phone camera.',
        alt: 'Body-movement landmarks tracked over video of a paddler.',
      },
      platform: {
        caption: 'The session, as the coach opens it afterwards.',
        alt: 'The OlympiaLabs coach platform showing a recorded session.',
      },
      finding: {
        caption: 'A finding, exactly as it was generated — numbers included.',
        alt: 'A generated coaching finding shown with the statistics behind it.',
      },
    },
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Speed and stroke rate tell you what happened. They don’t tell you how the athlete moved.',
    body: 'A split says the session was slower. It doesn’t say the left side started giving way in the third interval, or that the boat got less settled as the athlete tired — or whether any of that is unusual for this particular paddler. That gap is where coaching decisions actually get made.',
  },

  loop: {
    eyebrow: 'How it works',
    title: 'Capture. Compare. Explain. Decide.',
    steps: [
      {
        n: '01',
        name: 'Capture',
        kind: 'On the water',
        body: 'The sensor records the boat’s motion at 833 Hz. The phone adds GPS, video and body movement. Everything is kept at full rate — nothing is thrown away or averaged on the way in.',
      },
      {
        n: '02',
        name: 'Compare',
        kind: 'Against themselves',
        body: 'Each session is measured against the athlete’s own recent sessions. There are no published norms for kayak technique, so OlympiaLabs doesn’t invent one to rank people against.',
      },
      {
        n: '03',
        name: 'Explain',
        kind: 'In plain language',
        body: 'Every statistic is computed in code. The AI puts it into words and decides what matters most — it never invents a number, and it never sees raw athlete data.',
      },
      {
        n: '04',
        name: 'Decide',
        kind: 'The coach’s call',
        body: 'Findings reach the coach with the numbers that produced them attached. Accept them, adjust them, or throw them out.',
      },
    ],
    footLine: 'Every session then joins the baseline the next one is measured against',
    footNote: 'That’s the loop: a rolling comparison against the athlete’s own recent work — not a model that claims to have learned them.',
  },

  observes: {
    eyebrow: 'What it observes',
    title: 'The boat and the athlete, read together.',
    items: [
      {
        motif: 'boat',
        tag: 'Boat',
        title: 'How the boat moves',
        body: 'Acceleration and rotation on six axes, straight from the hull, 833 times a second. Pitch and roll — how the boat sits and how much it rocks — stroke by stroke.',
      },
      {
        motif: 'body',
        tag: 'Body',
        title: 'How the athlete moves',
        body: 'The phone camera captures body movement through the session. Joint range of motion is worked out afterwards in the cloud — no motion-capture lab, no markers, no second operator.',
      },
      {
        motif: 'session',
        tag: 'Session',
        title: 'Everything on one timeline',
        body: 'Motion, the GPS track and the video, aligned to the same clock. Scrub to the moment something changed and all three move with you.',
      },
      {
        motif: 'history',
        tag: 'History',
        title: 'How today compares to them',
        body: 'Each session sits against the athlete’s own recent work — their balance, their cadence, their consistency. Change is measured from where they actually were.',
      },
    ],
  },

  coach: {
    eyebrow: 'For coaches',
    title: 'From numbers to decisions.',
    body: 'The platform is built around the questions a coach actually asks — and it shows its working, so you can disagree with it.',
    questionsLabel: 'Questions it’s built to help answer',
    questions: [
      'When in the session did technique start to go?',
      'What changed between two sessions that should have been the same?',
      'Is this asymmetry persistent, or was it one bad day?',
      'Is their consistency improving, or only their splits?',
      'Which technical point is worth working on next?',
    ],
    points: [
      {
        tag: 'Coach-led',
        title: 'The coach stays in command',
        body: 'Findings are proposals, not instructions. Accept, adjust or discard them — with the numbers that produced them in plain sight.',
      },
      {
        tag: 'Focused',
        title: 'Fewer metrics, more signal',
        body: 'The platform surfaces what moved and where it moved, so review time goes on coaching instead of hunting through charts.',
      },
      {
        tag: 'Grounded',
        title: 'Compared to them, not to a norm',
        body: 'There are no published norms for kayak biomechanics. Rather than borrow one from another sport, every comparison is against the athlete’s own recent sessions.',
      },
      {
        tag: 'Private',
        title: 'GDPR-first, by design',
        body: 'Health and location data handled to European standards. AI coaching stays off until the athlete switches it on, and works without it.',
      },
    ],
  },

  pieces: {
    eyebrow: 'The pieces',
    title: 'Three parts, one workflow.',
    items: [
      {
        name: 'OlympiaLabs Sensor',
        where: 'On the boat',
        body: 'A compact six-axis sensor that records the hull’s motion at the source, 833 times a second.',
      },
      {
        name: 'OlympiaLabs App',
        where: 'On the phone',
        body: 'Records the session — GPS, video and body movement — and syncs it to the platform over WiFi when the athlete lands.',
      },
      {
        name: 'Coach Platform',
        where: 'In the browser',
        body: 'Sessions, findings, athlete history and workout planning, for the whole squad in one place.',
      },
    ],
  },

  trust: {
    eyebrow: 'What’s real',
    title: 'What we measure, what we calculate, and what we don’t claim.',
    body: 'The platform is built and running, and is now being validated with coaches and athletes in real training conditions. Until that work is done, the honest thing is to show exactly where every number comes from.',
    columns: [
      {
        kind: 'Measured',
        note: 'Physically sensed',
        items: [
          'Acceleration and rotation, three axes, 833 Hz — from the boat sensor',
          'GPS position and speed, about once a second — from the phone',
          'Video and body-movement landmarks — from the phone camera',
        ],
      },
      {
        kind: 'Calculated',
        note: 'Computed in code, no ML',
        items: [
          'Stroke detection, count and rate',
          'Left / right balance',
          'Boat pitch and roll',
          'Stroke-rate consistency',
          'Speed, distance and pace — derived from GPS, not from the sensor',
        ],
      },
      {
        kind: 'AI-estimated',
        note: 'Where models are involved',
        items: [
          'Body landmarks from video, and the joint range of motion drawn from them — analysed after the session, not live',
          'The wording and ranking of findings. The numbers inside them are calculated, never generated',
        ],
      },
      {
        kind: 'Not claimed',
        note: 'What OlympiaLabs does not do',
        items: [
          'No force, power or watts — there is no force sensor on the boat',
          'No heart rate',
          'No heading or direction — a six-axis sensor cannot hold one',
          'Nothing is validated against ground truth yet. That is what the pilot is for',
        ],
      },
    ],
    closing: 'If a number isn’t in the first two columns, we’re not going to tell you it is.',
  },

  pilot: {
    eyebrow: 'Pilot programme',
    title: 'Become an OlympiaLabs pilot club.',
    body: 'We’re working with a small number of clubs, coaches and athletes to find out whether this holds up in real training — whether the measurements repeat, whether the feedback is clear, and whether it survives contact with how coaching actually works.',
    benefitsLabel: 'Pilot clubs get',
    benefits: [
      'Early access to the sensor and the platform',
      'Analysis of your athletes’ sessions',
      'Technical and performance reports',
      'Direct support throughout the evaluation',
      'Real influence over what gets built next',
      'Priority access to what comes after',
    ],
    note: 'No obligation to adopt anything commercially afterwards. We’d rather build this around what you find than around what we assumed.',
    form: {
      name: { label: 'Your name', placeholder: 'Ana Silva' },
      email: { label: 'Email', placeholder: 'you@club.com' },
      club: { label: 'Club', placeholder: 'Clube Náutico de Viana' },
      role: {
        label: 'Your role',
        options: ['Coach', 'Athlete', 'Club director', 'Other'],
      },
      athletes: { label: 'Athletes involved (approx.)', placeholder: '8' },
      message: { label: 'Anything we should know? (optional)', placeholder: 'What you’d want to get out of a pilot.' },
      consent: 'Email me about the OlympiaLabs pilot programme. I can unsubscribe anytime.',
      submit: 'Apply for a club pilot',
      submitting: 'Sending…',
      fineprint: 'No spam · GDPR-compliant',
      errorGeneric: 'Something went wrong. Please try again.',
      errorNetwork: 'Network error — please check your connection and try again.',
      errorLocal: 'Netlify handles submissions — this will work once the site is deployed.',
      successTitle: 'Application received.',
      successBody: 'Thanks — we’ll read it properly and come back to you about next steps. Keep an eye on your inbox.',
    },
  },

  footer: {
    blurb: 'Session analysis for sprint kayak and canoe. Every athlete measured against their own history.',
    columns: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
    },
    links: {
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    madeIn: 'Made in',
  },

  a11y: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    footerNav: 'Footer',
  },
} as const
