// eslint-disable-next-line import/no-cycle
import { deletePost, orderPostbyTimeDesc, editPost } from './firestore-controller.js';
import { templatePost, concatId, createId } from './templates-sections.js';
// eslint-disable-next-line import/no-cycle
import { auth } from '../main.js';

export const idDocumentPost = (e) => {
  const idPost = e.target.dataset.id;
  deletePost(idPost);
};

export const setupPosts = (data, user) => {
  const postList = document.querySelector('.posts');
  if (data.length) {
    data.forEach((doc) => {
      const section = templatePost(doc);
      const btnDeletePost = section.querySelector('.btn-delete');
      btnDeletePost.addEventListener('click', idDocumentPost);
      postList.appendChild(section);
    });
    // const btnDeletePost = document.querySelectorAll('.btn-delete');
    // btnDeletePost.forEach((element) => {
    //   element.addEventListener('click', (e) => {
    //     const textPostOrigin = e.target.dataset.id;
    //     const postOriginParent = document.querySelector(concatId(textPostOrigin, '-post'));
    //     const btnEditPost = document.querySelector(concatId(textPostOrigin, '-btn-edit'));
    //     postOriginParent.removeChild(btnEditPost);
    //     postOriginParent.removeChild(element);
    //     const templateModalDeleteConfirm = document.createElement('div');
    //     templateModalDeleteConfirm.className = 'template-modal-delete';
    //     templateModalDeleteConfirm.style.background = '#4c80c9';
    //     const modalTextTitle = document.createElement('h1');
    //     modalTextTitle.textContent = '¿Seguro de eliminar la publicación?';
    //     const modalTextInformation = document.createElement('p');
    //     modalTextInformation.textContent = 'Los elementos se eliminarán automáticamente y de forma permanente.';
    //     const modalButtonCancel = document.createElement('button');
    //     modalButtonCancel.textContent = 'Cancelar';
    //     const modalButtonDelete = document.createElement('button');
    //     modalButtonDelete.dataset.id = textPostOrigin;
    //     modalButtonDelete.textContent = 'Eliminar';
    //     templateModalDeleteConfirm.appendChild(modalTextTitle);
    //     templateModalDeleteConfirm.appendChild(modalTextInformation);
    //     templateModalDeleteConfirm.appendChild(modalButtonCancel);
    //     templateModalDeleteConfirm.appendChild(modalButtonDelete);
    //     postOriginParent.appendChild(templateModalDeleteConfirm);
    //     modalButtonCancel.addEventListener('click', () => {
    //       postOriginParent.removeChild(templateModalDeleteConfirm);
    //       postOriginParent.appendChild(element);
    //       postOriginParent.appendChild(btnEditPost);
    //     });
    //     modalButtonDelete.addEventListener('click', (e) => {
    //       idDocumentPost(e);
    //     });
    //   });
    // });
    // const btnEditPost = document.querySelectorAll('.btn-edit');
    // btnEditPost.forEach((element) => {
    //   element.addEventListener('click', (e) => {
    //     const textPostOrigin = e.target.dataset.id;
    //     // capturamos el id del texto con la función concatId
    //     // concatId se encuentra en 'templates-sections'
    //     const textPost = document.querySelector(concatId(textPostOrigin, '-text-post'));
    //     const removeBtnDelete = document.querySelector(concatId(textPostOrigin, '-btn-delete'));
    //     const postOriginParent = document.querySelector(concatId(textPostOrigin, '-post'));
    //     // creamos un input
    //     const inputEditPost = document.createElement('input');
    //     // capturamos el texto y lo igualamos con el value default de input
    //     inputEditPost.value = textPost.textContent; // textContent captura el texto del post
    //     // en cada click debe cambiar el texto a input
    //     postOriginParent.replaceChild(inputEditPost, textPost);
    //     // eliminar el botón 'eliminar' & 'editar'
    //     postOriginParent.removeChild(removeBtnDelete);
    //     postOriginParent.removeChild(element);
    //     // añadir botones 'guardar' cambios & 'cancelar' cambios
    //     const buttonCancel = document.createElement('button');
    //     buttonCancel.textContent = 'Cancelar';
    //     const buttonSave = document.createElement('button');
    //     buttonSave.textContent = 'Cambiar';
    //     // añadimos atributo data-id, para  luego capturar el ID del post original
    //     buttonSave.dataset.id = textPostOrigin;
    //     // añadimos el id para el botón 'Cambiar'. Este id es concatenado por una función
    //     buttonSave.id = createId(textPostOrigin, '-btn-save');
    //     // con appendChild estamos añadiendo en última posición a los botones (cancelar & cambiar)
    //     postOriginParent.appendChild(buttonCancel);
    //     postOriginParent.appendChild(buttonSave);
    //     // seleccionar boton edit con su unico id
    //     const buttonEditId = document.querySelector(concatId(textPostOrigin, '-btn-save'));
    //     // agregarle función
    //     buttonEditId.addEventListener('click', () => {
    //       // Obtener valor de texto del input
    //       editPost(textPostOrigin, inputEditPost.value);
    //     });
    //     buttonCancel.addEventListener('click', () => {
    //       postOriginParent.replaceChild(textPost, inputEditPost);
    //       postOriginParent.removeChild(buttonCancel);
    //       postOriginParent.removeChild(buttonSave);
    //       postOriginParent.appendChild(removeBtnDelete);
    //       postOriginParent.appendChild(element);
    //     });
    //   });
    // });
  } else {
    postList.innerHTML = '<h4 class="text-white">Sé el primero en postear</h4>';
  }
};
export const showPost = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      orderPostbyTimeDesc()
        .onSnapshot((querySnapshot) => {
          const output = [];
          querySnapshot.forEach((doc) => {
            output.push({ id: doc.id, ...doc.data() });
          });
          setupPosts(output, user.uid);
        });
    } else {
      setupPosts([]);
    }
  });
};
