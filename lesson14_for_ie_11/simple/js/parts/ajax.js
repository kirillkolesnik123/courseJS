"use strict";

function ajax() {
  var messageFormInputs = new Object();
  messageFormInputs.loading = "Загрузка...";
  messageFormInputs.success = "Данные приняты. Мы свяжемся с Вами в ближайшее время";
  messageFormInputs.failure = "Что-то пошло не так...";
  var formInputs = document.getElementById('form'),
      inputForm = formInputs.getElementsByTagName('input'),
      statusMessageForm = document.createElement('div');
  statusMessageForm.classList.add('status');
  formInputs.addEventListener('submit', function (event) {
    event.preventDefault();
    formInputs.appendChild(statusMessageForm); //AJAX

    var requestInp = new XMLHttpRequest();
    requestInp.open("POST", 'server.php');
    requestInp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formDataInp = new FormData(formInputs);
    console.log(formDataInp);
    requestInp.send(formDataInp);

    requestInp.onreadystatechange = function () {
      if (requestInp.readyState < 4) {
        statusMessageForm.innerHTML = messageFormInputs.loading;
      } else if (requestInp.readyState === 4) {
        if (requestInp.status == 200 && requestInp.status < 300) {
          statusMessageForm.innerHTML = messageFormInputs.success; //контент добавляем на страницу
        } else {
          statusMessageForm.innerHTML = messageFormInputs.failure;
        }
      }
    };

    for (var i = 0; i < inputForm.length; i++) {
      inputForm[i].value = ''; // очищаем поля ввода
    }
  });
}

module.exports = ajax;