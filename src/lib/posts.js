import { addPost } from './firestore-controller.js';

const deletePost = () => {
  const dataBasePost = addPost();
  firebase.firestore().collection('post').doc(dataBasePost.id).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
const setupPosts = (data) => {
  const postList = document.querySelector('.posts');
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const li = `
          <section style="background-color:skyblue;">
          <h5>${doc.email}</h5>
          <p>${doc.post}</p>
          <button id="btn-delete"> eliminar </button>
          </section>
      `;
      html += li;
    });
    postList.innerHTML = html;
    const btnDeletePost = document.querySelector('#btn-delete');
    btnDeletePost.addEventListener('click', () => {
      deletePost();
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
        .onSnapshot(((querySnapshot) => {
          const output = [];
          querySnapshot.forEach((doc) => {
            output.push({ id: doc.id, ...doc.data() });
          });
          setupPosts(output);
        }));
    } else {
      console.log('signout');
      setupPosts([]);
    }
  });
};
