import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/style.scss';

import { initMobileMenuToggle } from './mobile-menu-toggle';
import { initManufacturesSlider } from './manufactures-slider';
import { initAnswersList } from './answers-list';

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenuToggle();
  initManufacturesSlider();
  initAnswersList()
});
