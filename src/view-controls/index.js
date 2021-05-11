// Para el cambio de vista (pestañas)
// eslint-disable-next-line import/no-cycle
import { components } from '../view/components.js';

// console.log('hola');
// console.log('Thalia');

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.home()); }
    case '#/SignIn': { return container.appendChild(components.signin()); }
    case '#/SignUp': { return container.appendChild(components.signup()); }
    case '#/Initialpage': { return container.appendChild(components.initalPage()); }

    default:
    { return container.appendChild(components.home()); }
  }
};

const changeHash = (nameHash) => {
  window.location.hash = nameHash;
};

export { changeView, changeHash };
