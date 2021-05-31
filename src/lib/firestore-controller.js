// eslint-disable-next-line import/no-cycle
import { db } from '../main.js';
// Elimina un post
export const deletePost = (data) => db.collection('posts').doc(data).delete();

export const editPost = (id, text) => db.collection('posts').doc(id).update({
  post: text,
  timePost: new Date(),
});

// like
export const likePost = (id, likes) => db.collection('posts').doc(id).update({ likes });

// Agrega un post
export const addPost = (textPost, id, mail, userImage) => db.collection('posts')
  .add({
    post: textPost,
    idUser: id,
    userImage: userImage,
    email: mail,
    timePost: new Date().toLocaleString('GMT-0500'),
    likes: [],
  });

export const editDescriptions = (id, text) => db.collection('users').doc(id).update({
  Description: text,
  timePost: new Date(),
});

// Agrega una Descripción
// export const addDescription = (textPost, id, nickName) => db.collection('Descriptions')
//   .add({
//     description: textPost,
//     idUser: id,
//     Usuario: nickName,
//     timePost: new Date().toLocaleDateString(),
//   });

// Crea propiedades de un usuario
export const createUser = (name, nickName, email, id, photo) => {
  const addUserCollection = db.collection('users').doc(id).set({
    displayName: name,
    Usuario: nickName,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};

export const getUser = (id, callback) => db.collection('users').doc(id).onSnapshot((doc) => {
  callback(doc);
});

// Ordena una colección por fecha más reciente a más antigua
export const orderPostbyTimeDesc = (callback, userId) => db.collection('posts').orderBy('timePost', 'desc').onSnapshot((querySnapshot) => {
  const output = [];
  querySnapshot.forEach((doc) => {
    output.push({ id: doc.id, ...doc.data() });
  });
  callback(output, userId);
});

// Comentar
export const commnetPostCollection = (id, uidUser, comment, mail) => db.collection('commentPost').add({
  DocIdPostOrigin: id,
  CommentPost: comment,
  idUser: uidUser,
  email: mail,
  timePost: new Date(),
});
export const showPostUserid = (callback, userID) => db.collection('posts').where('idUser', '==', userID).orderBy('timePost', 'desc').onSnapshot((querySnapshot) => {
  const output = [];
  querySnapshot.forEach((doc) => {
    output.push({ id: doc.id, ...doc.data() });
  });
  callback(output, userID);
});
