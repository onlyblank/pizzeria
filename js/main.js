import {
  Pizzeria
} from './pizzeria';

class Main {
  constructor(){
    this.Pizzeria = new Pizzeria();
    document.body.appendChild(this.Pizzeria.pizzeriaElement);
  }
}
new Main();