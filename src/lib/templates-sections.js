export const templatePost = (doc) => {
  const section = document.createElement('section');
  const template = `
    <h5 id="ruta" data-id=${doc.id}>${doc.email}</h5>
    <p id=${doc.id}-text-post>${doc.post}</p>
    <button id=${doc.id}-btn-delete class="btn-delete" data-id=${doc.id}> eliminar </button>
    <button id=${doc.id}-btn-edit class="btn-edit" data-id=${doc.id}> editar </button>
    `;
  section.classList.add('style-post');
  section.style = 'background-color:skyblue';
  section.id = `${doc.id}-post`;
  section.innerHTML = template;
  return section;
};
export const forEachBtnDelete = (data, callback) => {
  data.forEach((e) => {
    e.addEventListener('click', callback);
  });
};
export const concatId = (textPostOrigin, suffixTextPost) => {
  const idText = '#';
  const idTextOriginString = idText + textPostOrigin + suffixTextPost;
  return idTextOriginString;
};
export const createId = (textPostOrigin, suffixTextPost) => {
  const idTextOriginString = textPostOrigin + suffixTextPost;
  return idTextOriginString;
};
