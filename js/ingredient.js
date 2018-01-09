import {
  htmlCreator
} from './html-creator.service';

export class Ingredient {
  constructor(ingredient) {
    this.html = htmlCreator();
    this.element = this.html.create({
      type: 'div',
      className: `pizzeria__ingredients__item`,
      innerText: ingredient.name,
      ingredient
    });
    this.initIngredient();
  }

  initIngredient() {
    let element = this.element;
    element.appendChild(this.html.create({
      type: 'span',
      className: 'pizzeria__ingredients__item-checked'
    }));

    Object.assign(element.style, {
      backgroundColor: 'white'
    });

    element.addEventListener('click', (event) => {
      if (element.classList.contains('selected')) {
        this.removeSelected();
      } else {
        this.setSelected();
      }
    });

    return element;
  }
  setSelected() {
    this.element.classList.add('selected');    
  }
  removeSelected(){
    this.element.classList.remove('selected');
  }
}