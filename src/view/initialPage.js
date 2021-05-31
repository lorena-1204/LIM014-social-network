// eslint-disable-next-line import/no-cycle
import { dataPost, signOutUser, perfilPageUser } from '../lib/view-controller.js';
// eslint-disable-next-line import/no-cycle
import { showPost, setupPosts } from '../lib/posts.js';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../lib/firestore-controller.js';

export default () => {
  const templateInitialPage = document.createElement('section');
  const viewInitialPage = `
  <nav>
   <!--Respetar los id del menú-->
   <!--svg height="60" width="80">
    <circle cx="30" cy="30" r="25" />
   </svg-->  
   <ul>
    <div class="menu-perfil">
      <!--img id="user-pic-initalPage" class="demo-avatar"-->
      <li id="myPerfil">Mi Perfil</li>
    </div>
      <li id="signOut">Cerrar Sesión</li>
   </ul>
  </nav> 

  <article class = "create-post">
    <h2>Publica tus recetas</h2>
  <div class="img-textPost">
  <img id="user-pic" class="demo-avatar" src="" />
    <input type="text" id="textarea" placeholder="Comparte tus recetas">
    </input>
  </div>
  <div class="btn-post">
    <button id="btn" class="btn-to-post-default">Compartir</button>
  </div>
  </article>

  <div class="posts"></div>
   `;

  templateInitialPage.classList.add('position');
  templateInitialPage.innerHTML = viewInitialPage;
 
  showPost((data, userId) => {
    setupPosts(data, userId, templateInitialPage);
  });
  const textPost = templateInitialPage.querySelector('#textarea');
  const createPost = templateInitialPage.querySelector('#btn');
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

  const perfilUser = templateInitialPage.querySelector('#myPerfil');
  perfilUser.addEventListener('click', () => {
    perfilPageUser();
  });

  const signOutLink = templateInitialPage.querySelector('#signOut');
  signOutLink.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  // const userID = sessionStorage.getItem('id');
  // getUser(userID, (userData) => {
  //   if (userData.exists) {
  //     const user = userData.data();
  //     const name = user.Usuario;
  //     const userNameComplete = document.getElementById('myPerfil');

  //     const separador = ' '; // un espacio en blanco
  // eslint-disable-next-line max-len
  //     const arregloDeSubCadenas = name.split(separador); // SEPARA EL NOMBRE EN CADENAS INDIVIDUALES
  //     // IMPRIME EL NOMBRE INGRESADO
  //     const nameUser = arregloDeSubCadenas[0];
  //     userNameComplete.textContent = nameUser;

  //     const userImage = document.getElementById('user-pic-initalPage');
  //     const userPhoto = user.Photo;
  //     if (userPhoto != null) {
  //       userImage.src = userPhoto;
  //     } else {
  //       userImage.src = '../img/avatar.png';
  //     }
  //   }
  // });
  return templateInitialPage;
};
