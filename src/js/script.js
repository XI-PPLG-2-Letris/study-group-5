const toggle2 = document.getElementById('toggle2');
const menu2 = document.getElementById('menu2');
const toggle3 = document.getElementById('toggle3');
const menu3 = document.getElementById('menu3');

// fungsi helper untuk tutup semua menu
function closeAllMenus() {
  menu2.classList.remove('show');
  menu3.classList.remove('show');
}

toggle2.addEventListener('click', (e) => {
  e.stopPropagation();
  // tutup menu lain
  closeAllMenus();
  // toggle menu2
  menu2.classList.toggle('show');
});

toggle3.addEventListener('click', (e) => {
  e.stopPropagation();
  closeAllMenus();
  menu3.classList.toggle('show');
});

// klik di luar
document.addEventListener('click', (e) => {
  if (!toggle2.contains(e.target) && !menu2.contains(e.target)
      && !toggle3.contains(e.target) && !menu3.contains(e.target)) {
    closeAllMenus();
  }
});
