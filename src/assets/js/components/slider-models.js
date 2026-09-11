import Swiper from 'swiper';
import { Navigation } from 'swiper';

const initSliderModels = () => {
  const slider = document.querySelector('[data-models-slider]');
  if (!slider) return;

  new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 24,
    grabCursor: true,
    watchSlidesProgress: true,
    speed: 700,
    a11y: {
      enable: true,
    },
    navigation: {
      nextEl: ".models-slider__btn--next",
      prevEl: ".models-slider__btn--prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.05,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2.06,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  })
}

initSliderModels();
