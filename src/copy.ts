import { DEFAULT_LOCALE, type Locale } from './i18n'

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

const COPY_EN = {
  nav: {
    /** Keyed by `NAV_LINKS[].key` in config.ts. */
    links: {
      observes: 'What you can review',
      loop: 'How it works',
      coach: 'For clubs & coaches',
      trust: 'Why trust it',
    },
    signIn: 'Sign in',
    cta: 'Apply for a club pilot',
    ctaShort: 'Apply',
    locale: {
      label: 'Language',
      enShort: 'EN',
      enLong: 'English',
      ptShort: 'PT',
      ptLong: 'Portuguese (Portugal)',
    },
  },

  hero: {
    badge: 'Pilot clubs now onboarding',
    eyebrow: 'For sprint kayak & canoe',
    titleTop: 'Turn session data into',
    titleBottom: 'clearer coaching.',
    body: 'OlympiaLabs gives sprint kayak and canoe coaches a clearer post-session view of how each athlete moved, where a session changed and what to work on next. Boat motion, GPS, video and body movement, brought together in one review flow.',
    ctaPrimary: 'Apply for a club pilot',
    ctaSecondary: 'How coaches use it',
    highlights: [
      'Built around club coaching workflows',
      'Compared against each athlete’s own recent sessions',
      'Pilot clubs supported directly by our team',
    ],
    panel: {
      eyebrow: 'Why clubs are piloting it',
      title: 'A fuller session review that still leaves the coach in charge.',
      points: [
        {
          title: 'See more than split times',
          body: 'Review balance, stability and consistency alongside video and GPS.',
        },
        {
          title: 'Keep context athlete by athlete',
          body: 'Every session is measured against that paddler’s own recent work.',
        },
        {
          title: 'Stay coach-led',
          body: 'Findings arrive with the numbers behind them before any coaching decision is made.',
        },
      ],
    },
    signal: {
      aria: 'Illustration of a boat-motion trace recorded by the sensor',
      readouts: [
        { n: '6', t: ' axes' },
        { n: '833', t: ' Hz' },
      ],
      caption: 'Illustrative signal — based on the boat-motion trace used to detect strokes.',
    },
  },

  stats: {
    label: 'Why clubs pay attention',
    eyebrow: 'Why clubs pay attention',
    title: 'A coaching tool, not another dashboard.',
    body: 'OlympiaLabs is designed to earn time in the weekly workflow: faster review, better athlete context and clear visibility into what changed.',
    items: [
      {
        tag: 'Faster reviews',
        title: 'Find the important shifts sooner',
        body: 'Bring boat movement, video, GPS and session context into one place after training.',
      },
      {
        tag: 'Athlete context',
        title: 'Measure progress one athlete at a time',
        body: 'Compare today with that athlete’s own recent baseline instead of a borrowed benchmark.',
      },
      {
        tag: 'Coach confidence',
        title: 'Keep evidence attached to the finding',
        body: 'The platform surfaces conclusions with the numbers that produced them still in view.',
      },
      {
        tag: 'Pilot support',
        title: 'Start with guided onboarding',
        body: 'Pilot clubs work directly with OlympiaLabs on setup, feedback and what comes next.',
      },
    ],
  },

  proof: {
    eyebrow: 'See it working',
    title: 'The product, in real training.',
    body: 'Real kit, real sessions and real coach output — not renders, mock-ups or speculative screens.',
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
    eyebrow: 'The coaching gap',
    title: 'When performance dips, split times rarely explain why.',
    body: 'A slower interval tells you something changed. It does not tell you whether one side faded, whether the boat got less settled as fatigue built, or whether that pattern is normal for this athlete. That missing context is where coaches spend their time.',
  },

  loop: {
    eyebrow: 'How it works',
    title: 'A simple path from capture to coaching.',
    steps: [
      {
        n: '01',
        name: 'Capture',
        kind: 'On the water',
        body: 'The athlete records the session with the boat sensor and phone. OlympiaLabs keeps the boat motion, GPS, video and body movement aligned for review afterwards.',
      },
      {
        n: '02',
        name: 'Compare',
        kind: 'Against recent work',
        body: 'Each session is read against the athlete’s own recent sessions, so the starting point is their normal, not a borrowed norm.',
      },
      {
        n: '03',
        name: 'Explain',
        kind: 'Coach-ready output',
        body: 'Statistics are calculated in code. AI helps phrase and rank the findings, but it does not invent the numbers inside them.',
      },
      {
        n: '04',
        name: 'Decide',
        kind: 'Coach-led',
        body: 'The coach reviews the findings with the evidence attached and decides what matters for the next session.',
      },
    ],
    footLine: 'Each new session extends the athlete’s recent baseline',
    footNote: 'That baseline is a rolling view of recent work, not a model claiming to have learned the athlete.',
  },

  observes: {
    eyebrow: 'What you can review',
    title: 'A fuller picture of each session.',
    items: [
      {
        motif: 'boat',
        tag: 'Boat',
        title: 'How the boat behaves',
        body: 'OlympiaLabs records the hull’s acceleration and rotation on six axes, so pitch, roll and balance can be reviewed stroke by stroke.',
      },
      {
        motif: 'body',
        tag: 'Body',
        title: 'How the athlete moves',
        body: 'The phone camera captures body movement through the session, with joint range of motion worked out afterwards in the cloud.',
      },
      {
        motif: 'session',
        tag: 'Session',
        title: 'Everything on one timeline',
        body: 'Motion, GPS and video stay on one timeline, so the moment something changed is easy to inspect.',
      },
      {
        motif: 'history',
        tag: 'History',
        title: 'How today compares to them',
        body: 'Each session sits against the athlete’s own recent work to show what truly moved for them.',
      },
    ],
  },

  coach: {
    eyebrow: 'For clubs and coaches',
    title: 'Review faster. Decide with more confidence.',
    body: 'OlympiaLabs is built around the questions coaches already ask after training, while keeping the evidence visible so decisions stay coach-led.',
    questionsLabel: 'Questions it’s built to help answer',
    questions: [
      'When in the session did technique start to slip?',
      'What changed between two sessions that were meant to feel the same?',
      'Is this asymmetry persistent, or was it one bad day?',
      'Is the athlete getting more consistent, or only faster?',
      'What is the next coaching point worth addressing?',
    ],
    points: [
      {
        tag: 'Coach-led',
        title: 'Support, not autopilot',
        body: 'Findings arrive as proposals with the numbers attached. Use them, edit them or ignore them.',
      },
      {
        tag: 'Efficient',
        title: 'Spend less time hunting through charts',
        body: 'The platform pulls meaningful changes to the surface so review time stays focused on athletes.',
      },
      {
        tag: 'Relevant',
        title: 'Benchmarked against the athlete, not a borrowed norm',
        body: 'Because sprint paddling lacks agreed technique norms, OlympiaLabs compares each athlete to their own recent sessions instead.',
      },
      {
        tag: 'Private',
        title: 'Ready for European clubs',
        body: 'Health and location data are handled to European standards. AI coaching stays off until the athlete switches it on, and the platform still works without it.',
      },
    ],
  },

  pieces: {
    eyebrow: 'What clubs use',
    title: 'Everything needed for the workflow.',
    items: [
      {
        name: 'OlympiaLabs Sensor',
        where: 'On the boat',
        body: 'Mounted on the boat to capture high-rate hull motion throughout the session.',
      },
      {
        name: 'OlympiaLabs App',
        where: 'On the phone',
        body: 'Used by the athlete to record GPS, video and body movement, then sync everything after landing.',
      },
      {
        name: 'Coach Platform',
        where: 'In the browser',
        body: 'Where coaches review sessions, findings and athlete history for the squad in one place.',
      },
    ],
  },

  trust: {
    eyebrow: 'Why coaches trust it',
    title: 'Clear about what it does, and what it doesn’t.',
    body: 'OlympiaLabs is live and being tested in real training. Until the pilot work is complete, the honest promise is simple: every number shown on the platform should have a clear source behind it.',
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
    closing: 'If we can’t point to where a number came from, we won’t market it as if we can.',
  },

  pilot: {
    eyebrow: 'Pilot clubs',
    title: 'Bring OlympiaLabs into your training group.',
    body: 'We’re onboarding a small number of clubs and coaches to test OlympiaLabs in real training, refine the review flow and learn what matters most in day-to-day coaching.',
    benefitsLabel: 'Pilot clubs receive',
    benefits: [
      'Supported onboarding for coaches and athletes',
      'Early access to the sensor and platform',
      'Session analysis across your training group',
      'Direct feedback into the product team',
      'Priority access as OlympiaLabs rolls out',
    ],
    note: 'There’s no obligation to adopt it commercially afterwards. We’d rather prove the value in your environment first.',
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
      fineprint: 'Limited cohort · GDPR-compliant',
      errorGeneric: 'Something went wrong. Please try again.',
      errorNetwork: 'Network error — please check your connection and try again.',
      errorLocal: 'Netlify handles submissions — this will work once the site is deployed.',
      successTitle: 'Pilot application received.',
      successBody: 'Thanks — we’ll review it properly and come back to you with next steps.',
    },
  },

  footer: {
    blurb: 'Session review for sprint kayak and canoe, built around how each athlete actually moves.',
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
    languageSwitch: 'Language switch',
  },
}

type Copy = typeof COPY_EN

const COPY_PT: Copy = {
  nav: {
    links: {
      observes: 'O que pode rever',
      loop: 'Como funciona',
      coach: 'Para clubes e treinadores',
      trust: 'Porque confiar',
    },
    signIn: 'Entrar',
    cta: 'Candidatar clube piloto',
    ctaShort: 'Candidatar',
    locale: {
      label: 'Idioma',
      enShort: 'EN',
      enLong: 'Inglês',
      ptShort: 'PT',
      ptLong: 'Português (Portugal)',
    },
  },

  hero: {
    badge: 'Candidaturas abertas a clubes piloto',
    eyebrow: 'Para kayak e canoa de velocidade',
    titleTop: 'Transforme dados de treino em',
    titleBottom: 'decisões mais claras.',
    body: 'A OlympiaLabs dá aos treinadores de kayak e canoa de velocidade uma visão pós-sessão mais clara sobre como cada atleta se moveu, onde a sessão mudou e em que vale a pena trabalhar a seguir. Movimento do barco, GPS, vídeo e movimento corporal, reunidos num só fluxo de revisão.',
    ctaPrimary: 'Candidatar clube piloto',
    ctaSecondary: 'Como os treinadores a usam',
    highlights: [
      'Pensada para o trabalho diário dos clubes',
      'Compara cada atleta com as suas sessões recentes',
      'Clubes piloto acompanhados diretamente pela nossa equipa',
    ],
    panel: {
      eyebrow: 'Porque é que os clubes a estão a testar',
      title: 'Uma revisão de sessão mais completa, sem tirar o controlo ao treinador.',
      points: [
        {
          title: 'Veja mais do que tempos parciais',
          body: 'Reveja equilíbrio, estabilidade e consistência a par do vídeo e do GPS.',
        },
        {
          title: 'Mantenha o contexto atleta a atleta',
          body: 'Cada sessão é medida contra o trabalho recente desse próprio atleta.',
        },
        {
          title: 'O treinador continua no comando',
          body: 'As conclusões chegam com os números por trás delas antes de qualquer decisão técnica.',
        },
      ],
    },
    signal: {
      aria: 'Ilustração de um traço de movimento do barco registado pelo sensor',
      readouts: [
        { n: '6', t: ' eixos' },
        { n: '833', t: ' Hz' },
      ],
      caption: 'Sinal ilustrativo — baseado no traço de movimento do barco usado para detetar pagadas.',
    },
  },

  stats: {
    label: 'Porque é que os clubes prestam atenção',
    eyebrow: 'Porque é que os clubes prestam atenção',
    title: 'Uma ferramenta de treino, não apenas mais um painel.',
    body: 'A OlympiaLabs foi desenhada para ganhar espaço no fluxo de trabalho semanal: revisão mais rápida, melhor contexto por atleta e visibilidade clara do que mudou.',
    items: [
      {
        tag: 'Revisão rápida',
        title: 'Encontre mais cedo as mudanças importantes',
        body: 'Reúna movimento do barco, vídeo, GPS e contexto da sessão num só lugar depois do treino.',
      },
      {
        tag: 'Contexto por atleta',
        title: 'Meça a evolução atleta a atleta',
        body: 'Compare o dia de hoje com a referência recente desse atleta, e não com uma referência externa.',
      },
      {
        tag: 'Confiança',
        title: 'Mantenha a evidência ligada à conclusão',
        body: 'A plataforma mostra as conclusões juntamente com os números que as sustentam.',
      },
      {
        tag: 'Acompanhamento piloto',
        title: 'Comece com integração acompanhada',
        body: 'Os clubes piloto trabalham diretamente com a OlympiaLabs na configuração, no feedback e no que vem a seguir.',
      },
    ],
  },

  proof: {
    eyebrow: 'Veja a funcionar',
    title: 'O produto, em treino real.',
    body: 'Equipamento real, sessões reais e o ecrã que o treinador abre a seguir — não renderizações, maquetas ou ecrãs especulativos.',
    captions: {
      sensor: {
        caption: 'O sensor, montado no barco.',
        alt: 'O sensor OlympiaLabs fixo ao convés de um kayak de velocidade.',
      },
      session: {
        caption: 'Uma sessão, tal como o atleta a regista.',
        alt: 'Um atleta a remar enquanto o telemóvel grava a sessão.',
      },
      pose: {
        caption: 'Movimento corporal, captado pela câmara do telemóvel.',
        alt: 'Pontos de movimento corporal acompanhados sobre vídeo de um atleta.',
      },
      platform: {
        caption: 'A sessão, tal como o treinador a abre depois.',
        alt: 'A plataforma OlympiaLabs para treinadores a mostrar uma sessão gravada.',
      },
      finding: {
        caption: 'Uma conclusão, exatamente como foi gerada — com números incluídos.',
        alt: 'Uma conclusão de treino apresentada com as estatísticas que a sustentam.',
      },
    },
  },

  problem: {
    eyebrow: 'A lacuna no treino',
    title: 'Quando o rendimento desce, os tempos parciais raramente explicam porquê.',
    body: 'Um intervalo mais lento diz-lhe que algo mudou. Não diz se um lado começou a ceder, se o barco ficou menos assente com a fadiga, ou se esse padrão é normal para este atleta. É nesse vazio que o treinador gasta tempo.',
  },

  loop: {
    eyebrow: 'Como funciona',
    title: 'Um caminho simples do registo à decisão técnica.',
    steps: [
      {
        n: '01',
        name: 'Registar',
        kind: 'Na água',
        body: 'O atleta regista a sessão com o sensor no barco e o telemóvel. A OlympiaLabs mantém movimento do barco, GPS, vídeo e movimento corporal alinhados para revisão posterior.',
      },
      {
        n: '02',
        name: 'Comparar',
        kind: 'Face ao trabalho recente',
        body: 'Cada sessão é lida contra as sessões recentes do próprio atleta, para que o ponto de partida seja o seu normal e não uma norma importada.',
      },
      {
        n: '03',
        name: 'Explicar',
        kind: 'Leitura pronta para o treinador',
        body: 'As estatísticas são calculadas em código. A IA ajuda a redigir e priorizar as conclusões, mas não inventa os números que lá aparecem.',
      },
      {
        n: '04',
        name: 'Decidir',
        kind: 'Treinador no comando',
        body: 'O treinador revê as conclusões com a evidência associada e decide o que interessa para a sessão seguinte.',
      },
    ],
    footLine: 'Cada nova sessão alarga a base recente do atleta',
    footNote: 'Essa base é uma janela móvel do trabalho recente, não um modelo que afirme ter aprendido o atleta.',
  },

  observes: {
    eyebrow: 'O que pode rever',
    title: 'Uma imagem mais completa de cada sessão.',
    items: [
      {
        motif: 'boat',
        tag: 'Barco',
        title: 'Como o barco se comporta',
        body: 'A OlympiaLabs regista a aceleração e a rotação do casco em seis eixos, para rever como o barco assenta e oscila, pagada a pagada.',
      },
      {
        motif: 'body',
        tag: 'Corpo',
        title: 'Como o atleta se move',
        body: 'A câmara do telemóvel capta o movimento corporal durante a sessão, com a amplitude articular calculada depois na nuvem.',
      },
      {
        motif: 'session',
        tag: 'Sessão',
        title: 'Tudo na mesma linha temporal',
        body: 'Movimento, GPS e vídeo ficam na mesma linha temporal, para que o momento em que algo mudou seja simples de inspecionar.',
      },
      {
        motif: 'history',
        tag: 'Histórico',
        title: 'Como o treino de hoje se compara com esse atleta',
        body: 'Cada sessão é colocada ao lado do trabalho recente do atleta para mostrar o que realmente mudou para ele.',
      },
    ],
  },

  coach: {
    eyebrow: 'Para clubes e treinadores',
    title: 'Reveja mais depressa. Decida com mais confiança.',
    body: 'A OlympiaLabs foi construída em torno das perguntas que os treinadores já fazem depois do treino, mantendo a evidência visível para que a decisão continue a ser humana.',
    questionsLabel: 'Perguntas a que foi pensada para responder',
    questions: [
      'Em que momento da sessão é que a técnica começou a cair?',
      'O que mudou entre duas sessões que deviam ter sido semelhantes?',
      'Esta assimetria é persistente ou foi apenas um mau dia?',
      'O atleta está a ficar mais consistente, ou apenas mais rápido?',
      'Qual é o próximo ponto técnico que vale a pena trabalhar?',
    ],
    points: [
      {
        tag: 'Treinador no comando',
        title: 'Apoio, não piloto automático',
        body: 'As conclusões chegam como propostas com os números anexados. Pode usá-las, ajustá-las ou ignorá-las.',
      },
      {
        tag: 'Eficiente',
        title: 'Passe menos tempo à procura em gráficos',
        body: 'A plataforma traz as mudanças mais relevantes à superfície, para que o tempo de revisão continue focado nos atletas.',
      },
      {
        tag: 'Relevante',
        title: 'Comparado com o atleta, não com uma norma emprestada',
        body: 'Como a canoagem de velocidade não tem normas técnicas consensuais, a OlympiaLabs compara cada atleta com as suas próprias sessões recentes.',
      },
      {
        tag: 'Privado',
        title: 'Preparada para clubes europeus',
        body: 'Dados de saúde e localização são tratados segundo padrões europeus. A IA de apoio ao treino fica desligada até o atleta a ativar, e a plataforma continua a funcionar sem ela.',
      },
    ],
  },

  pieces: {
    eyebrow: 'O que o clube usa',
    title: 'Tudo o que é preciso para o fluxo de trabalho.',
    items: [
      {
        name: 'Sensor OlympiaLabs',
        where: 'No barco',
        body: 'Montado no barco para captar o movimento do casco em alta frequência ao longo da sessão.',
      },
      {
        name: 'App OlympiaLabs',
        where: 'No telemóvel',
        body: 'Usada pelo atleta para registar GPS, vídeo e movimento corporal, e sincronizar tudo depois de chegar a terra.',
      },
      {
        name: 'Plataforma do treinador',
        where: 'No navegador',
        body: 'Onde os treinadores revêm sessões, conclusões e histórico dos atletas num só lugar.',
      },
    ],
  },

  trust: {
    eyebrow: 'Porque é que os treinadores confiam',
    title: 'Clara sobre o que faz, e sobre o que não faz.',
    body: 'A OlympiaLabs está ativa e a ser testada em treino real. Até o trabalho piloto estar concluído, a promessa honesta é simples: cada número mostrado na plataforma deve ter uma origem clara por trás.',
    columns: [
      {
        kind: 'Medido',
        note: 'Captado fisicamente',
        items: [
          'Aceleração e rotação, três eixos, 833 Hz — a partir do sensor no barco',
          'Posição GPS e velocidade, cerca de uma vez por segundo — a partir do telemóvel',
          'Vídeo e pontos de movimento corporal — a partir da câmara do telemóvel',
        ],
      },
      {
        kind: 'Calculado',
        note: 'Calculado em código, sem ML',
        items: [
          'Deteção, contagem e taxa de pagadas',
          'Equilíbrio esquerda / direita',
          'Inclinação longitudinal e lateral do barco',
          'Consistência da taxa de pagada',
          'Velocidade, distância e ritmo — derivados do GPS, não do sensor',
        ],
      },
      {
        kind: 'Estimado por IA',
        note: 'Onde entram modelos',
        items: [
          'Pontos corporais obtidos a partir do vídeo, e a amplitude articular derivada deles — analisados depois da sessão, não em direto',
          'A redação e a priorização das conclusões. Os números dentro delas são calculados, nunca gerados',
        ],
      },
      {
        kind: 'Não afirmado',
        note: 'O que a OlympiaLabs não diz fazer',
        items: [
          'Sem força, potência ou watts — não existe sensor de força no barco',
          'Sem frequência cardíaca',
          'Sem rumo ou direção — um sensor de seis eixos não consegue mantê-los',
          'Nada foi ainda validado contra uma medição de referência. É para isso que serve o piloto',
        ],
      },
    ],
    closing: 'Se não conseguimos apontar a origem de um número, não o vamos vender como se conseguíssemos.',
  },

  pilot: {
    eyebrow: 'Clubes piloto',
    title: 'Leve a OlympiaLabs para o seu grupo de treino.',
    body: 'Estamos a integrar um pequeno número de clubes e treinadores para testar a OlympiaLabs em treino real, afinar o fluxo de revisão e perceber o que mais conta no dia a dia do treino.',
    benefitsLabel: 'Os clubes piloto recebem',
    benefits: [
      'Integração acompanhada para treinadores e atletas',
      'Acesso antecipado ao sensor e à plataforma',
      'Análise de sessões do seu grupo de treino',
      'Contacto direto com a equipa de produto',
      'Acesso prioritário à medida que a OlympiaLabs avança',
    ],
    note: 'Não há obrigação de adoção comercial depois. Preferimos primeiro provar o valor no seu contexto.',
    form: {
      name: { label: 'Nome', placeholder: 'Ana Silva' },
      email: { label: 'Email', placeholder: 'you@club.com' },
      club: { label: 'Clube', placeholder: 'Clube Náutico de Viana' },
      role: {
        label: 'Função',
        options: ['Treinador', 'Atleta', 'Direção do clube', 'Outra'],
      },
      athletes: { label: 'Atletas envolvidos (aprox.)', placeholder: '8' },
      message: { label: 'Algo que devamos saber? (opcional)', placeholder: 'O que gostaria de obter de um piloto.' },
      consent: 'Quero receber emails sobre o programa piloto da OlympiaLabs. Posso cancelar a qualquer momento.',
      submit: 'Candidatar clube piloto',
      submitting: 'A enviar…',
      fineprint: 'Vagas limitadas · RGPD',
      errorGeneric: 'Algo correu mal. Tente novamente.',
      errorNetwork: 'Erro de rede — verifique a ligação e tente novamente.',
      errorLocal: 'O Netlify trata das submissões — isto funcionará quando o site estiver publicado.',
      successTitle: 'Candidatura recebida.',
      successBody: 'Obrigado — vamos rever o pedido com atenção e responder com os próximos passos.',
    },
  },

  footer: {
    blurb: 'Revisão de sessões para kayak e canoa de velocidade, construída em torno da forma como cada atleta realmente se move.',
    columns: {
      product: 'Produto',
      company: 'Empresa',
      legal: 'Legal',
    },
    links: {
      about: 'Sobre',
      contact: 'Contacto',
      privacy: 'Privacidade',
      terms: 'Termos',
    },
    madeIn: 'Feito em',
  },

  a11y: {
    skipToContent: 'Saltar para o conteúdo',
    primaryNav: 'Principal',
    footerNav: 'Rodapé',
    languageSwitch: 'Seleção de idioma',
  },
}

export const COPY: Record<Locale, Copy> = {
  en: COPY_EN,
  pt: COPY_PT,
}

export function getCopy(locale: Locale = DEFAULT_LOCALE): Copy {
  return COPY[locale]
}
