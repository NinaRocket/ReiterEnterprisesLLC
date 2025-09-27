// shrink/darken header on scroll
const header = document.querySelector('.header');
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// footer year
document.getElementById('year').textContent = new Date().getFullYear();


