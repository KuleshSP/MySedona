'use strict';

(function () {
  var SITE_LIST = document.querySelector('.site-list');
  var SITE_LIST_OPEN = document.querySelector('.main-nav__toggle');
  var SITE_LIST_CLOSE = document.querySelector('.site-list__button-cross');

  var openMenu = function () {
    SITE_LIST.classList.remove('site-list--closed');
    SITE_LIST_OPEN.classList.add('visually-hidden');
    SITE_LIST_CLOSE.addEventListener('click', closeMenu);
  };
  var closeMenu = function () {
    SITE_LIST.classList.add('site-list--closed');
    SITE_LIST_OPEN.classList.remove('visually-hidden');
    SITE_LIST_CLOSE.removeEventListener('click', closeMenu);
  }

  SITE_LIST_OPEN.addEventListener('click', openMenu);
})();
