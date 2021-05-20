// eslint-disable-next-line import/no-cycle
import { db } from '../main.js';
// Elimina un post
export const deletePost = (data) => db.collection('posts').doc(data).delete();

export const editPost = (id, text) => db.collection('posts').doc(id).update({
  post: text,
  timePost: new Date(),
});

// like
export const likePost = (id, like) => db.collection('posts').doc(id).update({ like });

// Agrega un post
export const addPost = (textPost, id, mail) => db.collection('posts')
  .add({
    post: textPost,
    idUser: id,
    email: mail,
    timePost: new Date().toLocaleString('GMT-0500'),
    like: [],

  });

// Crea propiedades de un usuario
export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = db.collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};
// Ordena una colección por fecha más reciente a más antigua
export const orderPostbyTimeDesc = () => db.collection('posts').orderBy('timePost', 'desc');
