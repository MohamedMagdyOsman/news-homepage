// variables
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('overlay');

// sidenav management
openNav.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);

// functions
function toggleNav() {
  overlay.classList.toggle('hidden');
  sideNav.classList.toggle('translate-x-full');
}