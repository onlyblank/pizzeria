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
  initPizzeria() {
    const pizza = document.createElement('div');
    const priceElement = document.createElement('div');
    const pizzeria = document.createElement('div');
    
    const defaulPrice = 3000; // asigna valor por defecto
    let pizzaPrice = defaulPrice;
    
    pizza.className = 'pizza';
    pizzeria.className = 'pizzeria';
    priceElement.className = 'pizza-price';
    priceElement.innerText = pizzaPrice;

    Object.assign(pizza.style, {
      backgroundImage: `url(image/base.png)`
    });

    // unimos elementos
    pizzeria.appendChild(pizza);
    pizzeria.appendChild(priceElement);
    pizzeria.appendChild(this.element);
    document.body.appendChild(pizzeria);

    this.selected = new Proxy(this.selected, {
      set: (target, property, value, receiver) => {
        target[property] = value;
        pizza.innerHTML = '';
        pizzaPrice = defaulPrice;
        this.selected.forEach(ingrediente => {
          const clone = this.getTransparentClone(ingrediente);
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
  getTransparentClone(item) {
    const clone = item.element.cloneNode(true);
    clone.innerText = '';
    Object.assign(clone.style, {
      backgroundColor: 'transparent',
      backgroundImage: `url(${item.ingrediente.image})`,
      zIndex: item.ingrediente.priority,
    });
    return clone;
  }
}

new Pizzeria();