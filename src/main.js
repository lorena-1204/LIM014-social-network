// Este es el punto de entrada de tu aplicacion

// eslint-disable-next-line import/no-cycle
import { changeView } from './view-controls/index.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash)); // Hashchange: es un evento que te ayuda a cambiar la url. Location: es una propiedad del objeto window que nos dice si la página ha cambiado y en que ruta esta. Hash: es una propiedad para que no nos traiga toda la ruta, sino después del #/
};
window.addEventListener('load', init); // Cada vez que hay una recarga de página valida esa función

// Configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB0jVcbmWHDtzmiNPj6mm1IK2MOP_z6aK0',
  authDomain: 'i-chef-23b69.firebaseapp.com',
  projectId: 'i-chef-23b69',
  storageBucket: 'i-chef-23b69.appspot.com',
  messagingSenderId: '403365867393',
  appId: '1:403365867393:web:df5d3868c906bffe6d0280',
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
