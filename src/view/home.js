export default () => {
  const templateHome = document.createElement('section'); // Nodo section
  templateHome.classList.add('container-frist');
  const viewHome = `
  <nav>
    <a href="#/">I CHEF</a>
  </nav>

  <section class = "container-button">
    <a href="#/SignIn" class="button">Iniciar Sesión</a>
    <!--Pestaña de Inicia Sesión-->
    <a href="#/SignUp" class="button">Regístrate</a>
    <!--Pestaña de Regístrate-->
  </section>`;

  templateHome.classList.add('position');
  templateHome.innerHTML = viewHome;
  return templateHome;
};
