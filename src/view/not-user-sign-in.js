export const notUserSignIn = () => {
  const section = document.createElement('section');
  section.classList.add('template-not-user');
  const template = `
  <div class="background-opacity">
    <div class="gallery" >
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=469&q=80"
        class="gallery_img_not_user">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=506&q=80"
        class="gallery_img_not_user">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        class="gallery_img_not_user">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        class="gallery_img_not_user">
      </div> 
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        class="gallery_img_not_user">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=542&q=80"
        class="gallery_img_not_user">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        class="gallery_img_not_user">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1453824979084-c8fd42932378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        class="gallery_img_not_user">
      </div>
      <div class="gallery_item">
        <img src="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80"
        class="gallery_img_not_user">
      </div>
    </div>
  </div>

    <article class="info-redirect-home-page">
      <h1 class="info-redirect-h1">Ingresa con una cuenta para acceder a miles de ideas</h1>
      <section>
        <img src="../img/i chef.png"
        class="logo-iChef">
        <h3>Te damos la bienvenida a <span>I CHEF</span></h3>
        <div class="info-container">
          <p>Necesitas registrarte</p>
          <p>¿Buscas preparar como "cena fácil con pollo"?</p>
          <p>Accede y descubre ideas que te gusten</p>
        </div>

        <div class="buttons-info">
          <a class="button-redirect-sign-in" href="#/SignIn">Inicia sesión</a>
          <p>O</p>
          <a class="button-redirect-sign-up" href="#/SignUp">Regístrate con una cuenta</a>
          <a id="button-redirect-home-page" href="#/">Volver al Inicio</a>
        </div>
      </section>
    <article>
 `;
  section.innerHTML = template;
  return section;
};
