/*===================================*\
*                                     *
*        INITIALIZE COMPONENT         *
*                                     *
\*===================================*/
const loadingIntroComponent = function () {
	return /* html */ `
    <div id="loading-intro-container">
      <img class="loading-logo" src="./assets/img/loading-intro/logo.svg" alt="Brand logo">
      <div class="loading-progress"></div>
      <div class="loading-logo-hider"></div>
    </div>
    `;
};

export default loadingIntroComponent;
