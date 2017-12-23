import { htmlCreator } from './html-creator.service';

export class Masas {

  constructor(masas) {
    this.html = htmlCreator();
    this.masas = masas;
    this.masasElement = this.html.create({
      type: 'div',
      className: 'pizzeria__masas'
    });
    this.masasElement = this.initMasas();
  }

  initMasas() {
    this.masas.forEach((masa, i) => {
      const masaElement = this.creteContainer(masa);
      this.masasElement.appendChild(masaElement);
    });
    return this.masasElement;
  }

  creteContainer(masa) {
    const container = this.html.create({
      type: 'div',
      className: `pizzeria__masas-item ${masa.name.replace(/\s/g, '-')}`,
      innerText: masa.name,
      value: masa.price
    });
    Object.assign(container.style, {
      backgroundImage: `url(${masa.image})`
    });
    return container;
  }
}