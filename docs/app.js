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
