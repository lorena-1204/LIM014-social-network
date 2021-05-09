// eslint-disable-next-line import/no-cycle
import { registerNewUser, registerWithGoogle } from '../lib/view-controller.js';

export default () => {
  const templateSignUp = document.createElement('section');
  const viewSignUp = `<div>
  <a href=#/>◀</a>
  <h2>Regístrate</h2>
  <input id="name" type="text" placeholder="Nombre Completo" required>
  <input id="username" type="text" placeholder="Nombre de usuario" required>
  <input id="email" type="email" placeholder="ichef@example.com" required>
  <p id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
  <input id ="password" type ="password" placeholder = "*********" required>
  <button id="btn-google">Google</button>
  <button id="btn-correo">Registrarse</button>
  </div>`;

  templateSignUp.classList.add('position');
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
