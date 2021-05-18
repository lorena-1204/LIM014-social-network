export const templatePost = (doc) => {
  const section = document.createElement('section');
  section.style = 'background-color:skyblue';
  const template = `
    <h5 id ="ruta">${doc.email}</h5>
    <p>${doc.post}</p>
    <button id=${doc.id} class="btn-delete" data-id=${doc.id}> eliminar </button>
    <button id=${doc.id} class="btn-edit" data-id=${doc.id}> editar </button>
    `;
  section.innerHTML = template;
  return section;
};
