const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('desktop-nav');
const logo = document.getElementById('logo');

const toggleMenu = () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    logo.style.display = 'none';
    toggleButton.childNodes[1].className = 'fas fa-times';
  } else {
    logo.style.display = 'block';
    menu.style.display = 'none';
    toggleButton.childNodes[1].className = 'fas fa-bars';
  }
};

toggleMenu();

toggleButton.addEventListener('click', toggleMenu);
