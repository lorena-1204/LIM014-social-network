// eslint-disable-next-line import/no-cycle
import { currentUser } from './firebase-controller.js';

export const templatePost = (doc) => {
  const section = document.createElement('section');

  // section.style = 'background-color:skyblue';
  section.classList.add('container-post');
  const userId = currentUser().uid;
  // console.log(userId);
  const template = `
    <h5 id ="ruta">${doc.email}</h5>
    <p id ="text-post">${doc.post}</p>
    
    <section class="like-counter">
    <a><i class="far fa-heart ${(doc.likes.indexOf(userId) === -1) ? 'unliked' : 'liked'}" id="btn-like"></i></a>
    <p>${doc.likes.length}</p>
    <p class="counter-text">likes</p>
   `;
  section.innerHTML = template;
  return section;
};

export const templateModal = () => {
  const createTemplate = document.createElement('div');
  createTemplate.classList.add('modal-container');
  createTemplate.id = 'modal-container';
  const template = `
  <div class="modal">
  <h1>¿Estas seguro de eliminar esta publicación?</h1></br>
  <button class="btn-confirmYes">Si</button>
  <button class="btn-confirmNo">No</button>
  </div>`;
  createTemplate.innerHTML = template;
  return createTemplate;
};

export const createAttributesButton = (textContentButton, classNameButton, docId) => {
  const btnPost = document.createElement('button');
  btnPost.textContent = textContentButton;
  btnPost.classList = classNameButton;
  btnPost.dataset.id = docId;
  return btnPost;
};
