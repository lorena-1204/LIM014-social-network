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
