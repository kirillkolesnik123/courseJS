"use strict";

require("core-js/modules/es6.regexp.replace");

function ajax() {
  var message = new Object();
  message.loading = "Загрузка...";
  message.success = "Данные приняты. Мы свяжемся с Вами в ближайшее время";
  message.failure = "Что-то пошло не так... ";
  var statusMessage = document.createElement('div');
  var consultationForm = document.querySelectorAll('.consultation-form')[0],
      popupConsultationForm = document.querySelectorAll('.popup-consultation-form')[0],
      designForm = document.querySelectorAll('.design-form')[0],
      formNoneDesign = document.getElementsByClassName('form-none-design')[0],
      formNoneConsultation = document.querySelector('.form-none-consultation'),
      telDesign = document.getElementById('telDesign'),
      telConsultationPopUp = document.getElementById('telConsultationPopUp'),
      telConsultation = document.getElementById('telConsultation'),
      inputText = document.getElementsByClassName('input-text');

  for (var i = 0; i < inputText.length; i++) {
    inputText[i].addEventListener('input', function () {
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
      range.select();
    }
  }

  function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });

    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  }

  telDesign.addEventListener("input", mask, false);
  telDesign.addEventListener("focus", mask, false);
  telDesign.addEventListener("blur", mask, false);
  telConsultationPopUp.addEventListener("input", mask, false);
  telConsultationPopUp.addEventListener("focus", mask, false);
  telConsultationPopUp.addEventListener("blur", mask, false);
  telConsultation.addEventListener("input", mask, false);
  telConsultation.addEventListener("focus", mask, false);
  telConsultation.addEventListener("focus", mask, false);
  consultationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    consultationForm.appendChild(statusMessage); // ajax

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData(consultationForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = "<p>" + message.loading + "</p> " + "<img src='./img/load.gif'>";
        statusMessage.style.textAlign = 'center';
        statusMessage.style.marginTop = '30px';
      } else if (request.readyState === 4) {
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
  designForm.addEventListener('submit', function (e) {
    e.preventDefault();
    designForm.appendChild(statusMessage); // ajax

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData(designForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        statusMessage.style.textAlign = 'center';
        statusMessage.style.marginTop = '30px';
      } else if (request.readyState === 4) {
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
  popupConsultationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    popupConsultationForm.appendChild(statusMessage); // ajax

    var request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formData = new FormData(popupConsultationForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        statusMessage.style.textAlign = 'center';
        statusMessage.style.marginTop = '30px';
      } else if (request.readyState === 4) {
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