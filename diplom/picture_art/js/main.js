(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded',function(){

	let accordeon = require('../parts/accordeon.js');
	let ajax = require('../parts/ajax.js');
	let calculator = require('../parts/calculator.js');
	let downloadblocks = require('../parts/downloadblocks.js');
	let filterblock = require('../parts/filterblock.js');
	let modalwindows = require('../parts/modalwindows.js');
	let picturesshow = require('../parts/picturesshow.js');
	let sliders = require('../parts/sliders.js');
	
		
		accordeon();
		ajax();
		calculator();
		downloadblocks();
		filterblock();
		picturesshow();
		sliders();
		modalwindows();
		

});


},{"../parts/accordeon.js":2,"../parts/ajax.js":3,"../parts/calculator.js":4,"../parts/downloadblocks.js":5,"../parts/filterblock.js":6,"../parts/modalwindows.js":7,"../parts/picturesshow.js":8,"../parts/sliders.js":9}],2:[function(require,module,exports){
function accordeon() {
 let accordion = document.getElementById('accordion'),
      accordionHead = document.getElementsByClassName('accordion-heading'),
      accordionBlock = document.getElementsByClassName('accordion-block');


  for (let i=0; i<accordionHead.length; i++) {
    accordionHead[i].addEventListener('click', function(e){
      for(let c=0; c<accordionHead.length; c++){
        accordionHead[c].style.color = '#333';
        accordionHead[c].querySelector("span").style.borderBottom = '2px dotted #333';
      }

      for(let a=0; a<accordionBlock.length; a++){
        if (a!=i) {
          accordionBlock[a].style.display = 'none';
        }
      }

      if (accordionBlock[i].style.display == 'flex') {
        accordionBlock[i].style.display = 'none';
      } else {
        accordionBlock[i].style.display = 'flex';
        accordionHead[i].style.color = '#f442e5';
        accordionHead[i].querySelector("span").style.borderColor  = 'transparent';
        accordionBlock[i].classList.add('slideInDown');
        }
    });
  }
}

module.exports = accordeon;
},{}],3:[function(require,module,exports){
function ajax() {
 let message = new Object();

  message.loading = "╨Ч╨░╨│╤А╤Г╨╖╨║╨░...";
  message.success = "╨Ф╨░╨╜╨╜╤Л╨╡ ╨┐╤А╨╕╨╜╤П╤В╤Л. ╨Ь╤Л ╤Б╨▓╤П╨╢╨╡╨╝╤Б╤П ╤Б ╨Т╨░╨╝╨╕ ╨▓ ╨▒╨╗╨╕╨╢╨░╨╣╤И╨╡╨╡ ╨▓╤А╨╡╨╝╤П";
  message.failure = "╨з╤В╨╛-╤В╨╛ ╨┐╨╛╤И╨╗╨╛ ╨╜╨╡ ╤В╨░╨║... ";
  statusMessage = document.createElement('div');


  let consultationForm = document.querySelectorAll('.consultation-form')[0],
      popupConsultationForm = document.querySelectorAll('.popup-consultation-form')[0],
      designForm = document.querySelectorAll('.design-form')[0],
      formNoneDesign = document.getElementsByClassName('form-none-design')[0],
      formNoneConsultation = document.querySelector('.form-none-consultation'),
      telDesign = document.getElementById('telDesign'),
      telConsultationPopUp = document.getElementById('telConsultationPopUp'),
      telConsultation = document.getElementById('telConsultation'),
      inputText = document.getElementsByClassName('input-text');
      
      for (let i = 0; i<inputText.length; i++){
        inputText[i].addEventListener('input', function(){
          this.value = this.value.replace(/[A-Za-z]+$/g, '');
        });
      }

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
  };

  function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
   if (event.type == "blur") {
      if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
  };

  telDesign.addEventListener("input", mask, false);
  telDesign.addEventListener("focus", mask, false);
  telDesign.addEventListener("blur", mask, false);
  telConsultationPopUp.addEventListener("input", mask, false);
  telConsultationPopUp.addEventListener("focus", mask, false);
  telConsultationPopUp.addEventListener("blur", mask, false);
  telConsultation.addEventListener("input", mask, false);
  telConsultation.addEventListener("focus", mask, false);
  telConsultation.addEventListener("focus", mask, false);

  consultationForm.addEventListener('submit', function(e){
    e.preventDefault();
    consultationForm.appendChild(statusMessage);

    // ajax

    let request = new XMLHttpRequest();
    request.open("POST", 'server.php');

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let formData = new FormData (consultationForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState<4) {
        statusMessage.innerHTML = "<p>" + message.loading + "</p> " + "<img src='./img/load.gif'>";
        statusMessage.style.textAlign = 'center';
        statusMessage.style.marginTop = '30px';
      } else if (request.readyState === 4){
        if (request.status == 200) {
          statusMessage.innerHTML = "<p>" + message.success + "</p>" + "<img src='./img/cat.png'>";
          statusMessage.style.textAlign = 'center';
          statusMessage.style.marginTop = '30px';
        } else {
          statusMessage.innerHTML = "<p>" + message.failure + "</p>" + "<img src='./img/toe.png'>";
          statusMessage.style.textAlign = 'center';
          statusMessage.style.marginTop = '30px';
        }
      }
    };
  });

  designForm.addEventListener('submit', function(e){
    e.preventDefault();
    designForm.appendChild(statusMessage);

    // ajax

    let request = new XMLHttpRequest();
    request.open("POST", 'server.php');

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let formData = new FormData (designForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState<4) {
        statusMessage.innerHTML =message.loading;
        statusMessage.style.textAlign = 'center';
        statusMessage.style.marginTop = '30px';
      } else if (request.readyState === 4){
        if (request.status == 200) {
          formNoneDesign.style.display = 'none';
          statusMessage.innerHTML = message.success;
          statusMessage.style.textAlign = 'center';
          statusMessage.style.marginTop = '30px';         
        } else {
          formNoneDesign.style.display = 'none';
          statusMessage.innerHTML = message.failure;
          statusMessage.style.textAlign = 'center';
          statusMessage.style.marginTop = '30px';
        }
      }
    };
  });


  popupConsultationForm.addEventListener('submit', function(e){
    e.preventDefault();
    popupConsultationForm.appendChild(statusMessage);

    // ajax

    let request = new XMLHttpRequest();
    request.open("POST", 'server.php');

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let formData = new FormData (popupConsultationForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState<4) {
        statusMessage.innerHTML =message.loading;
        statusMessage.style.textAlign = 'center';
        statusMessage.style.marginTop = '30px';
      } else if (request.readyState === 4){
        if (request.status == 200) {
          formNoneConsultation.style.display = 'none';
          statusMessage.innerHTML = message.success;
          statusMessage.style.textAlign = 'center';
          statusMessage.style.marginTop = '30px';
        } else {
          formNoneConsultation.style.display = 'none';
          statusMessage.innerHTML = message.failure;
          statusMessage.style.textAlign = 'center';
          statusMessage.style.marginTop = '30px';
        }
      }
    };
  }); 
}

module.exports = ajax;
},{}],4:[function(require,module,exports){
function calculator() {
let size = document.getElementById('size'),
      material = document.getElementById('material'),
      options = document.getElementById('options'),
      promocode = document.getElementById('promocode'),
      calcPriceValue = document.getElementById('calc-price-value'),
      calcPriceText = document.getElementById('calc-price-none'),
      buttonOrderCalc = document.getElementById('button-order-calc'),
      price = 0,
      work = 5000;


  function handleChange () {
    if (size.selectedIndex == '' || material.selectedIndex == '') {
      calcPriceText.style.display = 'block';
      calcPriceValue.style.display = 'none';
    } else if (options.selectedIndex == '' && promocode.value == ''){
      price = parseInt(size.value) + parseInt(material.value) + work;
      calcPriceText.style.display = 'none';
      calcPriceValue.style.display = 'block';
      calcPriceValue.innerHTML = price;
    } else if (options.selectedIndex != '' && promocode.value == ''){
      price = parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work;
      calcPriceText.style.display = 'none';
      calcPriceValue.style.display = 'block';
      calcPriceValue.innerHTML = price;
    } else if (options.selectedIndex == '' && promocode.value == 'IWANTPOPART'){
      let discount = Math.round(((parseInt(size.value) + parseInt(material.value) + work)*30)/100);
      price = (parseInt(size.value) + parseInt(material.value) + work);
      calcPriceText.style.display = 'none';
      calcPriceValue.innerHTML = price - discount;
    } else {
      let discount = Math.round(((parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work)*30)/100);
      price = parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work;
      calcPriceText.style.display = 'none';
      calcPriceValue.style.display = 'block';
      calcPriceValue.innerHTML = price - discount;
    }
  }

  size.addEventListener('change', function(){
    handleChange ();
  });

  material.addEventListener('change', function(){
    handleChange ();
  });

  options.addEventListener('change', function(){
    handleChange ();
  });

  promocode.addEventListener('change', function(){
    handleChange ();
  });  
}

module.exports = calculator;
},{}],5:[function(require,module,exports){
function downloadblocks() {
  let styleBlockButton = document.getElementById('styleButton'),
      styleMore = document.getElementsByClassName('styles-2');

  styleBlockButton.addEventListener('click', function(){
    for(let i = 0; i<styleMore.length; i++){
      styleMore[i].style.display='block';
    }
    styleBlockButton.style.display = 'none';
  });


  // ╨Ь╨╛╨┤╨░╨╗╤М╨╜╤Л╨╡ ╨╛╨║╨╜╨░ popup-consultation&design&gift
  let body = document.getElementsByTagName('body')[0],
      popupConsultationBlock = document.getElementsByClassName('popup-consultation')[0],
      popupDesignBlock = document.getElementsByClassName('popup-design')[0],
      popupClose = document.getElementsByClassName('popup-close'),
      popUpAll = document.querySelectorAll('.popUpAll'),
      gift = document.getElementById('gift'),
      popupGift = document.querySelector('.popup-gift'),
      indexOpenModal = false;

  body.addEventListener('click', function(e){
    if (e.target && e.target.id == 'popUpConsultBtn') {
      popupConsultationBlock.style.display = 'block';
      indexOpenModal = true;
    }
    if (e.target && e.target.id == 'popupClose') {
      for(let i = 0; i<popUpAll.length; i++){
        popUpAll[i].style.display = 'none'
      }
      indexOpenModal = true;
    }
    if (e.target && e.target.id == 'buttonDesign') {
      popupDesignBlock.style.display = 'block';
      indexOpenModal = true;
    }
    if (e.target && e.target.id == 'gift') {
      popupGift.style.display = 'block';
      gift.style.display = 'none';
      indexOpenModal = true;
    }
    if ((e.target && e.target.id == 'popupGift') || (e.target && e.target.id == 'popupDesignBlock') || (e.target && e.target.id == "popupConsultationBlock")) {
      popupGift.style.display = 'none';
      popupDesignBlock.style.display = 'none';
      popupConsultationBlock.style.display = 'none';
      indexOpenModal = true;
    }

  });
  // ╨│╨░╨╝╨▒╤Г╤А╨│╨╡╤А

  let mobileBtn = document.getElementById('burger'),
      mobileMenu = document.getElementById('burger-menu'),
      headerMenu = document.getElementById('header-menu');

  function mobileBtnCheck() {
    if (screen.width > 991) {
      mobileBtn.style.display = 'none';
      mobileMenu.style.display = 'none';
      headerMenu.style.display = 'block';
    } else{
      mobileBtn.style.display = 'block';
      headerMenu.style.display = 'none';
      mobileMenu.style.display = 'none';        
    }
  }

  mobileBtnCheck();

  window.addEventListener('resize', mobileBtnCheck);

  mobileBtn.addEventListener('click', function(){
    if (mobileMenu.style.display == 'block') {
      mobileMenu.classList.add('hinge');
      setTimeout(function(){
        mobileMenu.style.display = 'none';
      }, 90);
    } else {
      mobileMenu.style.display = 'block';
      mobileMenu.classList.remove('hinge');
    }   
  });
}

module.exports = downloadblocks;
},{}],6:[function(require,module,exports){
function filterblock() {
// ╤Д╨╕╨╗╤М╤В╤А╨░╤Ж╨╕╤П ╨▒╨╗╨╛╨║╨╛╨▓

  let all = document.getElementsByClassName('all'),
      girl = document.getElementsByClassName('girl'),
      chef = document.getElementsByClassName('chef'),
      guy = document.getElementsByClassName('guy'),
      lovers = document.getElementsByClassName('lovers');

  let portfolioNo = document.querySelector('.portfolio-no'),
      portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
      portfolioMenuLi = portfolioMenu.querySelectorAll('li'),
      portfolioBlock = document.getElementsByClassName('portfolio-block');

      for(let i = 0; i<all.length; i++){
        all[i].style.display = 'block';
      }

  function hideAllBlocks() {
    for (let i=0; i< portfolioBlock.length; i++) {
      portfolioBlock[i].style.display = "none";
    }
  }

  portfolioMenu.addEventListener('click', function(e) {
    if (e.target && e.target.tagName == 'LI') {
      for(let i = 0; i<portfolioMenuLi.length; i++){
        portfolioMenuLi[i].classList.remove('active');
        e.target.classList.add('active');
      }

      if (e.target.className.indexOf('allBtn')!==-1) {
        for(let i = 0; i<all.length; i++){
          all[i].style.display = 'block';
          portfolioNo.style.display = 'none';
        }
      }
      if (e.target.className.indexOf('loversBtn')!==-1) {
        hideAllBlocks();
        for(let i = 0; i<lovers.length; i++){
          lovers[i].style.display = 'block';
          portfolioNo.style.display = 'none';
        }
      }

      if (e.target.className.indexOf('chefBtn')!==-1) {
        hideAllBlocks();
        for(let i=0; i<chef.length; i++){
          chef[i].style.display = 'block';
          portfolioNo.style.display = 'none';
        }
      }

      if (e.target.className.indexOf('guyBtn')!==-1) {
        hideAllBlocks();
        for(let i=0; i<guy.length; i++){
          guy[i].style.display = 'block';
          portfolioNo.style.display = 'none';
        }
      }

      if (e.target.className.indexOf('girlBtn')!==-1) {
        hideAllBlocks();
        for(let i=0; i<girl.length; i++){
          girl[i].style.display = 'block';
          portfolioNo.style.display = 'none';
        }
      }

      if (e.target.className.indexOf('grandmotherBtn')!==-1 || e.target.className.indexOf('granddadBtn')!==-1) {
        hideAllBlocks();
        portfolioNo.style.display = 'block';
      }
    }
  });
}

module.exports = filterblock;
},{}],7:[function(require,module,exports){
function modalwindows() {
// ╨Ь╨╛╨┤╨░╨╗╤М╨╜╤Л╨╡ ╨╛╨║╨╜╨░ popup-consultation&design&gift
  let body = document.getElementsByTagName('body')[0],
      popupConsultationBlock = document.getElementsByClassName('popup-consultation')[0],
      popupDesignBlock = document.getElementsByClassName('popup-design')[0],
      popupClose = document.getElementsByClassName('popup-close'),
      popUpAll = document.querySelectorAll('.popUpAll'),
      gift = document.getElementById('gift'),
      popupGift = document.querySelector('.popup-gift'),
      indexOpenModal = false;

  body.addEventListener('click', function(e){
    if (e.target && e.target.id == 'popUpConsultBtn') {
      popupConsultationBlock.style.display = 'block';
      indexOpenModal = true;
    }
    if (e.target && e.target.id == 'popupClose') {
      for(let i = 0; i<popUpAll.length; i++){
        popUpAll[i].style.display = 'none'
      }
      indexOpenModal = true;
    }
    if (e.target && e.target.id == 'buttonDesign') {
      popupDesignBlock.style.display = 'block';
      indexOpenModal = true;
    }
    if (e.target && e.target.id == 'gift') {
      popupGift.style.display = 'block';
      gift.style.display = 'none';
      indexOpenModal = true;
    }
    if ((e.target && e.target.id == 'popupGift') || (e.target && e.target.id == 'popupDesignBlock') || (e.target && e.target.id == "popupConsultationBlock")) {
      popupGift.style.display = 'none';
      popupDesignBlock.style.display = 'none';
      popupConsultationBlock.style.display = 'none';
      indexOpenModal = true;
    }

  });
  // ╨┤╨╛╨╗╨╕╤Б╤В╨░╨╗ ╨┤╨╛ ╨║╨╛╨╜╤Ж╨░ ╨╕ 60 ╤Б╨╡╨║╤Г╨╜╨┤

  let endScrollHeight = document.body.scrollHeight - document.documentElement.clientHeight;

  window.addEventListener('scroll', function(){
    if ((window.pageYOffset >= endScrollHeight) && indexOpenModal == false) {
      popupGift.style.display = 'block';
      gift.style.display = 'none';
    }
  });

  let minutePopup = setTimeout(function(){
    if (indexOpenModal == false) {
      popupConsultationBlock.style.display = 'block';
      console.log('╤А╨░╨▒╨╛╤В╨░╨╡╤В')
    } else{
      clearInterval(minutePopup);
    }
  }, 60000);

}

module.exports = modalwindows;
},{}],8:[function(require,module,exports){
function picturesshow() {
// ╨║╨░╤А╤В╨╕╨╜╨║╨╕ ╨┐╤А╨╕ ╨╜╨░╨▓╨╡╨┤╨╡╨╜╨╕╨╕

  let images = document.createElement('img'),
      picBlocks = document.getElementsByClassName('sizes-block');
  
  images.style.position = 'absolute';
  images.style.top = '0';
  images.style.left = '0';
  images.style.right = '0';
  images.style.bottom = '0';

  picBlocks[0].addEventListener('mouseenter', function(){
    picBlocks[0].appendChild(images);
    images.src = './img/sizes-1-1.png';
  });

  picBlocks[0].addEventListener('mouseleave', function(){
    picBlocks[0].removeChild(images);
  });

  picBlocks[1].addEventListener('mouseenter', function(){
    picBlocks[1].appendChild(images);
    images.src = './img/sizes-2-1.png';
  });

  picBlocks[1].addEventListener('mouseleave', function(){
    picBlocks[1].removeChild(images);
  });

  picBlocks[2].addEventListener('mouseenter', function(){
    picBlocks[2].appendChild(images);
    images.src = './img/sizes-3-1.png';
  });

  picBlocks[2].addEventListener('mouseleave', function(){
    picBlocks[2].removeChild(images);
  });

  picBlocks[3].addEventListener('mouseenter', function(){
    picBlocks[3].appendChild(images);
    images.src = './img/sizes-4-1.png';
  });

  picBlocks[3].addEventListener('mouseleave', function(){
    picBlocks[3].removeChild(images);
      });
}

module.exports = picturesshow;
},{}],9:[function(require,module,exports){
"use strict";

function sliders() {
  // ╤Б╨╗╨░╨╣╨┤╨╡╤А ╨▓╨╡╤А╤Е╨╜╨╕╨╣
  var slideIndex = 0,
      slides = document.getElementsByClassName('main-slider-item');

  function showSlide() {
    // ╤З╤В╨╛╨▒╤Л ╨┐╨╛╤Б╨╗╨╡ ╨┐╨╛╤Б╨╗╨╡╨┤╨╜╨╡╨│╨╛ ╤Б╨╗╨░╨╣╨┤╨░ ╨┐╨╛╨║╨░╨╖╤Л╨▓╨░╨╗╤Б╤П 1-╤Л╨╣.
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
  showSlide(); // ╤Б╨╗╨░╨╣╨┤╨╡╤А ╨╜╨╕╨╢╨╜╨╕╨╣

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
},{}]},{},[1]);
