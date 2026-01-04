// Advanced Attacks data
const advancedAttacks = [
  { action: 'Quick Tactics', ps: 'D-Pad: UP', xbox: 'D-Pad UP' },
  { action: 'Offside Trap', ps: 'D-Pad: UP then UP', xbox: 'D-Pad UP then UP' },
  { action: 'Team Press', ps: 'D-Pad: UP then LEFT', xbox: 'D-Pad UP then LEFT' },
  { action: 'Extra Striker', ps: 'D-Pad: UP then RIGHT', xbox: 'D-Pad UP then RIGHT' },
  { action: 'Get In The Box', ps: 'D-Pad: UP then DOWN', xbox: 'D-Pad UP then DOWN' },
  { action: 'Tactical Focus', ps: 'D-Pad: RIGHT', xbox: 'D-Pad RIGHT' },
  { action: 'Default', ps: 'D-Pad: RIGHT then UP', xbox: 'D-Pad RIGHT then UP' },
  { action: 'My Tactics', ps: 'D-Pad: LEFT', xbox: 'D-Pad LEFT' },
  { action: 'Defending', ps: 'D-Pad: RIGHT then LEFT', xbox: 'D-Pad: RIGHT then LEFT' },
  { action: 'Attacking', ps: 'D-Pad: RIGHT then RIGHT', xbox: 'D-Pad: RIGHT then RIGHT' },
  { action: 'Custom Tactic 1', ps: 'D-Pad: LEFT then UP', xbox: 'D-Pad: LEFT then UP' },
  { action: 'Custom Tactic 2', ps: 'D-Pad: LEFT then LEFT', xbox: 'D-Pad: LEFT then LEFT' },
  { action: 'Custom Tactic 3', ps: 'D-Pad: LEFT then RIGHT', xbox: 'D-Pad: LEFT then RIGHT' },
  { action: 'Custom Tactic 4', ps: 'D-Pad: LEFT then DOWN', xbox: 'D-Pad: LEFT then DOWN' },
  { action: 'Tactical Suggestions', ps: 'D-Pad: DOWN', xbox: 'D-Pad DOWN' },
  { action: 'Tactic Suggestion 1', ps: 'D-Pad: DOWN then UP', xbox: 'D-Pad: DOWN then UP' },
  { action: 'Tactic Suggestion 2', ps: 'D-Pad: DOWN then RIGHT', xbox: 'D-Pad: DOWN then RIGHT' },
  { action: 'Tactic / Focus Suggestion', ps: 'D-Pad: DOWN then RIGHT', xbox: 'D-Pad: DOWN then RIGHT' },
  { action: 'Substitution', ps: 'D-Pad: DOWN then DOWN', xbox: 'D-Pad: DOWN then DOWN' },
];

function renderAdvancedAttacks() {
  const grid = document.querySelector('.advanced-cards-grid');
  if (!grid) return;
  grid.innerHTML = '';
  advancedAttacks.forEach(item => {
    const card = document.createElement('div');
    card.className = 'advanced-card';
    
    // Translate the action name
    const translatedAction = getAdvancedAttackTranslation(item.action);
    
    // Translate the D-Pad instructions
    let translatedPs = translateControlsString(item.ps);
    // Wrap D-Pad with tooltip
    translatedPs = translatedPs.replace(/D-Pad/gi, '<span class="dpad-tooltip">D-Pad<span class="tooltip-text">Arrow Keys</span></span>');
    // PS5-only UI: we keep the data, but don't display Xbox
    
    card.innerHTML = `
      <div class="action-title">${translatedAction}</div>
      <div class="controls-row"><span class="controls-label">${t('playstationLabel')}</span> ${translatedPs}</div>
    `;
    grid.appendChild(card);
  });
}

/* FC25 Tricks Manual — script.js
   Renders tricks by star rating and handles platform toggling.
   Clean and simple so kids can read the code.
*/

// Language system
let currentLanguage = 'en';

// Load saved language from localStorage
function loadLanguage() {
  const saved = localStorage.getItem('fc25_lang');
  if (saved && ['en', 'fr', 'es', 'ar'].includes(saved)) {
    currentLanguage = saved;
  }
}

// Save language to localStorage
function saveLanguage(lang) {
  localStorage.setItem('fc25_lang', lang);
}

function applyLanguageDirection(lang) {
  const root = document.documentElement;
  if (!root) return;
  const isArabic = lang === 'ar';
  root.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  root.setAttribute('lang', lang);
}

// UI translations for labels, headings, buttons
const I18N = {
  en: {
    watchTutorial: '▶ Watch Tutorial',
    advancedAttacks: 'Advanced Attacks',
    languageLabel: 'Language',
    siteSub: 'Learn skill moves. Beat defenders. Have fun.',
    chooseStars: 'Choose Stars',
    all: 'All',
    trickOfTheDay: 'Trick of the Day ✨',
    practiceChallenge: "Practice challenge: Try the trick 5 times in a row with both feet.",
    skillsTitle: 'Skill Moves by Stars',
    teamTipPrefix: "Tip: To see a player's skill move stars, go to Team Management and press ",
    teamTipSuffix: ' on the player.',
    gkNote: 'Note: Goalkeepers can do these skills too!',
    footerText: 'Made for young players • Keep practicing!',
    playstationLabel: 'PlayStation:',
    xboxLabel: 'Xbox:',
    tipPrefix: 'Tip:',
    rightJoystick: 'Right Joystick',
    leftJoystick: 'Left Joystick'
  },
  fr: {
    watchTutorial: '▶ Voir le tuto',
    advancedAttacks: 'Attaques avancées',
    languageLabel: 'Langue',
    siteSub: 'Apprends les gestes. Bats les défenseurs. Amuse-toi.',
    chooseStars: 'Choisir les étoiles',
    all: 'Tous',
    trickOfTheDay: 'Geste du jour ✨',
    practiceChallenge: "Défi: Réussis le geste 5 fois d'affilée avec les deux pieds.",
    skillsTitle: 'Gestes techniques par étoiles',
    teamTipPrefix: "Astuce: Pour voir les étoiles de gestes d’un joueur, va dans Gestion de l’équipe et appuie sur ",
    teamTipSuffix: ' sur le joueur.',
    gkNote: 'Note: Les gardiens peuvent aussi faire ces gestes!',
    footerText: 'Fait pour les jeunes joueurs • Continue à t’entraîner!',
    playstationLabel: 'PlayStation:',
    xboxLabel: 'Xbox:',
    tipPrefix: 'Conseil:',
    rightJoystick: 'Joystick droit',
    leftJoystick: 'Joystick gauche'
  },
  es: {
    watchTutorial: '▶ Ver tutorial',
    advancedAttacks: 'Ataques avanzados',
    languageLabel: 'Idioma',
    siteSub: 'Aprende skills. Supera defensas. Diviértete.',
    chooseStars: 'Elegir estrellas',
    all: 'Todas',
    trickOfTheDay: 'Truco del día ✨',
    practiceChallenge: 'Reto: Haz el truco 5 veces seguidas con ambos pies.',
    skillsTitle: 'Regates por estrellas',
    teamTipPrefix: 'Consejo: Para ver las estrellas de skills de un jugador, ve a Gestión del equipo y pulsa ',
    teamTipSuffix: ' en el jugador.',
    gkNote: 'Nota: ¡Los porteros también pueden hacer estos skills!',
    footerText: 'Hecho para jugadores jóvenes • ¡Sigue practicando!',
    playstationLabel: 'PlayStation:',
    xboxLabel: 'Xbox:',
    tipPrefix: 'Consejo:',
    rightJoystick: 'Joystick derecho',
    leftJoystick: 'Joystick izquierdo'
  },
  ar: {
    watchTutorial: '▶ شاهد الفيديو',
    advancedAttacks: 'هجمات متقدمة',
    languageLabel: 'اللغة',
    siteSub: 'تعلّم المهارات. راوغ المدافعين. استمتع.',
    chooseStars: 'اختر النجوم',
    all: 'الكل',
    trickOfTheDay: 'مهارة اليوم ✨',
    practiceChallenge: 'تحدي التدريب: جرّب المهارة 5 مرات متتالية بكلتا القدمين.',
    skillsTitle: 'المهارات حسب النجوم',
    teamTipPrefix: 'نصيحة: لمعرفة نجوم مهارات اللاعب، اذهب إلى إدارة الفريق واضغط ',
    teamTipSuffix: ' على اللاعب.',
    gkNote: 'ملاحظة: يمكن لحراس المرمى تنفيذ هذه المهارات أيضًا!',
    footerText: 'مخصص للاعبين الصغار • استمر بالتدريب!',
    playstationLabel: 'بلايستيشن:',
    xboxLabel: 'إكس بوكس:',
    tipPrefix: 'نصيحة:',
    rightJoystick: 'العصا اليمنى',
    leftJoystick: 'العصا اليسرى'
  }
};

const FUN_PRACTICE_LINES = {
  en: [
    'Practice challenge: Do it 5 times in a row. ⚽',
    'Coach challenge: Do it 3 times… then try it while sprinting! 🏃',
    'Pro challenge: Try it with BOTH feet. 👟',
    'Game challenge: Use it once in a real match! 🎮',
    'Combo challenge: Do the move, then pass instantly. 🔥',
    'Timing challenge: Slow → medium → fast (3 tries). ⏱️'
  ],
  fr: [
    'Défi: Fais-le 5 fois de suite. ⚽',
    'Défi coach: Fais-le 3 fois… puis essaie en sprintant! 🏃',
    'Défi pro: Essaie avec les DEUX pieds. 👟',
    'Défi match: Utilise-le une fois en vrai match! 🎮',
    'Défi combo: Fais le geste, puis passe tout de suite. 🔥',
    'Défi timing: Lent → moyen → rapide (3 essais). ⏱️'
  ],
  es: [
    'Reto: Hazlo 5 veces seguidas. ⚽',
    'Reto entrenador: Hazlo 3 veces… ¡y luego prueba esprintando! 🏃',
    'Reto pro: Pruébalo con AMBOS pies. 👟',
    'Reto partido: Úsalo una vez en un partido real. 🎮',
    'Reto combo: Haz el regate y pasa al instante. 🔥',
    'Reto ritmo: Lento → medio → rápido (3 intentos). ⏱️'
  ],
  ar: [
    'تحدي: نفّذها 5 مرات متتالية. ⚽',
    'تحدي المدرب: نفّذها 3 مرات… ثم جرّبها أثناء السرعة! 🏃',
    'تحدي المحترف: جرّبها بكلتا القدمين. 👟',
    'تحدي المباراة: استخدمها مرة واحدة في مباراة حقيقية! 🎮',
    'تحدي الكومبو: نفّذ المهارة ثم مرّر مباشرة. 🔥',
    'تحدي التوقيت: بطيء → متوسط → سريع (3 محاولات). ⏱️'
  ]
};

function getFunPracticeLines() {
  return FUN_PRACTICE_LINES[currentLanguage] || FUN_PRACTICE_LINES.en;
}

function formatStarHeading(stars) {
  const n = Number(stars);
  const starsIcons = '⭐'.repeat(Math.max(0, n));
  if (currentLanguage === 'fr') return `${n} Étoile${n === 1 ? '' : 's'} ${starsIcons}`.trim();
  if (currentLanguage === 'es') return `${n} Estrella${n === 1 ? '' : 's'} ${starsIcons}`.trim();
  if (currentLanguage === 'ar') return `${n} نجمة ${starsIcons}`.trim();
  return `${n} Star${n === 1 ? '' : 's'} ${starsIcons}`.trim();
}

// Helper function to get translation
function t(key) {
  const lang = I18N[currentLanguage] ? currentLanguage : 'en';
  return I18N[lang][key] ?? I18N.en[key] ?? key;
}

// Trick content translations (names, descriptions, tips)
// IMPORTANT: Keys must match exact English trick names for video tutorials to work
const TRICK_TRANSLATIONS = {
  fr: {
    'Directional Nutmeg': {
      name: 'Petit pont directionnel',
      desc: 'Petit pont rapide pour surprendre un défenseur.',
      tip: 'Essaie lentement d\'abord.'
    },
    'Ball Juggle (While standing)': {
      name: 'Jonglage (Debout)',
      desc: 'Garde le ballon en l\'air en restant debout.',
      tip: 'Compte tes touches.'
    },
    'Open Up Fake Shot': {
      name: 'Feinte de tir ouverte',
      desc: 'Fais semblant de tirer pour créer de l\'espace.',
      tip: 'Fais semblant de tirer d\'abord.'
    },
    'Flick Up': {
      name: 'Petit lob',
      desc: 'Soulève le ballon légèrement.',
      tip: 'Utilise doucement.'
    },
    'First Time Feint Turn': {
      name: 'Feinte et tour en une touche',
      desc: 'Tour rapide après une touche pour échapper.',
      tip: 'Tourne par petits mouvements.'
    },
    'Feint Forward and Turn': {
      name: 'Feinte avant et tour',
      desc: 'Fais semblant d\'aller devant puis tourne vite.',
      tip: 'Penche ton corps comme un vrai joueur.'
    },
    'Body Feint Left/Right': {
      name: 'Feinte de corps gauche/droite',
      desc: 'Utilise ton corps pour tromper les défenseurs.',
      tip: 'Bouge tes hanches.'
    },
    'Stepover Left/Right': {
      name: 'Passement de jambe gauche/droite',
      desc: 'Passe au-dessus du ballon pour confondre.',
      tip: 'Les pieds rapides aident.'
    },
    'Reverse Stepover Left/Right': {
      name: 'Passement inversé gauche/droite',
      desc: 'Les passements inversés surprennent les défenseurs.',
      tip: 'Pratique dans les deux sens.'
    },
    'Ball Roll Left/Right': {
      name: 'Roulette gauche/droite',
      desc: 'Roule le ballon pour changer de direction.',
      tip: 'Garde-le stable.'
    },
    'Drag Back': {
      name: 'Talonnade arrière',
      desc: 'Ramène le ballon pour arrêter le jeu.',
      tip: 'Utilise près de la ligne de touche.'
    },
    'Heel Flick': {
      name: 'Coup de talon',
      desc: 'Utilise le talon pour faire avancer le ballon.',
      tip: 'Essaie de petits coups.'
    },
    'Roulette': {
      name: 'Roulette',
      desc: 'Tourne avec le ballon pour échapper.',
      tip: 'Garde l\'équilibre.'
    },
    'Heel Chop (While running)': {
      name: 'Tacle talon (En courant)',
      desc: 'Coupe le ballon en arrière en courant.',
      tip: 'Utilise une petite touche.'
    },
    'Stutter Feint': {
      name: 'Feinte hésitante',
      desc: 'Petit arrêt et départ pour tromper les défenseurs.',
      tip: 'Utilise de courtes pauses.'
    },
    'Ball Hop (While standing)': {
      name: 'Saut de ballon (Debout)',
      desc: 'Saute par-dessus le ballon en restant debout.',
      tip: 'Reste léger sur tes pieds.'
    },
    'Ball Roll Drag': {
      name: 'Roulette et tirage',
      desc: 'Roule et tire pour t\'éloigner.',
      tip: 'Combine avec un sprint.'
    },
    'Drag Back Turn': {
      name: 'Talonnade et tour',
      desc: 'Talonnade puis tour pour changer de direction.',
      tip: 'Tourne en douceur.'
    },
    'Flair Nutmegs': {
      name: 'Petits ponts avec style',
      desc: 'Petits ponts fantaisie pour le style et l\'espace.',
      tip: 'Essaie lentement d\'abord.'
    },
    'Heel to Heel': {
      name: 'Talon à talon',
      desc: 'Utilise les talons pour faire avancer et passer.',
      tip: 'Sois rapide.'
    },
    'Simple Rainbow': {
      name: 'Arc-en-ciel simple',
      desc: 'Un petit arc-en-ciel pour soulever le ballon.',
      tip: 'Utilise près d\'un défenseur.'
    },
    'Stop and Turn': {
      name: 'Arrêt et tour',
      desc: 'Arrête puis tourne pour perdre un marqueur.',
      tip: 'Fais-le avec confiance.'
    },
    'Ball Roll Cut Left/Right': {
      name: 'Roulette coupée gauche/droite',
      desc: 'Coupe après une roulette pour rentrer.',
      tip: 'Pratique le jeu de jambes.'
    },
    'Fake Pass (While standing)': {
      name: 'Fausse passe (Debout)',
      desc: 'Fais semblant de passer pour tromper les défenseurs.',
      tip: 'Rends-le réaliste.'
    },
    'Fake Pass Exit Left/Right': {
      name: 'Fausse passe sortie gauche/droite',
      desc: 'Fausse passe puis sors de l\'autre côté.',
      tip: 'Vise avec le stick gauche.'
    },
    'Quick Ball Rolls': {
      name: 'Roulettes rapides',
      desc: 'Petites roulettes rapides pour changer le rythme.',
      tip: 'Utilise de courtes accélérations.'
    },
    'Lane Change Left/Right': {
      name: 'Changement de couloir gauche/droite',
      desc: 'Change de couloir pour trouver de l\'espace.',
      tip: 'Garde la tête haute.'
    },
    'Three Touch Roulette': {
      name: 'Roulette trois touches',
      desc: 'Un tour en trois touches pour échapper avancé.',
      tip: 'Pratique lentement d\'abord.'
    },
    'Heel to Ball Roll': {
      name: 'Talon vers roulette',
      desc: 'Touche de talon vers une roulette.',
      tip: 'Commence lentement.'
    },
    'Drag Back Spin': {
      name: 'Talonnade rotation',
      desc: 'Talonnade et rotation pour échapper.',
      tip: 'Observe le défenseur.'
    },
    'In-Air Elastico (While juggling)': {
      name: 'Elastico en l\'air (En jonglant)',
      desc: 'Un elastico difficile en l\'air en jonglant.',
      tip: 'Nécessite de la pratique.'
    },
    'Chest Flick (While juggling)': {
      name: 'Coup de poitrine (En jonglant)',
      desc: 'Frappe avec la poitrine pendant le jonglage.',
      tip: 'Essaie lentement.'
    },
    'Around the World (While juggling)': {
      name: 'Tour du monde (En jonglant)',
      desc: 'Un grand tour de jonglage autour du ballon.',
      tip: 'Compte les rotations.'
    },
    'Elastico': {
      name: 'Elastico',
      desc: 'Un mouvement rapide extérieur-intérieur pour battre les joueurs.',
      tip: 'Pratique le timing.'
    },
    'Reverse Elastico': {
      name: 'Elastico inversé',
      desc: 'Elastico inversé pour surprendre.',
      tip: 'Essaie avec les deux pieds.'
    },
    'Advanced Rainbow': {
      name: 'Arc-en-ciel avancé',
      desc: 'Un arc-en-ciel fantaisie nécessitant du contrôle.',
      tip: 'Sois patient.'
    },
    'Heel Flick Turn': {
      name: 'Coup de talon et tour',
      desc: 'Coup de talon puis un tour sec.',
      tip: 'Maîtrise le coup de talon d\'abord.'
    },
    'Sombrero Flick': {
      name: 'Coup de sombrero',
      desc: 'Retourne le ballon par-dessus un adversaire.',
      tip: 'Essaie avec une touche douce.'
    },
    'Antony Spin': {
      name: 'Tour d\'Antony',
      desc: 'Tour rapide et rotation pour battre les marqueurs.',
      tip: 'Utilise l\'espace pour tourner.'
    },
    'Ball Roll Fake Turn': {
      name: 'Fausse roulette et tour',
      desc: 'Une fausse roulette vers un tour.',
      tip: 'Pratique les directions.'
    },
    'Rabona Fake (While jogging)': {
      name: 'Fausse rabona (En trottinant)',
      desc: 'Une fausse rabona fantaisie pour tromper les défenseurs.',
      tip: 'Fais-le en trottinant.'
    },
    'Elastico Chop': {
      name: 'Elastico tacle',
      desc: 'Elastico puis un tacle pour la vitesse.',
      tip: 'Difficile mais cool.'
    },
    'Spin Flick': {
      name: 'Rotation rapide',
      desc: 'Une rotation rapide pour ouvrir l\'espace.',
      tip: 'Pratique lentement.'
    },
    'Heel Fake': {
      name: 'Feinte de talon',
      desc: 'Feinte de talon pour déplacer un défenseur.',
      tip: 'Essaie lentement d\'abord.'
    },
    'Flair Rainbow': {
      name: 'Arc-en-ciel stylé',
      desc: 'Un arc-en-ciel flashy pour le spectacle et l\'échappée.',
      tip: 'Amuse-toi avec.'
    }
  },
  es: {
    'Directional Nutmeg': {
      name: 'Caño direccional',
      desc: 'Caño rápido para sorprender al defensor.',
      tip: 'Prueba despacio primero.'
    },
    'Ball Juggle (While standing)': {
      name: 'Malabares (Parado)',
      desc: 'Mantén el balón en el aire parado.',
      tip: 'Cuenta tus toques.'
    },
    'Open Up Fake Shot': {
      name: 'Tiro falso abierto',
      desc: 'Finge un tiro para abrir espacio.',
      tip: 'Pretende tirar primero.'
    },
    'Flick Up': {
      name: 'Toque alto',
      desc: 'Levanta el balón ligeramente.',
      tip: 'Úsalo suavemente.'
    },
    'First Time Feint Turn': {
      name: 'Giro de finta de primera',
      desc: 'Giro rápido después de un toque para escapar.',
      tip: 'Gira en pequeñas cantidades.'
    },
    'Feint Forward and Turn': {
      name: 'Finta adelante y giro',
      desc: 'Finge ir adelante y gira rápido.',
      tip: 'Dobla tu cuerpo como un jugador real.'
    },
    'Body Feint Left/Right': {
      name: 'Finta de cuerpo izquierda/derecha',
      desc: 'Usa tu cuerpo para engañar a los defensores.',
      tip: 'Mueve tus caderas.'
    },
    'Stepover Left/Right': {
      name: 'Bicicleta izquierda/derecha',
      desc: 'Pasa por encima del balón para confundir.',
      tip: 'Los pies rápidos ayudan.'
    },
    'Reverse Stepover Left/Right': {
      name: 'Bicicleta inversa izquierda/derecha',
      desc: 'Las bicicletas inversas sorprenden a los defensores.',
      tip: 'Practica en ambos sentidos.'
    },
    'Ball Roll Left/Right': {
      name: 'Rodar balón izquierda/derecha',
      desc: 'Rueda el balón para cambiar de dirección.',
      tip: 'Mantenlo estable.'
    },
    'Drag Back': {
      name: 'Arrastre atrás',
      desc: 'Arrastra el balón hacia atrás para detener el juego.',
      tip: 'Úsalo cerca de la línea lateral.'
    },
    'Heel Flick': {
      name: 'Toque de talón',
      desc: 'Usa el talón para impulsar el balón adelante.',
      tip: 'Prueba toques pequeños.'
    },
    'Roulette': {
      name: 'Ruleta',
      desc: 'Gira con el balón para escapar.',
      tip: 'Mantén el equilibrio.'
    },
    'Heel Chop (While running)': {
      name: 'Corte de talón (Corriendo)',
      desc: 'Corta el balón hacia atrás mientras corres.',
      tip: 'Usa un toque pequeño.'
    },
    'Stutter Feint': {
      name: 'Finta entrecortada',
      desc: 'Pequeña parada y arranque para engañar a los defensores.',
      tip: 'Usa pausas cortas.'
    },
    'Ball Hop (While standing)': {
      name: 'Salto de balón (Parado)',
      desc: 'Salta sobre el balón mientras estás parado.',
      tip: 'Mantente ligero sobre tus pies.'
    },
    'Ball Roll Drag': {
      name: 'Rodar y arrastrar',
      desc: 'Rueda y arrastra para alejarte.',
      tip: 'Combínalo con un sprint.'
    },
    'Drag Back Turn': {
      name: 'Arrastre y giro',
      desc: 'Arrastra atrás y gira para cambiar de dirección.',
      tip: 'Gira suavemente.'
    },
    'Flair Nutmegs': {
      name: 'Caños con estilo',
      desc: 'Caños elegantes para estilo y espacio.',
      tip: 'Prueba despacio primero.'
    },
    'Heel to Heel': {
      name: 'Talón a talón',
      desc: 'Usa los talones para impulsar y avanzar.',
      tip: 'Sé rápido.'
    },
    'Simple Rainbow': {
      name: 'Arcoíris simple',
      desc: 'Un pequeño arcoíris para levantar el balón.',
      tip: 'Úsalo cerca del defensor.'
    },
    'Stop and Turn': {
      name: 'Parar y girar',
      desc: 'Para y gira para perder a un marcador.',
      tip: 'Hazlo con confianza.'
    },
    'Ball Roll Cut Left/Right': {
      name: 'Rodar y cortar izquierda/derecha',
      desc: 'Corta después de rodar para entrar.',
      tip: 'Practica el juego de pies.'
    },
    'Fake Pass (While standing)': {
      name: 'Pase falso (Parado)',
      desc: 'Finge un pase para engañar a los defensores.',
      tip: 'Hazlo parecer real.'
    },
    'Fake Pass Exit Left/Right': {
      name: 'Pase falso salida izquierda/derecha',
      desc: 'Pase falso y sal por el otro lado.',
      tip: 'Apunta con el stick izquierdo.'
    },
    'Quick Ball Rolls': {
      name: 'Rodadas rápidas',
      desc: 'Rodadas pequeñas y rápidas para cambiar el ritmo.',
      tip: 'Usa aceleraciones cortas.'
    },
    'Lane Change Left/Right': {
      name: 'Cambio de carril izquierda/derecha',
      desc: 'Cambia de carril para encontrar espacio.',
      tip: 'Mantén la cabeza arriba.'
    },
    'Three Touch Roulette': {
      name: 'Ruleta de tres toques',
      desc: 'Un giro de tres toques para escape avanzado.',
      tip: 'Practica despacio primero.'
    },
    'Heel to Ball Roll': {
      name: 'Talón a rodada',
      desc: 'Toque de talón hacia una rodada.',
      tip: 'Comienza despacio.'
    },
    'Drag Back Spin': {
      name: 'Arrastre y giro',
      desc: 'Arrastra atrás y gira para escapar.',
      tip: 'Observa al defensor.'
    },
    'In-Air Elastico (While juggling)': {
      name: 'Elástico aéreo (Haciendo malabares)',
      desc: 'Un elástico complicado en el aire haciendo malabares.',
      tip: 'Necesita práctica.'
    },
    'Chest Flick (While juggling)': {
      name: 'Toque de pecho (Haciendo malabares)',
      desc: 'Golpea con el pecho durante los malabares.',
      tip: 'Prueba despacio.'
    },
    'Around the World (While juggling)': {
      name: 'Vuelta al mundo (Haciendo malabares)',
      desc: 'Un gran giro de malabares alrededor del balón.',
      tip: 'Cuenta las rotaciones.'
    },
    'Elastico': {
      name: 'Elástico',
      desc: 'Un movimiento rápido exterior-interior para vencer jugadores.',
      tip: 'Practica el tiempo.'
    },
    'Reverse Elastico': {
      name: 'Elástico inverso',
      desc: 'Elástico inverso para sorprender.',
      tip: 'Prueba con ambos pies.'
    },
    'Advanced Rainbow': {
      name: 'Arcoíris avanzado',
      desc: 'Un arcoíris elegante que requiere control.',
      tip: 'Sé paciente.'
    },
    'Heel Flick Turn': {
      name: 'Toque de talón y giro',
      desc: 'Toque de talón y luego un giro brusco.',
      tip: 'Domina el toque de talón primero.'
    },
    'Sombrero Flick': {
      name: 'Toque de sombrero',
      desc: 'Voltea el balón sobre un oponente.',
      tip: 'Prueba con toque suave.'
    },
    'Antony Spin': {
      name: 'Giro de Antony',
      desc: 'Giro rápido y rotación para vencer marcadores.',
      tip: 'Usa espacio para girar.'
    },
    'Ball Roll Fake Turn': {
      name: 'Rodada falsa y giro',
      desc: 'Una rodada falsa hacia un giro.',
      tip: 'Practica las direcciones.'
    },
    'Rabona Fake (While jogging)': {
      name: 'Rabona falsa (Trotando)',
      desc: 'Una rabona falsa elegante para engañar defensores.',
      tip: 'Hazlo mientras trotas.'
    },
    'Elastico Chop': {
      name: 'Elástico y corte',
      desc: 'Elástico y luego un corte para velocidad.',
      tip: 'Difícil pero genial.'
    },
    'Spin Flick': {
      name: 'Giro rápido',
      desc: 'Un giro rápido para abrir espacio.',
      tip: 'Practica despacio.'
    },
    'Heel Fake': {
      name: 'Finta de talón',
      desc: 'Finta de talón para desplazar un defensor.',
      tip: 'Prueba despacio primero.'
    },
    'Flair Rainbow': {
      name: 'Arcoíris con estilo',
      desc: 'Un arcoíris llamativo para espectáculo y escape.',
      tip: 'Diviértete con él.'
    }
  },
  ar: {
    'Directional Nutmeg': {
      name: 'خداع اتجاهي',
      desc: 'خداع سريع لمفاجأة المدافع.',
      tip: 'جرّب ببطء أولاً.'
    },
    'Ball Juggle (While standing)': {
      name: 'التنطيط (وأنت واقف)',
      desc: 'أبقِ الكرة في الهواء وأنت واقف.',
      tip: 'عدّ لمساتك.'
    },
    'Open Up Fake Shot': {
      name: 'تسديدة مزيفة مفتوحة',
      desc: 'تظاهر بالتسديد لفتح مساحة.',
      tip: 'تظاهر بالتسديد أولاً.'
    },
    'Flick Up': {
      name: 'رفع الكرة',
      desc: 'ارفع الكرة قليلاً.',
      tip: 'استخدمها بلطف.'
    },
    'First Time Feint Turn': {
      name: 'خداع ودوران من اللمسة الأولى',
      desc: 'دوران سريع بعد لمسة للهروب.',
      tip: 'دُر بكميات صغيرة.'
    },
    'Feint Forward and Turn': {
      name: 'خداع للأمام ودوران',
      desc: 'تظاهر بالذهاب للأمام ثم دُر بسرعة.',
      tip: 'اثنِ جسمك مثل لاعب حقيقي.'
    },
    'Body Feint Left/Right': {
      name: 'خداع جسدي يسار/يمين',
      desc: 'استخدم جسمك لخداع المدافعين.',
      tip: 'حرّك وركيك.'
    },
    'Stepover Left/Right': {
      name: 'المقص يسار/يمين',
      desc: 'مرّر قدمك فوق الكرة للإرباك.',
      tip: 'الأقدام السريعة تساعد.'
    },
    'Reverse Stepover Left/Right': {
      name: 'المقص العكسي يسار/يمين',
      desc: 'المقص العكسي يفاجئ المدافعين.',
      tip: 'تدرّب في الاتجاهين.'
    },
    'Ball Roll Left/Right': {
      name: 'لف الكرة يسار/يمين',
      desc: 'لُف الكرة لتغيير الاتجاه.',
      tip: 'أبقها ثابتة.'
    },
    'Drag Back': {
      name: 'السحب للخلف',
      desc: 'اسحب الكرة للخلف لإيقاف اللعب.',
      tip: 'استخدمها قرب خط التماس.'
    },
    'Heel Flick': {
      name: 'لمسة الكعب',
      desc: 'استخدم الكعب لدفع الكرة للأمام.',
      tip: 'جرّب لمسات صغيرة.'
    },
    'Roulette': {
      name: 'الروليت',
      desc: 'دُر مع الكرة للهروب.',
      tip: 'حافظ على التوازن.'
    },
    'Heel Chop (While running)': {
      name: 'قطع بالكعب (أثناء الجري)',
      desc: 'اقطع الكرة للخلف أثناء الجري.',
      tip: 'استخدم لمسة صغيرة.'
    },
    'Stutter Feint': {
      name: 'خداع متقطع',
      desc: 'توقف صغير وانطلاق لخداع المدافعين.',
      tip: 'استخدم توقفات قصيرة.'
    },
    'Ball Hop (While standing)': {
      name: 'قفزة الكرة (واقفاً)',
      desc: 'اقفز فوق الكرة وأنت واقف.',
      tip: 'ابقَ خفيفاً على قدميك.'
    },
    'Ball Roll Drag': {
      name: 'لف وسحب الكرة',
      desc: 'لُف واسحب للابتعاد.',
      tip: 'اجمعها مع عدو سريع.'
    },
    'Drag Back Turn': {
      name: 'سحب ودوران',
      desc: 'اسحب للخلف ثم دُر لتغيير الاتجاه.',
      tip: 'دُر بسلاسة.'
    },
    'Flair Nutmegs': {
      name: 'خداعات أنيقة',
      desc: 'خداعات خيالية للأناقة والمساحة.',
      tip: 'جرّب ببطء أولاً.'
    },
    'Heel to Heel': {
      name: 'كعب إلى كعب',
      desc: 'استخدم الكعبين لدفع الكرة والتقدم.',
      tip: 'كن سريعاً.'
    },
    'Simple Rainbow': {
      name: 'قوس قزح بسيط',
      desc: 'قوس قزح صغير لرفع الكرة.',
      tip: 'استخدمه بالقرب من المدافع.'
    },
    'Stop and Turn': {
      name: 'توقف ودوران',
      desc: 'توقف ثم دُر لتفقد المراقب.',
      tip: 'افعلها بثقة.'
    },
    'Ball Roll Cut Left/Right': {
      name: 'لف وقطع يسار/يمين',
      desc: 'اقطع بعد اللف للدخول.',
      tip: 'تدرّب على حركة القدم.'
    },
    'Fake Pass (While standing)': {
      name: 'تمريرة مزيفة (واقفاً)',
      desc: 'تظاهر بالتمرير لخداع المدافعين.',
      tip: 'اجعلها تبدو حقيقية.'
    },
    'Fake Pass Exit Left/Right': {
      name: 'تمريرة مزيفة وخروج يسار/يمين',
      desc: 'تمريرة مزيفة ثم اخرج من الجهة الأخرى.',
      tip: 'صوّب بالعصا اليسرى.'
    },
    'Quick Ball Rolls': {
      name: 'لفات سريعة',
      desc: 'لفات صغيرة وسريعة لتغيير الإيقاع.',
      tip: 'استخدم تسارعات قصيرة.'
    },
    'Lane Change Left/Right': {
      name: 'تغيير المسار يسار/يمين',
      desc: 'غيّر المسار لإيجاد مساحة.',
      tip: 'أبقِ رأسك مرفوعاً.'
    },
    'Three Touch Roulette': {
      name: 'روليت ثلاث لمسات',
      desc: 'دوران من ثلاث لمسات للهروب المتقدم.',
      tip: 'تدرّب ببطء أولاً.'
    },
    'Heel to Ball Roll': {
      name: 'كعب إلى لف',
      desc: 'لمسة كعب نحو لف الكرة.',
      tip: 'ابدأ ببطء.'
    },
    'Drag Back Spin': {
      name: 'سحب ودوران',
      desc: 'اسحب للخلف ودُر للهروب.',
      tip: 'راقب المدافع.'
    },
    'In-Air Elastico (While juggling)': {
      name: 'إيلاستيكو جوي (أثناء التنطيط)',
      desc: 'إيلاستيكو صعب في الهواء أثناء التنطيط.',
      tip: 'يحتاج ممارسة.'
    },
    'Chest Flick (While juggling)': {
      name: 'لمسة الصدر (أثناء التنطيط)',
      desc: 'اضرب بالصدر أثناء التنطيط.',
      tip: 'جرّب ببطء.'
    },
    'Around the World (While juggling)': {
      name: 'حول العالم (أثناء التنطيط)',
      desc: 'دوران تنطيط كبير حول الكرة.',
      tip: 'عدّ الدورات.'
    },
    'Elastico': {
      name: 'إيلاستيكو',
      desc: 'حركة سريعة من الخارج للداخل لهزيمة اللاعبين.',
      tip: 'تدرّب على التوقيت.'
    },
    'Reverse Elastico': {
      name: 'إيلاستيكو عكسي',
      desc: 'إيلاستيكو عكسي للمفاجأة.',
      tip: 'جرّب بكلتا القدمين.'
    },
    'Advanced Rainbow': {
      name: 'قوس قزح متقدم',
      desc: 'قوس قزح خيالي يتطلب تحكماً.',
      tip: 'كن صبوراً.'
    },
    'Heel Flick Turn': {
      name: 'لمسة كعب ودوران',
      desc: 'لمسة كعب ثم دوران حاد.',
      tip: 'أتقن لمسة الكعب أولاً.'
    },
    'Sombrero Flick': {
      name: 'لمسة السومبريرو',
      desc: 'اقلب الكرة فوق الخصم.',
      tip: 'جرّب بلمسة ناعمة.'
    },
    'Antony Spin': {
      name: 'دوران أنتوني',
      desc: 'دوران سريع ولف لهزيمة المراقبين.',
      tip: 'استخدم المساحة للدوران.'
    },
    'Ball Roll Fake Turn': {
      name: 'لف مزيف ودوران',
      desc: 'لف مزيف نحو دوران.',
      tip: 'تدرّب على الاتجاهات.'
    },
    'Rabona Fake (While jogging)': {
      name: 'رابونا مزيفة (أثناء الهرولة)',
      desc: 'رابونا مزيفة خيالية لخداع المدافعين.',
      tip: 'افعلها أثناء الهرولة.'
    },
    'Elastico Chop': {
      name: 'إيلاستيكو وقطع',
      desc: 'إيلاستيكو ثم قطع للسرعة.',
      tip: 'صعب لكن رائع.'
    },
    'Spin Flick': {
      name: 'دوران سريع',
      desc: 'دوران سريع لفتح المساحة.',
      tip: 'تدرّب ببطء.'
    },
    'Heel Fake': {
      name: 'خداع بالكعب',
      desc: 'خداع بالكعب لإزاحة مدافع.',
      tip: 'جرّب ببطء أولاً.'
    },
    'Flair Rainbow': {
      name: 'قوس قزح أنيق',
      desc: 'قوس قزح لامع للاستعراض والهروب.',
      tip: 'استمتع به.'
    }
  }
};

// Get translated trick content (name, desc, or tip)
// Returns null if no translation exists (will fall back to English)
function getTrickTranslation(trickName, field) {
  if (currentLanguage === 'en') return null;
  const translations = TRICK_TRANSLATIONS[currentLanguage];
  if (!translations || !translations[trickName]) return null;
  return translations[trickName][field] || null;
}

// Translation dictionary for controller instruction words
// Button names (R2, R1, R3, L3, L2, L1, etc.) are NOT translated
const CONTROL_WORD_TRANSLATIONS = {
  fr: {
    'Hold': 'Maintiens',
    'hold': 'maintiens',
    'Flick': 'Pousse',
    'flick': 'pousse',
    'Rotate': 'Fais tourner',
    'rotate': 'fais tourner',
    'Click': 'Clique',
    'click': 'clique',
    'Press': 'Appuie',
    'press': 'appuie',
    'Tap': 'Tape',
    'tap': 'tape',
    'Square': 'Carré',
    'square': 'carré',
    'Circle': 'Rond',
    'circle': 'rond',
    'then': 'puis',
    'or': 'ou',
    'and': 'et',
    'up': 'haut',
    'down': 'bas',
    'left': 'gauche',
    'right': 'droite',
    'UP': 'HAUT',
    'DOWN': 'BAS',
    'LEFT': 'GAUCHE',
    'RIGHT': 'DROITE',
    'twice': 'deux fois',
    'clockwise': 'horaire',
    'anticlockwise': 'antihoraire',
    'top': 'haut',
    'bottom': 'bas',
    'sideways': 'côté',
    'fully': 'complètement',
    'quarters': 'quarts',
    'aim': 'vise',
    'with': 'avec',
    'while': 'pendant',
    'standing': 'immobile',
    'running': 'en courant',
    'jogging': 'en trottinant',
    'juggling': 'en jonglant',
    'pointing': 'pointant'
  },
  es: {
    'Hold': 'Mantén',
    'hold': 'mantén',
    'Flick': 'Mueve',
    'flick': 'mueve',
    'Rotate': 'Gira',
    'rotate': 'gira',
    'Click': 'Haz clic',
    'click': 'haz clic',
    'Press': 'Presiona',
    'press': 'presiona',
    'Tap': 'Toca',
    'tap': 'toca',
    'Square': 'Cuadrado',
    'square': 'cuadrado',
    'Circle': 'Círculo',
    'circle': 'círculo',
    'then': 'luego',
    'or': 'o',
    'and': 'y',
    'up': 'arriba',
    'down': 'abajo',
    'left': 'izquierda',
    'right': 'derecha',
    'UP': 'ARRIBA',
    'DOWN': 'ABAJO',
    'LEFT': 'IZQUIERDA',
    'RIGHT': 'DERECHA',
    'twice': 'dos veces',
    'clockwise': 'horario',
    'anticlockwise': 'antihorario',
    'top': 'arriba',
    'bottom': 'abajo',
    'sideways': 'lateral',
    'fully': 'completamente',
    'quarters': 'cuartos',
    'aim': 'apunta',
    'with': 'con',
    'while': 'mientras',
    'standing': 'parado',
    'running': 'corriendo',
    'jogging': 'trotando',
    'juggling': 'haciendo malabares',
    'pointing': 'apuntando'
  },
  ar: {
    'Hold': 'اضغط مع الاستمرار',
    'hold': 'اضغط مع الاستمرار',
    'Flick': 'حرّك',
    'flick': 'حرّك',
    'Rotate': 'أدر',
    'rotate': 'أدر',
    'Click': 'انقر',
    'click': 'انقر',
    'Press': 'اضغط',
    'press': 'اضغط',
    'Tap': 'اضغط بخفة',
    'tap': 'اضغط بخفة',
    'Square': 'مربع',
    'square': 'مربع',
    'Circle': 'دائرة',
    'circle': 'دائرة',
    'then': 'ثم',
    'or': 'أو',
    'and': 'و',
    'up': 'أعلى',
    'down': 'أسفل',
    'left': 'يسار',
    'right': 'يمين',
    'UP': 'أعلى',
    'DOWN': 'أسفل',
    'LEFT': 'يسار',
    'RIGHT': 'يمين',
    'twice': 'مرتين',
    'clockwise': 'مع عقارب الساعة',
    'anticlockwise': 'عكس عقارب الساعة',
    'top': 'أعلى',
    'bottom': 'أسفل',
    'sideways': 'جانبياً',
    'fully': 'كاملاً',
    'quarters': 'أرباع',
    'aim': 'صوّب',
    'with': 'مع',
    'while': 'أثناء',
    'standing': 'الوقوف',
    'running': 'الجري',
    'jogging': 'الهرولة',
    'juggling': 'التنطيط',
    'pointing': 'التوجيه'
  }
};

// Translate controller instruction text while preserving button names
function translateControlsString(input) {
  if (currentLanguage === 'en' || !input) return input;
  
  const wordMap = CONTROL_WORD_TRANSLATIONS[currentLanguage];
  if (!wordMap) return input;
  
  let result = input;
  
  // Replace each word while preserving button names (R2, R1, R3, L3, L2, L1)
  for (const [eng, trans] of Object.entries(wordMap)) {
    // Use word boundary regex to match whole words only
    const regex = new RegExp(`\\b${eng}\\b`, 'g');
    result = result.replace(regex, trans);
  }
  
  return result;
}

// Update all UI text elements with current language
function updateUIText() {
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = t('languageLabel');

  const sub = document.querySelector('.site-sub');
  if (sub) sub.textContent = t('siteSub');

  const starsLabel = document.getElementById('starsLabel');
  if (starsLabel) starsLabel.textContent = t('chooseStars');

  const todTitle = document.getElementById('todTitle');
  if (todTitle) todTitle.textContent = t('trickOfTheDay');

  const practiceChallenge = document.getElementById('practiceChallenge');
  if (practiceChallenge) practiceChallenge.textContent = t('practiceChallenge');

  const skillsTitle = document.getElementById('skillsTitle');
  if (skillsTitle) skillsTitle.textContent = t('skillsTitle');

  const teamTipPrefix = document.getElementById('teamTipPrefix');
  if (teamTipPrefix) teamTipPrefix.textContent = t('teamTipPrefix');

  const teamTipSuffix = document.getElementById('teamTipSuffix');
  if (teamTipSuffix) teamTipSuffix.textContent = t('teamTipSuffix');

  const gkNote = document.getElementById('gkNote');
  if (gkNote) gkNote.textContent = t('gkNote');

  const footerText = document.getElementById('footerText');
  if (footerText) footerText.textContent = t('footerText');

  // Star section headings (0..5)
  const starHeadings = document.querySelectorAll('[data-stars-heading]');
  starHeadings.forEach(el => {
    const stars = el.getAttribute('data-stars-heading');
    if (!stars) return;
    el.textContent = formatStarHeading(stars);
  });

  // Level buttons
  const allBtn = document.querySelector('.level-btn[data-level="all"]');
  if (allBtn) allBtn.textContent = t('all');

  const advancedTitle = document.getElementById('advancedTitle');
  if (advancedTitle) {
    advancedTitle.textContent = t('advancedAttacks');
  }
  
  const advancedBtn = document.getElementById('advancedAttacksBtn');
  if (advancedBtn) {
    advancedBtn.textContent = t('advancedAttacks');
  }

  // Tooltip texts in the static team tip (header)
  const r3Tooltip = document.getElementById('r3Tooltip');
  if (r3Tooltip) r3Tooltip.textContent = t('rightJoystick');
}

// Advanced Attacks translations
const ADVANCED_ATTACKS_TRANSLATIONS = {
  fr: {
    'Quick Tactics': 'Tactiques rapides',
    'Offside Trap': 'Piège du hors-jeu',
    'Team Press': 'Pressing collectif',
    'Extra Striker': 'Attaquant supplémentaire',
    'Get In The Box': 'Entrer dans la surface',
    'Tactical Focus': 'Focus tactique',
    'Default': 'Par défaut',
    'My Tactics': 'Mes tactiques',
    'Defending': 'Défense',
    'Attacking': 'Attaque',
    'Custom Tactic 1': 'Tactique personnalisée 1',
    'Custom Tactic 2': 'Tactique personnalisée 2',
    'Custom Tactic 3': 'Tactique personnalisée 3',
    'Custom Tactic 4': 'Tactique personnalisée 4',
    'Tactical Suggestions': 'Suggestions tactiques',
    'Tactic Suggestion 1': 'Suggestion tactique 1',
    'Tactic Suggestion 2': 'Suggestion tactique 2',
    'Tactic / Focus Suggestion': 'Suggestion tactique / focus',
    'Substitution': 'Remplacement'
  },
  es: {
    'Quick Tactics': 'Tácticas rápidas',
    'Offside Trap': 'Trampa del fuera de juego',
    'Team Press': 'Presión colectiva',
    'Extra Striker': 'Delantero extra',
    'Get In The Box': 'Entrar en el área',
    'Tactical Focus': 'Enfoque táctico',
    'Default': 'Predeterminado',
    'My Tactics': 'Mis tácticas',
    'Defending': 'Defensa',
    'Attacking': 'Ataque',
    'Custom Tactic 1': 'Táctica personalizada 1',
    'Custom Tactic 2': 'Táctica personalizada 2',
    'Custom Tactic 3': 'Táctica personalizada 3',
    'Custom Tactic 4': 'Táctica personalizada 4',
    'Tactical Suggestions': 'Sugerencias tácticas',
    'Tactic Suggestion 1': 'Sugerencia táctica 1',
    'Tactic Suggestion 2': 'Sugerencia táctica 2',
    'Tactic / Focus Suggestion': 'Sugerencia táctica / enfoque',
    'Substitution': 'Sustitución'
  },
  ar: {
    'Quick Tactics': 'تكتيكات سريعة',
    'Offside Trap': 'مصيدة التسلل',
    'Team Press': 'ضغط جماعي',
    'Extra Striker': 'مهاجم إضافي',
    'Get In The Box': 'الدخول للمنطقة',
    'Tactical Focus': 'تركيز تكتيكي',
    'Default': 'افتراضي',
    'My Tactics': 'تكتيكاتي',
    'Defending': 'الدفاع',
    'Attacking': 'الهجوم',
    'Custom Tactic 1': 'تكتيك مخصص 1',
    'Custom Tactic 2': 'تكتيك مخصص 2',
    'Custom Tactic 3': 'تكتيك مخصص 3',
    'Custom Tactic 4': 'تكتيك مخصص 4',
    'Tactical Suggestions': 'اقتراحات تكتيكية',
    'Tactic Suggestion 1': 'اقتراح تكتيكي 1',
    'Tactic Suggestion 2': 'اقتراح تكتيكي 2',
    'Tactic / Focus Suggestion': 'اقتراح تكتيكي / تركيز',
    'Substitution': 'استبدال'
  }
};

// Get translated advanced attack action name
function getAdvancedAttackTranslation(actionName) {
  if (currentLanguage === 'en') return actionName;
  const translations = ADVANCED_ATTACKS_TRANSLATIONS[currentLanguage];
  if (!translations) return actionName;
  return translations[actionName] || actionName;
}

// Current app state
let currentPlatform = 'ps'; // default to PlayStation

// Helpers
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

// UI elements
const platformButtons = $$('.platform-btn');
const levelButtons = $$('.level-btn');
let featuredCardContainer = null;
let starContainers = {};
// We'll query these elements when we initialize to avoid timing issues
function initContainers() {
  featuredCardContainer = $('#featuredCard');
  starContainers = {
    1: $('#stars-1'),
    2: $('#stars-2'),
    3: $('#stars-3'),
    4: $('#stars-4'),
    5: $('#stars-5')
  };
}

// The full list of tricks (name, stars, PS text, Xbox text, short desc, optional tip)
// Names and control ideas are taken from the list you gave. Short descriptions are kid-friendly.
const tricks = [
  // 1 Star
  // 5 Star (Spin Flick FC 25)
  { name: 'Spin Flick', stars: 5, ps: 'Hold L2 + hold R1 + flick R3 up then right', xbox: 'Hold LT + hold RB + flick R3 up then right', desc: 'A fast spin flick to open space.', tip: 'Practice slowly.' },
  { name: 'Directional Nutmeg', stars: 1, ps: 'Hold L1 + R1, flick R3', xbox: 'Hold LB + RB, flick R3', desc: 'Quick nutmeg to surprise a defender.', tip: 'Try slow first.' },
  { name: 'Ball Juggle (While standing)', stars: 1, ps: 'Hold L2, tap R1', xbox: 'Hold LT, tap RB', desc: 'Keep the ball in the air while standing.', tip: 'Count your taps.' },
  { name: 'Open Up Fake Shot', stars: 1, ps: 'Hold L1 + Square or Circle, then X (aim with L3)', xbox: 'Hold LB + X or B, then A (aim with L3)', desc: 'Fake a shot to open space.', tip: 'Pretend to shoot first.' },
  { name: 'Flick Up', stars: 1, ps: 'Click R3', xbox: 'Click R3', desc: 'Flick the ball up for a small lift.', tip: 'Use gently.' },
  { name: 'First Time Feint Turn', stars: 1, ps: 'Hold L1 + R1 and aim down with L3', xbox: 'Hold LB + RB and aim down with L3', desc: 'Quick turn after a touch to escape.', tip: 'Turn small amounts.' },

  // 2 Star
  { name: 'Feint Forward and Turn', stars: 2, ps: 'Flick R3 down twice', xbox: 'Flick R3 down twice', desc: 'Fake forward then turn quickly.', tip: 'Bend your body like a real player.' },
  { name: 'Body Feint Left/Right', stars: 2, ps: 'Flick R3 left or right', xbox: 'Flick R3 left or right', desc: 'Use your body to trick defenders.', tip: 'Shift your hips.' },
  { name: 'Stepover Left/Right', stars: 2, ps: 'Rotate R3 anticlockwise/clockwise top→bottom', xbox: 'Rotate R3 anticlockwise/clockwise top→bottom', desc: 'Step over the ball to confuse.', tip: 'Fast feet help.' },
  { name: 'Reverse Stepover Left/Right', stars: 2, ps: 'Rotate R3 clockwise/anticlockwise sideways→top', xbox: 'Rotate R3 clockwise/anticlockwise sideways→top', desc: 'Reverse stepovers catch defenders off-guard.', tip: 'Practice both ways.' },
  { name: 'Ball Roll Left/Right', stars: 2, ps: 'Hold R3 left or right', xbox: 'Hold R3 left or right', desc: 'Roll the ball to change direction.', tip: 'Keep it steady.' },
  { name: 'Drag Back', stars: 2, ps: 'L1 + R1 + flick R3 down', xbox: 'LB + RB + flick R3 down', desc: 'Pull the ball back to stop the play.', tip: 'Use near the sideline.' },

  // 3 Star
  { name: 'Heel Flick', stars: 3, ps: 'Flick R3 up then down', xbox: 'Flick R3 up then down', desc: 'Flick the heel to flick the ball forward.', tip: 'Try small flicks.' },
  { name: 'Roulette', stars: 3, ps: 'Rotate R3 3/4 clockwise or anticlockwise', xbox: 'Rotate R3 3/4 clockwise or anticlockwise', desc: 'Spin with the ball to escape.', tip: 'Keep balance.' },
  { name: 'Heel Chop (While running)', stars: 3, ps: 'Hold L2 + Square then X and choose direction', xbox: 'Hold LT + X then A and choose direction', desc: 'Cut the ball back while running.', tip: 'Use a small touch.' },
  { name: 'Stutter Feint', stars: 3, ps: 'Hold L2 + R3 left then right', xbox: 'Hold LT + R3 left then right', desc: 'Small stop and go to trick defenders.', tip: 'Use short pauses.' },

  // 4 Star
  { name: 'Ball Hop (While standing)', stars: 4, ps: 'Hold L1 + R3', xbox: 'Hold LB + R3', desc: 'Hop over the ball while standing.', tip: 'Stay light on your feet.' },
  { name: 'Ball Roll Drag', stars: 4, ps: 'Hold L1 + flick R3 up then left or right', xbox: 'Hold LB + flick R3 up then left or right', desc: 'Roll and drag to move away.', tip: 'Match it with a sprint.' },
  { name: 'Drag Back Turn', stars: 4, ps: 'Hold L2 + hold R3 down', xbox: 'Hold LT + hold R3 down', desc: 'Drag back then turn to change direction.', tip: 'Turn smoothly.' },
  { name: 'Flair Nutmegs', stars: 4, ps: 'Hold L1 + R1 and move R3', xbox: 'Hold LB + RB and move R3', desc: 'Fancy nutmegs for style and space.', tip: 'Try slow first.' },
  { name: 'Heel to Heel', stars: 4, ps: 'Flick R3 up then down', xbox: 'Flick R3 up then down', desc: 'Use heels to flick and move past.', tip: 'Be quick.' },
  { name: 'Simple Rainbow', stars: 4, ps: 'Flick R3 down then up', xbox: 'Flick R3 down then up', desc: 'A small rainbow trick to lift the ball.', tip: 'Use when close to a defender.' },
  { name: 'Stop and Turn', stars: 4, ps: 'Flick R3 up then left or right', xbox: 'Flick R3 up then left or right', desc: 'Stop then turn to lose a marker.', tip: 'Do it with confidence.' },
  { name: 'Ball Roll Cut Left/Right', stars: 4, ps: 'Hold R3 left + L3 right (or opposite)', xbox: 'Hold R3 left + L3 right (or opposite)', desc: 'Cut after a roll to cut inside.', tip: 'Practice the footwork.' },
  { name: 'Fake Pass (While standing)', stars: 4, ps: 'Hold R2 + Square then X', xbox: 'Hold RT + X then A', desc: 'Fake a pass to trick defenders.', tip: 'Make it look real.' },
  { name: 'Fake Pass Exit Left/Right', stars: 4, ps: 'Hold R2 + Square then X + aim with L3', xbox: 'Hold RT + X then A + aim with L3', desc: 'Fake pass then exit the other way.', tip: 'Aim with the left stick.' },
  { name: 'Quick Ball Rolls', stars: 4, ps: 'Hold R3 down', xbox: 'Hold R3 down', desc: 'Fast small rolls to change pace.', tip: 'Use short bursts.' },
  { name: 'Lane Change Left/Right', stars: 4, ps: 'Hold L1 + hold R3 left or right', xbox: 'Hold LB + hold R3 left or right', desc: 'Change lanes to find space.', tip: 'Keep your head up.' },
  { name: 'Three Touch Roulette', stars: 4, ps: 'Hold L2 + flick R3 down then left or right', xbox: 'Hold LT + flick R3 down then left or right', desc: 'A three-touch spin for advanced escape.', tip: 'Practice slowly first.' },
  { name: 'Heel to Ball Roll', stars: 4, ps: 'Hold L1 + flick R3 up then down', xbox: 'Hold LB + flick R3 up then down', desc: 'Heel touch into a roll.', tip: 'Start slowly.' },
  { name: 'Drag Back Spin', stars: 4, ps: 'Flick R3 down then left or right', xbox: 'Flick R3 down then left or right', desc: 'Drag back and spin to escape.', tip: 'Watch the defender.' },

  // 5 Star
  { name: 'In-Air Elastico (While juggling)', stars: 5, ps: 'Hold L2 + flick R3 right then left', xbox: 'Hold LT + flick R3 right then left', desc: 'A tricky in-air elastico while juggling.', tip: 'Needs practice.' },
  { name: 'Chest Flick (While juggling)', stars: 5, ps: 'Hold L2 + press R3 twice', xbox: 'Hold LT + press R3 twice', desc: 'Flick with the chest during juggling.', tip: 'Try slowly.' },
  { name: 'Around the World (While juggling)', stars: 5, ps: 'Hold L2 + rotate R3 fully clockwise', xbox: 'Hold LT + rotate R3 fully clockwise', desc: 'A big juggling spin around the ball.', tip: 'Count the rotations.' },
  { name: 'Elastico', stars: 5, ps: 'Rotate R3 two quarters clockwise', xbox: 'Rotate R3 two quarters clockwise', desc: 'A fast outside-inside move to beat players.', tip: 'Practice timing.' },
  { name: 'Reverse Elastico', stars: 5, ps: 'Rotate R3 two quarters anticlockwise', xbox: 'Rotate R3 two quarters anticlockwise', desc: 'Reverse elastico for surprise.', tip: 'Try with both feet.' },
  { name: 'Advanced Rainbow', stars: 5, ps: 'Flick R3 down, hold up, then flick up', xbox: 'Flick R3 down, hold up, then flick up', desc: 'A fancy rainbow trick requiring control.', tip: 'Be patient.' },
  { name: 'Heel Flick Turn', stars: 5, ps: 'Hold L2 + hold R1 + flick R3 up then down', xbox: 'Hold LT + hold RB + flick R3 up then down', desc: 'Heel flick then a sharp turn.', tip: 'Master the heel flick first.' },
  { name: 'Sombrero Flick', stars: 5, ps: 'Flick R3 up, up then down', xbox: 'Flick R3 up, up then down', desc: 'Flip the ball over an opponent.', tip: 'Try with soft touch.' },
  { name: 'Antony Spin', stars: 5, ps: 'Flick R3 up then left or right', xbox: 'Flick R3 up then left or right', desc: 'Quick turn and spin to beat markers.', tip: 'Use space to spin.' },
  { name: 'Ball Roll Fake Turn', stars: 5, ps: 'Hold L2 + flick R3 up, left then right', xbox: 'Hold LT + flick R3 up, left then right', desc: 'A fake roll into a turn.', tip: 'Practice directions.' },
  { name: 'Rabona Fake (While jogging)', stars: 5, ps: 'Hold L2 + Square then X while pointing L3 down', xbox: 'Hold LT + X then A while pointing L3 down', desc: 'A fancy rabona fake to trick defenders.', tip: 'Do it while jogging.' },
  { name: 'Elastico Chop', stars: 5, ps: 'Hold L2 + hold R1 + rotate R3 two quarters', xbox: 'Hold LT + hold RB + rotate R3 two quarters', desc: 'Elastico then a chop for speed.', tip: 'Hard but cool.' },
  { name: 'Spin Flick', stars: 5, ps: 'Hold L2 + hold R1 + flick R3 up then right', xbox: 'Hold LT + hold RB + flick R3 up then right', desc: 'A fast spin flick to open space.', tip: 'Practice slowly.' },
  { name: 'Heel Fake', stars: 5, ps: 'Hold L2 + flick R3 left then right', xbox: 'Hold LT + flick R3 left then right', desc: 'Heel fake to shift a defender.', tip: 'Try slow first.' },
  { name: 'Flair Rainbow', stars: 5, ps: 'Hold L1 + flick R3 down then up', xbox: 'Hold LB + flick R3 down then up', desc: 'A flashy rainbow for show and escape.', tip: 'Have fun with it.' }
];

// Utility: return all currently rendered card elements
function getAllCards() {
  // return only star-rated cards that live in the stars-container
  return $$('.stars-container .card');
}

// Create a single card element from trick data
function createCard(trick) {
  const a = document.createElement('article');
  a.className = 'card';
  a.dataset.stars = String(trick.stars);
  // CRITICAL: Keep English name in dataset for video tutorial matching
  a.dataset.name = trick.name;

  // Some tricks should never show a tutorial button/link (even if an alias map matches)
  const tutorialDisabled = new Set([
    'Ball Roll Fake Left/Right'
  ]);

  const h = document.createElement('h3');
  h.className = 'card-title';
  // Use translated name if available, otherwise use English
  const translatedName = getTrickTranslation(trick.name, 'name');
  h.textContent = translatedName || trick.name;
  a.appendChild(h);

  const stars = document.createElement('p');
  stars.className = 'stars';
  stars.textContent = '⭐'.repeat(trick.stars);
  a.appendChild(stars);

  // Controller: we keep platform strings in data attributes and let JS fill visible text
  const ctrl = document.createElement('p');
  ctrl.className = 'controller';
  ctrl.dataset.ps = trick.ps;
  ctrl.dataset.xbox = trick.xbox;
  ctrl.textContent = ''; // will be filled by updateControllers()
  a.appendChild(ctrl);

  const desc = document.createElement('p');
  desc.className = 'desc';
  // Use translated description if available, otherwise use English
  const translatedDesc = getTrickTranslation(trick.name, 'desc');
  desc.textContent = translatedDesc || trick.desc;
  a.appendChild(desc);

  if (trick.tip) {
    const tip = document.createElement('p');
    tip.className = 'tip';
    // Use translated tip if available, otherwise use English
    const translatedTip = getTrickTranslation(trick.name, 'tip');
    const tipText = translatedTip || trick.tip;
    tip.textContent = `${t('tipPrefix')} ${tipText}`;
    a.appendChild(tip);
  }

  // Video tutorials: map trick names to a YouTube link (only these will get buttons)
  const videoMap = {
    'Directional Nutmeg': 'https://www.youtube.com/watch?v=1qGlzjvKVU8',
    'Ball Juggle (While standing)': 'https://www.youtube.com/watch?v=XcfB3OuvBIQ',
    'Open Up Fake Shot': 'https://www.youtube.com/watch?v=X07lxmn6a9Q',
    'Flick Up': 'https://www.youtube.com/watch?v=mkHFQW_lvs8',
    'First Time Feint Turn': 'https://www.youtube.com/watch?v=QQTQOgWwqs0',
    'Feint Forward and Turn': 'https://www.youtube.com/watch?v=4cd-1cqD0bY',
    'Ball Roll Drag': 'https://www.youtube.com/watch?v=y_tIYN3oW20',
    'Drag Back Turn': 'https://www.youtube.com/watch?v=BwCFR7cjfVE',
    'Heel Flick': 'https://www.youtube.com/watch?v=1oRMggMvqa0',
    'Roulette': 'https://www.youtube.com/watch?v=wtnhqCjBSm0',
    'Body Feint Left/Right': 'https://www.youtube.com/watch?v=BwgOc7hI9p0',
    'Heel Chop (While running)': 'https://www.youtube.com/watch?v=iuzdaQ2eCuM',
    'Stutter Feint': 'https://www.youtube.com/shorts/OR4-6lGdZA4',
    'Ball Hop (While standing)': 'https://www.youtube.com/watch?v=ZyG7aG78q5w',
    'Flair Nutmegs': 'https://www.youtube.com/watch?v=ft71IH8kjbc',
    'Fake Pass (While standing)': 'https://www.youtube.com/shorts/ePDjix_zQ_c',
    'Heel to Heel': 'https://www.youtube.com/shorts/lQ7dv4qgtnU',
    'Stepover Left/Right': 'https://www.youtube.com/shorts/du-nWmDkioQ',
    'Reverse Stepover Left/Right': 'https://www.youtube.com/shorts/_lfUpSQ4f04',
    // Add Ball Roll tutorial (applies to ball roll variants)
    'Ball Roll Left/Right': 'https://www.youtube.com/watch?v=n2Zcs5vum0o',
    // Add Drag Back tutorial
    'Drag Back': 'https://www.youtube.com/watch?v=8AUmqIOGxSI',
    // Simple Rainbow tutorial
    'Simple Rainbow': 'https://www.youtube.com/watch?v=z7h16bz4brA',
    // Stop and Turn tutorial
    'Stop and Turn': 'https://www.youtube.com/watch?v=N1DkQZdQ5mE',
    // Ball Roll Cut Left/Right tutorial
    'Ball Roll Cut Left/Right': 'https://www.youtube.com/shorts/HZ9hQiMqo7c',
    'Fake Pass Exit Left/Right': 'https://www.youtube.com/shorts/uI4O_PyQS7w',
    'Lane Change Left/Right': 'https://www.youtube.com/watch?v=dctc9rfm9gk',
    'Three Touch Roulette': 'https://www.youtube.com/watch?v=ikvqj68huro',
    'Heel to Ball Roll': 'https://www.youtube.com/watch?v=FmepBtcb6pM',
    'Drag Back Spin': 'https://www.youtube.com/watch?v=PB2cWzrVq2o',
    'In-Air Elastico (While juggling)': 'https://www.youtube.com/watch?v=lWi8A4EfO2w',
    'Chest Flick (While juggling)': 'https://www.youtube.com/watch?v=nRwe7QsOWkk',
    'Around the World (While juggling)': 'https://www.youtube.com/watch?v=_ATi_d0ENOw',
    'Elastico': 'https://www.youtube.com/shorts/XHUChflS5Ow',
    'Reverse Elastico': 'https://www.youtube.com/shorts/686a_ZU1njY',
    'Advanced Rainbow': 'https://www.youtube.com/watch?v=XA56h_YqQGE',
    'Heel Flick Turn': 'https://www.youtube.com/watch?v=sKvH3xWIET8',
    'Sombrero Flick': 'https://www.youtube.com/watch?v=wK1ieRL143E',
    'Antony Spin': 'https://www.youtube.com/watch?v=cONe7nbR58E',
    'Ball Roll Fake Turn': 'https://www.youtube.com/watch?v=ZGViwrRXaPk',
    'Rabona Fake (While jogging)': 'https://www.youtube.com/watch?v=6gljcBNI4SQ',
    'Elastico Chop': 'https://www.youtube.com/watch?v=I6QG6KpuBSk',
    'Tornado Spin': 'https://www.youtube.com/watch?v=tI1zzP8Hdzg',
    'Spin Flick': 'https://www.youtube.com/watch?v=tI1zzP8Hdzg',
    'Heel Fake': 'https://www.youtube.com/shorts/plzTgR8CVPM',
    'Flair Rainbow': 'https://www.youtube.com/watch?v=e4IQxMrFBqA'
    
    



  };

  // First try exact match by trick name (safe and explicit)
  let videoUrl = videoMap[trick.name] || null;

  // Alias map for loose matches where the exact name may vary (keep this small and explicit)
  if (!videoUrl) {
    const lower = trick.name ? trick.name.toLowerCase() : '';
    const aliasMap = {
      'first time feint': videoMap['First Time Feint Turn'],
      'ball roll': videoMap['Ball Roll Left/Right'], // covers Ball Roll Drag / Cut / Fake variants
      'drag back': videoMap['Drag Back'] // alias for Drag Back
    };
    for (const akey in aliasMap) {
      if (aliasMap[akey] && lower.includes(akey)) {
        videoUrl = aliasMap[akey];
        break;
      }
    }
  }

  // Override: remove tutorial for specific tricks requested
  if (tutorialDisabled.has(trick.name)) {
    videoUrl = null;
  }

  // Debug: show whether we will add a tutorial button (helps during testing)
  if (videoUrl) {
    console.log('FC25: adding tutorial button for', trick.name, videoUrl);
  } else {
    console.log('FC25: no tutorial for', trick.name);
  }

  if (videoUrl) {
    // Create a visible anchor styled as a big button
    const watch = document.createElement('a');
    watch.className = 'watch-btn';
    watch.href = videoUrl;
    watch.target = '_blank';
    watch.rel = 'noopener noreferrer';
    // Use translated button text
    watch.textContent = t('watchTutorial');
    watch.setAttribute('aria-label', `Watch ${trick.name} tutorial (opens in new tab)`);

    // Prevent the anchor click from bubbling (anchor handles opening)
    watch.addEventListener('click', (e) => { e.stopPropagation(); });

    // Make the whole card clickable and keyboard accessible
    a.classList.add('has-video');
    a.tabIndex = 0; // make focusable
    a.setAttribute('role', 'link');
    a.setAttribute('aria-label', `${trick.name} — open tutorial in new tab`);

    // Click or keyboard opens the video in a new tab
    const openVideo = () => window.open(videoUrl, '_blank', 'noopener,noreferrer');
    a.addEventListener('click', openVideo);
    a.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideo(); } });

    a.appendChild(watch);
  }

  return a;
}

// Render all tricks into their star containers
function renderTricks() {
  // Clear each container (if present)
  for (let s = 1; s <= 5; s++) {
    if (starContainers[s]) starContainers[s].innerHTML = '';
  }

  // Append cards to proper container
  tricks.forEach((t, i) => {
    const card = createCard(t);
    // Light stagger index as CSS variable for animation
    card.style.setProperty('--delay', `${(i % 8) * 30}ms`);
    card.classList.add('animate-in');
    if (starContainers[t.stars]) {
      starContainers[t.stars].appendChild(card);
    }
  });

  // Update controller text now that cards are in DOM
  updateControllers();

  // Debugging: log counts
  const total = $$('.stars-container .card').length;
  console.log('FC25: rendered', total, 'star cards');
}

// Update visible controller text in all cards and featured area
function updateControllers() {
  const allCtrls = $$('.controller');
  allCtrls.forEach(ctrl => {
    let text = currentPlatform === 'ps' ? ctrl.dataset.ps : ctrl.dataset.xbox;
    // Translate instruction words while keeping button names
    text = translateControlsString(text);
    if (currentPlatform === 'ps') {
      // Replace all R3 and L3 (not inside HTML tags) with tooltip spans
      text = text.replace(/R3/g, `<span class="r3-tooltip" data-platform-only="ps">R3<span class="tooltip-text">${t('rightJoystick')}</span></span>`);
      text = text.replace(/L3/g, `<span class="l3-tooltip" data-platform-only="ps">L3<span class="tooltip-text">${t('leftJoystick')}</span></span>`);
      ctrl.innerHTML = text;
    } else {
      ctrl.textContent = text;
    }
  });

  // If featured shows a card, update it too (Trick of the Day)
  const featuredCtrl = featuredCardContainer ? featuredCardContainer.querySelector('.controller') : null;
  if (featuredCtrl) {
    let text = currentPlatform === 'ps' ? featuredCtrl.dataset.ps : featuredCtrl.dataset.xbox;
    // Translate instruction words while keeping button names
    text = translateControlsString(text);
    if (currentPlatform === 'ps') {
      text = text.replace(/R3/g, `<span class="r3-tooltip" data-platform-only="ps">R3<span class="tooltip-text">${t('rightJoystick')}</span></span>`);
      text = text.replace(/L3/g, `<span class="l3-tooltip" data-platform-only="ps">L3<span class="tooltip-text">${t('leftJoystick')}</span></span>`);
      featuredCtrl.innerHTML = text;
    } else {
      featuredCtrl.textContent = text;
    }
  }
}

// Show/hide elements that are platform-specific (e.g., images)
function updatePlatformOnlyElements() {
  // Expose the current platform to CSS
  if (document.body) document.body.dataset.platform = currentPlatform;

  const els = $$('[data-platform-only]');
  els.forEach(el => {
    const raw = (el.dataset.platformOnly || '').trim();
    const allowed = raw
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const show = allowed.length === 0 || allowed.includes(currentPlatform);
    el.hidden = !show;
    el.setAttribute('aria-hidden', show ? 'false' : 'true');
  });
}

// Set active style for platform buttons
function setActivePlatformButton() {
  platformButtons.forEach(btn => {
    const isActive = btn.dataset.platform === currentPlatform;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

// Filter by star level (all, 1..5)
function filterByLevel(level) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const all = getAllCards();

  // Hide/show trick cards
  all.forEach(card => {
    const stars = card.dataset.stars;
    const show = level === 'all' || stars === level;
    card.classList.toggle('hide', !show);
    card.classList.remove('animate-in');
    card.style.removeProperty('--delay');
  });

  if (!reduceMotion) {
    const visible = $$('.stars-container .card:not(.hide)');
    visible.forEach((c, i) => {
      requestAnimationFrame(() => {
        c.style.setProperty('--delay', `${i * 25}ms`);
        c.classList.add('animate-in');
      });
    });
  }

  // Hide or show entire star sections based on current filter. Use visible card counts so empty headings don't show.
  const sections = $$('.star-section');
  sections.forEach(section => {
    const s = section.dataset.stars;
    const isStatic = section.dataset.static === 'true';
    const visibleInSection = section.querySelectorAll('.card:not(.hide)').length;
    const totalInSection = section.querySelectorAll('.card').length;

    if (level === 'all') {
      const shouldHide = !isStatic && totalInSection === 0;
      section.classList.toggle('hide-section', shouldHide);
      section.setAttribute('aria-hidden', shouldHide ? 'true' : 'false');
    } else {
      const shouldShow = s === level && (isStatic || visibleInSection > 0);
      section.classList.toggle('hide-section', !shouldShow);
      section.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
    }
  });

  // Show/hide Advanced Attacks section
  const advSection = document.querySelector('.advanced-attacks-section');
  if (advSection) {
    if (level === 'advanced') {
      advSection.style.display = 'block';
    } else {
      advSection.style.display = 'none';
    }
  }

  // Hide tricks section if advanced is selected, show otherwise
  const tricksSection = document.querySelector('.tricks-section');
  if (tricksSection) {
    if (level === 'advanced') {
      tricksSection.style.display = 'none';
    } else {
      tricksSection.style.display = '';
    }
  }
}

// Pick a random trick from currently visible cards for featured area
function setTrickOfTheDay() {
  const visible = $$('.stars-container .card:not(.hide)');
  if (!featuredCardContainer) return;
  if (visible.length === 0) {
    // clear featured area when nothing is visible
    featuredCardContainer.innerHTML = '';
    console.log('FC25: no visible tricks for featured');
    return;
  }
  const pick = visible[Math.floor(Math.random() * visible.length)];
  console.log('FC25: picked trick for featured ->', pick.dataset.name);
  const clone = pick.cloneNode(true);

  // ensure controller text for the clone is correct, with tooltips for R3/L3
  const ctrl = clone.querySelector('.controller');
  if (ctrl) {
    let text = currentPlatform === 'ps' ? ctrl.dataset.ps : ctrl.dataset.xbox;
    text = translateControlsString(text);
    if (currentPlatform === 'ps') {
      text = text.replace(/R3/g, `<span class="r3-tooltip" data-platform-only="ps">R3<span class="tooltip-text">${t('rightJoystick')}</span></span>`);
      text = text.replace(/L3/g, `<span class="l3-tooltip" data-platform-only="ps">L3<span class="tooltip-text">${t('leftJoystick')}</span></span>`);
      ctrl.innerHTML = text;
    } else {
      ctrl.textContent = text;
    }
  }

  const funPracticeLines = getFunPracticeLines();

  const practice = document.createElement('p');
  practice.className = 'featured-practice';
  practice.textContent = funPracticeLines[Math.floor(Math.random() * funPracticeLines.length)];
  clone.appendChild(practice);

  featuredCardContainer.innerHTML = '';
  featuredCardContainer.appendChild(clone);
}

// Event bindings and initialization
function init() {
  // Load saved language first
  loadLanguage();
  applyLanguageDirection(currentLanguage);
  
  // Language selector
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.value = currentLanguage;
    languageSelect.addEventListener('change', () => {
      const nextLang = languageSelect.value;
      if (!I18N[nextLang]) return;
      currentLanguage = nextLang;
      saveLanguage(nextLang);

      applyLanguageDirection(nextLang);
      
      // Update UI text elements
      updateUIText();
      
      // Re-render all tricks with new language
      renderTricks();
      
      // Re-render advanced attacks with new language
      renderAdvancedAttacks();
      
      // Update Trick of the Day with new language
      setTrickOfTheDay();
      
      console.log('FC25: language changed to', nextLang);
    });
  }
  
  // Platform toggles
  if (platformButtons && platformButtons.length) {
    platformButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const platform = btn.dataset.platform;
        if (platform === currentPlatform) return;
        currentPlatform = platform;
        setActivePlatformButton();
        updateControllers();
        updatePlatformOnlyElements();
      });
    });
  }

  // Star filters (level buttons)
  if (levelButtons && levelButtons.length) {
    levelButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        levelButtons.forEach(b => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        const level = btn.dataset.level;
        filterByLevel(level);
        setTrickOfTheDay();
      });
    });
  }

  // Ensure we have the containers (may not have existed at parse time)
  initContainers();

  // First render and default UI
  updateUIText();
  renderTricks();
  renderAdvancedAttacks();
  setActivePlatformButton();
  updateControllers();
  updatePlatformOnlyElements();
  filterByLevel('all');
  setTrickOfTheDay();
}

// Start
document.addEventListener('DOMContentLoaded', init);


