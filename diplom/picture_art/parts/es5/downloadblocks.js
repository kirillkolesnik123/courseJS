"use strict";

function downloadblocks() {
  // Подгрузка блоков
  var styleBlockButton = document.getElementById('styleButton'),
      styleMore = document.getElementsByClassName('styles-2');
  styleBlockButton.addEventListener('click', function () {
    for (var i = 0; i < styleMore.length; i++) {
      styleMore[i].style.display = 'block';
    }

    styleBlockButton.style.display = 'none';
  }); // гамбургер

  var mobileBtn = document.getElementById('burger'),
      mobileMenu = document.getElementById('burger-menu'),
      headerMenu = document.getElementById('header-menu');

  function mobileBtnCheck() {
    if (screen.width > 991) {
      mobileBtn.style.display = 'none';
      mobileMenu.style.display = 'none';
      headerMenu.style.display = 'block';
    } else {
      mobileBtn.style.display = 'block';
      headerMenu.style.display = 'none';
      mobileMenu.style.display = 'none';
    }
  }

  mobileBtnCheck();
  window.addEventListener('resize', mobileBtnCheck);
  mobileBtn.addEventListener('click', function () {
    if (mobileMenu.style.display == 'block') {
      mobileMenu.classList.add('hinge');
      setTimeout(function () {
        mobileMenu.style.display = 'none';
      }, 90);
    } else {
      mobileMenu.style.display = 'block';
      mobileMenu.classList.remove('hinge');
    }
  });
}

module.exports = downloadblocks;