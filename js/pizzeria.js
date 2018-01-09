import {
  Pizza
} from './pizza';
import {
  htmlCreator
} from './html-creator.service';
import {
  Masas
} from './masas';
import {
  dataMasas
} from './services/masa-types.data';
import {
  Util
} from './utils/utils.price';
import {
  peperoni,
  hamaica
}
from './services/pizza-types.data'
import {
  ingredients
} from './services/ingredients.data';
export class Pizzeria {
  constructor() {
    this.html = htmlCreator();
    this.pizza = new Pizza(ingredients);
    this.hamaica = new Pizza(hamaica);
    this.peperoni = new Pizza(peperoni);
    this.masas = new Masas(dataMasas);
    this.price = new Util('es-CL', 'cpl');
    this.pizzeriaElement = this.initPizzeria();
  }
  initPizzeria() {
    const _self = this;
    const borderQueso = 1;
    const normal = 0;
    const pizzeria = this.html.create({ // contienen a todos los demas elementos
      type: 'div',
      className: 'row pizzeria'
    });
    const pizzaCollection = this.html.create({
      type: 'div',
      className: 'pizzeria__pizza_collection'
    });
    const masas = this.masas.masasElement.childNodes;

    masas.forEach(
      this.setMasaPizza.bind(this)
    );
    this.hamaica.setSelect(hamaica);
    this.hamaica.setMass(this.masas.masasElement.childNodes[borderQueso]);
    this.hamaica.pizzaElement.addEventListener('click', () => {
      _self.selectPizzaType(this.hamaica, hamaica);
    })

    this.peperoni.setSelect(peperoni);
    this.peperoni.setMass(this.masas.masasElement.childNodes[normal]);
    this.peperoni.pizzaElement.addEventListener('click', () => {
      _self.selectPizzaType(this.peperoni, peperoni);
    })

    this.pizza.setMass(this.masas.masasElement.childNodes[normal]);
    // unimos elementos dentro de pizzeria
    pizzaCollection.appendChild(this.hamaica.pizzaElement);
    pizzaCollection.appendChild(this.peperoni.pizzaElement);
    pizzeria.appendChild(this.pizza.pizzaElement);
    pizzeria.appendChild(this.pizza.priceElement);
    pizzeria.appendChild(this.pizza.ingredients.element);
    pizzeria.appendChild(this.masas.masasElement);
    pizzeria.appendChild(pizzaCollection);
    return pizzeria;
  }
  setMasaPizza(masa) {
    const _self = this;
    masa.addEventListener('click', (event) => {
      _self.pizza.setMass(masa);
    });
  }
  selectPizzaType(pizza, ingredients) {
    this.pizza.massPrice = 0;
    this.pizza.setPizza(
      ingredients,
      pizza.mass
    );
  }

}