// Para el cambio de vista (pestañas)
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

    default:
    { return container.appendChild(components.home()); }
  }
};

export { changeView };
