const register = document.getElementById('root');
register.innerHTML = `<div class="Registro-vent">
<h2>Regístrate</h2>
<input id="name" type="text" placeholder="Nombre Completo" required>
<input id="username" type="text" placeholder="Nombre de usuario" required>
<input id="email" type="email" placeholder="ichef@example.com" required>
<p id= "errorMail" style="display: none"> Correo inválido. Por favor, revísalo nuevamente.</p>
<input id="password" type="password" placeholder="***" required>
<button id="btn-google">Google</button>
<button id="btn-correo">Continuar</button>
</div>`;

const registrarNuevoUsuario = () =>{ 
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Correo Correcto')
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    })
};

const btnRegistrar = register.querySelector('#btn-correo');
btnRegistrar.addEventListener('click', () => {
  registrarNuevoUsuario();
});

const registarGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(result => {
      console.log('Se registro correctamente')
    })
    .catch(err =>{
      document.getElementById('errorMail').style.display = 'block';
    })
};
const btnGoogle = register.querySelector('#btn-google');
btnGoogle.addEventListener('click', () => {
  registarGoogle();
});
