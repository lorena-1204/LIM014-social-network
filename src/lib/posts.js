// eslint-disable-next-line import/no-cycle
import { deletePost } from './firestore-controller.js';

const setupPosts = (data) => {
  const postList = document.querySelector('.posts');
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const li = `
          <section style="background-color:skyblue;">
          <h5 id ="ruta">${doc.email}</h5><span>${doc.id}</span>
          <p>${doc.post}</p>
          <button id=${doc.id} class="btnDelete" data-id=${doc.id}> eliminar </button>
          <button id=${doc.id} class="btnEdit" data-id=${doc.id}> editar </button>
          </section>
      `;
      html += li;
    });
    postList.innerHTML = html;
    const h5 = document.querySelectorAll('.btnDelete');
    h5.forEach((element) => {
      element.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        deletePost(id).then(() => console.log('eliminadooooo'));
      });
    });
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};
export const showPost = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      /* firebase.firestore().collection('posts').orderBy('timePost', 'desc')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        }); */
      firebase.firestore().collection('posts').orderBy('timePost', 'desc')
        .onSnapshot((querySnapshot) => {
          const output = [];
          querySnapshot.forEach((doc) => {
            output.push({ id: doc.id, ...doc.data() });
          });
          setupPosts(output);
        });
    } else {
      console.log('signout');
      setupPosts([]);
    }
  });
};
