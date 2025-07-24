const burgerBtn = document.querySelector('[data-burger-btn]');
const modal = document.querySelector('[data-modal]');
const modalContainer = modal.querySelector('[data-modal-container]');
const closeBtn = document.querySelector('[data-close-btn]');
const mobileLinks = document.querySelectorAll('[data-mobile-menu-link]');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    modal.removeAttribute('data-active');
    modalContainer.removeAttribute('data-active');
  });
});

burgerBtn.addEventListener('click', () => {
  modal.setAttribute('data-active', '');
  modalContainer.setAttribute('data-active', '');
});

closeBtn.addEventListener('click', () => {
  modal.removeAttribute('data-active');
  modalContainer.removeAttribute('data-active');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.removeAttribute('data-active');
    modalContainer.removeAttribute('data-active');
  }
});
