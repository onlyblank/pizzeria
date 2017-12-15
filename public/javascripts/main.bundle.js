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

  /**
   * inicializador de pizzeria
   * 
   * Este metodo:
   *    crea un elemento del tipo div para "pizza".
   *    crea un elemento del tipo div para mostrar el precio "priceElement"
   *    toma la propiedad selected y la transforma en un proxy de si mismo
   *      haciendo que recorra los elementos de selected cambiando sus propiedades 
   *      y clonando su elemento html para agregarlo al elemento "pizza"
   *    crea el template de "pizzeria" y se lo agrega al body, luego busca
   */


  _createClass(Pizzeria, [{
    key: 'initPizzeria',
    value: function initPizzeria() {
      var _this2 = this;

      var pizza = document.createElement('div');
      var priceElement = document.createElement('div');
      var pizzeria = document.createElement('div');

      var defaulPrice = 3000; // asigna valor por defecto
      var pizzaPrice = defaulPrice;

      pizza.className = 'pizza';
      pizzeria.className = 'pizzeria';
      priceElement.className = 'pizza-price';
      priceElement.innerText = pizzaPrice;

      Object.assign(pizza.style, {
        backgroundImage: 'url(image/base.png)'
      });

      // unimos elementos
      pizzeria.appendChild(pizza);
      pizzeria.appendChild(priceElement);
      pizzeria.appendChild(this.element);
      document.body.appendChild(pizzeria);

      this.selected = new Proxy(this.selected, {
        set: function set(target, property, value, receiver) {
          target[property] = value;
          pizza.innerHTML = '';
          pizzaPrice = defaulPrice;
          _this2.selected.forEach(function (ingrediente) {
            var clone = _this2.getTransparentClone(ingrediente);
            pizzaPrice += +ingrediente.ingrediente.price;
            pizza.appendChild(clone);
          });
          priceElement.innerText = pizzaPrice;
          return true;
        }
      });
    }

    /**
     * @param {ingrediente, element} element
     * ingrediente = {
     *    name: nombre del ingrediente
     *    image: path de la imagen del ingrediente,
     *    priority: z-index utilizado por el template
     *    price: precio
     * }
     * element = {
     *    ingrediente html element (div.nombreDelIngrediente)
     * }
     */

  }, {
    key: 'getTransparentClone',
    value: function getTransparentClone(item) {
      var clone = item.element.cloneNode(true);
      clone.innerText = '';
      Object.assign(clone.style, {
        backgroundColor: 'transparent',
        backgroundImage: 'url(' + item.ingrediente.image + ')',
        zIndex: item.ingrediente.priority
      });
      return clone;
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
    this.element = document.createElement('div');
    this.element.className = 'ingredientes';
    this.initIngredientes();
  }

  _createClass(Ingredientes, [{
    key: 'initIngredientes',
    value: function initIngredientes() {
      var _this = this;

      var element = this.element;
      this.ingredientes.map(function (ingrediente) {
        var newIngrediente = new _ingrediente.Ingrediente(ingrediente);
        newIngrediente.element.addEventListener('click', function () {
          var index = _this.selected.indexOf(newIngrediente);
          if (index < 0) {
            _this.selected.push(newIngrediente);
          } else {
            _this.selected.splice(index, 1);
          }
        });
        element.appendChild(newIngrediente.element);
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
    this.element = document.createElement('div');
    this.initIngrediente();
  }

  _createClass(Ingrediente, [{
    key: 'initIngrediente',
    value: function initIngrediente() {
      var _this = this;

      var element = this.element;
      var checked = document.createElement('span');
      checked.className = 'checked';
      Object.assign(element.style, {
        backgroundColor: 'white'
      });
      element.innerText = this.ingrediente.name;
      element.className = 'ingredientes__item ' + this.ingrediente.name;

      element.addEventListener('click', function (event) {
        if (element.classList.contains('selected')) {
          element.classList.remove('selected');
          element.innerHTML = _this.ingrediente.name;
        } else {
          element.classList.add('selected');
          element.appendChild(checked);
        }
      });

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