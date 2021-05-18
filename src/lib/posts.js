// eslint-disable-next-line import/no-cycle
import { deletePost, orderPostbyTimeDesc } from './firestore-controller.js';
import { templatePost } from './templates-sections.js';

export const idDocumentPost = (e) => {
  const idPost = e.target.dataset.id;
  deletePost(idPost);
};
export const setupPosts = (data, templateInitialPage) => {
  const postList = templateInitialPage.querySelector('.posts');
  postList.innerHTML = '';
  if (data.length) {
    data.forEach((doc) => {
      console.log(templatePost(doc));
      const section = templatePost(doc);
      const btnDeletePost = section.querySelector('.btn-delete');
      btnDeletePost.addEventListener('click', idDocumentPost);
      postList.appendChild(section);
    });
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};
export const showPost = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      orderPostbyTimeDesc()
        .onSnapshot((querySnapshot) => {
          const output = [];
          querySnapshot.forEach((doc) => {
            output.push({ id: doc.id, ...doc.data() });
          });
          callback(output);
        });
    } else {
      callback([]);
    }
  });
};
