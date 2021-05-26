// Llamamos las funciones del FireBase con .then && Catch
// eslint-disable-next-line import/no-cycle
import {
  register, registerGoogle, signInEmail, sendEmailVerification, currentUser, signOut,
} from './firebase-controller.js';
// eslint-disable-next-line import/no-cycle
import { createUser, addPost } from './firestore-controller.js';
// eslint-disable-next-line import/no-cycle
import { changeHash } from '../view-controls/index.js';
import { INITIAL_PAGE, SIGN_IN, PERFIL_PAGE } from './constants.js';

// Registro de un usuario con correo
export const registerNewUser = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const userName = document.querySelector('#username').value;
  const CompleteName = document.querySelector('#name').value;
  register(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      createUser(CompleteName, userName, user.email, user.uid, user.photoURL, user.textDescription);
      sendEmailVerification().then(() => {
        document.getElementById('alert-sendEmailVerification').style.display = 'block';
      }).catch(() => {
        document.getElementById('errorMail').style.display = 'block';
        document.getElementById('errorMailGoogle').style.display = 'none';
      });
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
      document.getElementById('alert-sendEmailVerification').style.display = 'none';
      document.getElementById('errorMailGoogle').style.display = 'none';
    });
};
// Registro | Autenticar  un usuario con google
export const registerWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  registerGoogle(provider)
    .then(() => {
      const user = currentUser();
      const description = null;
      // eslint-disable-next-line max-len
      createUser(user.displayName, user.displayName, user.email, user.uid, user.photoURL, description);
      sessionStorage.setItem('id', user.uid);
      changeHash(INITIAL_PAGE);
    });
};
// Iniciar Sesión
export const signInWithEmail = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signInEmail(email, password)
    .then(() => {
      const user = currentUser();
      if (user.emailVerified === true) {
        sessionStorage.setItem('id', user.uid);
        changeHash(INITIAL_PAGE);
      } else {
        document.getElementById('alert-sendEmailVerification').style.display = 'block';
        document.getElementById('errorMailGoogle').style.display = 'none';
      }
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
      document.getElementById('errorMailGoogle').style.display = 'none';
      document.getElementById('alert-sendEmailVerification').style.display = 'none';
    });
};

export const dataPost = (textPost) => {
  if (textPost !== '') {
    const user = currentUser();
    addPost(textPost, user.uid, user.email);
  }
};
// Description
export const dataDescription = () => {
  const user = currentUser();
  const textPost = document.querySelector('#textareaDescription').value;
  addPost(textPost, user.uid, user.nickName);
};
// Cerrar Sesión
export const signOutUser = () => {
  signOut().then(() => {
    changeHash(SIGN_IN);
    sessionStorage.removeItem('id');
  });
};
// Página de perfil
export const perfilPageUser = () => {
  currentUser();
  const user = currentUser();
  if (user.emailVerified === true) {
    changeHash(PERFIL_PAGE);
  } else {
    document.getElementById('alert-sendEmailVerification').style.display = 'block';
    document.getElementById('errorMailGoogle').style.display = 'none';
  }
};
// Página inicial
export const pageInitial = () => {
  currentUser();
  const user = currentUser();
  if (user.emailVerified === true) {
    changeHash(INITIAL_PAGE);
  } else {
    document.getElementById('alert-sendEmailVerification').style.display = 'block';
    document.getElementById('errorMailGoogle').style.display = 'none';
  }
};
