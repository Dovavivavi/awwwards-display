const petalComponent = (cssClass, transform) => {
  return /*html*/ `
    <img style="${transform}" id="${cssClass}" class="${cssClass}" src="asset/img/petalo.png" alt="">
  `;
};

export default petalComponent;
