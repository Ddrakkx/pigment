'use strict';
const imageDialog = document.querySelector('#image-dialog');
const largeImage = document.querySelector('#large-image');
const imageCaption = document.querySelector('#image-caption');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    largeImage.src = button.dataset.image;
    largeImage.alt = button.querySelector('img').alt;
    imageCaption.textContent = button.dataset.caption;
    imageDialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => {
  if (event.target === imageDialog) {
    const bounds = imageDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
  }
});

const globe = document.querySelector('#globe-animation');
const globeToggle = document.querySelector('#globe-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let globeVisible = false;
let globeRequested = !reducedMotion.matches;
let globeLoaded = false;
function updateGlobe() {
  if (globeRequested && globeVisible && !document.hidden) {
    if (!globeLoaded) {
      const source = globe.querySelector('source');
      source.src = source.dataset.src;
      globe.load();
      globeLoaded = true;
    }
    globe.play().catch(() => { globeRequested = false; syncGlobeButton(); });
  } else {
    globe.pause();
  }
  syncGlobeButton();
}
function syncGlobeButton() {
  globeToggle.textContent = globeRequested ? 'Pause rotation' : 'Play rotation';
}
globeToggle.hidden = false;
globeToggle.addEventListener('click', () => {
  globeRequested = !globeRequested;
  updateGlobe();
});
new IntersectionObserver(entries => {
  globeVisible = entries[0].isIntersecting;
  updateGlobe();
}, { threshold: 0.15 }).observe(globe);
document.addEventListener('visibilitychange', updateGlobe);
reducedMotion.addEventListener('change', () => {
  globeRequested = !reducedMotion.matches;
  updateGlobe();
});
