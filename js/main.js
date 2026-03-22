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


// photogallery
document.addEventListener('DOMContentLoaded', function () {
  function wireThumbnailCarousel(carouselSelector, thumbsSelector) {
    const carousel = document.querySelector(carouselSelector);
    const thumbs = document.querySelectorAll(`${thumbsSelector} .thumb`);

    if (!carousel || !thumbs.length) return;

    carousel.addEventListener('slid.bs.carousel', function (event) {
      thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === event.to);
        if (index === event.to) {
          thumb.setAttribute('aria-current', 'true');
        } else {
          thumb.removeAttribute('aria-current');
        }
      });
    });
  }

  wireThumbnailCarousel('#galleryCarousel', '#galleryThumbs');
  wireThumbnailCarousel('#officiantCarousel', '#officiantThumbs');
});
