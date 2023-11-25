/*===================================*\
*                                     *
*        INITIALIZE COMPONENT         *
*                                     *
\*===================================*/
const ageLimitComponent = function () {
	return /* html */ `
    <section id="age-limit-section">
			<div class="age-limit-container">
				<h3 class="age-limit-question-one">
					Our brewery is 130 years old. How about<br />you?
				</h3>
				<h3 class="age-limit-question-two">
					Are you of legal drinking age in your<br />country of residence?
				</h3>
				<div class="age-limit-btn-container">
					<button class="btn btn-yes">Yes</button>
					<button class="btn btn-no">No</button>
				</div>
			</div>
			<img class="logo-brand-name" src="./assets/img/age-limit/logo-sakari-gin.svg" alt="Sakari Gin brand name and logo">
			<img class="petalo" src="./assets/img/age-limit/petalo.png">
			<img class="petalo-background-1" src="./assets/img/age-limit/petalo-background.png">
			<img class="petalo-background-2" src="./assets/img/age-limit/petalo-background.png">
		</section>
  `;
};

export default ageLimitComponent;
