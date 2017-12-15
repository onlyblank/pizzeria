export class Ingrediente {
  constructor(ingrediente) {
    this.ingrediente = ingrediente;
    this.element = document.createElement('div');
    this.initIngrediente();
  }

  initIngrediente() {
    let element = this.element;
    const checked = document.createElement('span');
    checked.className = 'checked';
    Object.assign(element.style, {
      backgroundColor: 'white'
    });
    element.innerText = this.ingrediente.name;
    element.className = `ingredientes__item ${this.ingrediente.name}`;

    element.addEventListener('click', (event) => {
      if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        element.innerHTML = this.ingrediente.name;
      } else {
        element.classList.add('selected');
        element.appendChild(checked);
      }
    });
    
    return element;
  }
}