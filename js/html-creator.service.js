export function htmlCreator() {
  return {
    create(config) {
      const element = document.createElement(config.type);
      Object.assign(element, config);
      return element;
    }
  }
}