export default () => {
  const templateInitialPage = document.createElement('section');
  const viewInitialPage = `
  <nav>
   <li>Inicio</li>
   <li>Mi Perfil</li>
   <li>#Comidas</li>
   <li>#Bebidas</li>
   <li>Cerrar Sesión</li>
  </nav> 
  <article>
  <h2>Publica tus recetas</h2>
  <button> eliminar </button>
  <button> editar </button>
  <textarea name="publica" placeholder="Publica tu receta">
  </textarea>
  <button>Compartir</button>
  </article>
   `;

  templateInitialPage.classList.add('position');
  templateInitialPage.innerHTML = viewInitialPage;

  return templateInitialPage;
};
