'use strict';

{
  const icon = document.querySelector('.js-icon');
  icon.addEventListener('click', () => {
    document.body.classList.toggle('u-dark-mode');
    document.querySelector('header').classList.toggle('u-dark-mode');
    document.querySelector('.js-hero-bgimg').classList.toggle('u-dark-mode-image');
  })
}