// const cookiemodal = document.getElementById('cookieModal');
// const acceptBtn = document.getElementById('acceptCookies');
// const declineBtn = document.getElementById('declineCookies');

// // Check localStorage
// const cookieChoice = localStorage.getItem('cookieConsent');

// if (!cookieChoice) {
//   cookiemodal.style.display = 'block';
// } else {
//   cookiemodal.style.display = 'none';
// }

// function handleConsent(choice) {
//   localStorage.setItem('cookieConsent', choice);
//   cookiemodal.style.display = 'none';
// }

// acceptBtn.addEventListener('click', () => handleConsent('accepted'));
// declineBtn.addEventListener('click', () => handleConsent('declined'));

const cookiemodal = document.querySelector('[data-cookie-modal]');
const acceptBtn = document.querySelector('[data-accept-cookies]');
const declineBtn = document.querySelector('[data-decline-cookies]');

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
