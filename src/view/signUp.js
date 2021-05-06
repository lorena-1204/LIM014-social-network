export default () => {
  const templateSignUp = document.createElement('section');
  const viewSignUp = `<div class="Registro-vent">
  <a href=#/>◀</a>
  <h2>Regístrate</h2>
  <input id="name" type="text" placeholder="Nombre Completo" required>
  <input id="username" type="text" placeholder="Nombre de usuario" required>
  <input id="email" type="email" placeholder="ichef@example.com" required>
  <p id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
  <input id="password" type="password" placeholder="***" required>
  <button id="btn-google">Google</button>
  <button id="btn-correo">Registrarse</button>
  </div>`;

  templateSignUp.classList.add('position');
  templateSignUp.innerHTML = viewSignUp;

  const btnRegistrar = templateSignUp.querySelector('#btn-correo');
  btnRegistrar.addEventListener('click', () => {
    // console.log('btnRegistrar');

    const email = templateSignUp.querySelector('#email').value;
    const password = templateSignUp.querySelector('#password').value;
    // console.log(email, password);

    const registrarNuevoUsuario = (email, password) => {
      console.log('registrarNuevoUsuario');
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Correo Correcto');
        })
        .catch(() => {
          document.getElementById('errorMail').style.display = 'block';
        });
    };

    registrarNuevoUsuario(email, password);
  });

  return templateSignUp;
};
