// simple hero dot rotation (simulate slider)
document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.hero-dots .dot');
  let idx = 0;
  setInterval(() => {
    dots[idx].classList.remove('active');
    idx = (idx + 1) % dots.length;
    dots[idx].classList.add('active');
  }, 3500);

  // Region select example (no backend)
  document.getElementById('regionSelect').addEventListener('change', (e) => {
    // here you would reload promo content based on region
    alert('Region dipilih: ' + e.target.value + '\n(Ini demo, data promo belum dinamis)');
  });
});
