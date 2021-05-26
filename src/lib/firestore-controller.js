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
export const addPost = (textPost, id, mail) => db.collection('posts')
  .add({
    post: textPost,
    idUser: id,
    email: mail,
    timePost: new Date().toLocaleString('GMT-0500'),
    likes: [],
  });

export const editDescriptions = (id, text) => db.collection('Descriptions').doc(id).update({
  post: text,
  timePost: new Date(),
});

// Agrega una Descripción
export const addDescription = (textPost, id, nickName) => db.collection('Descriptions')
  .add({
    description: textPost,
    idUser: id,
    Usuario: nickName,
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

// Comentar
export const commnetPostCollection = (id, uidUser, comment, mail) => db.collection('commentPost').add({
  DocIdPostOrigin: id,
  CommentPost: comment,
  idUser: uidUser,
  email: mail,
  timePost: new Date(),
});


// Profile
export const createProfileInfo = (id) => {
  db.collection('users').doc(id).set({
    aboutMe: 'Cuenta un poco sobre ti',
    location: 'Ciudad, País',
  });
};

export const getProfileInfo = (userId) => db.collection('users').doc(userId).get();

export const updateProfileInfo = (userId, description, place) => db.collection('users').doc(userId).update({
  aboutMe: description,
  location: place,
});

// export const auth = firebase.auth();
// export const db = firebase.firestore();
