export function htmlCreator() {
  return {
    create({
      type = 'div',
      className = '',
      innerText = '',
      name = '',
      value = null
    }) {
      const element = document.createElement(type);
      element.innerText = innerText;
      element.className = className;
      element.name = name;
      element.value = value;
      return element;
    }
  }
}