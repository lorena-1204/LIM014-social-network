// Llamamos las funciones del FireBase con .then && Catch
import { register, registerGoogle } from './firebase-controller.js';

export const registerNewUser = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  register(email, password)
    .then(() => {
      console.log('Se registro correctamente');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};

export const registerWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  registerGoogle(provider)
    .then(() => {
      console.log('Se registro correctamente');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
