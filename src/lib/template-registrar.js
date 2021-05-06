import SignUp from '../view/signUp.js';


const registrarNuevoUsuario = () => {
  console.log("registrarNuevoUsuario");
  const email = divElemt.querySelector('#email').value;
  const password = divElemt.querySelector('#password').value;
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Correo Correcto');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};

const btnRegistrar = divElemt.querySelector('#btn-correo');
btnRegistrar.addEventListener('click', () => {
  console.log("btnRegistrar");
  registrarNuevoUsuario();
});

const registarGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log('Se registro correctamente');
    })
    .catch((err) => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
const btnGoogle = divElemt.querySelector('#btn-google');
btnGoogle.addEventListener('click', () => {
  registarGoogle();
});
