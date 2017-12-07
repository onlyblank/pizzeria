/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ingredientes = __webpack_require__(1);

var _ingredientes2 = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pizzeria = function (_Ingredientes) {
  _inherits(Pizzeria, _Ingredientes);

  function Pizzeria() {
    _classCallCheck(this, Pizzeria);

    var _this = _possibleConstructorReturn(this, (Pizzeria.__proto__ || Object.getPrototypeOf(Pizzeria)).call(this, _ingredientes2.data));

    _this.initPizzeria();
    return _this;
  }

  _createClass(Pizzeria, [{
    key: 'initPizzeria',
    value: function initPizzeria() {
      var _this2 = this;

      var defaulPrice = 3000;
      var pizzaPrice = defaulPrice;
      var pizza = document.createElement('div');
      var priceElement = document.createElement('div');
      pizza.className = 'pizza';
      Object.assign(pizza.style, {
        backgroundImage: 'url(image/base.png)'
      });

      // const pizzaIngredients = new Ingredientes(this.ingredientes);
      // pizzaIngredients.selected = new Proxy(pizzaIngredients.selected, {
      this.selected = new Proxy(this.selected, {
        set: function set(target, property, value, receiver) {
          target[property] = value;
          pizza.innerHTML = '';
          pizzaPrice = defaulPrice;
          _this2.selected.forEach(function (ingrediente) {
            var clone = ingrediente.ingredienteElement.cloneNode(true);
            Object.assign(clone.style, {
              backgroundColor: 'transparent',
              zIndex: clone.getAttribute('priority')
            });
            clone.innerText = '';
            pizzaPrice += +clone.getAttribute('price');
            pizza.appendChild(clone);
          });
          priceElement.innerText = pizzaPrice;
          return true;
        }
      });

      this.template = '<div class="pizzeria">\n      </div>';
      document.body.innerHTML = this.template;
      var pizzeria = document.getElementsByClassName('pizzeria')[0];
      pizzeria.appendChild(pizza);
      priceElement.innerText = pizzaPrice;
      priceElement.className = 'pizza-price';
      pizzeria.appendChild(priceElement);
      // pizzeria.appendChild(pizzaIngredients.element);
      pizzeria.appendChild(this.ingredientesElement);
    }
  }]);

  return Pizzeria;
}(_ingredientes.Ingredientes);

new Pizzeria();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ingredientes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ingrediente = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ingredientes = exports.Ingredientes = function () {
  function Ingredientes(ingredientes) {
    _classCallCheck(this, Ingredientes);

    this.ingredientes = ingredientes;
    this.selected = [];
    this.ingredientesElement = document.createElement('div');
    this.ingredientesElement.className = 'ingredientes';
    this.ingredientesElement = this.init();
  }

  _createClass(Ingredientes, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var element = this.ingredientesElement;
      this.ingredientes.map(function (ingrediente) {
        var newIngrediente = new _ingrediente.Ingrediente(ingrediente);
        newIngrediente.ingredienteElement.addEventListener('click', function () {
          var index = _this.selected.indexOf(newIngrediente);
          if (index < 0) {
            _this.selected.push(newIngrediente);
          } else {
            _this.selected.splice(index, 1);
          }
        });
        element.appendChild(newIngrediente.ingredienteElement);
      });

      return element;
    }
  }]);

  return Ingredientes;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ingrediente = exports.Ingrediente = function () {
  function Ingrediente(ingrediente) {
    _classCallCheck(this, Ingrediente);

    this.ingrediente = ingrediente;
    this.ingredienteElement = document.createElement('div');
    this.ingredienteElement = this.init();
  }

  _createClass(Ingrediente, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var element = this.ingredienteElement;
      var checked = document.createElement('span');
      checked.className = 'checked';
      element.addEventListener('click', function (event) {
        if (element.getAttribute('selected') === 'true') {
          element.innerText = _this.ingrediente.name;
          element.setAttribute('selected', false);
          Object.assign(element.style, {
            backgroundColor: 'white',
            backgroundImage: 'url(' + _this.ingrediente.image + ')'
          });
        } else {
          element.appendChild(checked);
          element.setAttribute('selected', true);
          Object.assign(element.style, {
            backgroundImage: 'url(' + _this.ingrediente.image + ')'
          });
        }
      });

      element.innerText = this.ingrediente.name;
      element.setAttribute('price', this.ingrediente.price);
      element.setAttribute('priority', this.ingrediente.priority);
      element.className = 'ingredientes__item ' + this.ingrediente.name;
      return element;
    }
  }]);

  return Ingrediente;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{
  "name": "tomate",
  "image": "./image/tomate.png",
  "price": 100,
  "priority": 2
}, {
  "name": "champinon",
  "image": "./image/champinon.png",
  "price": 100,
  "priority": 8
}, {
  "name": "queso",
  "image": "./image/queso.png",
  "price": 100,
  "priority": 1
}, {
  "name": "aceitunas",
  "image": "./image/aceitunas.png",
  "price": 100,
  "priority": 6
}, {
  "name": "peperoni",
  "image": "./image/peperoni.png",
  "price": 100,
  "priority": 4
}, {
  "name": "jamon",
  "image": "./image/jamon.png",
  "price": 100,
  "priority": 3
}, {
  "name": "pina",
  "image": "./image/pina.png",
  "price": 100,
  "priority": 5
}, {
  "name": "rucula",
  "image": "./image/rucula.png",
  "price": 100,
  "priority": 7
}];

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map