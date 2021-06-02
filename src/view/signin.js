// eslint-disable-next-line import/no-cycle
import { signInWithEmail, registerWithGoogle } from '../lib/view-controller.js';

export default () => {
  const templateSignIn = document.createElement('section');
  const viewSignIn = `
  <article class = "logIn">
  <article class="left"></article>
   <article class="right">
    <a class="back" href=#/>↩</a>
    <h1 class="letter"> Inicia Sesión </h1> <input class="email" id="email" type="email" placeholder="usuario@example.com">
    <input class="password" id="password" type="password" placeholder="********">
    <p class="errorMail" id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
    <img src="img/google.png" class="google" id="btn-google">
    <p class="errorMail" id= "errorMailGoogle" style="display: none">No ingresaste con tu cuenta Google</p>
    <button class="btn-correo" id="btn-correo">Inicia Sesión</button>
    <p id="alert-sendEmailVerification" style="display: none">Verifica tu correo en la bandeja.</p>
   </article>
  </article>
`;

  templateSignIn.classList.add('positionLogin');
  templateSignIn.innerHTML = viewSignIn;

  const btnSignInEmail = templateSignIn.querySelector('#btn-correo');
  btnSignInEmail.addEventListener('click', () => {
    signInWithEmail();
  });
  const btnSignInGoogle = templateSignIn.querySelector('#btn-google');
  btnSignInGoogle.addEventListener('click', () => {
    registerWithGoogle();
  });
  return templateSignIn;
};
