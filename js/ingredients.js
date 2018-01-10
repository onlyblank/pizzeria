import {
  htmlCreator
} from './html-creator.service';
import {
  Ingredient
} from './ingredient';

export class Ingredients {
  constructor(ingredients) {
    this.html = htmlCreator();
    this.selected = [];
    this.ingredients = {
      element: this.html.create({
        type: 'div',
        className: 'pizzeria__ingredients',
        ingredients
      }),
      instances: []
    };
    this.initIngredients();
  }

  initIngredients() {
    let element = this.ingredients.element;
    element.appendChild(this.html.create({
      type: 'h1',
      className: 'pizzeria__ingredients-title',
      innerText: 'Ingredients'
    }));

    this.ingredients.element.ingredients.map((ingredient, index) => {
      this.ingredients.instances.push(new Ingredient(ingredient));

      const _ingredient = this.ingredients.instances[index];
      _ingredient.element.addEventListener('click', () => {
        const index = this.selected.indexOf(_ingredient);
        if (index < 0) {
          this.selected.push(_ingredient);
        } else {
          this.selected.splice(index, 1);
        }
      });
      element.appendChild(_ingredient.element);
    });
    return element;
  }

  setIngredients(ingredients) {
    this.ingredients.instances.forEach(ingredient => ingredient.removeSelected());
    this.selected = [];
    ingredients.map((ing) => {
      this.ingredients.instances.forEach((ingredient) => {
        if (ingredient.element.ingredient.name === ing.name) {
          ingredient.setSelected();
          this.selected.push(ingredient);
        }
      });
    });
  }
}