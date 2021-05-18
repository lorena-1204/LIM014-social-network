export const templatePost = (doc) => {
  const section = document.createElement('section');
  section.style = 'background-color:skyblue';
  const template = `
    <h5 id ="ruta">${doc.email}</h5>
    <p id ="text-post">${doc.post}</p>
    <button class="like__btn">
      <span id="icon"><i class="far fa-thumbs-up"></i></span>
      <span id="count">0</span> Like
    </button>
    `;
  section.innerHTML = template;
  return section;
};
export const createAttributesButton = (textContentButton, classNameButton, docId) => {
  const btnPost = document.createElement('button');
  btnPost.textContent = textContentButton;
  btnPost.classList = classNameButton;
  btnPost.dataset.id = docId;
  return btnPost;
};
