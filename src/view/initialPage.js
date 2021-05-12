// eslint-disable-next-line import/no-cycle
import { dataPost, showPost } from '../lib/view-controller.js';

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
  <textarea id="textarea" name="publica" placeholder="Publica tu receta">
  </textarea>
  <button id="btn">Compartir</button>
  </article>
  <div class="posts"></div>
   `;

  templateInitialPage.classList.add('position');
  templateInitialPage.innerHTML = viewInitialPage;
  const publicar = templateInitialPage.querySelector('#btn');
  publicar.addEventListener('click', () => {
    dataPost();
    showPost();
    const textPost = document.querySelector('#textarea').value;
    console.log(textPost);
  });

  return templateInitialPage;
};
