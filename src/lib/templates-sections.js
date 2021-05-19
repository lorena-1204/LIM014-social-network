export const templatePost = (doc) => {
  const template = `
    <section style="background-color:skyblue;">
    <h5 id ="ruta">${doc.email}</h5>
    <p>${doc.post}</p>
    <button id=${doc.id} class="btn-delete" data-id=${doc.id}> eliminar </button>
    <button id=${doc.id} class="btn-edit" data-id=${doc.id}> editar </button>

   
     <button id=${doc.id} class="btn-like" data-id=${doc.id}> like </button>
    <article>
    </article>

    </section>
    `;
  return template;
};
