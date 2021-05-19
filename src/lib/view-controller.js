// Llamamos las funciones del FireBase con .then && Catch
// eslint-disable-next-line import/no-cycle
import {
  register, registerGoogle, signInEmail, sendEmailVerification, currentUser, signOut,
} from './firebase-controller.js';
// eslint-disable-next-line import/no-cycle
import { createUser, addPost } from './firestore-controller.js';

// eslint-disable-next-line import/no-cycle
import { changeHash } from '../view-controls/index.js';

export const registerNewUser = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  register(email, password)
    .then(() => {
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
export const registerWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  registerGoogle(provider)
    .then(() => {
      const user = currentUser();
      createUser(user.displayName, user.email, user.uid, user.photoURL);
      changeHash('#/Initialpage');
    });
  // .catch(() => {
  //   document.getElementById('errorMailGoogle').style.display = 'block';
  //   document.getElementById('alert-sendEmailVerification').style.display = 'none';
  //   document.getElementById('errorMail').style.display = 'none';
  // });
};
// Iniciar Sesión
export const signInWithEmail = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signInEmail(email, password)
    .then(() => {
      const user = currentUser();
      if (user.emailVerified === true) {
        changeHash('/Initialpage');
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
export const dataPost = () => {
  const user = currentUser();
  const textPost = document.querySelector('#textarea').value;
  addPost(textPost, user.uid, user.email);
};

export const signOutUser = () => {
  signOut().then(() => {
    changeHash('/SignIn');
  });
};
