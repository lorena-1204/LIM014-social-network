// eslint-disable-next-line import/no-cycle
import { dataPost, signOutUser, perfilPageUser } from '../lib/view-controller.js';
// eslint-disable-next-line import/no-cycle
import { showPost, setupPosts } from '../lib/posts.js';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../lib/firestore-controller.js';

export default () => {
  const templateInitialPage = document.createElement('section');
  const viewInitialPage = `
  <!--nav>
   <Respetar los id del menú>
   <svg height="60" width="80">
    <circle cx="30" cy="30" r="25" />
   </svg>  
   <ul>
    <div class="menu-perfil">
      <img id="user-pic-initalPage" class="demo-avatar">
      <li id="myPerfil"></li>
    </div>
      <li id="signOut">Cerrar Sesión</li>
   </ul>
  </nav--> 

  <div class="tabs">
    <div class="tabs__inner">
        <a class="tabs__item">
          <img data-feather="home" src="../img/ichef oro.png" id="bar-chart"></img>
          <h1>I CHEF</h1>
          <span class="tabs__tooltip">I CHEF</span>
        </a>
        <a class="tabs__item tabs__item--active">
          <img data-feather="home" src="../img/menu/home.png"></img>
          <span class="tabs__tooltip">Inicio</span>
        </a>
        <a class="tabs__item" id="menu-perfil">
          <img id="user-pic-initalPage" class="demo-avatar">
          <span id="myPerfil-Inital"></span>
          <span class="tabs__tooltip">Mi Perfil</span>
        </a>
        <a class="tabs__item" id="signOut">
          <img data-feather="logOut" src="../img/menu/log out.png" id="logOut"></img>
          <span class="tabs__tooltip">Cerrar Sesión</span>
        </a>
    </div>
  </div>

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

  const perfilUser = templateInitialPage.querySelector('#menu-perfil');
  perfilUser.addEventListener('click', () => {
    perfilPageUser();
  });

  const signOutLink = templateInitialPage.querySelector('#signOut');
  signOutLink.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });

  const userID = sessionStorage.getItem('id');
  getUser(userID, (userData) => {
    if (userData.exists) {
      const user = userData.data();
      // console.log(user)
      const name = user.Usuario;
      const userNameComplete = templateInitialPage.querySelectorAll('#myPerfil-Inital');

      const separador = ' '; // un espacio en blanco
      const arregloDeSubCadenas = name.split(separador); // SEPARA EL NOMBRE EN CADENAS INDIVIDUALES
      // IMPRIME EL NOMBRE INGRESADO
      const nameUser = arregloDeSubCadenas[0];
      userNameComplete.forEach((e) => {
        e.textContent = nameUser;
      });
      const userImage = templateInitialPage.querySelectorAll('#user-pic-initalPage');
      const userPhoto = user.Photo;
      userImage.forEach((e) => {
        if (userPhoto != null) {
          e.src = userPhoto;
        } else {
          e.src = '../img/avataar.png';
        }
      });
    }
  });
  return templateInitialPage;
};
