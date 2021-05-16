// eslint-disable-next-line import/no-cycle
import { dataPost, signOutUser } from '../lib/view-controller.js';
// eslint-disable-next-line import/no-cycle
import { showPost } from '../lib/posts.js';

export default () => {
  const templateInitialPage = document.createElement('section');
  const viewInitialPage = `
  <nav>
   <li>Inicio</li>
   <li>Mi Perfil</li>
   <li>#Comidas</li>
   <li>#Bebidas</li>
   <li id="logged-out">Cerrar Sesión</li>
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
  showPost();
  const publicar = templateInitialPage.querySelector('#btn');
  publicar.addEventListener('click', () => {
    dataPost();
  });
  const signOut = templateInitialPage.querySelector('#logged-out');
  signOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });
  return templateInitialPage;
};
