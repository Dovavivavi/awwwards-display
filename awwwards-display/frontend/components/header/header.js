import headerImageComponent from './header-image/header-image.js';
import headerTextComponent from './header-text/header-text.js';
import petalComponent from './petal/petal.js';

const headerComponent = () => {
  const p1Transform = 'transform: translate(0px, 0px) rotate(-9.5672deg) scale(0.34)';
  const p2Transform = 'transform: translate(0px, 0px) rotate(171deg) scale(1.5);';
  const p3Transform = 'transform: translate(0px, 0px) rotate(156.117deg) scale(0.45);';
  const p4Transform = 'transform: translate(0px, 0px) rotate(-97.8828deg) scale(0.8);';
  const p5Transform = 'transform: translate(0px, 0px) rotate(75.9688deg) scale(0.4);';
  const p6Transform = 'transform: translate(0px, 0px) rotate(5.8968deg) scale(0.6);';
  const p7Transform = 'transform: translate(0px, 0px) rotate(-26.6391deg) scale(0.3);';

  return /*html*/ `
  <section class="header-section">
    <header class="header-container">
      ${headerTextComponent()}
      ${headerImageComponent()}
    </header>
    ${petalComponent('p1', p1Transform)}
    ${petalComponent('p2', p2Transform)}
    ${petalComponent('p3', p3Transform)}
    ${petalComponent('p4', p4Transform)}
    ${petalComponent('p5', p5Transform)}
    ${petalComponent('p6', p6Transform)}
    ${petalComponent('p7', p7Transform)}
  </section>
    `;
};

export default headerComponent;
