// Este es el punto de entrada de tu aplicacion
import { initFirebase } from './firebase-config.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './view-controls/index.js';

const init = () => {
  initFirebase();
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash)); // Hashchange: es un evento que te ayuda a cambiar la url. Location: es una propiedad del objeto window que nos dice si la página ha cambiado y en que ruta esta. Hash: es una propiedad para que no nos traiga toda la ruta, sino después del #/
};
window.addEventListener('load', init); // Cada vez que hay una recarga de página valida esa función
