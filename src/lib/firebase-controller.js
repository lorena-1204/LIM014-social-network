// Funciones Firebase
// eslint-disable-next-line max-len
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
// eslint-disable-next-line max-len
export const registerGoogle = (provider) => firebase.auth().signInWithPopup(provider);
