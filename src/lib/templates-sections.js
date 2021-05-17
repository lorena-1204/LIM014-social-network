export const templatePost = (doc) => {
  const template = `
    <section style="background-color:skyblue;" id=${doc.id}-post>
    <h5 id="ruta" data-id=${doc.id}>${doc.email}</h5>
    <p id=${doc.id}-text-post>${doc.post}</p>
    <button id=${doc.id}-btn-delete class="btn-delete" data-id=${doc.id}> eliminar </button>
    <button id=${doc.idUser}-btn-edit class="btn-edit" data-id=${doc.id}> editar </button>
    </section>
    `;
  return template;
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
