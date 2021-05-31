// Funciones Firebase
// registro con email
// eslint-disable-next-line max-len
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// registro con google
// eslint-disable-next-line max-len
export const registerGoogle = (provider) => firebase.auth().signInWithPopup(provider);

export const currentUser = () => firebase.auth().currentUser;

export const sendEmailVerification = () => firebase.auth().currentUser.sendEmailVerification();

// ingreso con email
// eslint-disable-next-line max-len
export const signInEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();
