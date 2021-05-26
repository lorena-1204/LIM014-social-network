// eslint-disable-next-line import/no-cycle
import { signOutUser, pageInitial, dataPost } from '../lib/view-controller.js';
// eslint-disable-next-line import/no-cycle
import { setupPosts } from '../lib/posts.js';
// eslint-disable-next-line import/no-cycle
import { editDescriptions, getUser, showPostUserid } from '../lib/firestore-controller.js';
// eslint-disable-next-line import/no-cycle
import { currentUser } from '../lib/firebase-controller.js';

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
    <h2 id="user-name"></h2>
    <textarea id="textareaDescription" name="publica" placeholder="Acerca de mi">
    </textarea>
    <button id="btnGuardar">Guardar</button>
    <p id="descripcion"></p>
    <h3>Publica tus recetas</h3>
    <textarea id="textarea" name="publica" placeholder="Publica tu receta">
    </textarea>
    <button id="btn">Compartir</button>
    </article>
    <div class="posts"></div>
     `;

  templatePerfilPage.classList.add('position');
  templatePerfilPage.innerHTML = viewPerfilPage;

  const userID = sessionStorage.getItem('id');
  showPostUserid((data) => {
    setupPosts(data, userID, templatePerfilPage);
  }, userID);
  const publicarDescripcion = templatePerfilPage.querySelector('#btnGuardar');
  const textDescription = templatePerfilPage.querySelector('#textareaDescription');
  publicarDescripcion.addEventListener('click', () => {
    const user = currentUser();
    editDescriptions(user.uid, textDescription.value);
  });

  getUser(userID, (userData) => {
    const user = userData.data();
    const description = user.Description;
    const postDescription = document.getElementById('descripcion');
    postDescription.textContent = description;
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
