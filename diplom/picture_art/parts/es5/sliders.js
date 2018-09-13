"use strict";

function sliders() {
  // слайдер верхний
  var slideIndex = 0,
      slides = document.getElementsByClassName('main-slider-item');

  function showSlide() {
    // чтобы после последнего слайда показывался 1-ый.
    if (slideIndex == slides.length) {
      slideIndex = 0;
    }

    var prevSlideIndex = slideIndex - 1;

    if (prevSlideIndex == -1) {
      prevSlideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.remove('fadeOutDown');
    slides[slideIndex].classList.add('fadeIn');
    slides[prevSlideIndex].classList.add('fadeOutDown');
    slides[prevSlideIndex].classList.remove('fadeIn');
    setTimeout(function () {
      slides[slideIndex].style.display = "flex";
      slides[prevSlideIndex].style.display = "none";
    }, 500);
  }

  function plusSlides() {
    slideIndex++;
    showSlide();
  }

  setInterval(function () {
    plusSlides();
  }, 2500);
  showSlide(); // слайдер нижний

  var slideIndexFeedback = 0,
      lastDirection = 1,
      // timerIdFeed,
  slidesFeedback = document.getElementsByClassName('feedback-slider-item'),
      prevFeedback = document.querySelector('.main-prev-btn'),
      nextFeedback = document.querySelector('.main-next-btn'),
      feedback = document.querySelector('.feedback-slider');

  function showSlideFeedback(delta) {
    var prevSlideIndexFeedback = slideIndexFeedback;
    slideIndexFeedback = slideIndexFeedback + delta;

    if (slideIndexFeedback > slidesFeedback.length - 1) {
      slideIndexFeedback = 0;
    }

    if (slideIndexFeedback < 0) {
      slideIndexFeedback = slidesFeedback.length - 1;
    }

    slidesFeedback[slideIndexFeedback].classList.remove('fadeOutRight', 'fadeOutLeft');
    slidesFeedback[slideIndexFeedback].classList.add('fadeIn');

    if (delta > 0) {
      slidesFeedback[prevSlideIndexFeedback].classList.add('fadeOutRight');
    }

    if (delta < 0) {
      slidesFeedback[prevSlideIndexFeedback].classList.add('fadeOutLeft');
    }

    slidesFeedback[prevSlideIndexFeedback].classList.remove('fadeIn');

    if (delta === 0) {
      slidesFeedback[prevSlideIndexFeedback].style.display = 'none';
      slidesFeedback[slideIndexFeedback].style.display = 'flex';
    } else {
      setTimeout(function () {
        slidesFeedback[prevSlideIndexFeedback].style.display = 'none';
        slidesFeedback[slideIndexFeedback].style.display = 'flex';
      }, 300);
    }
  }

  showSlideFeedback(0);
  prevFeedback.addEventListener('click', function () {
    lastDirection = -1;
    showSlideFeedback(-1);
  });
  nextFeedback.addEventListener('click', function () {
    lastDirection = 1;
    showSlideFeedback(1);
  });
  var timerIdFeed = setInterval(function () {
    showSlideFeedback(lastDirection);
  }, 3000);
  feedback.addEventListener('mouseenter', function () {
    clearInterval(timerIdFeed);
  });
  feedback.addEventListener('mouseleave', function () {
    timerIdFeed = setInterval(function () {
      showSlideFeedback(lastDirection);
    }, 3000);
  });
}

module.exports = sliders;