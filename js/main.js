import {
  Ingredientes
} from './ingredientes';
import {
  data
} from './ingredientes.data';

class Pizzeria extends Ingredientes {
  constructor() {
    super(data);
    this.initPizzeria();
  }


  initPizzeria() {
    const defaulPrice = 3000;
    let pizzaPrice = defaulPrice;
    const pizza = document.createElement('div');
    const priceElement = document.createElement('div');
    pizza.className = 'pizza';
    Object.assign(pizza.style, {
      backgroundImage: `url(image/base.png)`
    });

    // const pizzaIngredients = new Ingredientes(this.ingredientes);
    // pizzaIngredients.selected = new Proxy(pizzaIngredients.selected, {
    this.selected = new Proxy(this.selected, {
      set: (target, property, value, receiver) => {
        target[property] = value;
        pizza.innerHTML = '';
        pizzaPrice = defaulPrice;
        this.selected.forEach(ingrediente => {
          const clone = ingrediente.ingredienteElement.cloneNode(true);
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


    this.template =
      `<div class="pizzeria">
      </div>`;
    document.body.innerHTML = this.template;
    const pizzeria = document.getElementsByClassName('pizzeria')[0];
    pizzeria.appendChild(pizza);
    priceElement.innerText = pizzaPrice;
    priceElement.className = 'pizza-price';
    pizzeria.appendChild(priceElement);
    // pizzeria.appendChild(pizzaIngredients.element);
    pizzeria.appendChild(this.ingredientesElement);
  }
}

new Pizzeria();