"use strict";

require("core-js/modules/es6.regexp.replace");

function calc() {
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('change', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = (daysSum + personsSum) * 4000 * place.value;
    }
  });
}

module.exports = calc;