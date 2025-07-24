const burgerBtn = document.querySelector('.burger-btn');
const modal = document.getElementById('modal');
const modalContainer = modal.querySelector('.modal-container');
const closeBtn = document.getElementById('close-btn');

const mobileLinks = document.querySelectorAll('.mobile-menu-link');

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    modal.classList.remove('active');
    modalContainer.classList.remove('active');
  });
});

burgerBtn.addEventListener('click', () => {
  modal.classList.add('active');
  modalContainer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modalContainer.classList.remove('active');
});

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
    modalContainer.classList.remove('active');
  }
});

const header = document.getElementById('header');

function updateHeaderOnScroll() {
  if (window.innerWidth >= 1200) {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
      document.querySelectorAll('.nav-item').forEach(el => {
        el.style.color = 'white';
      });
      header.classList.remove('at-top');
    } else {
      header.classList.remove('scrolled');
      document.querySelectorAll('.nav-item').forEach(el => {
        el.style.color = 'black';
      });
      header.classList.add('at-top');
    }
  } else {
    header.classList.remove('scrolled');
    header.classList.add('at-top');
  }
}

window.addEventListener('scroll', updateHeaderOnScroll);

const cookiemodal = document.getElementById('cookieModal');
const acceptBtn = document.getElementById('acceptCookies');
const declineBtn = document.getElementById('declineCookies');

// Check localStorage
const cookieChoice = localStorage.getItem('cookieConsent');

if (!cookieChoice) {
  cookiemodal.style.display = 'block';
} else {
  cookiemodal.style.display = 'none';
}

function handleConsent(choice) {
  localStorage.setItem('cookieConsent', choice);
  cookiemodal.style.display = 'none';
}

acceptBtn.addEventListener('click', () => handleConsent('accepted'));
declineBtn.addEventListener('click', () => handleConsent('declined'));
