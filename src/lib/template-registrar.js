import { registrarNuevoUsuario, registarGoogle } from './view-controller.js';

const register = document.getElementById('root');
register.innerHTML = `<div class="registro-ventana">
<h2>Regístrate</h2>
<input id="name" type="text" placeholder="Nombre Completo" required>
<input id="username" type="text" placeholder="Nombre de usuario" required>
<input id="email" type="email" placeholder="ichef@example.com" required>
<p id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
<input id="password" type="password" placeholder="***" required>
<button id="btn-google">Google</button>
<button id="btn-correo">Continuar</button>
</div>`;

const btnRegistrar = register.querySelector('#btn-correo');
btnRegistrar.addEventListener('click', () => {
  registrarNuevoUsuario();
});

const btnGoogle = register.querySelector('#btn-google');
btnGoogle.addEventListener('click', () => {
  registarGoogle();
});
