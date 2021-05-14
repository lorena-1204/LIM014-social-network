// eslint-disable-next-line import/no-cycle
import { db } from '../main.js';
// Elimina un post
export const deletePost = (data) => db.collection('posts').doc(data).delete();

export const editPost = (id, text) => db.collection('users').doc(id).update({
  post: text,
  timePost: new Date(),
});

// Agrega un post
export const addPost = (textPost, id, mail) => firebase.firestore().collection('posts')
  .add({
    post: textPost,
    idUser: id,
    email: mail,
    timePost: new Date(),
  });
// Crea propiedades de un usuario
export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};
// Ordena una colección por fecha más reciente a más antigua
export const orderPostbyTimeDesc = () => firebase.firestore().collection('posts').orderBy('timePost', 'desc');
