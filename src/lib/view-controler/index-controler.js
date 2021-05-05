import { components } from '../view/components.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/': { return container.appendChild(components.home()); }
    case '#/register': { return container.appendChild(components.register()); }
    case '#/login': { return container.appendChild(components.login()); }
    default:
      break;
  }
  return changeView;
};

export { changeView };
