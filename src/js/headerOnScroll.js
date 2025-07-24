// const header = document.getElementById('header');

// function updateHeaderOnScroll() {
//   if (window.innerWidth >= 1200) {
//     if (window.scrollY > 10) {
//       header.classList.add('scrolled');
//       document.querySelectorAll('.nav-item').forEach(el => {
//         el.style.color = 'white';
//       });
//       header.classList.remove('at-top');
//     } else {
//       header.classList.remove('scrolled');
//       document.querySelectorAll('.nav-item').forEach(el => {
//         el.style.color = 'black';
//       });
//       header.classList.add('at-top');
//     }
//   } else {
//     header.classList.remove('scrolled');
//     header.classList.add('at-top');
//   }
// }

// window.addEventListener('scroll', updateHeaderOnScroll);

const header = document.querySelector('[data-header]');

function updateHeaderOnScroll() {
  if (window.innerWidth >= 1200) {
    if (window.scrollY > 10) {
      header.setAttribute('data-scrolled', '');
      header.removeAttribute('data-at-top');

      document.querySelectorAll('[data-nav-item]').forEach(el => {
        el.style.color = 'white';
      });
    } else {
      header.removeAttribute('data-scrolled');
      header.setAttribute('data-at-top', '');

      document.querySelectorAll('[data-nav-item]').forEach(el => {
        el.style.color = 'black';
      });
    }
  } else {
    header.removeAttribute('data-scrolled');
    header.setAttribute('data-at-top', '');
  }
}

window.addEventListener('scroll', updateHeaderOnScroll);
