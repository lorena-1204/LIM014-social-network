// Llamamos las funciones del FireBase con .then && Catch
// eslint-disable-next-line import/no-cycle
import { register, registerGoogle, signInEmail } from './firebase-controller.js';
import { currentUser, createUser, addPost } from './firestore-controller.js';
import { showPost } from './posts.js';

// eslint-disable-next-line import/no-cycle
import { changeHash } from '../view-controls/index.js';

export const registerNewUser = () => {
  const user = currentUser();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  register(email, password)
    .then(() => {
      createUser(user.displayName, user.email, user.uid, user.photoURL);
      changeHash('/Initialpage');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
export const registerWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  registerGoogle(provider)
    .then(() => {
      showPost();
      changeHash('/Initialpage');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
// Iniciar Sesión
export const signInWithEmail = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signInEmail(email, password)
    .then(() => {
      changeHash('/Initialpage');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
export const dataPost = () => {
  const user = currentUser();
  const textPost = document.querySelector('#textarea').value;
  addPost(textPost, user.uid, user.email);
};
