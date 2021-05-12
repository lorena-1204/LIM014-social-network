// eslint-disable-next-line import/no-cycle

export default () => {
  const templateInitialPage = document.createElement('section');
  const viewInitialPage = `
  <nav>
   <li id ="inicio">Inicio</li>
   <li>Mi Perfil</li>
   <li>#Comidas</li>
   <li>#Bebidas</li>
   <li>Cerrar Sesión</li>
  </nav> 
  <article>
  <h2>Publica tus recetas</h2>
  <button class="button"> eliminar </button>
  <button class="button"> editar </button>
  <textarea name="publica" placeholder="Publica tu receta">
  </textarea>
  <button class="button">Compartir</button>
  </article>
   `;

  templateInitialPage.classList.add('position');
  templateInitialPage.innerHTML = viewInitialPage;

  return templateInitialPage;
};
