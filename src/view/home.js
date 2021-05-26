// eslint-disable-next-line import/no-cycle
import { registerWithGoogle } from '../lib/view-controller.js';

export default () => {
  const templateHome = document.createElement('section'); // Nodo section
  templateHome.classList.add('position');

  const viewHome = `
  <div class="background-opacity" id="background-opacity-none">
    <div class="gallery_template_home" >
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80"
        class="gallery_img">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=506&q=80"
        class="gallery_img">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        class="gallery_img">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        class="gallery_img">
      </div> 
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        class="gallery_img">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=542&q=80"
        class="gallery_img">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        class="gallery_img">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1453824979084-c8fd42932378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        class="gallery_img">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80"
        class="gallery_img">
      </div>

      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=353&q=80"
        id="background-mobile-first" class="gallery_img">
      </div>

      <div class="logo-iChef-background">
        <img src="../img/verde pasto.png">
        <h1>I CHEF</h1>
      </div>  
      <div class="post-text-background">
        <div class="example-iChef">
          <svg height="40" width="40">
            <circle cx="18" cy="18" r="15" fill="gray" />
          </svg>
          <div>
            <p>Las Mil & Un Recetas</p>
            <p>@disfruta de las mejores recetas</p>
          </div>
        </div>
      </div>

    </div>
  </div>

    <article class="info-redirect-home-page">
      <h1 class="info-redirect-h1">Ingresa con una cuenta para acceder a miles de ideas</h1>
      <section id="info-redirect-home-page_section">
        <img src="../img/i chef.png"
        class="logo-iChef">
        <h3>Te damos la bienvenida a <span>I CHEF</span></h3>
        <div class="info-container">
          <p>¿Buscas preparar como "cena fácil con pollo"?</p>
          <p>Accede y descubre ideas que te gusten</p>
        </div>

        <div class="buttons-info">
          <a class="button-redirect-sign-in" href="#/SignIn">Inicia sesión</a>
          <p>O</p>
          <a class="button-redirect-sign-up" href="#/SignUp">Regístrate con una cuenta</a>
          <a id="button-redirect-home-page"><img src="https://image.flaticon.com/icons/png/512/300/300221.png">
          Continuar con Google</a>
          <p id="condictions-iChef">Al continuar, aceptas las <b>Condiciones de servicio</b> y la <b>Política de privacidad</b> de ICHEF.</p>
        </div>
      </section>
    </article>



    <div class="button-mobile">
      <a href="#/SignIn" class="button">Inicia Sesión</a>
      <a href="#/SignUp" class="button">Regístrate</a>
    </div>
  `;
  templateHome.innerHTML = viewHome;

  const registerButtonGoogle = templateHome.querySelector('#button-redirect-home-page');
  registerButtonGoogle.addEventListener('click', () => {
    registerWithGoogle();
  });
  return templateHome;
};
