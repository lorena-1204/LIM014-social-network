export const templatePost = (doc) => {
  const template = `
    <section style="background-color:skyblue;">
    <h5 id ="ruta">${doc.email}</h5>
    <p>${doc.post}</p>
    <button id=${doc.id} class="btn-delete" data-id=${doc.id}> eliminar </button>
    <button id=${doc.id} class="btn-edit" data-id=${doc.id}> editar </button>
    </section>
    `;
  return template;
};
export const forEachBtnDelete = (data, callback) => {
  data.forEach((e) => {
    e.addEventListener('click', callback);
    console.log('delete');
  });
};
