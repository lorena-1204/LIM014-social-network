export default () => {
  const viewSignUp = `<div class="Registro-vent">
  <h2>Regístrate</h2>
  <input id="name" type="text" placeholder="Nombre Completo" required>
  <input id="username" type="text" placeholder="Nombre de usuario" required>
  <input id="email" type="email" placeholder="ichef@example.com" required>
  <p id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
  <input id="password" type="password" placeholder="***" required>
  <button id="btn-google">Google</button>
  <button id="btn-correo">Registrarse</button>
  </div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewSignUp;

  const btnRegistrar = divElemt.querySelector('#btn-correo');
  btnRegistrar.addEventListener('click', () => {
    // console.log('btnRegistrar');

    const email = divElemt.querySelector('#email').value;
    const password = divElemt.querySelector('#password').value;
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

  return divElemt;
};
