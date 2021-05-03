export const registrar = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const registroGoogle = (provider) => {
  firebase.auth().signInWithPopup(provider);
};
