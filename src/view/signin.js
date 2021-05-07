export default () => {
  const templateSignIn = document.createElement('section');
  const viewSignIn = `
      <a href=#/>◀</a>
      <h1> Inicia Sesión </h1><br />
      <input type="email" placeholder="usuario@example.com"><br />
      <input type="password" placeholder="********"><br />
       <button>Google</button><br />
      <button>Inicia Sesión</button><br />`;

  templateSignIn.classList.add('position');
  templateSignIn.innerHTML = viewSignIn;

  return templateSignIn;
};
