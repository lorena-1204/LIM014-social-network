// Funciones Firestore
// Agrega un post
export const addPost = (textPost, id, name, mail, mode, like) => firebase.firestore().collection('posts')
  .add({
    post: textPost,
    idUser: id,
    user: name,
    email: mail,
    privacity: mode,
    likes: like,
    timePost: new Date(),
  });
export const currentUser = () => firebase.auth().currentUser;
export const createUser = (nombre, email, id, photo) => {
  const addUserCollection = firebase.firestore().collection('users').doc(id).set({
    Usuario: nombre,
    Correo: email,
    Id: id,
    Photo: photo,
  });
  return addUserCollection;
};
