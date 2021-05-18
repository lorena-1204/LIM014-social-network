// eslint-disable-next-line import/no-cycle
import { dataPost, signOutUser } from '../lib/view-controller.js';
// eslint-disable-next-line import/no-cycle
import { showPost, setupPosts } from '../lib/posts.js';

export default () => {
  const templateInitialPage = document.createElement('section');
  const viewInitialPage = `
  <nav>
   <li>Inicio</li>
   <li>Mi Perfil</li>
   <li>#Comidas</li>
   <li>#Bebidas</li>
   <li id="signOut">Cerrar Sesión</li>
  </nav> 
  <article>
  <h2>Publica tus recetas</h2>
  <textarea id="textarea" name="publica" placeholder="Publica tu receta">
  </textarea>
  <button id="btn">Compartir</button>
  </article>
  <div class="posts"></div>
   `;

  templateInitialPage.classList.add('position');
  templateInitialPage.innerHTML = viewInitialPage;
  showPost((data) => {
    setupPosts(data, templateInitialPage);
  });
  const publicar = templateInitialPage.querySelector('#btn');
  publicar.addEventListener('click', () => {
    dataPost();
  });

  const signOutLink = templateInitialPage.querySelector('#signOut');
  signOutLink.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  return templateInitialPage;
};
