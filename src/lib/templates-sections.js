export const templatePost = (doc) => {
  const section = document.createElement('section');
  section.classList.add('templatePost');
  const template = `
    <h5 id ="ruta">${doc.email}</h5>
    <p id ="text-post">${doc.post}</p>
    <button class="like__btn">
      <span id="icon"><i class="far fa-thumbs-up"></i></span>
      <span id="count">0</span> Like
    </button> `;
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
