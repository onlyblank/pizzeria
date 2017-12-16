import {
  Pizza
}
from './pizza';
import {
  htmlCreator
}
from './html-creator.service';

export class Pizzeria {
  constructor() {
    this.html = htmlCreator();
    this.pizza = new Pizza();
    this.pizzeriaElement = this.initPizzeria();
  }
  initPizzeria() {
    const pizzeria = this.html.create({ // contienen a todos los demas elementos
      type: 'div',
      className: 'pizzeria'
    });

    // unimos elementos dentro de pizzeria
    pizzeria.appendChild(this.pizza.pizzaElement);
    pizzeria.appendChild(this.pizza.priceElement);
    pizzeria.appendChild(this.pizza.ingredientsElement);
    return pizzeria;
  }
}