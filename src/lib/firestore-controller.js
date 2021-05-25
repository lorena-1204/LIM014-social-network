// eslint-disable-next-line import/no-cycle
import { db } from '../main.js';
// Elimina un post
export const deletePost = (data) => db.collection('posts').doc(data).delete();

export const editPost = (id, text) => db.collection('posts').doc(id).update({
  post: text,
  timePost: new Date(),
});

// Agrega un post
export const addPost = (textPost, id, mail) => db.collection('posts')
  .add({
    post: textPost,
    idUser: id,
    email: mail,
    timePost: new Date().toLocaleDateString(),
  });
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

export const getUser = (id) => db.collection('users').doc(id);

// Ordena una colección por fecha más reciente a más antigua
export const orderPostbyTimeDesc = () => db.collection('posts').orderBy('timePost', 'desc');
