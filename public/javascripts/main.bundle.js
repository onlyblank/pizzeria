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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlCreator = htmlCreator;
function htmlCreator() {
  return {
    create: function create(_ref) {
      var _ref$type = _ref.type,
          type = _ref$type === undefined ? 'div' : _ref$type,
          _ref$className = _ref.className,
          className = _ref$className === undefined ? '' : _ref$className,
          _ref$innerText = _ref.innerText,
          innerText = _ref$innerText === undefined ? '' : _ref$innerText,
          _ref$name = _ref.name,
          name = _ref$name === undefined ? '' : _ref$name,
          _ref$value = _ref.value,
          value = _ref$value === undefined ? null : _ref$value;

      var element = document.createElement(type);
      element.innerText = innerText;
      element.className = className;
      element.name = name;
      element.value = value;
      return element;
    }
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = exports.Util = function () {
    function Util(country, money) {
        _classCallCheck(this, Util);

        this.country = country;
        this.money = money;
        this.formatter = this.formatter();
    }

    _createClass(Util, [{
        key: "formatter",
        value: function formatter() {
            return new Intl.NumberFormat(this.country, {
                minimumFractionDigits: 0
            });
        }
    }]);

    return Util;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pizzeria = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  document.body.appendChild(new _pizzeria.Pizzeria().pizzeriaElement);
};

new Main();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pizzeria = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pizza = __webpack_require__(4);

var _htmlCreator = __webpack_require__(0);

var _masas = __webpack_require__(8);

var _masaTypes = __webpack_require__(9);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pizzeria = exports.Pizzeria = function () {
  function Pizzeria() {
    _classCallCheck(this, Pizzeria);

    this.html = (0, _htmlCreator.htmlCreator)();
    this.pizza = new _pizza.Pizza();
    this.masas = new _masas.Masas(_masaTypes.dataMasas);
    this.price = new _utils.Util('es-CL', 'cpl');
    this.pizzeriaElement = this.initPizzeria();
  }

  _createClass(Pizzeria, [{
    key: 'initPizzeria',
    value: function initPizzeria() {
      var pizzeria = this.html.create({ // contienen a todos los demas elementos
        type: 'div',
        className: 'row pizzeria'
      });
      var masas = this.masas.masasElement.childNodes;

      masas.forEach(this.setMasaPizza.bind(this));

      Object.assign(this.pizza.pizzaElement.style, {
        backgroundImage: 'url(' + this.masas.masas[0].image + ')'
      });

      this.pizza.setMassPrice(this.price.formatter.format(this.masas.masas[0].price));
      // unimos elementos dentro de pizzeria
      pizzeria.appendChild(this.pizza.pizzaElement);
      pizzeria.appendChild(this.pizza.priceElement);
      pizzeria.appendChild(this.pizza.ingredientsElement);
      pizzeria.appendChild(this.masas.masasElement);
      return pizzeria;
    }
  }, {
    key: 'setMasaPizza',
    value: function setMasaPizza(masa) {
      var _self = this;
      masa.addEventListener('click', function (event) {
        var target = event.target;
        _self.pizza.pizzaElement.style.backgroundImage = target.style.backgroundImage;
        _self.pizza.setMassPrice(_self.price.formatter.format(target.value));
      });
    }
  }]);

  return Pizzeria;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pizza = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ingredients = __webpack_require__(5);

var _ingredients2 = __webpack_require__(7);

var _htmlCreator = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pizza = exports.Pizza = function (_Ingredients) {
  _inherits(Pizza, _Ingredients);

  function Pizza() {
    _classCallCheck(this, Pizza);

    var _this = _possibleConstructorReturn(this, (Pizza.__proto__ || Object.getPrototypeOf(Pizza)).call(this, _ingredients2.data));

    _this.html = (0, _htmlCreator.htmlCreator)();
    _this.massPrice = 0;
    _this.pizzaElement = _this.html.create({ // elemento pizza que contiene la maza
      type: 'div',
      className: 'pizzeria__pizza'
    });
    _this.priceElement = _this.html.create({ // solo muestra el precio
      type: 'div',
      className: 'pizzeria__pizza-price',
      innerText: _this.massPrice
    });
    _this.pizzaElement = _this.initPizza();
    return _this;
  }

  _createClass(Pizza, [{
    key: 'setMassPrice',
    value: function setMassPrice(newMassPrice) {
      this.massPrice = parseInt(newMassPrice.replace(".", ""));
      this.pizzaElement = this.initPizza();
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
     */

  }, {
    key: 'initPizza',
    value: function initPizza() {
      var _this2 = this;

      var defaulPrice = this.massPrice; // asigna valor por defecto
      var price = new _utils.Util('es-CL', 'cpl');
      var pizzaPrice = defaulPrice;

      this.selected = new Proxy(this.selected, {
        set: function set(target, property, value, receiver) {
          target[property] = value;
          _this2.pizzaElement.innerHTML = '';
          pizzaPrice = defaulPrice;

          if (property === 'length') {
            _this2.selected.forEach(function (selected) {
              var clone = _this2.getTransparentClone(selected);
              _this2.pizzaElement.appendChild(clone);
              pizzaPrice += selected.ingredient.price;
            });
          }

          _this2.priceElement.innerText = price.formatter.format(pizzaPrice);
          return true;
        }
      });

      // esto reinicia el precio y el contenido de la pizza
      this.selected['length'] = this.selected.length;

      this.priceElement.innerText = price.formatter.format(pizzaPrice);
      return this.pizzaElement;
    }

    /**
     * @param {item} element
     * item contiene:
     * 
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
    value: function getTransparentClone(selected) {
      var clone = selected.element.cloneNode(true);
      clone.innerText = '';
      Object.assign(clone.style, {
        backgroundColor: 'transparent',
        backgroundImage: 'url(' + selected.ingredient.image + ')',
        zIndex: selected.ingredient.priority
      });
      return clone;
    }
  }]);

  return Pizza;
}(_ingredients.Ingredients);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ingredients = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _htmlCreator = __webpack_require__(0);

var _ingredient = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ingredients = exports.Ingredients = function () {
  function Ingredients(ingredients) {
    _classCallCheck(this, Ingredients);

    this.html = (0, _htmlCreator.htmlCreator)();
    this.ingredients = ingredients;
    this.selected = [];
    this.ingredientsElement = this.html.create({
      type: 'div',
      className: 'ingredients'
    });
    this.initIngredients();
  }

  _createClass(Ingredients, [{
    key: 'initIngredients',
    value: function initIngredients() {
      var _this = this;

      var element = this.ingredientsElement;
      element.appendChild(this.html.create({
        type: 'h1',
        className: 'pizzeria__ingredients-title',
        innerText: 'Ingredients'
      }));

      this.ingredients.map(function (ingredient) {
        var newIngredient = new _ingredient.Ingredient(ingredient);
        newIngredient.element.addEventListener('click', function () {
          var index = _this.selected.indexOf(newIngredient);
          if (index < 0) {
            _this.selected.push(newIngredient);
          } else {
            _this.selected.splice(index, 1);
          }
        });
        element.appendChild(newIngredient.element);
      });
      return element;
    }
  }]);

  return Ingredients;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ingredient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _htmlCreator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ingredient = exports.Ingredient = function () {
  function Ingredient(ingredient) {
    _classCallCheck(this, Ingredient);

    this.html = (0, _htmlCreator.htmlCreator)();
    this.ingredient = ingredient;
    this.element = this.html.create({
      type: 'div',
      className: 'pizzeria__ingredients__item ' + this.ingredient.name,
      innerText: this.ingredient.name
    });
    this.initIngredient();
  }

  _createClass(Ingredient, [{
    key: 'initIngredient',
    value: function initIngredient() {
      var element = this.element;
      element.innerHTML = this.ingredient.name;
      element.appendChild(this.html.create({
        type: 'span',
        className: 'pizzeria__ingredients__item-checked'
      }));

      Object.assign(element.style, {
        backgroundColor: 'white'
      });

      element.addEventListener('click', function (event) {
        if (element.classList.contains('selected')) {
          element.classList.remove('selected');
        } else {
          element.classList.add('selected');
        }
      });

      return element;
    }
  }]);

  return Ingredient;
}();

/***/ }),
/* 7 */
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Masas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _htmlCreator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Masas = exports.Masas = function () {
  function Masas(masas) {
    _classCallCheck(this, Masas);

    this.html = (0, _htmlCreator.htmlCreator)();
    this.masas = masas;
    this.masasElement = this.html.create({
      type: 'div',
      className: 'pizzeria__masas'
    });
    this.masasElement = this.initMasas();
  }

  _createClass(Masas, [{
    key: 'initMasas',
    value: function initMasas() {
      var _this = this;

      this.masas.forEach(function (masa, i) {
        var masaElement = _this.creteContainer(masa);
        _this.masasElement.appendChild(masaElement);
      });
      return this.masasElement;
    }
  }, {
    key: 'creteContainer',
    value: function creteContainer(masa) {
      var container = this.html.create({
        type: 'div',
        className: 'pizzeria__masas-item ' + masa.name.replace(/\s/g, '-'),
        innerText: masa.name,
        value: masa.price
      });
      Object.assign(container.style, {
        backgroundImage: 'url(' + masa.image + ')'
      });
      return container;
    }
  }]);

  return Masas;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataMasas = exports.dataMasas = [{
  "name": "Normal",
  "image": "./image/normal.png",
  "price": 3500
}, {
  "name": "Borde Queso",
  "image": "./image/border-queso.png",
  "price": 4000
}, {
  "name": "Delgada",
  "image": "./image/delgada.png",
  "price": 3000
}];

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map