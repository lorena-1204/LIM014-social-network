export default () => {
  const viewSignIn = `
      <h2 class="text-center"> Inicia Sesión </h2><br />
      <input type="email" placeholder="usuario@example.com"><br />
      <input type="password" placeholder="********"><br />
      <button>Inicia Sesión</button><br />`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewSignIn;

  return divElemt;
};
