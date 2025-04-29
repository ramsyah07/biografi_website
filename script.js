const toggleTheme = document.getElementById('toggleTheme');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

// Toggle dark/light theme
toggleTheme.addEventListener('click', () => {
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-white');
  body.classList.toggle('bg-gray-100');
  body.classList.toggle('text-gray-900');
});

// Toggle mobile menu
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

