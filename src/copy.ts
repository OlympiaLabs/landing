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
 * MEASURED   acceleration + angular velocity, high-rate 3-axis (LSM6DS3TR-C,
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
      coach: 'Coach benefits',
      observes: 'What it helps you spot',
      loop: 'How it fits',
      trust: 'Built on real data',
    },
    signIn: 'Sign in',
    cta: 'Join the waitlist',
    ctaShort: 'Join',
    locale: {
      label: 'Language',
      enShort: 'EN',
      enLong: 'English',
      ptShort: 'PT',
      ptLong: 'Portuguese (Portugal)',
    },
  },

  hero: {
    badge: 'Precision capture for coaches',
    eyebrow: 'For sprint kayak & canoe coaches',
    titleTop: 'See where performance',
    titleBottom: 'starts to fade.',
    body: 'OlympiaLabs combines precision boat-motion capture with body-movement analysis from phone video and athlete-specific session review so coaches can spot earlier signs of fatigue-related drift, see how technique changed, and coach the next session with more confidence.',
    ctaPrimary: 'Join the waitlist',
    ctaSecondary: 'See coach benefits',
    highlights: [
      'Boat motion and body movement analysed together',
      'Detect earlier signs of fatigue-related drift',
      'Clearer next technical exercises to do for stronger performance',
    ],
    panel: {
      eyebrow: 'What coaches get from it',
      title: 'Earlier signals. Clearer next steps.',
      points: [
        {
          title: 'Spot drift earlier',
          body: 'See where balance, stability and rhythm started to slip before the session summary hides the reason.',
        },
        {
          title: 'Focus the next correction',
          body: 'Bring the next correction to the surface without digging across multiple screens.',
        },
        {
          title: 'Keep it athlete-specific',
          body: 'Measure against that athlete’s own recent work, not a generic average.',
        },
      ],
    },
    signal: {
      eyebrow: 'Backed by high-rate boat-motion capture',
      aria: 'Illustration of boat-motion change highlighted by the sensor',
      readouts: [],
      caption: 'Illustration of the kind of boat-motion change the sensor helps coaches inspect after training.',
    },
  },

  stats: {
    label: 'Why coaches care',
    eyebrow: 'Why coaches care',
    title: 'Built to turn subtle session changes into stronger coaching calls.',
    body: 'OlympiaLabs is for clubs that want precision capture, earlier fatigue visibility and clearer technique priorities without adding friction to athletes.',
    items: [
      {
        tag: 'Boat + body view',
        title: 'See the boat and the athlete together',
        body: 'Review high-rate boat motion alongside body-movement analysis from phone video to understand technique changes with more context.',
      },
      {
        tag: 'Earlier fatigue cues',
        title: 'See where the session started to fade',
        body: 'Spot the moments when stability, rhythm or left-right balance began to drift inside the session.',
      },
      {
        tag: 'Technique priority',
        title: 'Coach the correction with the highest payoff',
        body: 'Surface the point most worth addressing next instead of guessing from the finish result.',
      },
      {
        tag: 'Athlete-specific context',
        title: 'Judge progress in the right context',
        body: 'Compare each session against that athlete’s recent work so good and bad days are easier to interpret.',
      },
    ],
  },

  proof: {
    eyebrow: 'Real performance review',
    title: 'Real sessions. Real coaching output.',
    body: 'The value is not a concept deck. It is the sensor on the boat, the athlete on video, the session on the water and the review a coach opens afterwards.',
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
    eyebrow: 'Why this matters',
    title: 'A split can tell you the session slowed down. It cannot tell you what to coach next.',
    body: 'By the time fatigue shows up in the result sheet, the technical reason is often hidden. Coaches need to see where rhythm, balance or stability started to break down, and whether that is normal for this athlete or a sign worth acting on.',
  },

  loop: {
    eyebrow: 'How it fits',
    title: 'Simple to run inside a coaching week.',
    steps: [
      {
        n: '01',
        name: 'Record',
        kind: 'On the water',
        body: 'The athlete records once. Sensor, GPS and video stay tied to the same session.',
      },
      {
        n: '02',
        name: 'Review',
        kind: 'One session view',
        body: 'Open the session after training and see the key moments in one aligned review flow.',
      },
      {
        n: '03',
        name: 'Prioritise',
        kind: 'What changed most',
        body: 'OlympiaLabs surfaces the changes most worth attention across balance, stability, consistency and movement.',
      },
      {
        n: '04',
        name: 'Coach',
        kind: 'Next action',
        body: 'Turn that review into a clearer next technical focus for the athlete.',
      },
    ],
    footLine: 'Built for fast post-session review',
    footNote: 'The point is not more screens. It is a clearer next coaching decision.',
  },

  observes: {
    eyebrow: 'What it helps you spot',
    title: 'The moments coaches usually miss in real time.',
    items: [
      {
        motif: 'boat',
        tag: 'Boat',
        title: 'Balance and boat stability',
        body: 'See how settled the boat stayed, how much it rocked and whether one side started to give way.',
      },
      {
        motif: 'body',
        tag: 'Body',
        title: 'Technique through the body',
        body: 'Review how the athlete moved through the session and how joint range changed.',
      },
      {
        motif: 'session',
        tag: 'Session',
        title: 'The exact turning point',
        body: 'Pinpoint when something changed and inspect the same moment across motion, GPS and video.',
      },
      {
        motif: 'history',
        tag: 'History',
        title: 'Pattern or one-off',
        body: 'See whether a technical issue is repeating or whether it was just one rough session.',
      },
    ],
  },

  coach: {
    eyebrow: 'For coaches',
    title: 'Faster review. Clearer priorities.',
    body: 'OlympiaLabs helps coaches move from boat motion and body-movement review to a clearer technical priority and a stronger next conversation with the athlete.',
    questionsLabel: 'Questions it helps answer after training',
    questions: [
      'Where did fatigue start to show?',
      'What changed most when this session dropped?',
      'Is this issue repeating or was it a one-off?',
      'Did the athlete get faster and stay stable, or only faster?',
      'What is the next technical point worth coaching?',
    ],
    points: [
      {
        tag: 'Earlier signals',
        title: 'Catch fatigue-related drift sooner',
        body: 'See where consistency, balance or stability started to fade before it becomes obvious in a basic result sheet.',
      },
      {
        tag: 'Focused',
        title: 'Spend less time digging',
        body: 'The platform pulls the most meaningful changes to the surface so review stays centred on the athlete and the next action.',
      },
      {
        tag: 'Athlete-specific',
        title: 'Keep every decision personal',
        body: 'Comparisons stay tied to the athlete’s recent work, which makes improvement easier to judge in context.',
      },
      {
        tag: 'Transparent',
        title: 'Trust what you are looking at',
        body: 'Findings stay connected to the data behind them, so coaches can accept, challenge or ignore them.',
      },
    ],
  },

  pieces: {
    eyebrow: 'One system',
    title: 'Three parts. One coaching workflow.',
    items: [
      {
        name: 'OlympiaLabs Sensor',
        where: 'On the boat',
        body: 'High-rate motion capture from the hull, where the session really happens.',
      },
      {
        name: 'OlympiaLabs App',
        where: 'With the athlete',
        body: 'Records GPS and video so body movement can be analysed after the session with minimal extra work for the athlete.',
      },
      {
        name: 'Coach Platform',
        where: 'In the browser',
        body: 'Turns the session into a review coaches can use straight away.',
      },
    ],
  },

  trust: {
    eyebrow: 'Built on real data',
    title: 'High-rate sensing, transparent analysis, honest boundaries.',
    body: 'OlympiaLabs is designed to give coaches more clarity without pretending to measure what it does not. Its strength is precise capture, athlete-specific comparison and analysis that stays tied to the source data.',
    columns: [
      {
        kind: 'Measured',
        note: 'Physically sensed',
        items: [
          'Acceleration and rotation, three axes — from the boat sensor',
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
          'No heading or direction',
          'Nothing is validated against ground truth yet. That validation work is still ongoing',
        ],
      },
    ],
    closing: 'We would rather be useful and honest than impressive and vague.',
  },

  pilot: {
    eyebrow: 'Waitlist',
    title: 'Be first to hear when access opens.',
    body: 'Join the waitlist to follow OlympiaLabs as we move toward broader access for clubs and coaches.',
    benefitsLabel: 'Waitlist members hear about',
    benefits: [
      'Early access windows',
      'Product updates',
      'Feature releases',
      'Onboarding availability',
    ],
    note: 'Leave your details and we will let you know when OlympiaLabs is ready for your environment.',
    form: {
      name: { label: 'Your name', placeholder: 'Ana Silva' },
      email: { label: 'Email', placeholder: 'you@club.com' },
      organisation: { label: 'Club or organisation (optional)', placeholder: 'Clube Nautico de Viana' },
      role: {
        label: 'Your role (optional)',
        options: ['Prefer not to say', 'Coach', 'Athlete', 'Club director', 'Other'],
      },
      message: { label: 'Anything we should know? (optional)', placeholder: 'What kind of updates you would like to receive.' },
      consent: 'Email me about OlympiaLabs updates and early access. I can unsubscribe anytime.',
      submit: 'Join the waitlist',
      submitting: 'Sending…',
      fineprint: 'No spam · GDPR-compliant',
      errorGeneric: 'Something went wrong. Please try again.',
      errorNetwork: 'Network error — please check your connection and try again.',
      errorLocal: 'Netlify handles submissions — this will work once the site is deployed.',
      successTitle: 'You are on the waitlist.',
      successBody: 'Thanks — we will keep you posted on product updates and early access.',
    },
  },

  footer: {
    blurb: 'Precision performance review for sprint kayak and canoe coaches.',
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
      coach: 'Vantagens para treinadores',
      observes: 'O que ajuda a detetar',
      loop: 'Como encaixa',
      trust: 'Baseado em dados reais',
    },
    signIn: 'Entrar',
    cta: 'Entrar na lista de espera',
    ctaShort: 'Entrar',
    locale: {
      label: 'Idioma',
      enShort: 'EN',
      enLong: 'Inglês',
      ptShort: 'PT',
      ptLong: 'Português (Portugal)',
    },
  },

  hero: {
    badge: 'Captação precisa para treinadores',
    eyebrow: 'Para treinadores de kayak e canoa de velocidade',
    titleTop: 'Veja onde o rendimento',
    titleBottom: 'começa a cair.',
    body: 'A OlympiaLabs combina captação precisa do movimento do barco com análise de movimento corporal a partir de vídeo no telemóvel e revisão de sessão ajustada a cada atleta, para ajudar treinadores a detetar mais cedo sinais de fadiga, perceber como a técnica mudou e orientar a próxima sessão com mais confiança.',
    ctaPrimary: 'Entrar na lista de espera',
    ctaSecondary: 'Ver vantagens para treinadores',
    highlights: [
      'Movimento do barco e movimento corporal analisados em conjunto',
      'Detecção de sinais de fadiga mais cedo',
      'Escolha mais clara e precisa de quais exercícios técnicos fazer para melhorar a performance',
    ],
    panel: {
      eyebrow: 'O que o treinador ganha',
      title: 'Sinais mais cedo. Próximos passos mais claros.',
      points: [
        {
          title: 'Detete desvios mais cedo',
          body: 'Veja onde equilíbrio, estabilidade e ritmo começaram a cair antes de o resumo da sessão esconder a razão.',
        },
        {
          title: 'Foque a próxima correção',
          body: 'Traga para a frente a próxima correção sem perder tempo em vários ecrãs.',
        },
        {
          title: 'Mantenha o contexto do atleta',
          body: 'Compare com o trabalho recente desse atleta, e não com uma média genérica.',
        },
      ],
    },
    signal: {
      eyebrow: 'Suportado por captação do barco em alta frequência',
      aria: 'Ilustração de uma alteração no movimento do barco destacada pelo sensor',
      readouts: [],
      caption: 'Ilustração do tipo de alteração no movimento do barco que o sensor ajuda o treinador a inspecionar depois do treino.',
    },
  },

  stats: {
    label: 'Porque é que os treinadores ligam',
    eyebrow: 'Porque é que os treinadores ligam',
    title: 'Feita para transformar mudanças subtis em decisões de treino mais fortes.',
    body: 'A OlympiaLabs é para clubes que querem captação precisa, maior visibilidade da fadiga e prioridades técnicas mais claras sem acrescentar fricção ao atleta.',
    items: [
      {
        tag: 'Barco + corpo',
        title: 'Veja o barco e o atleta em conjunto',
        body: 'Reveja o movimento do barco em alta frequência juntamente com a análise do movimento corporal a partir do vídeo no telemóvel para perceber melhor as mudanças técnicas.',
      },
      {
        tag: 'Sinais de fadiga',
        title: 'Veja onde a sessão começou a cair',
        body: 'Detete os momentos em que estabilidade, ritmo ou equilíbrio esquerda-direita começaram a desviar-se dentro da sessão.',
      },
      {
        tag: 'Prioridade técnica',
        title: 'Trabalhe a correção com maior retorno',
        body: 'Traga para a frente o ponto que mais vale a pena corrigir, em vez de adivinhar a partir do resultado final.',
      },
      {
        tag: 'Contexto do atleta',
        title: 'Julgue a evolução no contexto certo',
        body: 'Compare cada sessão com o trabalho recente desse atleta para interpretar melhor dias bons e dias maus.',
      },
    ],
  },

  proof: {
    eyebrow: 'Revisão real de rendimento',
    title: 'Sessões reais. Saída real para o treinador.',
    body: 'O valor não está numa apresentação. Está no sensor em cima do barco, no atleta em vídeo, na sessão na água e na revisão que o treinador abre depois.',
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
    eyebrow: 'Porque isto importa',
    title: 'O tempo mostra o resultado. Raramente mostra o que deve ser corrigido.',
    body: 'Quando a fadiga aparece no resultado, a razão técnica já costuma estar escondida. O treinador precisa de ver onde ritmo, equilíbrio ou estabilidade começaram a quebrar, e se isso é normal para este atleta ou um sinal a que vale a pena responder.',
  },

  loop: {
    eyebrow: 'Como encaixa',
    title: 'Simples de integrar na semana de treino.',
    steps: [
      {
        n: '01',
        name: 'Registar',
        kind: 'Na água',
        body: 'O atleta regista uma vez. Sensor, GPS e vídeo ficam ligados à mesma sessão.',
      },
      {
        n: '02',
        name: 'Rever',
        kind: 'Uma única sessão',
        body: 'Abra a sessão depois do treino e veja os momentos-chave num só fluxo de revisão.',
      },
      {
        n: '03',
        name: 'Priorizar',
        kind: 'O que mais mudou',
        body: 'A OlympiaLabs traz para a frente as alterações que mais merecem atenção em equilíbrio, estabilidade, consistência e movimento.',
      },
      {
        n: '04',
        name: 'Treinar',
        kind: 'Próxima ação',
        body: 'Transforme essa revisão num foco técnico mais claro para o atleta.',
      },
    ],
    footLine: 'Feita para revisão rápida depois do treino',
    footNote: 'O objetivo não é ter mais ecrãs. É chegar a uma decisão de treino mais clara.',
  },

  observes: {
    eyebrow: 'O que ajuda a detetar',
    title: 'Os momentos que muitas vezes escapam em tempo real.',
    items: [
      {
        motif: 'boat',
        tag: 'Barco',
        title: 'Equilíbrio e estabilidade do barco',
        body: 'Veja quão assente o barco se manteve, quanto oscilou e se um lado começou a ceder.',
      },
      {
        motif: 'body',
        tag: 'Corpo',
        title: 'Técnica através do corpo',
        body: 'Reveja como o atleta se moveu durante a sessão e como a amplitude articular mudou.',
      },
      {
        motif: 'session',
        tag: 'Sessão',
        title: 'O momento exato da quebra',
        body: 'Identifique quando algo mudou e veja esse momento em movimento, GPS e vídeo.',
      },
      {
        motif: 'history',
        tag: 'Histórico',
        title: 'Padrão ou caso isolado',
        body: 'Veja se o problema técnico se repete ou se foi apenas uma sessão menos conseguida.',
      },
    ],
  },

  coach: {
    eyebrow: 'Para treinadores',
    title: 'Revisão mais rápida. Prioridades mais claras.',
    body: 'A OlympiaLabs ajuda treinadores a passar da revisão do movimento do barco e do corpo para uma prioridade técnica mais clara e uma conversa seguinte mais forte com o atleta.',
    questionsLabel: 'Perguntas que ajuda a responder depois do treino',
    questions: [
      'Onde é que a fadiga começou a aparecer?',
      'O que mudou mais quando a sessão caiu?',
      'Este problema está a repetir-se ou foi isolado?',
      'O atleta ficou mais rápido e continuou estável, ou apenas mais rápido?',
      'Qual é o próximo ponto técnico que vale a pena trabalhar?',
    ],
    points: [
      {
        tag: 'Sinais mais cedo',
        title: 'Detete antes o desgaste técnico',
        body: 'Veja onde consistência, equilíbrio ou estabilidade começaram a cair antes de isso ficar óbvio numa folha de tempos simples.',
      },
      {
        tag: 'Focado',
        title: 'Passe menos tempo à procura',
        body: 'A plataforma traz as mudanças mais relevantes à superfície para que a revisão continue centrada no atleta e na próxima ação.',
      },
      {
        tag: 'Contexto do atleta',
        title: 'Mantenha cada decisão pessoal',
        body: 'As comparações ficam ligadas ao trabalho recente do atleta, o que torna a evolução mais fácil de julgar.',
      },
      {
        tag: 'Transparente',
        title: 'Confie no que está a ver',
        body: 'As conclusões mantêm-se ligadas aos dados que as sustentam, para que o treinador possa aceitá-las, contestá-las ou ignorá-las.',
      },
    ],
  },

  pieces: {
    eyebrow: 'Um sistema',
    title: 'Três partes. Um fluxo de treino.',
    items: [
      {
        name: 'Sensor OlympiaLabs',
        where: 'No barco',
        body: 'Captação do movimento do casco em alta frequência, onde a sessão realmente acontece.',
      },
      {
        name: 'App OlympiaLabs',
        where: 'Com o atleta',
        body: 'Regista GPS e vídeo para que o movimento corporal possa ser analisado depois da sessão com o mínimo de trabalho extra para o atleta.',
      },
      {
        name: 'Plataforma do treinador',
        where: 'No navegador',
        body: 'Transforma a sessão numa revisão que o treinador consegue usar de imediato.',
      },
    ],
  },

  trust: {
    eyebrow: 'Baseado em dados reais',
    title: 'Captação em alta frequência, análise transparente e limites honestos.',
    body: 'A OlympiaLabs foi pensada para dar mais clareza aos treinadores sem fingir medir o que não mede. A sua força está na captação precisa, na comparação ajustada ao atleta e numa análise ligada aos dados de origem.',
    columns: [
      {
        kind: 'Medido',
        note: 'Captado fisicamente',
        items: [
          'Aceleração e rotação, três eixos — a partir do sensor no barco',
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
          'Sem rumo ou direção',
          'Nada foi ainda validado contra uma medição de referência. Esse trabalho de validação ainda está em curso',
        ],
      },
    ],
    closing: 'Preferimos ser úteis e honestos do que parecer impressionantes e vagos.',
  },

  pilot: {
    eyebrow: 'Lista de espera',
    title: 'Seja dos primeiros a saber quando o acesso abrir.',
    body: 'Entre na lista de espera para acompanhar a OlympiaLabs enquanto avançamos para um acesso mais alargado a clubes e treinadores.',
    benefitsLabel: 'Quem entra na lista recebe',
    benefits: [
      'Janelas de acesso antecipado',
      'Novidades do produto',
      'Lançamentos de funcionalidades',
      'Disponibilidade de integração',
    ],
    note: 'Deixe os seus dados e avisamos quando a OlympiaLabs estiver pronta para o seu contexto.',
    form: {
      name: { label: 'Nome', placeholder: 'Ana Silva' },
      email: { label: 'Email', placeholder: 'you@club.com' },
      organisation: { label: 'Clube ou organização (opcional)', placeholder: 'Clube Nautico de Viana' },
      role: {
        label: 'Função (opcional)',
        options: ['Prefiro não dizer', 'Treinador', 'Atleta', 'Direção do clube', 'Outra'],
      },
      message: { label: 'Algo que devamos saber? (opcional)', placeholder: 'Que tipo de novidades gostaria de receber.' },
      consent: 'Quero receber emails com novidades da OlympiaLabs e acesso antecipado. Posso cancelar a qualquer momento.',
      submit: 'Entrar na lista de espera',
      submitting: 'A enviar…',
      fineprint: 'Sem spam · RGPD',
      errorGeneric: 'Algo correu mal. Tente novamente.',
      errorNetwork: 'Erro de rede — verifique a ligação e tente novamente.',
      errorLocal: 'O Netlify trata das submissões — isto funcionará quando o site estiver publicado.',
      successTitle: 'Está na lista de espera.',
      successBody: 'Obrigado — vamos mantê-lo informado sobre novidades e acesso antecipado.',
    },
  },

  footer: {
    blurb: 'Revisão de rendimento com captação precisa para treinadores de kayak e canoa de velocidade.',
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
