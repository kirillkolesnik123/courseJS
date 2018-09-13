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


},{"../parts/accordeon.js":23,"../parts/ajax.js":24,"../parts/calculator.js":25,"../parts/downloadblocks.js":26,"../parts/filterblock.js":27,"../parts/modalwindows.js":28,"../parts/picturesshow.js":29,"../parts/sliders.js":30}],2:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":13}],3:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],4:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],5:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":7}],6:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":9,"./_is-object":13}],7:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],8:[function(require,module,exports){
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_defined":4,"./_fails":7,"./_hide":11,"./_redefine":17,"./_wks":21}],9:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],10:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],11:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":5,"./_object-dp":15,"./_property-desc":16}],12:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":5,"./_dom-create":6,"./_fails":7}],13:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],14:[function(require,module,exports){
module.exports = false;

},{}],15:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":2,"./_descriptors":5,"./_ie8-dom-define":12,"./_to-primitive":19}],16:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],17:[function(require,module,exports){
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":3,"./_global":9,"./_has":10,"./_hide":11,"./_uid":20}],18:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '┬й 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":3,"./_global":9,"./_library":14}],19:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":13}],20:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],21:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":9,"./_shared":18,"./_uid":20}],22:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":8}],23:[function(require,module,exports){
"use strict";

function accordeon() {
  var accordionHead = document.getElementsByClassName('accordion-heading'),
      accordionBlock = document.getElementsByClassName('accordion-block');

  var _loop = function _loop(i) {
    accordionHead[i].addEventListener('click', function (e) {
      for (var c = 0; c < accordionHead.length; c++) {
        accordionHead[c].style.color = '#333';
        accordionHead[c].querySelector("span").style.borderBottom = '2px dotted #333';
      }

      for (var a = 0; a < accordionBlock.length; a++) {
        if (a != i) {
          accordionBlock[a].style.display = 'none';
        }
      }

      if (accordionBlock[i].style.display == 'flex') {
        accordionBlock[i].style.display = 'none';
      } else {
        accordionBlock[i].style.display = 'flex';
        accordionHead[i].style.color = '#f442e5';
        accordionHead[i].querySelector("span").style.borderColor = 'transparent';
        accordionBlock[i].classList.add('slideInDown');
      }
    });
  };

  for (var i = 0; i < accordionHead.length; i++) {
    _loop(i);
  }
}

module.exports = accordeon;
},{}],24:[function(require,module,exports){
"use strict";

require("core-js/modules/es6.regexp.replace");

function ajax() {
  var message = new Object();
  message.loading = "╨Ч╨░╨│╤А╤Г╨╖╨║╨░...";
  message.success = "╨Ф╨░╨╜╨╜╤Л╨╡ ╨┐╤А╨╕╨╜╤П╤В╤Л. ╨Ь╤Л ╤Б╨▓╤П╨╢╨╡╨╝╤Б╤П ╤Б ╨Т╨░╨╝╨╕ ╨▓ ╨▒╨╗╨╕╨╢╨░╨╣╤И╨╡╨╡ ╨▓╤А╨╡╨╝╤П";
  message.failure = "╨з╤В╨╛-╤В╨╛ ╨┐╨╛╤И╨╗╨╛ ╨╜╨╡ ╤В╨░╨║... ";
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
          statusMessage.innerHTML = "<p>" + message.success + "</p>";
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
},{"core-js/modules/es6.regexp.replace":22}],25:[function(require,module,exports){
"use strict";

function calculator() {
  // ╨║╨░╨╗╤М╨║╤Г╨╗╤П╤В╨╛╤А
  var size = document.getElementById('size'),
      material = document.getElementById('material'),
      options = document.getElementById('options'),
      promocode = document.getElementById('promocode'),
      calcPriceValue = document.getElementById('calc-price-value'),
      calcPriceText = document.getElementById('calc-price-none'),
      buttonOrderCalc = document.getElementById('button-order-calc'),
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
},{}],26:[function(require,module,exports){
"use strict";

function downloadblocks() {
  // ╨Я╨╛╨┤╨│╤А╤Г╨╖╨║╨░ ╨▒╨╗╨╛╨║╨╛╨▓
  var styleBlockButton = document.getElementById('styleButton'),
      styleMore = document.getElementsByClassName('styles-2');
  styleBlockButton.addEventListener('click', function () {
    for (var i = 0; i < styleMore.length; i++) {
      styleMore[i].style.display = 'block';
    }

    styleBlockButton.style.display = 'none';
  }); // ╨│╨░╨╝╨▒╤Г╤А╨│╨╡╤А

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
},{}],27:[function(require,module,exports){
"use strict";

function filterblock() {
  // ╤Д╨╕╨╗╤М╤В╤А╨░╤Ж╨╕╤П ╨▒╨╗╨╛╨║╨╛╨▓
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
},{}],28:[function(require,module,exports){
"use strict";

function modalwindows() {
  // ╨Ь╨╛╨┤╨░╨╗╤М╨╜╤Л╨╡ ╨╛╨║╨╜╨░ popup-consultation&design&gift
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
  });
  var endScrollHeight = document.body.scrollHeight - document.documentElement.clientHeight;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= endScrollHeight && indexOpenModal === false) {
      popupGift.style.display = 'block';
      gift.style.display = 'none';
    }
  });
  var minutePopup = setTimeout(function () {
    if (indexOpenModal === false) {
      popupConsultationBlock.style.display = 'block';
    } else {
      clearInterval(minutePopup);
    }
  }, 60000);
}

module.exports = modalwindows;
},{}],29:[function(require,module,exports){
"use strict";

function picturesshow() {
  // ╨║╨░╤А╤В╨╕╨╜╨║╨╕ ╨┐╤А╨╕ ╨╜╨░╨▓╨╡╨┤╨╡╨╜╨╕╨╕
  var images = document.createElement('img'),
      picBlocks = document.getElementsByClassName('sizes-block');
  images.style.position = 'absolute';
  images.style.top = '0';
  images.style.left = '0';
  images.style.right = '0';
  images.style.bottom = '0';
  picBlocks[0].addEventListener('mouseenter', function () {
    picBlocks[0].appendChild(images);
    images.src = './img/sizes-1-1.png';
  });
  picBlocks[0].addEventListener('mouseleave', function () {
    picBlocks[0].removeChild(images);
  });
  picBlocks[1].addEventListener('mouseenter', function () {
    picBlocks[1].appendChild(images);
    images.src = './img/sizes-2-1.png';
  });
  picBlocks[1].addEventListener('mouseleave', function () {
    picBlocks[1].removeChild(images);
  });
  picBlocks[2].addEventListener('mouseenter', function () {
    picBlocks[2].appendChild(images);
    images.src = './img/sizes-3-1.png';
  });
  picBlocks[2].addEventListener('mouseleave', function () {
    picBlocks[2].removeChild(images);
  });
  picBlocks[3].addEventListener('mouseenter', function () {
    picBlocks[3].appendChild(images);
    images.src = './img/sizes-4-1.png';
  });
  picBlocks[3].addEventListener('mouseleave', function () {
    picBlocks[3].removeChild(images);
  });
}

module.exports = picturesshow;
},{}],30:[function(require,module,exports){
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
