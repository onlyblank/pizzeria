import { htmlCreator } from './html-creator.service';
import { Ingredient } from './ingredient';

export class Ingredients {
  constructor(ingredients) {
    this.html = htmlCreator();
    this.ingredients = ingredients;
    this.selected = [];
    this.ingredientsElement = this.html.create({
      type: 'div',
      className: 'pizzeria__ingredients',
    });
    this.initIngredients();
  }

  initIngredients() {
    let element = this.ingredientsElement;
    element.appendChild(this.html.create({
      type: 'h1',
      className: 'pizzeria__ingredients-title',
      innerText: 'Ingredients'
    }));

    this.ingredients.map(ingredient => {
      const newIngredient = new Ingredient(ingredient);
      newIngredient.element.addEventListener('click', () => {
        const index = this.selected.indexOf(newIngredient);
        if (index < 0) {
          this.selected.push(newIngredient);
        } else {
          this.selected.splice(index, 1);
        }
      });
      element.appendChild(newIngredient.element);
    });
    return element;
  }
}