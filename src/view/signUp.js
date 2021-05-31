// eslint-disable-next-line import/no-cycle
import { registerNewUser, registerWithGoogle } from '../lib/view-controller.js';

export default () => {
  const templateSignUp = document.createElement('section');
  const viewSignUp = `
  <article class="register">
  <article class="leftR"></article>
   <article class="right">
    <a class="back" href=#/>↩</a>
    <h1 class="letter">Regístrate</h1>
    <input class="name" id="name" type="text" placeholder="Nombre Completo" required>
    <input class="username" id="username" type="text" placeholder="Nombre de usuario" required>
    <input class="email" id="email" type="email" placeholder="ichef@example.com" required>
    <p class="errorMail" id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
    <input class="password" id ="password" type ="password" placeholder = "*********" required>
    <img src="img/google.png" class="google" id="btn-google"><br />
    <p class="errorMail" id= "errorMailGoogle" style="display: none">No ingresaste con tu cuenta Google</p>
    <button class="btn-correo" id="btn-correo">Registrarse</button>
    <p id="alert-sendEmailVerification" style="display: none">Verifica tu correo en la bandeja.</p>
   </article>
  </article>`;

  templateSignUp.classList.add('positionRegister');
  templateSignUp.innerHTML = viewSignUp;

  const btnRegister = templateSignUp.querySelector('#btn-correo');
  btnRegister.addEventListener('click', () => {
    registerNewUser();
  });

  const btnRegisterGoogle = templateSignUp.querySelector('#btn-google');
  btnRegisterGoogle.addEventListener('click', () => {
    registerWithGoogle();
  });

  return templateSignUp;
};
