// Funciones Firestore
// Agrega un post
export const addPost = (textPost, id, mail) => firebase.firestore().collection('posts')
  .add({
    post: textPost,
    idUser: id,
    email: mail,
    timePost: new Date(),
  });

export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};
