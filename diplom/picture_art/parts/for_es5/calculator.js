"use strict";

function calculator() {
  var size = document.getElementById('size'),
      material = document.getElementById('material'),
      options = document.getElementById('options'),
      promocode = document.getElementById('promocode'),
      calcPriceValue = document.getElementById('calc-price-value'),
      calcPriceText = document.getElementById('calc-price-none'),
      price = 0,
      work = 5000;

  function handleChange() {
    if (size.selectedIndex == '' || material.selectedIndex == '') {
      calcPriceText.style.display = 'block';
      calcPriceValue.style.display = 'none';
    } else if (options.selectedIndex == '' && promocode.value == '') {
      price = parseInt(size.value) + parseInt(material.value) + work;
      calcPriceText.style.display = 'none';
      calcPriceValue.style.display = 'block';
      calcPriceValue.innerHTML = price;
    } else if (options.selectedIndex != '' && promocode.value == '') {
      price = parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work;
      calcPriceText.style.display = 'none';
      calcPriceValue.style.display = 'block';
      calcPriceValue.innerHTML = price;
    } else if (options.selectedIndex == '' && promocode.value == 'IWANTPOPART') {
      var discount = Math.round((parseInt(size.value) + parseInt(material.value) + work) * 30 / 100);
      price = parseInt(size.value) + parseInt(material.value) + work;
      calcPriceText.style.display = 'none';
      calcPriceValue.innerHTML = price - discount;
    } else {
      var _discount = Math.round((parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work) * 30 / 100);

      price = parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work;
      calcPriceText.style.display = 'none';
      calcPriceValue.style.display = 'block';
      calcPriceValue.innerHTML = price - _discount;
    }
  }

  size.addEventListener('change', function () {
    handleChange();
  });
  material.addEventListener('change', function () {
    handleChange();
  });
  options.addEventListener('change', function () {
    handleChange();
  });
  promocode.addEventListener('change', function () {
    handleChange();
  });
}

module.exports = calculator;