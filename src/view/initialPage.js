import { addPost } from '../lib/firestore-controller.js';
// eslint-disable-next-line import/no-cycle
import { fun } from '../lib/view-controller.js';

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
  <button> eliminar </button>
  <button> editar </button>
  <textarea name="publica" placeholder="Publica tu receta">
  </textarea>
  <button>Compartir</button>
  </article>
   `;

  templateInitialPage.classList.add('position');
  templateInitialPage.innerHTML = viewInitialPage;

  const inicio = templateInitialPage.querySelector('#inicio');
  inicio.addEventListener('click', () => {
    fun();
  });
  return templateInitialPage;
};
