export default () => {
  const viewLogin = `
  <h1>Iniciar Sesión</h1>
  <from> 
  <input type='text' required name='usuario'  placeholder='Nombres de Usuario'>
  <input type='password' required name='contraseña'  maxlength='8' placeholder='Contraseña'>
  
  <button type='button'>Continuar </button>
  </from>`;

  const divElemen = document.createElement('div');
  divElemen.innerHTML = viewLogin;

  return divElemen;
};
