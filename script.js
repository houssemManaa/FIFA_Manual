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
    card.innerHTML = `
      <div class="action-title">${item.action}</div>
      <div class="controls-row"><span class="controls-label">PlayStation:</span> ${item.ps}</div>
      <div class="controls-row"><span class="controls-label">Xbox:</span> ${item.xbox}</div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAdvancedAttacks();
});
/* FC25 Tricks Manual — script.js
   Renders tricks by star rating and handles platform toggling.
   Clean and simple so kids can read the code.
*/

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
  a.dataset.name = trick.name;

  // Some tricks should never show a tutorial button/link (even if an alias map matches)
  const tutorialDisabled = new Set([
    'Ball Roll Fake Left/Right'
  ]);

  const h = document.createElement('h3');
  h.className = 'card-title';
  h.textContent = trick.name;
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
  desc.textContent = trick.desc;
  a.appendChild(desc);

  if (trick.tip) {
    const tip = document.createElement('p');
    tip.className = 'tip';
    tip.textContent = `Tip: ${trick.tip}`;
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
    watch.textContent = '▶ Watch Tutorial';
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
    if (currentPlatform === 'ps') {
      // Replace all R3 and L3 (not inside HTML tags) with tooltip spans
      text = text.replace(/R3/g, '<span class="r3-tooltip" data-platform-only="ps">R3<span class="tooltip-text">Right Joystick</span></span>');
      text = text.replace(/L3/g, '<span class="l3-tooltip" data-platform-only="ps">L3<span class="tooltip-text">Left Joystick</span></span>');
      ctrl.innerHTML = text;
    } else {
      ctrl.textContent = text;
    }
  });

  // If featured shows a card, update it too (Trick of the Day)
  const featuredCtrl = featuredCardContainer.querySelector('.controller');
  if (featuredCtrl) {
    let text = currentPlatform === 'ps' ? featuredCtrl.dataset.ps : featuredCtrl.dataset.xbox;
    if (currentPlatform === 'ps') {
      text = text.replace(/R3/g, '<span class="r3-tooltip" data-platform-only="ps">R3<span class="tooltip-text">Right Joystick</span></span>');
      text = text.replace(/L3/g, '<span class="l3-tooltip" data-platform-only="ps">L3<span class="tooltip-text">Left Joystick</span></span>');
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
    if (currentPlatform === 'ps') {
      text = text.replace(/R3/g, '<span class="r3-tooltip" data-platform-only="ps">R3<span class="tooltip-text">Right Joystick</span></span>');
      text = text.replace(/L3/g, '<span class="l3-tooltip" data-platform-only="ps">L3<span class="tooltip-text">Left Joystick</span></span>');
      ctrl.innerHTML = text;
    } else {
      ctrl.textContent = text;
    }
  }

  const funPracticeLines = [
    'Practice challenge: Do it 5 times in a row. ⚽',
    'Coach challenge: Do it 3 times… then try it while sprinting! 🏃',
    'Pro challenge: Try it with BOTH feet. 👟',
    'Game challenge: Use it once in a real match! 🎮',
    'Combo challenge: Do the move, then pass instantly. 🔥',
    'Timing challenge: Slow → medium → fast (3 tries). ⏱️'
  ];

  const practice = document.createElement('p');
  practice.className = 'featured-practice';
  practice.textContent = funPracticeLines[Math.floor(Math.random() * funPracticeLines.length)];
  clone.appendChild(practice);

  featuredCardContainer.innerHTML = '';
  featuredCardContainer.appendChild(clone);
}

// Event bindings and initialization
function init() {
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
  renderTricks();
  setActivePlatformButton();
  updateControllers();
  updatePlatformOnlyElements();
  filterByLevel('all');
  setTrickOfTheDay();
}

// Start
document.addEventListener('DOMContentLoaded', init);


