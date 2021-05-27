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
    </article>

    <article class = "create-post">
      <h2>Publica tus recetas</h2>
    <div class="img-textPost">
      <svg height="60" width="80">
        <circle cx="30" cy="30" r="25"/>
      </svg>
      <input type="text" id="textarea" placeholder="Comparte tus recetas">
      </input>
    </div>
    <hr>
    <div class="btn-post">
      <a>🥗 Comida</a>
      <a> 🍹 Bebida</a>
      <button id="btn" class="btn-to-post-default">Compartir</button>
    </div>
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
  // const unsubscribe = firebase.firestore().collection('users').doc(userID).onSnapshot((doc) => {
  //   console.log(doc.data());
  //   const user = doc.data();
  //   if (user && user.Description) {
  //     const description = user.Description;
  //     const postDescription = document.getElementById('descripcion');
  //     postDescription.textContent = description;
  //   }
  // });
  // unsubscribe(); // para desactivar el onsnapshot, el observador se quita

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

  const textPost = templatePerfilPage.querySelector('#textarea');
  const createPost = templatePerfilPage.querySelector('#btn');
  textPost.addEventListener('input', () => {
    if (textPost.value !== '') {
      createPost.classList.remove('btn-to-post-default');
      createPost.classList.add('string-text-post');
    } else {
      createPost.classList.remove('string-text-post');
      createPost.classList.add('btn-to-post-default');
    }
  });
  createPost.addEventListener('click', () => {
    dataPost(textPost.value, createPost);
    textPost.value = '';
    createPost.classList.remove('string-text-post');
    createPost.classList.add('btn-to-post-default');
  });

  return templatePerfilPage;
};
