export default () => {
  const viewHome = `
    <h2 class="text-center"> ¡Bienvenidos a ICHEF! </h2>
    <button>Regístrate</button>
    <button>Inicia Sesión</button>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
