let footerComponent = function () {
  return /*html*/ `
    <section class="footer-container">
      <img id="gin-bottle" class="gin-bottle" src="asset/img/sakari-gin-cropped.png" alt="">
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,117.3C672,128,768,224,864,245.3C960,267,1056,213,1152,202.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <footer class="content-container">
        <div class="column">
          <h1>Nihonsakari Co., Ltd.</h1>
          <br>
          <p>
            Sakari is a Nihonsakari brand 4-57 Yogai-Cho,<br />
            Nishinomiya Hyogo 662-8521 — JAPAN
          </p>
          <br>
          <p>info@sakarigin.com</p>
        </div>
        <div class="column">
          <h1>Discover our Sake</h1>
          <br>
          <p>www.sakarisake.com</p>
        </div>
        <div class="column">
          <h1>冷やし飴</h1>
          <br>
          <p>Privacy policy</p>
          <br>
          <p>About Us!</p>
        </div>
      </footer>
    </section>
  `;
};

export default footerComponent;
