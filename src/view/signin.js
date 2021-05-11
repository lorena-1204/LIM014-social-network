// eslint-disable-next-line import/no-cycle
import { signInWithEmail, registerWithGoogle } from '../lib/view-controller.js';

export default () => {
  const templateSignIn = document.createElement('section');
  const viewSignIn = `
      <a href=#/>◀</a>
      <h1> Inicia Sesión </h1><br />
      <input id="email" type="email" placeholder="usuario@example.com"><br />
      <input id="password" type="password" placeholder="********"><br />
      <p id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
      <button id="btn-google">Google</button><br />
      <button id="btn-correo">Inicia Sesión</button><br />`;

  templateSignIn.classList.add('position');
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
