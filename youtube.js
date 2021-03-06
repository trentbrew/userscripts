var primary = document.getElementById('page-manager');

// hide recommendations

primary.style.opacity = '0';
primary.style.pointerEvents = 'none';

// hide drawer

var drawer = document.querySelectorAll('ytd-mini-guide-renderer')[0];
drawer.style.opacity = '0';

setTimeout(() => {
  document.getElementById('guide-button').click();
}, 100);

// use ` to toggle recommendations

window.addEventListener('keyup', (e) => {
  if (e.keyCode == 192) {
    if (primary.style.opacity == '0') {
      primary.style.opacity = '1';
      primary.style.pointerEvents = 'all';
    } else {
      primary.style.opacity = '0';
      primary.style.pointerEvents = 'none';
    }
  }
});
