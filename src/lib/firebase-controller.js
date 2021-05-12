// eslint-disable-next-line import/no-cycle
import { auth } from '../main.js';
// Funciones Firebase

// registro con email
// eslint-disable-next-line max-len
export const register = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// registro con google
// eslint-disable-next-line max-len
export const registerGoogle = (provider) => auth.signInWithPopup(provider);

// ingreso con email
// eslint-disable-next-line max-len
export const signInEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const sendEmailVerification = () => auth.currentUser.sendEmailVerification();
