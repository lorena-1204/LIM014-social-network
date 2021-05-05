// SPA
import { changeView } from './lib/view-controler/index-controler.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB0jVcbmWHDtzmiNPj6mm1IK2MOP_z6aK0',
  authDomain: 'i-chef-23b69.firebaseapp.com',
  projectId: 'i-chef-23b69',
  storageBucket: 'i-chef-23b69.appspot.com',
  messagingSenderId: '403365867393',
  appId: '1:403365867393:web:df5d3868c906bffe6d0280',
};
// se llama en java script - se trae al objeto de configuracion para llamar a firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
