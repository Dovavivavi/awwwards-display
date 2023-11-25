import loadingIntroComponent from './components/loading-intro/loading-intro.js';
import ageLimitComponent from './components/age-limit/age-limit.js';
import headerComponent from './components/header/header.js';
import ingredientComponent from './components/ingredients/ingredients.js';
import footerComponent from './components/footer/footer.js';

/*===================================*\
*                                     *
*            LOADING INTRO            *
*                                     *
\*===================================*/
const rootElement = document.querySelector('#root');

// Create Loading Intro
rootElement.insertAdjacentHTML('afterbegin', loadingIntroComponent());

// Remove Loading Intro
const loadingRemove = document.querySelector('#loading-intro-container');
setTimeout(() => loadingRemove.remove(), 2500);

/*===================================*\
*                                     *
*              AGE LIMIT              *
*                                     *
\*===================================*/

// Create Age Limit Component Section
setTimeout(
  () => rootElement.insertAdjacentHTML('afterbegin', ageLimitComponent()),
  2500
);

// Age Limit Rejection
setTimeout(function clickEventRejection() {
  const btnNo = document.querySelector('.btn-no');
  btnNo.addEventListener('click', () => {
    document.querySelector('.age-limit-question-two').innerHTML =
      "Sorry, it seems you are not the right<br> age for gin. Don't hurry things. We<br> never do.";

    setTimeout(() => {
      console.log("3 sec delay");
      location.reload()
    }, "3300")
    
  });
}, 2500);

// Redirection to Main Content - Remove Age Limit and Create Main Content
setTimeout(function clickEventRedirection() {
  const btnYes = document.querySelector('.btn-yes');
  const ageLimitRemove = document.querySelector('#age-limit-section');
  const mainContent = function () {
    return /* html */ `
			    ${headerComponent()}
          ${ingredientComponent()}
          ${footerComponent()}
	    `;
  };
  btnYes.addEventListener('click', function () {
    ageLimitRemove.remove();
    rootElement.insertAdjacentHTML('beforeend', mainContent());
    setTimeout(rotateAnimation, 20);
    addScrollAdnimation(document.querySelector('#bottle'), -12, 1, 1);
    addScrollAdnimation(document.querySelector('#p1'), -9.5672, 0.34, 0.5);
    addScrollAdnimation(document.querySelector('#p2'), 171, 1.5, 2);
    addScrollAdnimation(document.querySelector('#p3'), 156.117, 0.45, 0.5);
    addScrollAdnimation(document.querySelector('#p4'), -97.8828, 0.8, 0.5);
    addScrollAdnimation(document.querySelector('#p5'), 75.9688, 0.4, 0.8);
    addScrollAdnimation(document.querySelector('#p6'), 5.8968, 0.6, 0.9);
    addScrollAdnimation(document.querySelector('#p7'), -26.6391, 0.3, 0.8);
    onScrollAnimation(
      document.getElementById('gin-bottle'),
      'gin-bottle-animation'
    );
  });
}, 2500);

const rotateAnimation = () => {
  document.querySelector('#bottle').style.transform =
    'translate(0px, -100px) rotate(-12deg)';
  document.querySelector('#p2').style.transform =
    'translate(0px, -100px) rotate(171deg) scale(1.5)';
  document.querySelector('#p1').style.transform =
    'translate(0px, -100px) rotate-9.5672deg) scale(0.34)';
  document.querySelector('#p3').style.transform =
    'translate(0px, -100px) rotate(156.117deg) scale(0.45)';
  document.querySelector('#p4').style.transform =
    'translate(0px, -100px) rotate(-97.8828deg) scale(0.8)';
  document.querySelector('#p5').style.transform =
    'translate(0px, -100px) rotate(75.9688deg) scale(0.4)';
  document.querySelector('#p6').style.transform =
    'translate(0px, -100px) rotate(5.8968deg) scale(0.6)';
  document.querySelector('#p7').style.transform =
    'translate(0px, -100px) rotate(-26.6391deg) scale(0.3)';
};

const addScrollAdnimation = (element, deg, scale, incrementBy) => {
  let prevScrollPosition = window.scrollY;

  const transform = element.style.transform;
  let YValue = parseInt(transform.substring(15, transform.lastIndexOf('px')));

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < prevScrollPosition) {
      YValue += incrementBy;
      element.style.transform = `translate(0px, ${YValue}px) rotate(${deg}deg) scale(${scale})`;
    } else {
      YValue -= incrementBy;
      element.style.transform = `translate(0px, ${YValue}px) rotate(${deg}deg) scale(${scale})`;
    }

    if (scrollPosition === 0) {
      element.style.transform = `translate(0px, 0px) rotate(${deg}deg) scale(${scale})`;
    }

    prevScrollPosition = scrollPosition;
  });
};

function onScrollAnimation(element, classWithAnimation) {
  document.addEventListener('scroll', () => {
    let elementPosFromTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    let elementVisible = 250;
    if (elementPosFromTop < windowHeight - elementVisible) {
      console.log('I am visible');
      element.classList.add(classWithAnimation);
    }
  });
}
