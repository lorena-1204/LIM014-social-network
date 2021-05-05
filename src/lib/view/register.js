// const containerRegister = document.createElement('section');

export default () => {
  const viewRegister = `
  <h1>Regístrate</h1>
  <from> 
  <input type='text' required name='name'  placeholder='Nombres Completo'>
  <input type='text' required name='usuario'  placeholder='Nombres de Usuario'>
  <input type='text' required name='correo'  placeholder='Contraseña'>
  <input type='password' required name='contraseña'  maxlength='8' placeholder='Contraseña'>
  
  <button type='button'>Continuar </button>
  </from>`;

  const divElemen = document.createElement('div');
  divElemen.innerHTML = viewRegister;

  return divElemen;
};
