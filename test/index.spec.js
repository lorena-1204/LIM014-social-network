// import {
//   register,
// //   registerGoogle,
// //   signInEmail,
// //   currentUser,
// //   sendEmailVerification,
// //   signOut,
// } from '../src/lib/firebase-controller';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();

mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

// register, registerGoogle, signInEmail, currentUser, sendEmailVerification, signOut,

// describe('register', () => {
//   it('I should log in', (done) => {
//     register('hola@gmail.com', '123456').then((user) => {
//       expect(user.email).toBe('hola@gmail.com');
//       //   expect(userLog.isAnonymous).toBe(false);
//       done();
//     });
//   });
// });
