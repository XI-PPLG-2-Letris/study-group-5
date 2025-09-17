const toggle2 = document.getElementById('toggle2');
const menu2 = document.getElementById('menu2');
const toggle3 = document.getElementById('toggle3');
const menu3 = document.getElementById('menu3');
const toggle4 = document.getElementById('toggle4');
const menu4 = document.getElementById('menu4');
const toggle5 = document.getElementById('toggle5');
const menu5 = document.getElementById('menu5');

function closeAllMenus() {
  menu2.classList.remove('show');
  menu3.classList.remove('show');
  menu4.classList.remove('show');
  menu5.classList.remove('show');
}

toggle2.addEventListener('click', (e) => {
  e.stopPropagation(); 
  if (menu2.classList.contains('show')) {
    menu2.classList.remove('show');
  } else {
    closeAllMenus();
    menu2.classList.add('show');
  }
});

toggle3.addEventListener('click', (e) => {
  e.stopPropagation();
  if (menu3.classList.contains('show')) {
    menu3.classList.remove('show');
  } else {
    closeAllMenus();
    menu3.classList.add('show');
  }
});

toggle4.addEventListener('click', (e) => {
  e.stopPropagation();
  if (menu4.classList.contains('show')) {
    menu4.classList.remove('show');
  } else {
    closeAllMenus();
    menu4.classList.add('show');
  }
});

toggle5.addEventListener('click', (e) => {
  e.stopPropagation();
  if (menu5.classList.contains('show')) {
    menu5.classList.remove('show');
  } else {
    closeAllMenus();
    menu5.classList.add('show');
  }
});


document.addEventListener('click', () => {
  closeAllMenus();
});
