// eslint-disable-next-line import/no-cycle
import { deletePost, orderPostbyTimeDesc, editPost } from './firestore-controller.js';
import { templatePost, createAttributesButton } from './templates-sections.js';

export const idDocumentPost = (e) => {
  const idPost = e.target.dataset.id;
  deletePost(idPost);
};
export const setupPosts = (data, user, templateInitialPage) => {
  const postList = templateInitialPage.querySelector('.posts');
  postList.innerHTML = '';
  if (data.length) {
    data.forEach((doc) => {
      const section = templatePost(doc);
      postList.appendChild(section);
      const buttonCancelEditPost = createAttributesButton('cancelar', 'btn-cancel-edit-post');
      const textPost = section.querySelector('#text-post');
      if (user === doc.idUser) {
        // botón eliminar post
        const btnDeletePost = createAttributesButton('eliminar', 'btn-delete', doc.id);
        section.appendChild(btnDeletePost);
        btnDeletePost.addEventListener('click', idDocumentPost);
        // botón editar post
        const buttonEditPost = createAttributesButton('editar', 'btn-edit', doc.id);
        section.appendChild(buttonEditPost);
        // creando input para editar post
        const inputEditPost = document.createElement('input');
        inputEditPost.value = textPost.textContent;
        // creando botón para guardar lo editado
        const buttonSaveEditPost = createAttributesButton('cambiar', 'btn-save-edit-Post', doc.id);
        // reemplazando botones de seguridad
        buttonEditPost.addEventListener('click', () => {
          section.replaceChild(buttonCancelEditPost, btnDeletePost);
          section.replaceChild(buttonSaveEditPost, buttonEditPost);
          section.replaceChild(inputEditPost, textPost);
        });
        buttonCancelEditPost.addEventListener('click', () => {
          section.replaceChild(btnDeletePost, buttonCancelEditPost);
          section.replaceChild(buttonEditPost, buttonSaveEditPost);
          section.replaceChild(textPost, inputEditPost);
        });
        buttonSaveEditPost.addEventListener('click', () => {
          editPost(doc.id, inputEditPost.value);
        });
      }
    });
    // añadir botón like
    const likeBtn = document.querySelector('.like__btn');
    const likeIcon = document.querySelector('#icon');
    const count = document.querySelector('#count');
    let clicked = false;
    likeBtn.addEventListener('click', () => {
      if (!clicked) {
        clicked = true;
        likeIcon.innerHTML = '<i class="fas fa-thumbs-up"></i>';
        count.textContent++;
      } else {
        clicked = false;
        likeIcon.innerHTML = '<i class="far fa-thumbs-up"></i>';
        count.textContent--;
      }
    });
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};
export const showPost = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      orderPostbyTimeDesc()
        .onSnapshot((querySnapshot) => {
          const output = [];
          querySnapshot.forEach((doc) => {
            output.push({ id: doc.id, ...doc.data() });
          });
          callback(output, user.uid);
        });
    } else {
      callback([]);
    }
  });
};
