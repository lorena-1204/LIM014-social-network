// Agrega un post
export const addPost = (textPost, id, mail, userImage) => firebase.firestore().collection('posts')
  .add({
    post: textPost,
    idUser: id,
    userImage,
    email: mail,
    timePost: new Date().toLocaleString('GMT-0500'),
    likes: [],
  });
export const editPost = (id, text) => firebase.firestore().collection('posts').doc(id).update({
  post: text,
  timePost: new Date(),
});
// Elimina un post
export const deletePost = (data) => firebase.firestore().collection('posts').doc(data).delete();

// like
export const likePost = (id, likes) => firebase.firestore().collection('posts').doc(id).update({ likes });

export const editDescriptions = (id, text) => firebase.firestore().collection('users').doc(id).update({
  Description: text,
  timePost: new Date(),
});
// Crea propiedades de un usuario
export const createUser = (name, nickName, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    displayName: name,
    Usuario: nickName,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};

export const getUser = (id, callback) => firebase.firestore().collection('users').doc(id).onSnapshot((doc) => {
  callback(doc);
});

// Ordena una colección por fecha más reciente a más antigua
export const orderPostbyTimeDesc = (callback, userId) => firebase.firestore().collection('posts').orderBy('timePost', 'desc').onSnapshot((querySnapshot) => {
  const output = [];
  querySnapshot.forEach((doc) => {
    output.push({ id: doc.id, ...doc.data() });
  });
  callback(output, userId);
});

export const showPostUserid = (callback, userID) => firebase.firestore().collection('posts').where('idUser', '==', userID).orderBy('timePost', 'desc')
  .onSnapshot((querySnapshot) => {
    const output = [];
    querySnapshot.forEach((doc) => {
      output.push({ id: doc.id, ...doc.data() });
    });
    callback(output, userID);
  });
