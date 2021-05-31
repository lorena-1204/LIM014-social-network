// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
// importamos la funcion que vamos a testear
import {
  register, signInEmail, registerGoogle, sendEmailVerification, signOut, currentUser,
} from '../src/lib/firebase-controller.js';
// Importamos la función de registro
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockstorage = new firebasemock.MockStorage();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockstorage,
  () => mockfirestore,
);
// <-----Functions from {lib/firebase-controller.js}----->
// Register with email&password
describe('Create User With Email And Password', () => {
  it('Should it Create new user', () => register('ichef@mailito.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('ichef@mailito.com');
      expect(user.password).toBe('12345678');
    }));
});
// Sign in with email&password
describe('Sign In With Email And Password', () => {
  it('Should it sign in with email&password', () => signInEmail('ichef@mailito.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('ichef@mailito.com');
    }));
});
// Sign in/Register with Google
describe('Sign In With Google', () => {
  it('Should it sign in with popup', () => registerGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});
// Send email to verify created account
describe('Send Email Verification', () => {
  it('Should it Send Email Verification', () => {
    const mockSendEmail = jest.fn();
    firebase.auth().currentUser.sendEmailVerification = mockSendEmail;
    sendEmailVerification();
    expect(mockSendEmail).toHaveBeenCalled();
    expect(mockSendEmail.mock.calls).toHaveLength(1);
  });
});
// Log out - offline
describe('Log out', () => {
  it('Should it log out user offline', () => signOut()
    .then((user) => {
      expect(user).toBe(undefined);
    }));
});
// Current User - online
describe('Verify current user ', () => {
  it('Shoul it user online', () => {
    const mockUser = {
      currentUser: { uid: 'online' },
    };
    firebase.auth().currentUser = mockUser.currentUser;
    expect(currentUser().uid).toEqual('online');
  });
});
