import {
  htmlCreator
} from './html-creator.service';

export class Ingredient {
  constructor(ingredient) {
    this.html = htmlCreator();
    this.ingredient = ingredient;
    this.element = this.html.create({
      type: 'div',
      className: `pizzeria__ingredients__item ${this.ingredient.name}`,
      innerText: this.ingredient.name
    });
    this.initIngredient();
  }

  initIngredient() {
    let element = this.element;
    element.innerHTML = this.ingredient.name;
    element.appendChild(this.html.create({
      type: 'span',
      className: 'pizzeria__ingredients__item-checked'
    }));

    Object.assign(element.style, {
      backgroundColor: 'white'
    });

    element.addEventListener('click', (event) => {
      if (element.classList.contains('selected')) {
        element.classList.remove('selected');
      } else {
        element.classList.add('selected');
      }
    });

    return element;
  }
}