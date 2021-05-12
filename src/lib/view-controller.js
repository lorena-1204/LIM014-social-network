// Llamamos las funciones del FireBase con .then && Catch
// eslint-disable-next-line import/no-cycle
import { register, registerGoogle, signInEmail } from './firebase-controller.js';
import { currentUser, createUser, addPost } from './firestore-controller.js';

// eslint-disable-next-line import/no-cycle
import { changeHash } from '../view-controls/index.js';

export const registerNewUser = () => {
  const user = currentUser();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  register(email, password)
    .then(() => {
      createUser(user.displayName, user.email, user.uid, user.photoURL);
      changeHash('/Initialpage');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
export const registerWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  registerGoogle(provider)
    .then(() => {
      changeHash('/Initialpage');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
// Iniciar Sesión
export const signInWithEmail = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signInEmail(email, password)
    .then(() => {
      changeHash('/Initialpage');
    })
    .catch(() => {
      document.getElementById('errorMail').style.display = 'block';
    });
};
export const dataPost = () => {
  const user = currentUser();
  const textPost = document.querySelector('#textarea').value;
  addPost(textPost, user.uid, user.email);
};

const setupPosts = (data) => {
  const postList = document.querySelector('.posts');
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
        <section style="background-color:skyblue;" >
        <h5>${post.email}</h5>
        <p>${post.post}</p>
        </section>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};
export const showPost = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('signin');
      firebase.firestore().collection('posts')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        });
    } else {
      console.log('signout');
      setupPosts([]);
    }
  });
};
