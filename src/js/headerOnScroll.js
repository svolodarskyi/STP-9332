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
