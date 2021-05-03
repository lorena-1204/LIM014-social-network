import { registrar, registroGoogle } from './controller.js';
import { homePage } from '../view/template-home.js';

export const registrarNuevoUsuario = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  registrar(email, password)
    .then(() => {
      console.log('Se registro correctamente'); homePage();
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};

export const registarGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  registroGoogle(provider)
    .then(() => {
      console.log('Se registro correctamente'); homePage();
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
