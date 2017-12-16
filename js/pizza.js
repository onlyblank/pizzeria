import {
  Ingredients
} from './ingredients';
import {
  data
} from './ingredients.data';
import {
  htmlCreator
} from './html-creator.service';

export class Pizza extends Ingredients {
  constructor() {
    super(data);
    this.html = htmlCreator();
    this.priceElement = null;
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
  initPizza() {
    const defaulPrice = 3000; // asigna valor por defecto
    let pizzaPrice = defaulPrice;

    const pizza = this.html.create({ // elemento pizza que contiene la maza
      type: 'div',
      className: 'pizza'
    });

    this.priceElement = this.html.create({ // solo muestra el precio
      type: 'div',
      className: 'pizza-price',
      innerText: pizzaPrice
    });

    Object.assign(pizza.style, {
      backgroundImage: `url(image/base.png)`
    });

    this.selected = new Proxy(this.selected, {
      set: (target, property, value, receiver) => {
        target[property] = value;
        pizza.innerHTML = '';
        pizzaPrice = defaulPrice;
        if (property === 'length') {
          this.selected.forEach(selected => {
            const clone = this.getTransparentClone(selected);
            pizza.appendChild(clone);

            pizzaPrice += selected.ingredient.price;
          });
        }
        this.priceElement.innerText = pizzaPrice;
        return true;
      }
    });

    return pizza;
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
  getTransparentClone(selected) {
    const clone = selected.element.cloneNode(true);
    clone.innerText = '';
    Object.assign(clone.style, {
      backgroundColor: 'transparent',
      backgroundImage: `url(${selected.ingredient.image})`,
      zIndex: selected.ingredient.priority,
    });
    return clone;
  }
}