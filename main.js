const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('desktop-nav');
const logo = document.getElementById('logo');

const toggleMenu = () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    menu.style.height = '100vh';
    logo.style.display = 'none';
    toggleButton.childNodes[1].className = 'fas fa-times';
    toggleButton.childNodes[1].style.color = 'grey';
  } else {
    logo.style.display = 'block';
    menu.style.display = 'none';
    toggleButton.childNodes[1].className = 'fas fa-bars';
    toggleButton.childNodes[1].style.color = '#fff';
  }
};

toggleButton.addEventListener('click', toggleMenu);
