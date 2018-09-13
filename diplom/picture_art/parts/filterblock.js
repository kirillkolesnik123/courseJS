"use strict";

function filterblock() {
  // фильтрация блоков
  var all = document.getElementsByClassName('all'),
      girl = document.getElementsByClassName('girl'),
      chef = document.getElementsByClassName('chef'),
      guy = document.getElementsByClassName('guy'),
      lovers = document.getElementsByClassName('lovers');
  var portfolioNo = document.querySelector('.portfolio-no'),
      portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
      portfolioMenuLi = portfolioMenu.querySelectorAll('li'),
      portfolioBlock = document.getElementsByClassName('portfolio-block');

  for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'block';
  }

  function hideAllBlocks() {
    for (var _i = 0; _i < portfolioBlock.length; _i++) {
      portfolioBlock[_i].style.display = "none";
    }
  }

  portfolioMenu.addEventListener('click', function (e) {
    if (e.target && e.target.tagName == 'LI') {
      for (var _i2 = 0; _i2 < portfolioMenuLi.length; _i2++) {
        portfolioMenuLi[_i2].classList.remove('active');

        e.target.classList.add('active');
      }

      if (e.target.className.indexOf('allBtn') !== -1) {
        for (var _i3 = 0; _i3 < all.length; _i3++) {
          all[_i3].style.display = 'block';
        }
      }

      if (e.target.className.indexOf('loversBtn') !== -1) {
        hideAllBlocks();

        for (var _i4 = 0; _i4 < lovers.length; _i4++) {
          lovers[_i4].style.display = 'block';
        }
      }

      if (e.target.className.indexOf('chefBtn') !== -1) {
        hideAllBlocks();

        for (var _i5 = 0; _i5 < chef.length; _i5++) {
          chef[_i5].style.display = 'block';
        }
      }

      if (e.target.className.indexOf('guyBtn') !== -1) {
        hideAllBlocks();

        for (var _i6 = 0; _i6 < guy.length; _i6++) {
          guy[_i6].style.display = 'block';
        }
      }

      if (e.target.className.indexOf('girlBtn') !== -1) {
        hideAllBlocks();

        for (var _i7 = 0; _i7 < girl.length; _i7++) {
          girl[_i7].style.display = 'block';
        }
      }

      if (e.target.className.indexOf('grandmotherBtn') !== -1 || e.target.className.indexOf('granddadBtn') !== -1) {
        hideAllBlocks();
        portfolioNo.style.display = 'block';
      }
    }
  });
}

module.exports = filterblock;