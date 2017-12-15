export function htmlCreator() {

  return {
    element: document.createElement('div'),
    create(type, event,toggleClass){
      this.element = document.createElement('div');
      this.element.addEventListener(event, ()=>{
        this.toggleClass(toggleClass);
      });
    },
    toggleClass(className) {
      if (this.element.classList.contains(className)) {
        element.classList.remove(className);
      } else {
        element.classList.add(className);
      }
    }
  }
}