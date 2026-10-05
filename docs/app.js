'use strict';
// Real captures: same PC, same terminal, only the wallpaper changes.
// Swatches are sampled from the palette Pigment printed in the terminal.
const WALLS = [
  { key: 'sea', title: 'Sanctuary under the sea', id: '2389298730', swatches: ['#13283F', '#3076B2', '#3C94D1', '#2A5782', '#1E4C76', '#71C8EA'] },
  { key: 'samurai', title: 'Samurai — Motion', id: '1436407576', swatches: ['#2A170C', '#533826', '#736859', '#968674', '#B8A698', '#F0EBE5'] },
  { key: 'night', title: 'Night City', id: '2281052567', swatches: ['#000000', '#190D10', '#B1607A', '#EE8FB4', '#010001', '#000001'] },
  { key: 'misty', title: 'Misty Sea', id: '3765081478', swatches: ['#000301', '#001209', '#032618', '#073F2B', '#124F39', '#2A6851'] },
  { key: 'forest', title: "Warrior's Tomb", id: '2794072974', swatches: ['#0C1A1B', '#132222', '#162A27', '#1E2F2F', '#283B36', '#435744'] },
];

function hsl(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min, s = l > .5 ? d / (2 - max - min) : d / (max + min);
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
}

// The same rule Pigment uses for the terminal: the most colorful swatch,
// lifted so it glows on a dark background.
function accentOf(wall) {
  const [h, s] = wall.swatches.map(hsl).sort((a, b) => b[1] * (1 - Math.abs(b[2] - .5)) - a[1] * (1 - Math.abs(a[2] - .5)))[0];
  return `hsl(${h.toFixed(0)} ${Math.max(s * 100, 22).toFixed(0)}% 68%)`;
}

const stage = document.querySelector('#stage');
const screen = stage.querySelector('.screen');
const walls = stage.querySelector('.walls');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
let timer = null;

WALLS.forEach((wall, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('role', 'radio');
  button.setAttribute('aria-checked', String(index === 0));
  button.innerHTML = `<img src="shots/desk-${wall.key}-sm.jpg" alt="" width="800" height="540" loading="lazy">` +
    `<span class="wall-name">${wall.title}</span><span class="swatches">${wall.swatches.map(c => `<i style="background:${c}"></i>`).join('')}</span>`;
  button.addEventListener('click', () => { stop(); show(index); });
  walls.append(button);
});

function show(index) {
  current = index;
  const wall = WALLS[index];
  document.documentElement.style.setProperty('--accent', accentOf(wall));
  walls.querySelectorAll('button').forEach((b, i) => b.setAttribute('aria-checked', String(i === index)));
  const next = new Image();
  next.className = 'shot';
  next.width = 1600; next.height = 1080;
  next.alt = `${wall.title} wallpaper; Pigment recolored the terminal and dock to match`;
  next.srcset = `shots/desk-${wall.key}-sm.jpg 800w, shots/desk-${wall.key}.jpg 1600w`;
  next.sizes = '(max-width: 900px) 100vw, 60vw';
  next.src = `shots/desk-${wall.key}.jpg`;
  next.decode().catch(() => {}).then(() => {
    screen.append(next);
    requestAnimationFrame(() => next.classList.add('is-active'));
    const old = [...screen.querySelectorAll('.shot')].filter(s => s !== next);
    setTimeout(() => old.forEach(s => s.remove()), 900);
  });
}

function stop() { clearInterval(timer); timer = null; }
function start() {
  if (reduced.matches || timer) return;
  timer = setInterval(() => show((current + 1) % WALLS.length), 4500);
}
stage.addEventListener('pointerenter', stop);
stage.addEventListener('focusin', stop);
new IntersectionObserver(entries => entries[0].isIntersecting ? start() : stop(), { threshold: .3 }).observe(stage);
document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
show(0);
WALLS.slice(1).forEach(w => { const i = new Image(); i.src = `shots/desk-${w.key}-sm.jpg`; });

// Terminal close-ups, one per wallpaper.
const grid = document.querySelector('.term-grid');
WALLS.forEach(wall => {
  const figure = document.createElement('figure');
  figure.style.setProperty('--tint', accentOf(wall));
  figure.innerHTML = `<img src="shots/term-${wall.key}.jpg" width="960" height="618" loading="lazy" alt="Windows Terminal with the Pigment logo and system info in ${wall.title} colors">` +
    `<figcaption>${wall.title}</figcaption>`;
  grid.append(figure);
});

// Recordings play only while on screen. Reduced motion, phones and data saver
// keep the poster with a play button: the hero alone is ~14 MB.
const saveData = !!(navigator.connection && navigator.connection.saveData);
const small = matchMedia('(max-width: 640px)').matches;
const videos = [...document.querySelectorAll('video[data-autoplay], .hero-video video')];
const watcher = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
  if (isIntersecting && !document.hidden) target.play().catch(() => {});
  else target.pause();
}), { threshold: .25 });
videos.forEach(video => {
  if (reduced.matches || saveData || small) {
    video.controls = true;               // plays only when the visitor asks
    return;
  }
  if (video.closest('.hero-video')) video.preload = 'auto';
  watcher.observe(video);
});

document.querySelector('.credits').innerHTML = WALLS.map(w =>
  `<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=${w.id}">${w.title}</a>`).join(', ');
