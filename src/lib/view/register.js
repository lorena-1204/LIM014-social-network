// const containerRegister = document.createElement('section');

export default () => {
  const viewRegister = `
  <h1>Regístrate</h1>
  <from id='signup-from'> 
  <input id='name' type='text' required name='name'  placeholder='Nombres Completo'>
  <input id='username' type='text' required name='usuario'  placeholder='Nombres de Usuario'>
  <input id='email' type='email' required name='correo'  placeholder='ichef@example.com'>
  <input type='password' required name='contraseña'  maxlength='8' placeholder='Contraseña'>
  
  <button type='button'>Google </button>
  <button type='submit'>Continuar </button>
  </from>`;

  const divElemen = document.createElement('div');
  divElemen.innerHTML = viewRegister;

  // const signup = document.querySelector('#ssignup-from');
  // signup.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const email = document.querySelector('#email').value;
  //   const password = document.querySelector('#password').value;
  //   // autentificación
  //   firebase.auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       console.log('Correo Correcto');
  //     });
  // });

  return divElemen;
};
