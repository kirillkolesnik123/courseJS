"use strict";

function modalwindows() {
  // Модальные окна popup-consultation&design&gift
  var body = document.getElementsByTagName('body')[0],
      popupConsultationBlock = document.getElementsByClassName('popup-consultation')[0],
      popupDesignBlock = document.getElementsByClassName('popup-design')[0],
      popUpAll = document.querySelectorAll('.popUpAll'),
      gift = document.getElementById('gift'),
      popupGift = document.querySelector('.popup-gift'),
      indexOpenModal = false;
  body.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'popUpConsultBtn') {
      popupConsultationBlock.style.display = 'block';
      indexOpenModal = true;
    }

    if (e.target && e.target.id == 'popupClose') {
      for (var i = 0; i < popUpAll.length; i++) {
        popUpAll[i].style.display = 'none';
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

    if (e.target && e.target.id == 'popupGift' || e.target && e.target.id == 'popupDesignBlock' || e.target && e.target.id == "popupConsultationBlock") {
      popupGift.style.display = 'none';
      popupDesignBlock.style.display = 'none';
      popupConsultationBlock.style.display = 'none';
      indexOpenModal = true;
    }
  }); // долистал до конца и 60 секунд

  var endScrollHeight = document.body.scrollHeight - document.documentElement.clientHeight;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= endScrollHeight && indexOpenModal == false) {
      popupGift.style.display = 'block';
      gift.style.display = 'none';
    }
  });
  var minutePopup = setTimeout(function () {
    if (indexOpenModal == false) {
      popupConsultationBlock.style.display = 'block';
      console.log('работает');
    } else {
      clearInterval(minutePopup);
    }
  }, 60000);
}

module.exports = modalwindows;