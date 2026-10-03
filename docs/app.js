'use strict';
const imageDialog = document.querySelector('#image-dialog');
const largeImage = document.querySelector('#large-image');
const imageCaption = document.querySelector('#image-caption');
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const galleryFilters = document.querySelector('.gallery-filters');
const galleryCount = document.querySelector('#gallery-count');
const imagePosition = document.querySelector('#image-position');
let viewerItems = [];
let viewerIndex = 0;
function showImage(index) {
  viewerIndex = (index + viewerItems.length) % viewerItems.length;
  const button = viewerItems[viewerIndex];
  largeImage.src = button.dataset.image;
  largeImage.alt = button.querySelector('img').alt;
  imageCaption.textContent = button.dataset.caption;
  imagePosition.textContent = `${viewerIndex + 1} / ${viewerItems.length}`;
}
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    viewerItems = button.classList.contains('gallery-item')
      ? galleryItems.filter(item => !item.hidden) : galleryItems;
    let index = viewerItems.findIndex(item => item.dataset.image === button.dataset.image);
    if (index < 0) { viewerItems = [button, ...viewerItems]; index = 0; }
    showImage(index);
    imageDialog.showModal();
  });
});
galleryFilters.hidden = false;
galleryFilters.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    galleryItems.forEach(item => {
      item.hidden = category !== 'all' && !item.dataset.category.split(' ').includes(category);
    });
    galleryFilters.querySelectorAll('button').forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    const count = galleryItems.filter(item => !item.hidden).length;
    galleryCount.textContent = `${count} ${count === 1 ? 'example' : 'examples'}`;
  });
});
document.querySelector('#image-previous').addEventListener('click', () => showImage(viewerIndex - 1));
document.querySelector('#image-next').addEventListener('click', () => showImage(viewerIndex + 1));
imageDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showImage(viewerIndex + (event.key === 'ArrowLeft' ? -1 : 1));
  }
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
