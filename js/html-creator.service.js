export function htmlCreator() {
  return {
    create({
        type = 'div',
        className = '',
        innerText = '',
      }) {
      const element = document.createElement(type);
      element.innerText = innerText;
      element.className = className;
      return element;
    }
  }
}