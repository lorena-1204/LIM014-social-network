// eslint-disable-next-line import/no-cycle
import { currentUser } from './firebase-controller.js';

export const templatePost = (doc) => {
  const section = document.createElement('section');
  // section.style = 'bacgit skyblue';
  section.classList.add('container-post');
  const userId = currentUser().uid;
  // console.log(userId);
  const template = `
    <div class="post-row"> 
    <img class="demo-avataar user-pic-post" src="${doc.userImage !== null ? doc.userImage : '../img/avataar.png'}"/>
      <h5 id ="ruta">${doc.email}</h5>
    </div>
    
    <p class ="text-post">${doc.post}</p>
    <section class="like-counter">
    <a class="imagenLike"><i class="far fa-heart ${(doc.likes.indexOf(userId) === -1) ? 'unliked' : 'liked'}" id="btn-like"></i></a>
    <p class="numberLikes">${doc.likes.length}</p>
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
export const createButtonDelete = (textContentButton, classNameButton, docId) => {
  const btnPost = document.createElement('img');
  // btnPost.textContent = textContentButton;
  btnPost.setAttribute('src', '../img/trash.png');
  btnPost.classList = classNameButton;
  btnPost.dataset.id = docId;
  return btnPost;
};
export const createButtonEdit = (textContentButton, classNameButton, docId) => {
  const btnPost = document.createElement('img');
  // btnPost.textContent = textContentButton;
  btnPost.setAttribute('src', '../img/edit.png');
  btnPost.classList = classNameButton;
  btnPost.dataset.id = docId;
  return btnPost;
};
