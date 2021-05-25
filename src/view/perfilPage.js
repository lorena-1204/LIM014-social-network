// eslint-disable-next-line import/no-cycle
import { signOutUser, pageInitial, dataPost } from '../lib/view-controller.js';
// eslint-disable-next-line import/no-cycle
import { showPost, setupPosts } from '../lib/posts.js';

export default () => {
  const templatePerfilPage = document.createElement('section');
  const viewPerfilPage = `
    <nav>
     <li id="inicio">Inicio</li>
     <li id="signOut">Cerrar Sesión</li>
    </nav> 
    <article>
    <img id="user-pic" class="demo-avatar">
    <h2 id="name"></h2>
    <h3 id="user-name"></h3>
    <p>Descripción del usuario</p>
    <h2>Publica tus recetas</h2>
    <textarea id="textarea" name="publica" placeholder="Publica tu receta">
    </textarea>
    <button id="btn">Compartir</button>
    </article>
    <div class="posts"></div>
     `;

  templatePerfilPage.classList.add('position');
  templatePerfilPage.innerHTML = viewPerfilPage;
  showPost((data, userId) => {
    setupPosts(data, userId, templatePerfilPage);
  });
  const publicar = templatePerfilPage.querySelector('#btn');
  publicar.addEventListener('click', () => {
    dataPost();
  });
  const HomePage = templatePerfilPage.querySelector('#inicio');
  HomePage.addEventListener('click', () => {
    pageInitial();
  });
  const signOutLink = templatePerfilPage.querySelector('#signOut');
  signOutLink.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  return templatePerfilPage;
};
