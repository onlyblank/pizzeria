import { Pizzeria } from './pizzeria';

class Main {
  constructor() {
    document.body.appendChild(new Pizzeria().pizzeriaElement);
  }
}

new Main();