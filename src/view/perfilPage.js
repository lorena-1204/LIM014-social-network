// eslint-disable-next-line import/no-cycle
import { signOutUser, pageInitial, dataPost } from '../lib/view-controller.js';
// eslint-disable-next-line import/no-cycle
import { setupPosts } from '../lib/posts.js';
// eslint-disable-next-line import/no-cycle
import { editDescriptions, showPostUserid } from '../lib/firestore-controller.js';
// eslint-disable-next-line import/no-cycle
import { currentUser } from '../lib/firebase-controller.js';

export default () => {
  const templatePerfilPage = document.createElement('section');
  const viewPerfilPage = `
  <div class="grid">
    <div class="page_left">
      <nav>
       <li id="inicio">Inicio</li>
       <li id="signOut">Cerrar Sesión</li>
      </nav> 
      <article class="infoUser">
        <div class="infoUser_data">
          <img id="user-pic" class="demo-avatar">
          <div style="margin-left:10px">
              <h2 id="name"></h2>
              <h2 id="user-name"></h2>
          </div>
        </div>
       
        <input id="textareaDescription" name="publica" placeholder="Acerca de mi">
        </input>
        <button id="btnGuardar">Guardar</button>
        <p id="descripcion"></p>
      </article>
    
      <article class = "create-post">
        
        <div class = "create-post-row">
        <img id="user-pic-post" class="demo-avatar">
        
          <h2>Publica tus recetas</h2>
        </div>

        <div class="img-textPost">
        <input type="text" id="textarea" placeholder="Comparte tus recetas">
        </input>
          <div class="btn-post">
           <button id="btn" class="btn-to-post-default">Compartir</button>
          </div>
      </article>
    </div>
    <div class="page_right">
      <div class="posts"></div>
    </div>
  </div>
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
