// Special player info for search bar queries
const PLAYER_SEARCH_INFO = {
  "kylian mbappe": { club: "PSG", pos: "ST", rating: 91 },
  "alexia putellas": { club: "Barcelona", pos: "CAM", rating: 91 },
  "caroline graham hansen": { club: "Barcelona", pos: "RW", rating: 90 },
  "vinicius jr.": { club: "Real Madrid", pos: "LW", rating: 90 },
  "martin odegaard": { club: "Arsenal", pos: "CM", rating: 89 },
  "debinha": { club: "Kansas City Current", pos: "CF", rating: 88 },
  "beth mead": { club: "Arsenal", pos: "RW", rating: 88 },
  "paulo dybala": { club: "AS Roma", pos: "CAM", rating: 87 },
  "neymar jr": { club: "Al Hilal", pos: "LW", rating: 87 },
  "jamal musiala": { club: "Bayern Munich", pos: "CAM", rating: 87 },
  "sakina karchaoui": { club: "PSG", pos: "LB", rating: 87 },
  "lina magull": { club: "Inter Milan", pos: "CAM", rating: 87 },
  "cristiano ronaldo": { club: "Al Nassr", pos: "ST", rating: 86 },
  "rafael leao": { club: "AC Milan", pos: "LW", rating: 86 },
  "ousmane dembele": { club: "PSG", pos: "RW", rating: 86 },
  "lauren james": { club: "Chelsea", pos: "RW", rating: 86 },
  "khvicha kvaratskhelia": { club: "Napoli", pos: "LW", rating: 85 },
  "riyad mahrez": { club: "Al Ahli", pos: "RM", rating: 85 },
  "christopher nkunku": { club: "Chelsea", pos: "CAM", rating: 84 },
  "kingsley coman": { club: "Bayern Munich", pos: "LM", rating: 84 },
  "amel majri": { club: "Lyon", pos: "LW", rating: 84 },
  "marta": { club: "Orlando Pride", pos: "CAM", rating: 84 },
  "ella toone": { club: "Manchester United", pos: "CAM", rating: 84 },
  "lieke martens": { club: "PSG", pos: "LW", rating: 83 },
  "angel di maria": { club: "Benfica", pos: "RM", rating: 83 },
  "lucas paqueta": { club: "West Ham", pos: "LM", rating: 82 },
  "marcus rashford": { club: "Manchester United", pos: "LM", rating: 81 },
  "dzsenifer marozsan": { club: "Lyon", pos: "CM", rating: 81 },
  "wilfred zaha": { club: "Lyon", pos: "LM", rating: 81 },
  "luciano acosta": { club: "FC Cincinnati", pos: "CAM", rating: 81 },
  "roberto firmino": { club: "Al Ahli", pos: "CAM", rating: 80 },
  "allan saint-maximin": { club: "Fenerbache", pos: "LM", rating: 80 },
  "deyna castellanos": { club: "Bay FC", pos: "CM", rating: 80 },
  "nuno santos": { club: "Sporting CP", pos: "LM", rating: 80 },
  "joao felix": { club: "Chelsea", pos: "LW", rating: 80 },
  "david neres": { club: "Napoli", pos: "LM", rating: 80 },
  "hakim ziyech": { club: "Galatasaray", pos: "RM", rating: 80 },
  "noa lang": { club: "PSV", pos: "LW", rating: 79 },
  "juan cuadrado": { club: "Atalanta", pos: "RB", rating: 78 },
  "jessica silva": { club: "Benfica", pos: "ST", rating: 78 },
  "antony": { club: "Manchester United", pos: "RM", rating: 77 },
  "amine harit": { club: "Marseille", pos: "CM", rating: 76 },
  "chidera ejuke": { club: "Sevilla", pos: "LM", rating: 76 },
  "eduardo salvio": { club: "Lanus", pos: "RW", rating: 75 },
  "jota": { club: "Stade Rennais", pos: "LM", rating: 75 },
  "georginio rutter": { club: "Brighton", pos: "CAM", rating: 75 },
  "rayan cherki": { club: "Lyon", pos: "CAM", rating: 75 },
  "lopez munoz": { club: "San Jose Earthquakes", pos: "CAM", rating: 74 },
  "xherdan shaqiri": { club: "Basel", pos: "CAM", rating: 73 },
  "osame sahraoui": { club: "Heerenveen", pos: "LM", rating: 72 },
  "elias saad": { club: "St. Pauli", pos: "LW", rating: 71 },
  "taha abdi ali": { club: "Malmo", pos: "LM", rating: 68 },
};

function createPlayerInfoCard(name, info) {
  const card = document.createElement('article');
  card.className = 'card';
  const h = document.createElement('h3');
  h.className = 'card-title';
  h.textContent = name;
  card.appendChild(h);
  const meta = document.createElement('p');
  meta.className = 'desc';
  meta.textContent = `${info.club} • ${info.pos} • Rating: ${info.rating}`;
  card.appendChild(meta);
  const stars = document.createElement('p');
  stars.className = 'stars';
  stars.textContent = '⭐️⭐️⭐️⭐️⭐️ (5 Star)';
  card.appendChild(stars);
  const note = document.createElement('p');
  note.className = 'tip';
  note.textContent = 'This player is considered 5 star for skill moves.';
  card.appendChild(note);
  return card;
}
// Synonym dictionary for search (expand as needed)
const TRICK_SYNONYMS = {
  // 1-Star
  'directional nutmeg': ['l1+r1+rs', 'lb+rb+rs'],
  'ball juggle': ['standing juggle'],
  'open up fake shot': ['drag fake'],
  'flick up': ['r3 press', 'knee flick'],
  // 2-Star
  'ball roll': ['drag'],
  'body feint': ['shoulder feint'],
  'stepover': ['step over'],
  'reverse stepover': ['fake stepover'],
  'drag back': ['pivot', 'turn'],
  'big feint': ['l2/lt + flick rs'],
  // 3-Star
  'heel flick': ['heel-to-heel'],
  'roulette': ['360 spin'],
  'fake left and go right': ['drag back spin', 'roulette variant'],
  'heel chop': ['l2/lt + square/circle + x'],
  'stutter feint': ['fake turn'],
  // 4-Star
  'ball hop': ['l1+r3', 'hop'],
  'ball roll drag': ['ball roll + drag'],
  'drag back turn': ['pivot turn'],
  'flair nutmegs': ['flair nutmeg', '180 flair nutmeg'],
  'heel to heel': ['heel-to-heel flick'],
  'simple rainbow': ['flick up'],
  'spin right': ['mcgeady spin', 'bolasie spin'],
  'spin left': ['mcgeady spin', 'bolasie spin'],
  'stop and turn': ['180° turn'],
  'lane change': ['l1+hold rs', 'lateral heel-to-heel'],
  'three touch roulette': ['roulette variant'],
  'drag to heel': ['heel to ball roll'],
  'stop and go': ['l2/lt + rs back/forward'],
  'step over ball': ['l1/lb + flick rs'],
  // 5-Star
  'elastico': ['flip flap'],
  'reverse elastico': ['reverse flip flap'],
  'advanced rainbow': ['complex rainbow'],
  'hocus pocus': ['behind the back'],
  'triple elastico': ['three-way flip flap'],
  'sombrero flick': ['flick up', 'juggle'],
  'tornado spin': ['360 spin', '4-star spin'],
  'toe drag stepover': ['5-star fancy move'],
  'flair rainbow': ['advanced rainbow variant'],
};

// Helper: get all synonyms for a search term (including reverse lookup)
function getSynonymMatches(term) {
  const matches = new Set();
  const lowerTerm = term.toLowerCase();
  // Direct match
  if (TRICK_SYNONYMS[lowerTerm]) {
    TRICK_SYNONYMS[lowerTerm].forEach(s => matches.add(s));
  }
  // Reverse: if term is a synonym, add the main trick
  for (const [main, syns] of Object.entries(TRICK_SYNONYMS)) {
    if (syns.map(s => s.toLowerCase()).includes(lowerTerm)) {
      matches.add(main);
    }
  }
  return Array.from(matches);
}
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

// Debounce utility to reduce excessive function calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility to limit function execution rate
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Performance guards
const MIN_RENDER_INTERVAL = 100; // Minimum 100ms between renders

// Separate render guards so Advanced and Skills don't block each other
let _isRenderingAdvanced = false;
let _lastRenderTimeAdvanced = 0;
let _isRenderingTricks = false;
let _lastRenderTimeTricks = 0;

// Lazy rendering state (render skill cards only when needed)
let _tricksRendered = false;

// Search index (rebuilt when language changes)
let _searchIndexLanguage = null;
let _searchIndexTricks = []; // { trick, nameLower, translatedLower }
let _searchIndexAdvanced = []; // { attack, actionLower, translatedLower }

// Debug logging (console spam can cause noticeable lag)
const DEBUG = false;
function debugLog(...args) {
  if (DEBUG) console.log(...args);
}

function renderAdvancedAttacks() {
  const grid = document.querySelector('.advanced-cards-grid');
  if (!grid) return;
  
  // Performance guard: prevent rapid re-renders
  const now = Date.now();
  if (_isRenderingAdvanced || (now - _lastRenderTimeAdvanced < MIN_RENDER_INTERVAL)) {
    return;
  }
  _isRenderingAdvanced = true;
  _lastRenderTimeAdvanced = now;
  
  // Use document fragment for better performance
  const fragment = document.createDocumentFragment();
  
  advancedAttacks.forEach(item => {
    const card = document.createElement('div');
    card.className = 'advanced-card';
    card.style.position = 'relative';
    
    // Translate the action name
    const translatedAction = getAdvancedAttackTranslation(item.action);
    
    // Translate the D-Pad instructions
    let translatedPs = translateControlsString(item.ps);
    // Wrap D-Pad with tooltip (use negative lookahead to avoid double-wrapping)
    translatedPs = translatedPs.replace(/D-Pad(?![^<]*<\/span>)/gi, `<span class="dpad-tooltip">D-Pad<span class="tooltip-text">${t('arrowKeys')}</span></span>`);
    // PS5-only UI: we keep the data, but don't display Xbox
    
    // Build card content first
    card.innerHTML = `
      <div class="action-title">${translatedAction}</div>
      <div class="controls-row"><span class="controls-label">${t('playstationLabel')}</span> ${translatedPs}</div>
    `;
    
    fragment.appendChild(card);
  });
  
  // Single DOM update
  grid.innerHTML = '';
  grid.appendChild(fragment);
  
  // Release rendering lock
  requestAnimationFrame(() => {
    _isRenderingAdvanced = false;
  });
}

/* FC25 Tricks Manual — script.js
   Renders tricks by star rating and handles platform toggling.
   Clean and simple so kids can read the code.
*/

// Language system
let currentLanguage = 'en';

// Search results storage
let currentSearchResults = [];
let currentSearchTerm = '';

// Search filter state (single-select)
// Values: 'all', 'skills', 'advanced', '0'..'5'.
let currentSearchFilter = 'all';

// Main page filter state (multi-select)
let mainSelectedStars = new Set(); // '0'..'5'
let mainShowAdvanced = true;
let onlyAdvancedMode = false; // Track if we're in "only advanced" mode

// Remember previous state when toggling Advanced-only view
let _savedMainViewState = null;

function computeEffectiveStarsSet(selectedStars) {
  if (!selectedStars || selectedStars.size === 0) return null; // null => all stars

  const numeric = Array.from(selectedStars)
    .map(s => parseInt(s, 10))
    .filter(n => Number.isFinite(n));

  if (numeric.length === 0) return null;

  // Exact match only (the "selected star and above" setting has been removed)
  return new Set(numeric.map(n => String(n)));
}

function updateLevelButtonsUI() {
  const allStarsSelected = mainSelectedStars.size === 6 &&
                          mainSelectedStars.has('0') &&
                          mainSelectedStars.has('1') &&
                          mainSelectedStars.has('2') &&
                          mainSelectedStars.has('3') &&
                          mainSelectedStars.has('4') &&
                          mainSelectedStars.has('5');
  
  levelButtons.forEach(btn => {
    const level = btn.dataset.level;
    let isActive = false;

    if (level === 'all') {
      // "All" is active if explicitly showing everything OR if all individual stars are selected
      isActive = (mainSelectedStars.size === 0 && mainShowAdvanced && !onlyAdvancedMode) || allStarsSelected;
    } else if (level === 'advanced') {
      // Advanced is active when mainShowAdvanced is true
      isActive = mainShowAdvanced;
    } else {
      // Individual star buttons only active if NOT all selected
      isActive = !allStarsSelected && mainSelectedStars.has(level);
    }

    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function updateSearchFilterButtonsUI() {
  const buttons = Array.from(document.querySelectorAll('.search-filter-btn'));
  buttons.forEach(btn => {
    const filter = btn.dataset.filter;
    const isActive = (currentSearchFilter || 'all') === filter;
    btn.classList.toggle('active', isActive);
  });
}

function applyMainFilters() {
  // Advanced-only view: show only the advanced attacks section
  if (onlyAdvancedMode) {
    const tricksSection = document.getElementById('tricks');
    const featuredSection = document.getElementById('featured');
    const recentlyViewedSection = document.getElementById('recently-viewed');
    const searchResultsSection = document.getElementById('search-results');
    const advSection = document.querySelector('.advanced-attacks-section');

    if (tricksSection) tricksSection.style.display = 'none';
    if (featuredSection) featuredSection.style.display = 'none';
    if (recentlyViewedSection) recentlyViewedSection.style.display = 'none';
    if (searchResultsSection) searchResultsSection.style.display = 'none';
    if (advSection) advSection.style.display = 'block';
    return;
  }

  // Avoid initial-load jank: don't render all skill cards unless we're showing them.
  if (!onlyAdvancedMode) {
    ensureTricksRendered();
  }

  const tricksSection = document.getElementById('tricks');
  const featuredSection = document.getElementById('featured');
  const recentlyViewedSection = document.getElementById('recently-viewed');
  
  if (tricksSection) tricksSection.style.display = '';
  if (featuredSection) featuredSection.style.display = '';
  
  // Re-show Recently Viewed if it has content
  if (recentlyViewedSection) {
    const recentNames = getRecentlyViewed();
    recentlyViewedSection.style.display = recentNames.length > 0 ? 'block' : 'none';
  }

  const advSection = document.querySelector('.advanced-attacks-section');
  if (advSection) advSection.style.display = mainShowAdvanced ? 'block' : 'none';

  const effectiveStars = computeEffectiveStarsSet(mainSelectedStars);
  const allCards = getAllCards();

  requestAnimationFrame(() => {
    const visibleCountByStars = {};
    const totalCountByStars = {};

    allCards.forEach(card => {
      const stars = card.dataset.stars;
      totalCountByStars[stars] = (totalCountByStars[stars] || 0) + 1;
      const show = !effectiveStars || effectiveStars.has(stars);
      card.classList.toggle('hide', !show);
      card.classList.remove('animate-in');
      card.style.removeProperty('--delay');
      if (show) visibleCountByStars[stars] = (visibleCountByStars[stars] || 0) + 1;
    });

    const sections = $$('.star-section');
    sections.forEach(section => {
      const s = String(section.dataset.stars);
      const isStatic = section.dataset.static === 'true';
      const visibleInSection = visibleCountByStars[s] || 0;
      const totalInSection = totalCountByStars[s] || 0;

      if (!effectiveStars) {
        const shouldHide = !isStatic && totalInSection === 0;
        section.classList.toggle('hide-section', shouldHide);
        section.setAttribute('aria-hidden', shouldHide ? 'true' : 'false');
      } else {
        const shouldShow = effectiveStars.has(s) && (isStatic || visibleInSection > 0);
        section.classList.toggle('hide-section', !shouldShow);
        section.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
      }
    });
  });
}

function toggleMainFilter(level) {
  // Any main filter interaction cancels search input
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const searchResultsSection = document.getElementById('search-results');
  if (searchInput && searchInput.value) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  if (searchResultsSection) searchResultsSection.style.display = 'none';
  currentSearchTerm = '';
  currentSearchResults = [];
  currentSearchFilter = 'all';
  updateSearchFilterButtonsUI();

  if (level === 'favorites') {
    mainFavoritesMode = !mainFavoritesMode;
    if (!mainFavoritesMode) {
      mainSelectedStars.clear();
      mainShowAdvanced = true;
    }
    updateLevelButtonsUI();
    applyMainFilters();
    setTrickOfTheDay();
    return;
  }

  mainFavoritesMode = false;

  if (level === 'all') {
    mainSelectedStars.clear();
    mainShowAdvanced = true;
    onlyAdvancedMode = false;
  } else if (level === 'advanced') {
    // Toggle Advanced-only view
    if (onlyAdvancedMode) {
      // Exit Advanced-only: restore previous view (or default to All)
      if (_savedMainViewState) {
        mainSelectedStars = new Set(_savedMainViewState.selectedStars || []);
        mainShowAdvanced = Boolean(_savedMainViewState.showAdvanced);
      } else {
        mainSelectedStars.clear();
        mainShowAdvanced = true;
      }
      onlyAdvancedMode = false;
      _savedMainViewState = null;
    } else {
      // Enter Advanced-only: save current view state
      _savedMainViewState = {
        selectedStars: Array.from(mainSelectedStars),
        showAdvanced: mainShowAdvanced
      };
      mainSelectedStars.clear();
      mainShowAdvanced = true;
      onlyAdvancedMode = true;
    }
  } else {
    // When clicking a star, turn off Advanced Attacks
    mainShowAdvanced = false;
    onlyAdvancedMode = false;
    
    // Check if multi-select is enabled
    const multiSelectEnabled = getMultiSelectEnabled();
    
    if (multiSelectEnabled) {
      // Multi-select mode: toggle the clicked star
      if (mainSelectedStars.has(level)) mainSelectedStars.delete(level);
      else mainSelectedStars.add(level);
    } else {
      // Single-select mode: clear all and select only the clicked star
      if (mainSelectedStars.has(level) && mainSelectedStars.size === 1) {
        // If clicking the only selected star, deselect it
        mainSelectedStars.clear();
      } else {
        // Select only the clicked star
        mainSelectedStars.clear();
        mainSelectedStars.add(level);
      }
    }
  }

  updateLevelButtonsUI();

  // Only Advanced mode doesn't need the full skill list rendered.
  if (!onlyAdvancedMode) {
    ensureTricksRendered();
  }

  applyMainFilters();
  setTrickOfTheDay();
}

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

// Theme functions
function getTheme() {
  return localStorage.getItem('fc25_theme') || 'dark';
}

function setTheme(theme) {
  const normalized = theme === 'light' ? 'light' : 'dark';
  localStorage.setItem('fc25_theme', normalized);
  applyTheme(normalized);

  // Update active state everywhere (header + settings)
  document.querySelectorAll('.theme-btn, .theme-option').forEach(btn => {
    const isActive = btn.dataset.theme === normalized;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

// Multi-select setting
function getMultiSelectEnabled() {
  const saved = localStorage.getItem('fc25_multiSelect');
  return saved === null ? true : saved === 'true';
}

function setMultiSelectEnabled(enabled) {
  localStorage.setItem('fc25_multiSelect', String(enabled));
}

// Recently Viewed localStorage functions
function getRecentlyViewed() {
  const stored = localStorage.getItem('fc25_recent');
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    return [];
  }
}

function addToRecentlyViewed(trickName) {
  let recent = getRecentlyViewed();
  // Remove if already exists
  recent = recent.filter(name => name !== trickName);
  // Add to front
  recent.unshift(trickName);
  // Keep only last 5
  recent = recent.slice(0, 5);
  localStorage.setItem('fc25_recent', JSON.stringify(recent));
  renderRecentlyViewed();
}

// UI translations for labels, headings, buttons
const I18N = {
  en: {
    siteTitle: 'FC25 Tricks Manual',
    watchTutorial: '▶ Watch Tutorial',
    advancedAttacks: 'Advanced Attacks',
    languageLabel: 'Language',
    siteSub: 'Learn cool tricks • Beat defenders • Have fun! ⚽',
    chooseStars: 'Choose Stars',
    all: 'All',
    recentlyViewed: 'Recently Viewed',
    trickOfTheDay: 'Trick of the Day ✨',
    practiceChallenge: "Practice challenge: Try it 5 times in a row!",
    skillsTitle: 'Skill Moves',
    teamTipPrefix: "💡 How to check player stars: Go to Team, then press ",
    teamTipSuffix: ' on any player',
    gkNote: '⚽ Goalkeepers can do these too!',
    footerText: 'Made for young players • Keep practicing! ⚽',
    playstationLabel: 'PlayStation:',
    xboxLabel: 'Xbox:',
    tipPrefix: '💡 Tip:',
    rightJoystick: 'Right Joystick',
    leftJoystick: 'Left Joystick',
    arrowKeys: 'Arrow Keys',
    searchLabel: 'Search Tricks',
    searchPlaceholder: 'Type trick name...',
    searchResultsTitle: 'Search Results',
    noResultsMsg: 'No tricks found',
    resultsCount: '{count} trick(s) found',
    searchFilterLabel: 'Show only:',
    filterSkills: 'Skills',
    filterAdvanced: 'Advanced Attacks',
    settings: 'Settings',
    theme: 'Theme',
    themeDark: 'Dark',
    themeLight: 'Light',
    themeChanged: 'Theme changed!',
    dataManagement: 'My Data',
    displayOptions: 'How it Looks',
    clearRecentText: 'Clear Recently Viewed',
    clearFavoritesText: 'Clear All Favorites',
    resetAllText: 'Reset Everything',
    showControllerText: 'Show Controller Picture',
    animationsText: 'Cool Animations',
    multiSelectText: 'Pick Multiple Stars',
    showRecentlyViewedText: 'Show Recently Viewed',
    bgDefault: 'Default',
    bgGradient: 'Gradient',
    bgPitch: 'Pitch',
    bgMinimal: 'Minimal',
    confirmClearRecent: 'Delete all recently viewed tricks?',
    confirmClearFavorites: 'Delete all favorite tricks?',
    confirmResetAll: 'Reset everything? You cannot undo this!',
    recentCleared: 'Recently viewed cleared!',
    favoritesCleared: 'Favorites cleared!',
    allReset: 'Everything reset!',
    pdfBtnLabel: 'PDF',
    pdfModalTitle: 'Make a PDF',
    pdfModalDesc: 'Pick which tricks you want to print:',
    pdfStarsLabel: 'Pick star levels:',
    pdfAllStarsBtn: 'All',
    pdfSkillSection: 'Include skill moves',
    pdfAdvancedSection: 'Include advanced attacks',
    pdfClearSelection: 'Clear All',
    pdfGenerate: 'Make PDF',
    pdfCustomLabel: 'Pick specific tricks',
    pdfCustomSearchPlaceholder: 'Search tricks...',
    pdfCustomSkillsLabel: 'Skill moves:',
    pdfCustomAdvancedLabel: 'Advanced attacks:',
    pdfSelectSomethingAlert: 'Pick at least one star or some tricks first!'
  },
  fr: {
    siteTitle: 'Manuel de gestes FC25',
    watchTutorial: '▶ Voir le tuto',
    advancedAttacks: 'Attaques avancées',
    languageLabel: 'Langue',
    siteSub: 'Apprends les gestes. Bats les défenseurs. Amuse-toi.',
    chooseStars: 'Choisir les étoiles',
    all: 'Tous',
    recentlyViewed: 'Vus récemment',
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
    leftJoystick: 'Joystick gauche',
    arrowKeys: 'Flèches directionnelles',
    searchLabel: 'Rechercher',
    searchPlaceholder: 'Nom du geste...',
    searchResultsTitle: 'Résultats de recherche',
    noResultsMsg: 'Aucun résultat',
    resultsCount: '{count} geste(s) trouvé(s)',
    searchFilterLabel: 'Filtrer par:',
    filterSkills: 'Gestes',
    filterAdvanced: 'Attaques avancées',
    settings: 'Paramètres',
    theme: 'Thème',
    themeDark: 'Sombre',
    themeLight: 'Clair',
    themeChanged: 'Thème changé!',
    dataManagement: 'Gestion des données',
    displayOptions: 'Options d\'affichage',
    clearRecentText: 'Effacer les vus récemment',
    clearFavoritesText: 'Effacer tous les favoris',
    resetAllText: 'Réinitialiser tout',
    showControllerText: 'Afficher l\'image du contrôleur',
    animationsText: 'Activer les animations',
    multiSelectText: 'Permettre la sélection multiple d\'étoiles',
    showRecentlyViewedText: 'Afficher les vus récemment',
    confirmClearRecent: 'Effacer tous les gestes vus récemment?',
    confirmClearFavorites: 'Effacer tous les gestes favoris?',
    confirmResetAll: 'Réinitialiser tous les paramètres et données? Cette action est irréversible.',
    recentCleared: 'Historique effacé!',
    favoritesCleared: 'Favoris effacés!',
    allReset: 'Tous les paramètres réinitialisés!',
    pdfBtnLabel: 'PDF',
    pdfModalTitle: 'Contenu PDF',
    pdfModalDesc: 'Choisis les niveaux d\'étoiles et les sections à inclure :',
    pdfStarsLabel: 'Sélectionne les étoiles :',
    pdfAllStarsBtn: 'Tous',
    pdfSkillSection: 'Inclure les gestes',
    pdfAdvancedSection: 'Inclure les attaques avancées',
    pdfClearSelection: 'Tout effacer',
    pdfGenerate: 'Générer PDF',
    pdfCustomLabel: 'Choix personnalisé',
    pdfCustomSearchPlaceholder: 'Rechercher dans la liste...',
    pdfCustomSkillsLabel: 'Gestes :',
    pdfCustomAdvancedLabel: 'Attaques avancées :',
    pdfSelectSomethingAlert: 'Choisis au moins une étoile ou sélectionne des gestes personnalisés.'
  },
  es: {
    siteTitle: 'Manual de trucos FC25',
    watchTutorial: '▶ Ver tutorial',
    advancedAttacks: 'Ataques avanzados',
    languageLabel: 'Idioma',
    siteSub: 'Aprende skills. Supera defensas. Diviértete.',
    chooseStars: 'Elegir estrellas',
    all: 'Todas',
    recentlyViewed: 'Vistos recientemente',
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
    leftJoystick: 'Joystick izquierdo',
    arrowKeys: 'Teclas de flecha',
    searchLabel: 'Buscar trucos',
    searchPlaceholder: 'Escribe nombre...',
    searchResultsTitle: 'Resultados de búsqueda',
    noResultsMsg: 'Sin resultados',
    resultsCount: '{count} truco(s) encontrado(s)',
    searchFilterLabel: 'Filtrar por:',
    filterSkills: 'Regates',
    filterAdvanced: 'Ataques avanzados',
    settings: 'Configuración',
    theme: 'Tema',
    themeDark: 'Oscuro',
    themeLight: 'Claro',
    themeChanged: '¡Tema cambiado!',
    dataManagement: 'Gestión de datos',
    displayOptions: 'Opciones de visualización',
    clearRecentText: 'Borrar vistos recientemente',
    resetAllText: 'Restablecer todo',
    showControllerText: 'Mostrar imagen del mando',
    animationsText: 'Activar animaciones',
    multiSelectText: 'Permitir selección múltiple de estrellas',
    showRecentlyViewedText: 'Mostrar vistos recientemente',
    confirmClearRecent: '¿Borrar todos los trucos vistos recientemente?',
    confirmClearFavorites: '¿Borrar todos los trucos favoritos?',
    confirmResetAll: '¿Restablecer toda la configuración y datos? Esta acción no se puede deshacer.',
    recentCleared: '¡Historial borrado!',
    favoritesCleared: '¡Favoritos borrados!',
    allReset: '¡Configuración restablecida!',
    pdfBtnLabel: 'PDF',
    pdfModalTitle: 'Contenido PDF',
    pdfModalDesc: 'Selecciona qué niveles de estrellas y secciones incluir:',
    pdfStarsLabel: 'Selecciona estrellas:',
    pdfAllStarsBtn: 'Todas',
    pdfSkillSection: 'Incluir regates',
    pdfAdvancedSection: 'Incluir ataques avanzados',
    pdfClearSelection: 'Borrar todo',
    pdfGenerate: 'Generar PDF',
    pdfCustomLabel: 'Selección personalizada',
    pdfCustomSearchPlaceholder: 'Buscar en la lista...',
    pdfCustomSkillsLabel: 'Regates:',
    pdfCustomAdvancedLabel: 'Ataques avanzados:',
    pdfSelectSomethingAlert: 'Selecciona al menos una estrella o elige movimientos personalizados.'
  },
  ar: {
    siteTitle: 'دليل مهارات FC25',
    watchTutorial: '▶ شاهد الفيديو',
    advancedAttacks: 'هجمات متقدمة',
    languageLabel: 'اللغة',
    siteSub: 'تعلّم المهارات. راوغ المدافعين. استمتع.',
    chooseStars: 'اختر النجوم',
    all: 'الكل',
    recentlyViewed: 'شوهدت مؤخراً',
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
    leftJoystick: 'العصا اليسرى',
    arrowKeys: 'أزرار الاتجاه',
    searchLabel: 'بحث',
    searchPlaceholder: 'اسم المهارة...',
    searchResultsTitle: 'نتائج البحث',
    noResultsMsg: 'لا توجد نتائج',
    resultsCount: '{count} مهارة',
    searchFilterLabel: 'تصفية حسب:',
    filterSkills: 'المهارات',
    filterAdvanced: 'الهجمات المتقدمة',
    settings: 'الإعدادات',
    theme: 'السمة',
    themeDark: 'داكن',
    themeLight: 'فاتح',
    themeChanged: 'تم تغيير السمة!',
    dataManagement: 'إدارة البيانات',
    displayOptions: 'خيارات العرض',
    clearRecentText: 'مسح المشاهدة الأخيرة',
    clearFavoritesText: 'مسح كل المفضلة',
    resetAllText: 'إعادة تعيين الكل',
    showControllerText: 'إظهار صورة وحدة التحكم',
    animationsText: 'تفعيل الرسوم المتحركة',
    multiSelectText: 'السماح باختيار نجوم متعددة',
    showRecentlyViewedText: 'إظهار المشاهدة الأخيرة',
    confirmClearRecent: 'مسح كل الحركات المشاهدة مؤخراً؟',
    confirmClearFavorites: 'مسح كل الحركات المفضلة؟',
    confirmResetAll: 'إعادة تعيين جميع الإعدادات والبيانات؟ لا يمكن التراجع عن ذلك.',
    recentCleared: 'تم مسح السجل!',
    favoritesCleared: 'تم مسح المفضلة!',
    allReset: 'تمت إعادة تعيين جميع الإعدادات!',
    pdfBtnLabel: 'PDF',
    pdfModalTitle: 'محتوى PDF',
    pdfModalDesc: 'اختر مستويات النجوم والأقسام المطلوبة:',
    pdfStarsLabel: 'اختر النجوم:',
    pdfAllStarsBtn: 'الكل',
    pdfSkillSection: 'تضمين المهارات',
    pdfAdvancedSection: 'تضمين الهجمات المتقدمة',
    pdfClearSelection: 'مسح الكل',
    pdfGenerate: 'إنشاء PDF',
    pdfCustomLabel: 'اختيار مخصص',
    pdfCustomSearchPlaceholder: 'ابحث في القائمة...',
    pdfCustomSkillsLabel: 'المهارات:',
    pdfCustomAdvancedLabel: 'الهجمات المتقدمة:',
    pdfSelectSomethingAlert: 'اختر نجمة واحدة على الأقل أو اختر مهارات مخصصة.'
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
  const siteTitle = document.querySelector('.site-title');
  if (siteTitle) siteTitle.textContent = 'FC25 & FC26 Tricks Manual';
  
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = t('languageLabel');

  const sub = document.querySelector('.site-sub');
  if (sub) sub.textContent = t('siteSub');

  const starsLabel = document.getElementById('starsLabel');
  if (starsLabel) starsLabel.textContent = t('chooseStars');

  const todTitle = document.getElementById('todTitle');
  if (todTitle) todTitle.textContent = t('trickOfTheDay');
  
  const recentlyViewedTitle = document.getElementById('recentlyViewedTitle');
  if (recentlyViewedTitle) recentlyViewedTitle.textContent = t('recentlyViewed');

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

  const favoritesBtn = document.getElementById('favoritesBtn');
  if (favoritesBtn) {
    favoritesBtn.textContent = '❤ ' + t('favorites');
  }

  // Tooltip texts in the static team tip (header)
  const r3Tooltip = document.getElementById('r3Tooltip');
  if (r3Tooltip) r3Tooltip.textContent = t('rightJoystick');

  // Search box
  const searchLabel = document.getElementById('searchLabel');
  if (searchLabel) searchLabel.textContent = t('searchLabel');
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');
  
  const searchResultsTitle = document.getElementById('searchResultsTitle');
  if (searchResultsTitle) searchResultsTitle.textContent = t('searchResultsTitle');
  
  const noResultsMsg = document.getElementById('noResultsMsg');
  if (noResultsMsg) noResultsMsg.textContent = t('noResultsMsg');
  
  const searchFilterLabel = document.getElementById('searchFilterLabel');
  if (searchFilterLabel) searchFilterLabel.textContent = t('searchFilterLabel');
  
  const searchFilterSkills = document.getElementById('searchFilterSkills');
  if (searchFilterSkills) searchFilterSkills.textContent = t('filterSkills');
  
  const searchFilterAdvanced = document.getElementById('searchFilterAdvanced');
  if (searchFilterAdvanced) searchFilterAdvanced.textContent = t('filterAdvanced');
  
  // Settings text
  const multiSelectText = document.getElementById('multiSelectText');
  if (multiSelectText) multiSelectText.textContent = t('multiSelectText');
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

// Cache frequently used selectors for better performance
let cachedSelectors = {};
function getCached(selector) {
  if (!cachedSelectors[selector]) {
    cachedSelectors[selector] = document.querySelector(selector);
  }
  return cachedSelectors[selector];
}

function clearSelectorCache() {
  cachedSelectors = {};
}

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

// Tutorial mapping (define once for performance)
const TUTORIAL_DISABLED = new Set([
  'Ball Roll Fake Left/Right'
]);

const VIDEO_MAP = {
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
  'Ball Roll Left/Right': 'https://www.youtube.com/watch?v=n2Zcs5vum0o',
  'Drag Back': 'https://www.youtube.com/watch?v=8AUmqIOGxSI',
  'Simple Rainbow': 'https://www.youtube.com/watch?v=z7h16bz4brA',
  'Stop and Turn': 'https://www.youtube.com/watch?v=N1DkQZdQ5mE',
  'Ball Roll Cut Left/Right': 'https://www.youtube.com/shorts/HZ9hQiMqo7c',
  'Quick Ball Rolls': 'https://www.youtube.com/shorts/HqLgGi8xHFM',
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

const VIDEO_ALIAS_MAP = {
  'first time feint': VIDEO_MAP['First Time Feint Turn'],
  'ball roll': VIDEO_MAP['Ball Roll Left/Right'],
  'drag back': VIDEO_MAP['Drag Back']
};

// Create a single card element from trick data
function createCard(trick) {
  const a = document.createElement('article');
  a.className = 'card';
  a.dataset.stars = String(trick.stars);
  // CRITICAL: Keep English name in dataset for video tutorial matching
  a.dataset.name = trick.name;

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
  let videoUrl = VIDEO_MAP[trick.name] || null;

  // Alias map for loose matches where the exact name may vary (keep this small and explicit)
  if (!videoUrl) {
    const lower = trick.name ? trick.name.toLowerCase() : '';
    for (const akey in VIDEO_ALIAS_MAP) {
      if (VIDEO_ALIAS_MAP[akey] && lower.includes(akey)) {
        videoUrl = VIDEO_ALIAS_MAP[akey];
        break;
      }
    }
  }

  // Override: remove tutorial for specific tricks requested
  if (TUTORIAL_DISABLED.has(trick.name)) {
    videoUrl = null;
  }

  debugLog(videoUrl ? 'FC25: adding tutorial button for' : 'FC25: no tutorial for', trick.name, videoUrl);

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

    // Click or keyboard opens the video in a new tab and tracks view
    const openVideo = () => {
      addToRecentlyViewed(trick.name);
      window.open(videoUrl, '_blank', 'noopener,noreferrer');
    };
    a.addEventListener('click', openVideo);
    a.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideo(); } });

    a.appendChild(watch);
  }

  return a;
}

// Render all tricks into their star containers
function renderTricks() {
  // Performance guard: prevent rapid re-renders
  const now = Date.now();
  if (_isRenderingTricks || (now - _lastRenderTimeTricks < MIN_RENDER_INTERVAL)) {
    return;
  }
  _isRenderingTricks = true;
  _lastRenderTimeTricks = now;
  
  // Use document fragments for better performance
  const fragments = {};
  for (let s = 1; s <= 5; s++) {
    fragments[s] = document.createDocumentFragment();
  }

  // Append cards to proper fragment
  tricks.forEach((t, i) => {
    const card = createCard(t);
    // Reduced stagger for faster rendering
    card.style.setProperty('--delay', `${(i % 8) * 15}ms`);
    card.classList.add('animate-in');
    if (fragments[t.stars]) {
      fragments[t.stars].appendChild(card);
    }
  });

  // Batch DOM update: clear and append all at once
  for (let s = 1; s <= 5; s++) {
    if (starContainers[s]) {
      starContainers[s].innerHTML = '';
      starContainers[s].appendChild(fragments[s]);
    }
  }

  // Update controller text now that cards are in DOM
  updateControllers();

  // Debugging: log counts
  const total = $$('.stars-container .card').length;
  debugLog('FC25: rendered', total, 'star cards');
  
  // Release rendering lock
  requestAnimationFrame(() => {
    _isRenderingTricks = false;
    _tricksRendered = true;
  });
}

function ensureTricksRendered() {
  if (_tricksRendered) return;
  renderTricks();
}

function rebuildSearchIndex() {
  if (_searchIndexLanguage === currentLanguage && _searchIndexTricks.length && _searchIndexAdvanced.length) return;

  _searchIndexLanguage = currentLanguage;
  _searchIndexTricks = (tricks || []).map(trick => {
    const nameLower = (trick && trick.name ? trick.name : '').toLowerCase();
    const translatedLower = (getTrickTranslation(trick?.name, 'name') || '').toLowerCase();
    return { trick, nameLower, translatedLower };
  });

  _searchIndexAdvanced = (advancedAttacks || []).map(attack => {
    const actionLower = (attack && attack.action ? attack.action : '').toLowerCase();
    const translatedLower = (getAdvancedAttackTranslation(attack?.action) || '').toLowerCase();
    return { attack, actionLower, translatedLower };
  });
}

// Update visible controller text in all cards
const _controlsTranslationCache = new Map();
const _psTooltipCache = new Map();
let _updateControllersTimeout = null;

function _translateControlsCached(raw) {
  const key = `${currentLanguage}|${raw || ''}`;
  if (_controlsTranslationCache.has(key)) return _controlsTranslationCache.get(key);
  const translated = translateControlsString(raw || '');
  _controlsTranslationCache.set(key, translated);
  return translated;
}

function _psTooltipHtmlCached(translatedText) {
  const r3 = t('rightJoystick');
  const l3 = t('leftJoystick');
  const key = `${currentLanguage}|${translatedText}|${r3}|${l3}`;
  if (_psTooltipCache.has(key)) return _psTooltipCache.get(key);

  let html = translatedText;
  html = html.replace(/R3/g, `<span class="r3-tooltip" data-platform-only="ps">R3<span class="tooltip-text">${r3}</span></span>`);
  html = html.replace(/L3/g, `<span class="l3-tooltip" data-platform-only="ps">L3<span class="tooltip-text">${l3}</span></span>`);
  _psTooltipCache.set(key, html);
  return html;
}

function _updateControllersImmediate() {
  const allCtrls = $$('.controller');
  const lang = currentLanguage;
  const platform = currentPlatform;

  allCtrls.forEach(ctrl => {
    const raw = platform === 'ps' ? (ctrl.dataset.ps || '') : (ctrl.dataset.xbox || '');
    const renderKey = `${lang}|${platform}|${raw}`;
    if (ctrl.dataset.renderKey === renderKey) return;

    const translated = _translateControlsCached(raw);
    if (platform === 'ps') {
      ctrl.innerHTML = _psTooltipHtmlCached(translated);
    } else {
      ctrl.textContent = translated;
    }

    ctrl.dataset.renderKey = renderKey;
  });
}

// Throttled version to prevent excessive calls
function updateControllers() {
  if (_updateControllersTimeout) return;
  _updateControllersTimeout = setTimeout(() => {
    _updateControllersImmediate();
    _updateControllersTimeout = null;
  }, 50); // Throttle to max 20 calls per second
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

  // Batch class operations for better performance
  requestAnimationFrame(() => {
    const visibleCards = [];
    const visibleCountByStars = {};
    const totalCountByStars = {};

    // Hide/show trick cards
    all.forEach(card => {
      const stars = card.dataset.stars;
      const show = level === 'all' || stars === level;

      totalCountByStars[stars] = (totalCountByStars[stars] || 0) + 1;
      card.classList.toggle('hide', !show);
      card.classList.remove('animate-in');
      card.style.removeProperty('--delay');

      if (show) {
        visibleCards.push(card);
        visibleCountByStars[stars] = (visibleCountByStars[stars] || 0) + 1;
      }
    });

    if (!reduceMotion) {
      visibleCards.forEach((c, i) => {
        c.style.setProperty('--delay', `${i * 12}ms`);
        c.classList.add('animate-in');
      });
    }

    // Hide or show entire star sections based on current filter
    const sections = $$('.star-section');
    sections.forEach(section => {
      const s = section.dataset.stars;
      const isStatic = section.dataset.static === 'true';
      const visibleInSection = visibleCountByStars[s] || 0;
      const totalInSection = totalCountByStars[s] || 0;

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
  });

  // Show/hide Advanced Attacks section
  const advSection = document.querySelector('.advanced-attacks-section');
  if (advSection) {
    if (level === 'advanced') {
      advSection.style.display = 'block';
    } else if (level === 'all') {
      advSection.style.display = 'block';
    } else {
      advSection.style.display = 'none';
    }
  }

  // Show/hide favorites view
  if (level === 'favorites') {
    showFavorites();
    return;
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
  // Don't show featured section when in Favorites mode or only Advanced mode
  if (mainFavoritesMode || onlyAdvancedMode) return;
  
  if (!featuredCardContainer) return;

  // Get today's date as YYYY-MM-DD
  const today = new Date();
  const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
  // Check if we have a stored trick for today
  const stored = localStorage.getItem('fc25_totd_date');
  const storedTrick = localStorage.getItem('fc25_totd_name');
  
  let trickToShow = null;
  
  if (stored === dateString && storedTrick) {
    // Use stored trick from today
    trickToShow = tricks.find(t => t.name === storedTrick);
  }
  
  if (!trickToShow) {
    // Need to pick a new trick for today
    const visible = $$('.stars-container .card:not(.hide)');
    if (visible.length === 0) {
      // Clear featured area when nothing is visible
      featuredCardContainer.innerHTML = '';
      debugLog('FC25: no visible tricks for featured');
      return;
    }
    
    // Use date as seed for consistent daily selection
    const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    const index = daysSinceEpoch % visible.length;
    const pick = visible[index];
    const trickName = pick.dataset.name;
    
    // Store today's trick in localStorage
    localStorage.setItem('fc25_totd_date', dateString);
    localStorage.setItem('fc25_totd_name', trickName);
    
    trickToShow = tricks.find(t => t.name === trickName);
    debugLog('FC25: picked new trick for today (', dateString, ') ->', trickName);
  }
  
  if (!trickToShow) {
    featuredCardContainer.innerHTML = '';
    return;
  }

  // Create card for the daily trick
  const card = createCard(trickToShow);
  
  // Remove favorite button from featured card to prevent accidental clicks causing glitches
  const favBtn = card.querySelector('.favorite-btn');
  if (favBtn) favBtn.remove();

  // Ensure controller text for the clone is correct, with tooltips for R3/L3
  const ctrl = card.querySelector('.controller');
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

  const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  const funPracticeLines = getFunPracticeLines();
  const practiceDayIndex = daysSinceEpoch % funPracticeLines.length;

  const practice = document.createElement('p');
  practice.className = 'featured-practice';
  practice.textContent = funPracticeLines[practiceDayIndex];
  card.appendChild(practice);

  featuredCardContainer.innerHTML = '';
  featuredCardContainer.appendChild(card);
}

// Perform search and show dedicated results area
function performSearch(searchTerm) {
    // Special player info search
    const playerKey = searchTerm.trim().toLowerCase();
    if (PLAYER_SEARCH_INFO[playerKey]) {
      if (tricksSection) tricksSection.style.display = 'none';
      if (advancedSection) advancedSection.style.display = 'none';
      if (featuredSection) featuredSection.style.display = 'none';
      if (searchResultsSection) searchResultsSection.style.display = 'block';
      if (clearBtn) clearBtn.style.display = 'flex';
      if (searchResultsGrid) {
        searchResultsGrid.innerHTML = '';
        searchResultsGrid.appendChild(createPlayerInfoCard(
          searchTerm.trim(),
          PLAYER_SEARCH_INFO[playerKey]
        ));
      }
      if (searchResultsCount) searchResultsCount.textContent = '';
      if (noResultsMsg) noResultsMsg.style.display = 'none';
      return;
    }
  const tricksSection = document.getElementById('tricks');
  const advancedSection = document.querySelector('.advanced-attacks-section');
  const featuredSection = document.getElementById('featured');
  const searchResultsSection = document.getElementById('search-results');
  const searchResultsGrid = document.getElementById('searchResultsGrid');
  const noResultsMsg = document.getElementById('noResultsMsg');
  const searchResultsCount = document.getElementById('searchResultsCount');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (!searchTerm || searchTerm.trim() === '') {
    // No search term: show normal sections, hide search results
    if (tricksSection) tricksSection.style.display = '';
    if (featuredSection) featuredSection.style.display = '';
    if (searchResultsSection) searchResultsSection.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'none';

    currentSearchTerm = '';
    currentSearchResults = [];
    currentSearchFilter = 'all';
    updateSearchFilterButtonsUI();

    // Restore main view according to current main filter state
    applyMainFilters();
    return;
  }

  // Has search term: hide normal sections, show search results
  if (tricksSection) tricksSection.style.display = 'none';
  if (advancedSection) advancedSection.style.display = 'none';
  if (featuredSection) featuredSection.style.display = 'none';
  if (searchResultsSection) searchResultsSection.style.display = 'block';
  if (clearBtn) clearBtn.style.display = 'flex';
  
  // Show search filters when searching (hide them in favorites only)
  const searchFilters = document.querySelector('.search-filters');
  if (searchFilters) searchFilters.style.display = '';


  const term = searchTerm.toLowerCase().trim();
  rebuildSearchIndex();

  // Gather synonyms for the search term
  const synonyms = getSynonymMatches(term);
  const allTerms = [term, ...synonyms.map(s => s.toLowerCase())];

  // Search through tricks (use indexed lowercased strings and synonyms)
  const matchingTricks = [];
  for (const row of _searchIndexTricks) {
    if (allTerms.some(t => row.nameLower.includes(t) || row.translatedLower.includes(t))) {
      matchingTricks.push(row.trick);
    }
  }

  // Search through advanced attacks (use indexed lowercased strings and synonyms)
  const matchingAdvanced = [];
  for (const row of _searchIndexAdvanced) {
    if (allTerms.some(t => row.actionLower.includes(t) || row.translatedLower.includes(t))) {
      matchingAdvanced.push(row.attack);
    }
  }

  // Store search results globally (combine both with type identifier)
  currentSearchResults = [
    ...matchingTricks.map(t => ({ ...t, type: 'skill' })),
    ...matchingAdvanced.map(a => ({ ...a, type: 'advanced' }))
  ];
  currentSearchTerm = term;

  // Reset filters to 'all' when starting a new search
  currentSearchFilter = 'all';
  updateSearchFilterButtonsUI();

  if (!searchResultsGrid) return;
  
  // Apply current filters
  applySearchFilters();
}

// Create an advanced attack card for search results
function createAdvancedCard(attack) {
  const card = document.createElement('div');
  card.className = 'advanced-card';
  card.style.position = 'relative';
  
  const translatedAction = getAdvancedAttackTranslation(attack.action);
  let translatedPs = translateControlsString(attack.ps);
  translatedPs = translatedPs.replace(/D-Pad(?![^<]*<\/span>)/gi, `<span class="dpad-tooltip">D-Pad<span class="tooltip-text">${t('arrowKeys')}</span></span>`);
  
  card.innerHTML = `
    <div class="action-title">${translatedAction}</div>
    <div class="controls-row"><span class="controls-label">${t('playstationLabel')}</span> ${translatedPs}</div>
  `;
  
  return card;
}

// Apply filter to current search results
function applySearchFilters() {
  const searchResultsGrid = document.getElementById('searchResultsGrid');
  const noResultsMsg = document.getElementById('noResultsMsg');
  const searchResultsCount = document.getElementById('searchResultsCount');
  
  if (!searchResultsGrid) return;
  
  // Filter results based on selected filter
  const filteredResults = applySearchFilterLogic(currentSearchResults, currentSearchFilter);

  // Use document fragment for performance
  const fragment = document.createDocumentFragment();

  if (filteredResults.length === 0) {
    if (noResultsMsg) noResultsMsg.style.display = 'block';
    if (searchResultsCount) searchResultsCount.textContent = '';
    searchResultsGrid.innerHTML = '';
    return;
  }

  if (noResultsMsg) noResultsMsg.style.display = 'none';
  if (searchResultsCount) {
    const countText = t('resultsCount').replace('{count}', filteredResults.length);
    searchResultsCount.textContent = countText;
  }

  filteredResults.forEach((item, i) => {
    let card;
    if (item.type === 'advanced') {
      card = createAdvancedCard(item);
    } else {
      card = createCard(item);
    }
    card.style.setProperty('--delay', `${(i % 8) * 15}ms`);
    card.classList.add('animate-in');
    fragment.appendChild(card);
  });

  // Single DOM update
  searchResultsGrid.innerHTML = '';
  searchResultsGrid.appendChild(fragment);
  updateControllers();
}

// Helper function for filter logic (extracted to avoid duplication)
function applySearchFilterLogic(results, selectedFilter) {
  const filter = selectedFilter || 'all';
  const isStarFilter = /^[0-5]$/.test(filter);

  const wantsSkills = filter === 'all' || filter === 'skills' || isStarFilter;
  const wantsAdvanced = filter === 'all' || filter === 'advanced';

  const effectiveStars = isStarFilter
    ? computeEffectiveStarsSet(new Set([filter]))
    : null;

  return results.filter(item => {
    if (item.type === 'advanced') return wantsAdvanced;
    if (item.type !== 'skill') return false;
    if (!wantsSkills) return false;
    if (!effectiveStars) return true;
    return effectiveStars.has(String(item.stars));
  });
}

// Render recently viewed tricks
function renderRecentlyViewed() {
  const recentNames = getRecentlyViewed();
  const recentSection = document.getElementById('recently-viewed');
  const recentGrid = document.getElementById('recentlyViewedGrid');
  
  if (!recentSection || !recentGrid) return;
  
  if (recentNames.length === 0) {
    recentSection.style.display = 'none';
    return;
  }
  
  recentSection.style.display = 'block';
  
  const recentTricks = recentNames.map(name => 
    tricks.find(t => t.name === name)
  ).filter(Boolean);
  
  // Use document fragment
  const fragment = document.createDocumentFragment();
  
  recentTricks.forEach((trick, i) => {
    const card = createCard(trick);
    card.style.setProperty('--delay', `${i * 15}ms`);
    card.classList.add('animate-in');
    fragment.appendChild(card);
  });
  
  recentGrid.innerHTML = '';
  recentGrid.appendChild(fragment);
  updateControllers();
}

// Event bindings and initialization
function init() {
  // Initialize theme
  const savedTheme = getTheme();
  setTheme(savedTheme);

  // Theme button listeners
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTheme(btn.dataset.theme);
    });
  });

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

      // Rebuild search index with new language
      rebuildSearchIndex();
      
      // Re-render all tricks with new language (only if already rendered)
      if (_tricksRendered) {
        renderTricks();
      }
      
      // Re-render advanced attacks with new language
      renderAdvancedAttacks();
      
      // Update Trick of the Day with new language
      setTrickOfTheDay();

      // Re-apply current filters after re-render
      if (currentSearchTerm) {
        applySearchFilters();
      } else {
        applyMainFilters();
      }
      
      debugLog('FC25: language changed to', nextLang);
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

  // Star filters (level buttons) - throttled to prevent rapid clicking
  if (levelButtons && levelButtons.length) {
    const throttledToggle = throttle((level) => {
      toggleMainFilter(level);
    }, 150); // Max 6-7 clicks per second
    
    levelButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const level = btn.dataset.level;
        throttledToggle(level);
      });
    });
  }

  // Search input filter with debouncing
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    const debouncedSearch = debounce((term) => {
      performSearch(term);
    }, 150); // 150ms debounce delay for better responsiveness
    
    searchInput.addEventListener('input', () => {
      const term = searchInput.value;
      debouncedSearch(term);
    });
  }

  // Clear search button
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      performSearch('');
    });
  }
  
  // Search filter buttons (single-select)
  const searchFilterBtns = document.querySelectorAll('.search-filter-btn');
  if (searchFilterBtns && searchFilterBtns.length) {
    searchFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        currentSearchFilter = filter || 'all';
        updateSearchFilterButtonsUI();
        applySearchFilters();
      });
    });
  }

  // Ensure we have the containers (may not have existed at parse time)
  initContainers();

  // First render and default UI
  updateUIText();

  // Build initial search index (cheap and avoids per-keystroke translation work)
  rebuildSearchIndex();

  // IMPORTANT: Avoid initial-load lag by not rendering all skill cards up-front.
  // We'll render them on demand when the user leaves "only Advanced" view.
  renderAdvancedAttacks();
  setActivePlatformButton();
  updateControllers();
  updatePlatformOnlyElements();
  // Default view: show only Advanced Attacks initially
  mainSelectedStars.clear();
  mainShowAdvanced = true;
  mainFavoritesMode = false;
  onlyAdvancedMode = true; // Start with only Advanced Attacks visible
  updateLevelButtonsUI();
  applyMainFilters();
  // Don't call setTrickOfTheDay on init since we're starting with only Advanced Attacks
  renderRecentlyViewed();
  initSettings();
  initPdfExport();
  updatePdfTranslations();
}

// Settings functionality
function initSettings() {
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const clearRecentBtn = document.getElementById('clearRecentBtn');
  const resetAllBtn = document.getElementById('resetAllBtn');
  const showControllerImg = document.getElementById('showControllerImg');
  const animationsEnabled = document.getElementById('animationsEnabled');
  const themeOptions = document.querySelectorAll('.theme-option');

  // Load saved settings
  loadSettings();

  // Open settings
  settingsBtn?.addEventListener('click', () => {
    settingsModal.style.display = 'flex';
    updateSettingsTranslations();
  });

  // Close settings
  const closeModal = () => {
    settingsModal.style.display = 'none';
  };

  closeSettingsBtn?.addEventListener('click', closeModal);
  settingsModal?.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeModal();
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && settingsModal.style.display === 'flex') {
      closeModal();
    }
  });

  // Theme selection
  themeOptions.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      setTheme(theme);
      showNotification(t('themeChanged') || 'Theme changed!');
    });
  });

  // Clear recently viewed
  clearRecentBtn?.addEventListener('click', () => {
    if (confirm(t('confirmClearRecent') || 'Clear all recently viewed tricks?')) {
      localStorage.removeItem('fc25_recent');
      renderRecentlyViewed();
      showNotification(t('recentCleared') || 'Recently viewed cleared!');
    }
  });

  // Reset all
  resetAllBtn?.addEventListener('click', () => {
    if (confirm(t('confirmResetAll') || 'Reset all settings and data? This cannot be undone.')) {
      localStorage.clear();
      showNotification(t('allReset') || 'All settings reset!');
      setTimeout(() => location.reload(), 1000);
    }
  });

  // Controller image toggle
  showControllerImg?.addEventListener('change', (e) => {
    const img = document.querySelector('.controller-image');
    const zeroStarSection = document.querySelector('.star-section[data-stars="0"]');
    const zeroStarBtn = document.querySelector('.level-btn[data-level="0"]');
    
    if (img) {
      img.style.display = e.target.checked ? 'block' : 'none';
    }
    
    // Also hide/show 0 star section and button
    if (zeroStarSection) {
      zeroStarSection.style.display = e.target.checked ? 'block' : 'none';
    }
    if (zeroStarBtn) {
      zeroStarBtn.style.display = e.target.checked ? 'inline-block' : 'none';
    }
    
    localStorage.setItem('fc25_showController', e.target.checked);
  });

  // Animations toggle
  animationsEnabled?.addEventListener('change', (e) => {
    document.body.classList.toggle('no-animations', !e.target.checked);
    localStorage.setItem('fc25_animations', e.target.checked);
  });

  // Multi-select toggle
  const multiSelectEnabled = document.getElementById('multiSelectEnabled');
  multiSelectEnabled?.addEventListener('change', (e) => {
    setMultiSelectEnabled(e.target.checked);
    // If switching to single-select mode and multiple stars are selected, keep only the first one
    if (!e.target.checked && mainSelectedStars.size > 1) {
      const firstStar = Array.from(mainSelectedStars)[0];
      mainSelectedStars.clear();
      mainSelectedStars.add(firstStar);
      updateLevelButtonsUI();
      applyMainFilters();
      setTrickOfTheDay();
    }
  });
}

function loadSettings() {
  // Load theme
  const savedTheme = localStorage.getItem('fc25_theme') || 'dark';
  setTheme(savedTheme);

  // Load controller image setting
  const showController = localStorage.getItem('fc25_showController');
  if (showController === 'false') {
    const img = document.querySelector('.controller-image');
    const zeroStarSection = document.querySelector('.star-section[data-stars="0"]');
    const zeroStarBtn = document.querySelector('.level-btn[data-level="0"]');
    const checkbox = document.getElementById('showControllerImg');
    
    if (img) img.style.display = 'none';
    if (zeroStarSection) zeroStarSection.style.display = 'none';
    if (zeroStarBtn) zeroStarBtn.style.display = 'none';
    if (checkbox) checkbox.checked = false;
  }

  // Load animations setting
  const animations = localStorage.getItem('fc25_animations');
  if (animations === 'false') {
    document.body.classList.add('no-animations');
    const checkbox = document.getElementById('animationsEnabled');
    if (checkbox) checkbox.checked = false;
  }

  // Load multi-select setting
  const multiSelect = getMultiSelectEnabled();
  const multiSelectCheckbox = document.getElementById('multiSelectEnabled');
  if (multiSelectCheckbox) multiSelectCheckbox.checked = multiSelect;
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('theme-light');
  } else {
    document.body.classList.remove('theme-light');
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    background: #34c759;
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 1001;
    animation: slideIn 0.3s ease;
    font-weight: 600;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

function updateSettingsTranslations() {
  const settingsTitle = document.getElementById('settingsTitle');
  const themeTitle = document.getElementById('themeTitle');
  const dataManagementTitle = document.getElementById('dataManagementTitle');
  const displayOptionsTitle = document.getElementById('displayOptionsTitle');
  const clearRecentText = document.getElementById('clearRecentText');
  const clearFavoritesText = document.getElementById('clearFavoritesText');
  const resetAllText = document.getElementById('resetAllText');
  const showControllerText = document.getElementById('showControllerText');
  const animationsText = document.getElementById('animationsText');
  const showRecentlyViewedText = document.getElementById('showRecentlyViewedText');
  const themeDark = document.getElementById('themeDark');
  const themeLight = document.getElementById('themeLight');

  if (settingsTitle) settingsTitle.textContent = t('settings');
  if (themeTitle) themeTitle.textContent = t('theme');
  if (dataManagementTitle) dataManagementTitle.textContent = t('dataManagement');
  if (displayOptionsTitle) displayOptionsTitle.textContent = t('displayOptions');
  if (clearRecentText) clearRecentText.textContent = t('clearRecentText');
  if (clearFavoritesText) clearFavoritesText.textContent = t('clearFavoritesText');
  if (resetAllText) resetAllText.textContent = t('resetAllText');
  if (showControllerText) showControllerText.textContent = t('showControllerText');
  if (animationsText) animationsText.textContent = t('animationsText');
  if (showRecentlyViewedText) showRecentlyViewedText.textContent = t('showRecentlyViewedText');
  if (themeDark) themeDark.textContent = t('themeDark');
  if (themeLight) themeLight.textContent = t('themeLight');
}

function updatePdfTranslations() {
  const pdfBtnLabel = document.getElementById('pdfBtnLabel');
  const pdfModalTitle = document.getElementById('pdfModalTitle');
  const pdfModalDesc = document.getElementById('pdfModalDesc');
  const pdfStarsLabel = document.getElementById('pdfStarsLabel');
  const pdfAllStarsBtn = document.getElementById('pdfAllStarsBtn');
  const pdfSkillSectionLabel = document.getElementById('pdfSkillSectionLabel');
  const pdfAdvancedSectionLabel = document.getElementById('pdfAdvancedSectionLabel');
  const pdfClearSelectionBtn = document.getElementById('pdfClearSelectionBtn');
  const pdfGenerateBtn = document.getElementById('pdfGenerateBtn');
  const pdfCustomLabel = document.getElementById('pdfCustomLabel');
  const pdfCustomSearch = document.getElementById('pdfCustomSearch');
  const pdfCustomSkillsLabel = document.getElementById('pdfCustomSkillsLabel');
  const pdfCustomAdvancedLabel = document.getElementById('pdfCustomAdvancedLabel');

  if (pdfBtnLabel) pdfBtnLabel.textContent = t('pdfBtnLabel');
  if (pdfModalTitle) pdfModalTitle.textContent = t('pdfModalTitle');
  if (pdfModalDesc) pdfModalDesc.textContent = t('pdfModalDesc');
  if (pdfStarsLabel) pdfStarsLabel.textContent = t('pdfStarsLabel');
  if (pdfAllStarsBtn) pdfAllStarsBtn.textContent = t('pdfAllStarsBtn');
  if (pdfSkillSectionLabel) pdfSkillSectionLabel.textContent = t('pdfSkillSection');
  if (pdfAdvancedSectionLabel) pdfAdvancedSectionLabel.textContent = t('pdfAdvancedSection');
  if (pdfClearSelectionBtn) pdfClearSelectionBtn.textContent = t('pdfClearSelection');
  if (pdfGenerateBtn) pdfGenerateBtn.textContent = t('pdfGenerate');

  if (pdfCustomLabel) pdfCustomLabel.textContent = t('pdfCustomLabel');
  if (pdfCustomSearch) pdfCustomSearch.placeholder = t('pdfCustomSearchPlaceholder');
  if (pdfCustomSkillsLabel) pdfCustomSkillsLabel.textContent = t('pdfCustomSkillsLabel');
  if (pdfCustomAdvancedLabel) pdfCustomAdvancedLabel.textContent = t('pdfCustomAdvancedLabel');
}

// PDF Export functionality
let pdfSelectedStars = new Set();
let pdfCustomSkills = new Set(); // stores trick English names
let pdfCustomAdvanced = new Set(); // stores advanced action strings

function _pdfEffectiveStars() {
  if (!pdfSelectedStars || pdfSelectedStars.size === 0) return null;
  const out = new Set();
  pdfSelectedStars.forEach(s => {
    const n = parseInt(s, 10);
    if (Number.isFinite(n) && n >= 1 && n <= 5) out.add(n);
  });
  return out.size ? out : null;
}

function renderPdfCustomLists() {
  const enabled = document.getElementById('pdfCustomEnabled')?.checked;
  const includeSkills = document.getElementById('pdfIncludeSkills')?.checked;
  const includeAdvanced = document.getElementById('pdfIncludeAdvanced')?.checked;
  const skillsBlock = document.getElementById('pdfCustomSkillsBlock');
  const advancedBlock = document.getElementById('pdfCustomAdvancedBlock');
  const skillsList = document.getElementById('pdfCustomSkillsList');
  const advancedList = document.getElementById('pdfCustomAdvancedList');
  const search = (document.getElementById('pdfCustomSearch')?.value || '').trim().toLowerCase();

  if (!enabled) return;
  if (!skillsList || !advancedList) return;

  if (skillsBlock) skillsBlock.style.display = includeSkills ? '' : 'none';
  if (advancedBlock) advancedBlock.style.display = includeAdvanced ? '' : 'none';

  const effectiveStars = _pdfEffectiveStars();

  // Skills
  if (includeSkills) {
    const fragment = document.createDocumentFragment();
    const rows = (tricks || [])
      .filter(tr => {
        if (!tr || typeof tr.stars !== 'number') return false;
        if (effectiveStars && !effectiveStars.has(tr.stars)) return false;
        const nameEn = (tr.name || '').toLowerCase();
        const nameTranslated = (getTrickTranslation(tr.name, 'name') || '').toLowerCase();
        return !search || nameEn.includes(search) || nameTranslated.includes(search);
      })
      .sort((a, b) => (a.stars - b.stars) || (a.name || '').localeCompare(b.name || ''));

    rows.forEach(tr => {
      const label = document.createElement('label');
      label.className = 'pdf-custom-item';

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = pdfCustomSkills.has(tr.name);
      cb.addEventListener('change', () => {
        if (cb.checked) pdfCustomSkills.add(tr.name);
        else pdfCustomSkills.delete(tr.name);
      });

      const wrap = document.createElement('div');
      const title = document.createElement('div');
      title.textContent = getTrickTranslation(tr.name, 'name') || tr.name;
      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.textContent = `${tr.stars} ⭐`;

      wrap.appendChild(title);
      wrap.appendChild(meta);

      label.appendChild(cb);
      label.appendChild(wrap);
      fragment.appendChild(label);
    });

    skillsList.innerHTML = '';
    skillsList.appendChild(fragment);
  } else {
    skillsList.innerHTML = '';
  }

  // Advanced
  if (includeAdvanced) {
    const fragment = document.createDocumentFragment();
    const rows = (advancedAttacks || [])
      .filter(a => {
        const nameEn = (a.action || '').toLowerCase();
        const nameTranslated = (getAdvancedAttackTranslation(a.action) || '').toLowerCase();
        return !search || nameEn.includes(search) || nameTranslated.includes(search);
      });

    rows.forEach(a => {
      const label = document.createElement('label');
      label.className = 'pdf-custom-item';

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = pdfCustomAdvanced.has(a.action);
      cb.addEventListener('change', () => {
        if (cb.checked) pdfCustomAdvanced.add(a.action);
        else pdfCustomAdvanced.delete(a.action);
      });

      const wrap = document.createElement('div');
      const title = document.createElement('div');
      title.textContent = getAdvancedAttackTranslation(a.action);
      wrap.appendChild(title);

      label.appendChild(cb);
      label.appendChild(wrap);
      fragment.appendChild(label);
    });

    advancedList.innerHTML = '';
    advancedList.appendChild(fragment);
  } else {
    advancedList.innerHTML = '';
  }
}

function buildPdfPrintRoot({ includeSkills, includeAdvanced, starsSet, customEnabled }) {
  // Remove any prior print root
  document.querySelectorAll('.pdf-print-root').forEach(n => n.remove());

  const root = document.createElement('div');
  root.className = 'pdf-print-root';
  // Enable color mode if selected
  const colorMode = document.getElementById('pdfColorMode');
  if (colorMode && colorMode.checked) {
    root.classList.add('color-mode');
  }

  const title = document.createElement('h1');
  title.textContent = t('siteTitle');
  title.style.margin = '0 0 12px 0';
  root.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.textContent = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  subtitle.style.margin = '0 0 18px 0';
  subtitle.style.color = 'var(--muted)';
  root.appendChild(subtitle);

  const appendSection = (headingText, nodes) => {
    if (!nodes || !nodes.length) return;
    const section = document.createElement('section');
    section.className = 'pdf-export-section';
    const h = document.createElement('h3');
    h.textContent = headingText;
    section.appendChild(h);

    const grid = document.createElement('div');
    grid.className = 'pdf-export-grid';
    nodes.forEach(n => grid.appendChild(n));
    section.appendChild(grid);

    root.appendChild(section);
  };

  const createSkillPrintCard = (trick) => {
    const card = createCard(trick);
    // Remove interactive elements for print
    card.querySelectorAll('.favorite-btn, .watch-btn').forEach(el => el.remove());
    card.classList.remove('has-video');
    card.removeAttribute('role');
    card.removeAttribute('aria-label');
    card.tabIndex = -1;
    return card;
  };

  const createAdvancedPrintCard = (attack) => {
    const card = createAdvancedCard(attack);
    card.querySelectorAll('.favorite-btn').forEach(el => el.remove());
    return card;
  };

  // Skills: group by stars (even in custom mode)
  if (includeSkills) {
    const chosen = (tricks || []).filter(tr => {
      if (!tr) return false;
      if (customEnabled) return pdfCustomSkills.has(tr.name);
      if (!starsSet) return true;
      return starsSet.has(String(tr.stars));
    });

    const byStars = new Map();
    chosen.forEach(tr => {
      const k = String(tr.stars);
      if (!byStars.has(k)) byStars.set(k, []);
      byStars.get(k).push(tr);
    });

    const starKeys = Array.from(byStars.keys()).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    starKeys.forEach(k => {
      const items = byStars.get(k)
        .slice()
        .sort((a, b) => (a.name || '').localeCompare(b.name || ''))
        .map(createSkillPrintCard);
      appendSection(formatStarHeading(k), items);
    });
  }

  if (includeAdvanced) {
    const chosenAdvanced = (advancedAttacks || []).filter(a => {
      if (!a) return false;
      if (customEnabled) return pdfCustomAdvanced.has(a.action);
      return true;
    });
    const cards = chosenAdvanced.map(createAdvancedPrintCard);
    appendSection(t('advancedAttacks'), cards);
  }

  document.body.appendChild(root);
  updateControllers();
}

function initPdfExport() {
  const pdfExportBtn = document.getElementById('pdfExportBtn');
  const pdfExportModal = document.getElementById('pdfExportModal');
  const closePdfModalBtn = document.getElementById('closePdfModalBtn');
  const pdfStarBtns = document.querySelectorAll('.pdf-star-btn:not(#pdfAdvancedBtn)');
  const pdfAdvancedBtn = document.getElementById('pdfAdvancedBtn');
  const pdfIncludeSkills = document.getElementById('pdfIncludeSkills');
  const pdfIncludeAdvanced = document.getElementById('pdfIncludeAdvanced');
  const pdfClearSelectionBtn = document.getElementById('pdfClearSelectionBtn');
  const pdfGenerateBtn = document.getElementById('pdfGenerateBtn');
  const pdfCustomEnabled = document.getElementById('pdfCustomEnabled');
  const pdfCustomArea = document.getElementById('pdfCustomArea');
  const pdfCustomSearch = document.getElementById('pdfCustomSearch');

  // Open PDF modal
  pdfExportBtn?.addEventListener('click', () => {
    pdfExportModal.style.display = 'flex';
    pdfExportModal.setAttribute('aria-hidden', 'false');
    updatePdfTranslations();
    updatePdfStarButtonsUI();
    if (pdfCustomEnabled?.checked) renderPdfCustomLists();
  });

  // Close PDF modal
  const closePdfModal = () => {
    pdfExportModal.style.display = 'none';
    pdfExportModal.setAttribute('aria-hidden', 'true');
  };

  closePdfModalBtn?.addEventListener('click', closePdfModal);
  pdfExportModal?.addEventListener('click', (e) => {
    if (e.target === pdfExportModal) closePdfModal();
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pdfExportModal.style.display === 'flex') {
      closePdfModal();
    }
  });

  // Star selection buttons
  pdfStarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const star = btn.dataset.star;
      if (star === 'all') {
        // Toggle all stars
        if (pdfSelectedStars.size === 5) {
          pdfSelectedStars.clear();
        } else {
          pdfSelectedStars = new Set(['1', '2', '3', '4', '5']);
        }
      } else {
        // Toggle individual star
        if (pdfSelectedStars.has(star)) {
          pdfSelectedStars.delete(star);
        } else {
          pdfSelectedStars.add(star);
        }
      }
      updatePdfStarButtonsUI();
      if (pdfCustomEnabled?.checked) renderPdfCustomLists();
    });
  });

  // Advanced Attacks button
  pdfAdvancedBtn?.addEventListener('click', () => {
    if (pdfIncludeAdvanced) {
      pdfIncludeAdvanced.checked = !pdfIncludeAdvanced.checked;
      updatePdfStarButtonsUI();
      if (pdfCustomEnabled?.checked) renderPdfCustomLists();
    }
  });

  // Section include toggles affect the custom list
  pdfIncludeSkills?.addEventListener('change', () => {
    if (pdfCustomEnabled?.checked) renderPdfCustomLists();
  });
  pdfIncludeAdvanced?.addEventListener('change', () => {
    updatePdfStarButtonsUI();
    if (pdfCustomEnabled?.checked) renderPdfCustomLists();
  });

  // Custom enabled toggle
  pdfCustomEnabled?.addEventListener('change', () => {
    const on = !!pdfCustomEnabled.checked;
    if (pdfCustomArea) pdfCustomArea.style.display = on ? '' : 'none';
    if (on) renderPdfCustomLists();
  });

  // Custom search
  if (pdfCustomSearch) {
    const debounced = debounce(() => {
      if (pdfCustomEnabled?.checked) renderPdfCustomLists();
    }, 120);
    pdfCustomSearch.addEventListener('input', debounced);
  }

  // Clear all selections
  pdfClearSelectionBtn?.addEventListener('click', () => {
    pdfSelectedStars.clear();
    pdfCustomSkills.clear();
    pdfCustomAdvanced.clear();
    if (pdfIncludeSkills) pdfIncludeSkills.checked = false;
    if (pdfIncludeAdvanced) pdfIncludeAdvanced.checked = false;
    updatePdfStarButtonsUI();
    if (pdfCustomEnabled?.checked) renderPdfCustomLists();
  });

  // Generate PDF
  pdfGenerateBtn?.addEventListener('click', () => {
    generatePDF();
  });
}

function updatePdfStarButtonsUI() {
  const pdfStarBtns = document.querySelectorAll('.pdf-star-btn:not(#pdfAdvancedBtn)');
  const allSelected = pdfSelectedStars.size === 5 &&
                      pdfSelectedStars.has('1') &&
                      pdfSelectedStars.has('2') &&
                      pdfSelectedStars.has('3') &&
                      pdfSelectedStars.has('4') &&
                      pdfSelectedStars.has('5');
  
  pdfStarBtns.forEach(btn => {
    const star = btn.dataset.star;
    if (star === 'all') {
      btn.classList.toggle('active', allSelected);
    } else {
      // Only show individual stars as active if NOT all selected
      btn.classList.toggle('active', !allSelected && pdfSelectedStars.has(star));
    }
  });
  
  // Update Advanced button
  const pdfAdvancedBtn = document.getElementById('pdfAdvancedBtn');
  const pdfIncludeAdvanced = document.getElementById('pdfIncludeAdvanced');
  if (pdfAdvancedBtn && pdfIncludeAdvanced) {
    pdfAdvancedBtn.classList.toggle('active', pdfIncludeAdvanced.checked);
  }
}

function generatePDF() {
  const includeSkills = document.getElementById('pdfIncludeSkills')?.checked;
  const includeAdvanced = document.getElementById('pdfIncludeAdvanced')?.checked;
  const customEnabled = document.getElementById('pdfCustomEnabled')?.checked;

  const starsSet = pdfSelectedStars && pdfSelectedStars.size ? new Set(pdfSelectedStars) : null;

  const customHasAny = customEnabled && (pdfCustomSkills.size > 0 || pdfCustomAdvanced.size > 0);

  // Validate selection
  if (customEnabled) {
    if (!customHasAny) {
      alert(t('pdfSelectSomethingAlert'));
      return;
    }
  } else {
    if ((!starsSet || starsSet.size === 0) && !includeAdvanced) {
      alert(t('pdfSelectSomethingAlert'));
      return;
    }
  }

  // Close modal and build print DOM
  const pdfExportModal = document.getElementById('pdfExportModal');
  if (pdfExportModal) {
    pdfExportModal.style.display = 'none';
    pdfExportModal.setAttribute('aria-hidden', 'true');
  }

  ensureTricksRendered();

  buildPdfPrintRoot({
    includeSkills: !!includeSkills,
    includeAdvanced: !!includeAdvanced,
    starsSet,
    customEnabled: !!customEnabled
  });

  document.body.classList.add('printing-pdf');

  setTimeout(() => {
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-pdf');
      document.querySelectorAll('.pdf-print-root').forEach(n => n.remove());
    }, 500);
  }, 250);
}

// Start
document.addEventListener('DOMContentLoaded', init);

