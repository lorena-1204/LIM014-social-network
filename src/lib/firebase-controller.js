// Funciones Firebase

// registro con email
// eslint-disable-next-line max-len
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// registro con google
// eslint-disable-next-line max-len
export const registerGoogle = (provider) => firebase.auth().signInWithPopup(provider);

// ingreso con email
// eslint-disable-next-line max-len
export const signInEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);
