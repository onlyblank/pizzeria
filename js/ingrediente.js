export class Ingrediente {
  constructor(ingrediente) {
    this.ingrediente = ingrediente;
    this.ingredienteElement = document.createElement('div');
    this.ingredienteElement = this.init();
  }

  init() {
    let element = this.ingredienteElement;
    const checked = document.createElement('span');
    checked.className = 'checked';
    element.addEventListener('click', (event) => {
      if (element.getAttribute('selected') === 'true') {
        element.innerText =  this.ingrediente.name;
        element.setAttribute('selected', false);
        Object.assign(element.style, {
          backgroundColor: 'white',
          backgroundImage: `url(${this.ingrediente.image})`,
        });
      } else {
        element.appendChild(checked);
        element.setAttribute('selected', true);
        Object.assign(element.style, {
          backgroundImage: `url(${this.ingrediente.image})`,
        });
        
      }
    });

    element.innerText = this.ingrediente.name;
    element.setAttribute('price', this.ingrediente.price);
    element.setAttribute('priority', this.ingrediente.priority);
    element.className = `ingredientes__item ${this.ingrediente.name}`;
    return element;
  }
}