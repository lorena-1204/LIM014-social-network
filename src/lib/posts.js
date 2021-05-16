// eslint-disable-next-line import/no-cycle
import { deletePost, orderPostbyTimeDesc } from './firestore-controller.js';
import { templatePost } from './templates-sections.js';

export const idDocumentPost = (e) => {
  const idPost = e.target.dataset.id;
  deletePost(idPost);
};
export const setupPosts = (data) => {
  const postList = document.querySelector('.posts');
  if (data.length) {
    let container = '';
    data.forEach((doc) => {
      container += templatePost(doc);
    });
    postList.innerHTML = container;
    const btnDeletePost = document.querySelectorAll('.btn-delete');
    btnDeletePost.forEach((element) => {
      element.addEventListener('click', idDocumentPost);
    });
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};
export const showPost = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      orderPostbyTimeDesc()
        .onSnapshot((querySnapshot) => {
          const output = [];
          querySnapshot.forEach((doc) => {
            output.push({ id: doc.id, ...doc.data() });
          });
          setupPosts(output);
        });
    } else {
      setupPosts([]);
    }
  });
};
