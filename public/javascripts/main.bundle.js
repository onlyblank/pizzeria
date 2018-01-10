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
    create: function create(config) {
      var element = document.createElement(config.type);
      Object.assign(element, config);
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

var _masas = __webpack_require__(7);

var _masaTypes = __webpack_require__(8);

var _utils = __webpack_require__(1);

var _pizzaTypes = __webpack_require__(9);

var _ingredients = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pizzeria = exports.Pizzeria = function () {
  function Pizzeria() {
    _classCallCheck(this, Pizzeria);

    this.html = (0, _htmlCreator.htmlCreator)();
    this.pizza = new _pizza.Pizza(_ingredients.ingredients);
    this.hamaica = new _pizza.Pizza(_pizzaTypes.hamaica);
    this.peperoni = new _pizza.Pizza(_pizzaTypes.peperoni);
    this.masas = new _masas.Masas(_masaTypes.dataMasas);
    this.price = new _utils.Util('es-CL', 'cpl');
    this.pizzeriaElement = this.initPizzeria();
  }

  _createClass(Pizzeria, [{
    key: 'initPizzeria',
    value: function initPizzeria() {
      var _this = this;

      var _self = this;
      var borderQueso = 1;
      var normal = 0;
      var pizzeria = this.html.create({ // contienen a todos los demas elementos
        type: 'div',
        className: 'row pizzeria'
      });
      var pizzaCollection = this.html.create({
        type: 'div',
        className: 'pizzeria__pizza_collection'
      });

      var masas = this.masas.masasElement.childNodes;

      masas.forEach(this.setMasaPizza.bind(this));
      this.hamaica.setSelect(_pizzaTypes.hamaica);
      this.hamaica.setMass(this.masas.masasElement.childNodes[borderQueso]);
      this.hamaica.pizzaElement.appendChild(this.html.create({ type: 'h3', innerText: 'Hamaica', className: 'title' }));
      this.hamaica.pizzaElement.addEventListener('click', function () {
        _self.selectPizzaType(_this.hamaica, _pizzaTypes.hamaica);
      });

      this.peperoni.setSelect(_pizzaTypes.peperoni);
      this.peperoni.setMass(this.masas.masasElement.childNodes[normal]);
      this.peperoni.pizzaElement.appendChild(this.html.create({ type: 'h3', innerText: 'Peperoni', className: 'title' }));
      this.peperoni.pizzaElement.addEventListener('click', function () {
        _self.selectPizzaType(_this.peperoni, _pizzaTypes.peperoni);
      });

      this.pizza.setMass(this.masas.masasElement.childNodes[normal]);
      // unimos elementos dentro de pizzeria
      pizzaCollection.appendChild(this.hamaica.pizzaElement);
      pizzaCollection.appendChild(this.peperoni.pizzaElement);
      pizzeria.appendChild(this.pizza.pizzaElement);
      this.pizza.ingredients.element.appendChild(this.pizza.priceElement);
      pizzeria.appendChild(this.pizza.ingredients.element);
      pizzeria.appendChild(pizzaCollection);
      pizzeria.appendChild(this.masas.masasElement);
      pizzeria.appendChild(this.pizza.resetElement);
      return pizzeria;
    }
  }, {
    key: 'setMasaPizza',
    value: function setMasaPizza(masa) {
      var _self = this;
      masa.addEventListener('click', function (event) {
        _self.pizza.setMass(masa);
      });
    }
  }, {
    key: 'selectPizzaType',
    value: function selectPizzaType(pizza, ingredients) {
      this.pizza.massPrice = 0;
      this.pizza.setPizza(ingredients, pizza.mass);
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

var _htmlCreator = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pizza = exports.Pizza = function (_Ingredients) {
  _inherits(Pizza, _Ingredients);

  function Pizza(ingredients) {
    _classCallCheck(this, Pizza);

    var _this = _possibleConstructorReturn(this, (Pizza.__proto__ || Object.getPrototypeOf(Pizza)).call(this, ingredients));

    _this.util = new _utils.Util('es-CL', 'cpl');
    _this.html = (0, _htmlCreator.htmlCreator)();
    _this.massPrice = 0;
    _this.mass = {};
    _this.pizzaElement = _this.html.create({ // elemento pizza que contiene la maza
      type: 'div',
      className: 'pizzeria__pizza'
    });
    _this.priceElement = _this.html.create({ // solo muestra el precio
      type: 'div',
      className: 'pizzeria__ingredients-pizza-price',
      innerText: _this.massPrice
    });
    _this.resetElement = _this.reset();
    _this.pizzaElement = _this.initPizza();
    return _this;
  }

  _createClass(Pizza, [{
    key: 'setMass',
    value: function setMass(masaElement) {
      this.mass = masaElement;
      this.massPrice = masaElement.masa.price;
      Object.assign(this.pizzaElement.style, {
        backgroundImage: 'url(' + masaElement.masa.image + ')'
      });
      this.initPizza();
    }
  }, {
    key: 'setSelect',
    value: function setSelect(ingredients) {
      this.setIngredients(ingredients);
      this.initPizza();
    }
  }, {
    key: 'setPizza',
    value: function setPizza(ingredients, mass) {
      this.massPrice = 0;
      this.setIngredients(ingredients);
      this.setMass(mass);
      this.initPizza();
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

      var price = new _utils.Util('es-CL', 'cpl');
      var pizzaPrice = this.massPrice; // asigna valor por defecto

      this.selected = new Proxy(this.selected, {
        set: function set(target, property, value, receiver) {
          target[property] = value;
          _this2.pizzaElement.innerHTML = '';
          pizzaPrice = _this2.massPrice;
          if (property === 'length') {
            _this2.selected.forEach(function (selected) {
              var clone = _this2.getTransparentClone(selected);
              _this2.pizzaElement.appendChild(clone);
              pizzaPrice += selected.element.ingredient.price;
            });
          }

          _this2.priceElement.innerText = price.formatter.format(pizzaPrice);
          return true;
        }
      });

      // esto reinicia el precio y el contenido de la pizza
      this.selected['length'] = this.selected.length;

      this.priceElement.innerText = price.formatter.format(pizzaPrice);
      this.resetElement.innerHTML = '<button>Reset Pizza</button>';
      return this.pizzaElement;
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this3 = this;

      var element = this.html.create({
        type: 'div',
        className: 'pizzeria__pizza_reset'
      });

      element.addEventListener('click', function (event) {
        document.querySelectorAll('.selected').forEach(function (button) {
          button.classList.remove("selected");
        });
        _this3.selected['length'] = 0;
      });
      return element;
    }
  }, {
    key: 'getIngredientSelected',
    value: function getIngredientSelected() {
      var ingredientsSelected = document.getElementsByClassName("pizzeria__ingredients__item").children;
      return ingredientsSelected;
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
        backgroundImage: 'url(' + selected.element.ingredient.image + ')',
        zIndex: selected.element.ingredient.priority
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

var _ingredient2 = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ingredients = exports.Ingredients = function () {
  function Ingredients(ingredients) {
    _classCallCheck(this, Ingredients);

    this.html = (0, _htmlCreator.htmlCreator)();
    this.selected = [];
    this.ingredients = {
      element: this.html.create({
        type: 'div',
        className: 'pizzeria__ingredients',
        ingredients: ingredients
      }),
      instances: []
    };
    this.initIngredients();
  }

  _createClass(Ingredients, [{
    key: 'initIngredients',
    value: function initIngredients() {
      var _this = this;

      var element = this.ingredients.element;
      element.appendChild(this.html.create({
        type: 'h1',
        className: 'pizzeria__ingredients-title',
        innerText: 'Ingredients'
      }));

      this.ingredients.element.ingredients.map(function (ingredient, index) {
        _this.ingredients.instances.push(new _ingredient2.Ingredient(ingredient));

        var _ingredient = _this.ingredients.instances[index];
        _ingredient.element.addEventListener('click', function () {
          var index = _this.selected.indexOf(_ingredient);
          if (index < 0) {
            _this.selected.push(_ingredient);
          } else {
            _this.selected.splice(index, 1);
          }
        });
        element.appendChild(_ingredient.element);
      });
      return element;
    }
  }, {
    key: 'setIngredients',
    value: function setIngredients(ingredients) {
      var _this2 = this;

      this.ingredients.instances.forEach(function (ingredient) {
        return ingredient.removeSelected();
      });
      this.selected = [];
      ingredients.map(function (ing) {
        _this2.ingredients.instances.forEach(function (ingredient) {
          if (ingredient.element.ingredient.name === ing.name) {
            ingredient.setSelected();
            _this2.selected.push(ingredient);
          }
        });
      });
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
    this.element = this.html.create({
      type: 'div',
      className: 'pizzeria__ingredients__item',
      innerText: ingredient.name,
      ingredient: ingredient
    });
    this.initIngredient();
  }

  _createClass(Ingredient, [{
    key: 'initIngredient',
    value: function initIngredient() {
      var _this = this;

      var element = this.element;
      element.appendChild(this.html.create({
        type: 'span',
        className: 'pizzeria__ingredients__item-checked'
      }));

      Object.assign(element.style, {
        backgroundColor: 'white'
      });

      element.addEventListener('click', function (event) {
        if (element.classList.contains('selected')) {
          _this.removeSelected();
        } else {
          _this.setSelected();
        }
      });

      return element;
    }
  }, {
    key: 'setSelected',
    value: function setSelected() {
      this.element.classList.add('selected');
    }
  }, {
    key: 'removeSelected',
    value: function removeSelected() {
      this.element.classList.remove('selected');
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
        _this.masasElement.appendChild(_this.creteContainer(masa));
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
        masa: masa
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
/* 8 */
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hamaica = exports.hamaica = [{
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
}];

var peperoni = exports.peperoni = [{
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
}];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ingredients = exports.ingredients = [{
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