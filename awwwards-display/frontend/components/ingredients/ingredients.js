const ingredientComponent = function () {
  return /*html*/ `
        <section id="ingredients-section">
            <img class="botanics" src="asset/img/botanics-img.png">
            <div class="title-container">
                <h2 class=title-heading>
                    Japanese botanicals for<br> a uniquely local flavor
                </h2>
                <p class="title-p">
                    Sake kasu and Sugi are not the only Japanese ingredients that make Sakari Gin unique.
                </p>
                <br>
                <p class="title-p">
                    We selected a wealth of local botanicals that express our traditional bond with nature and will make your drinking experience unforgettable.
                </p>
                <br>
                <p class="title-p">
                    Our only non-local ingredient is juniper berries, essential for a gin.
                </p> 
            </div>
            <div class="ingredients-container">
                <div class="ingredient1">
                    <div class="image">
                        <img class="image-left" src="asset/img/sansho.jpg">
                    </div>
                    <div class="icon1">
                        <img class="ico1" src="asset/img/sansho-ico.png">
                    </div>
                    <h5 class="left">
                        SANSHO
                        <span class="parentesi">(JAPANESE PEPPER)</span>
                    </h5>
                    <div class="kall">
                        <img class="sansho-kall" src="asset/img/sansho-kall.png">
                    </div>
                    <p class= first>
                        This lemony and subtly spicy pepper is locally grown in our region (Hyogo) and it’s a staple of Japanese cuisine, traditionally used to season broiled eels or as a part of the sichimi togarashi spice blend.
                    </p>
                </div> 
                <div class="ingredient2">
                    <div class="image">
                        <img class="image-right" src="asset/img/level.png">
                    </div>
                    <div class="icon">
                        <img class="ico2" src="asset/img/shiso-ico.png">
                    </div>
                    <h5 class="right1">
                        SHISO
                        <span class="parentesi">(JAPANESE PERILLA)</span>
                    </h5>
                    <div class="kall">
                        <img class="shiso-kall" src="asset/img/shiso-kall.png">
                    </div>
                    <p class= second>
                        This herb, that belongs to the family of mints, is widely used in Japan as a condiment for sashimi, tataki or as a garnish for noodles. It’s also known as Japanese Basil.
                    </p>
                </div>
                <div class="ingredient3">
                    <div class="image">
                        <img class="image-left" src="asset/img/barnacucc.png">
                    </div>
                    <div class="icon">
                        <img class="ico3" src="asset/img/hinoki-ico.png">
                    </div>
                    
                    <h5 class="left">
                        HINOKI
                        <span class="parentesi">(JAPANESE CYPRESS)</span>
                    </h5>
                    <div class="kall">
                        <img class="hinoki-kall" src="asset/img/hinoki-kall.png">
                    </div>
                    <p class=third>
                        A beautiful tree, hinoki is often planted in Japan for ornamental use or employed for the quality of its timber. Like Sugi, hinoki has a lemon scent, but with a spicy note.
                    </p>
                </div>
                <div class="ingredient4">
                    <div class="image">
                        <img class="image-right" src="asset/img/citrom.png">
                    </div>
                    <div class="icon">
                        <img class="ico4" src="asset/img/yuzu-ico.png">
                    </div>
                    
                    <h5 class= "right2">
                        YUZU JUICE
                    </h5>
                    <div class="kall">
                        <img class="yuzu-kall" src="asset/img/yuzu-kall.png">
                    </div>
                    <p class=fourth>
                        This very aromatic and appreciated Japanese citrus - used both in cooking and drinks - adds a special touch to our gin. We only use the best yuzus from all of Japan.
                    </p>
                </div>
                <div class="ingredient5">
                    <div class="image">
                        <img class="image-left-sakura" src="asset/img/virag.png">
                    </div>
                    <div class="icon">
                        <img class="ico5" src="asset/img/sakura-ico.png">
                    </div>
                    <h5 class="left">
                        SAKURA FLOWER
                        <span class="parentesi">(CHERRY TREE PETALS)</span>
                    </h5>
                    <div class="kall">
                        <img class="sakura-kall" src="asset/img/sakura-kall.png">
                    </div>
                    <p class="fifth">
                        If you visit Nishinomiya - our hometown - in spring, you will be amazed by the blossoming cherry trees lining the Shukagawa River. You can also taste them in our gin!
                    </p>
                </div>
            </div>
        </section>
    `;
};

export default ingredientComponent;
