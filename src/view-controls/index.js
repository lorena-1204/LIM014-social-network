// Para el cambio de vista (pestañas)

import { components } from '../view/components.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.home()); }
    case '#/Signin': { return container.appendChild(components.signin()); }
    case '#/SignUp': { return container.appendChild(components.signup()); }

    default:
      break;
  }
  console.log(route);
};

export { changeView };
