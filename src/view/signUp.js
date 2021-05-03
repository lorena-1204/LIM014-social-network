export default () => {
  const viewSignUp = `
        <h2 class="text-center"> Regístrate </h2><br />
        <input type="text" placeholder="Ingresa tu nombre completo"><br />
        <input type="text" placeholder="Ingresa tu nombre de usuario"><br />
        <input type="text" placeholder="usuario@example.com"><br />
        <input type="text" placeholder="********"><br />
        <button>Regístrate</button>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewSignUp;

  return divElemt;
};
