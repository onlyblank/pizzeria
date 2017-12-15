import { Ingrediente } from './ingrediente';
export class Ingredientes {
  constructor(ingredientes) {
    this.ingredientes = ingredientes;
    this.selected = [];
    this.element = document.createElement('div');
    this.element.className = 'ingredientes';
    this.initIngredientes();
  }

  initIngredientes() {
    let element = this.element;
    this.ingredientes.map(ingrediente => {
      const newIngrediente = new Ingrediente(ingrediente);
      newIngrediente.element.addEventListener('click', () => {
        const index = this.selected.indexOf(newIngrediente);
        if (index < 0) {
          this.selected.push(newIngrediente);
        } else {
          this.selected.splice(index, 1);
        }
      }); 
      element.appendChild(newIngrediente.element);
    });

    return element;
  }
}