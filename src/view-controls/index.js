// Para el cambio de vista (pestañas)
// eslint-disable-next-line import/no-cycle
import { components } from '../view/components.js';
import {
  HOME, INITIAL_PAGE, SIGN_UP, SIGN_IN, PERFIL_PAGE,
} from '../lib/constants.js';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../lib/firestore-controller.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case HOME: { return container.appendChild(components.home()); }
    case SIGN_IN: { return container.appendChild(components.signin()); }
    case SIGN_UP: { return container.appendChild(components.signup()); }
    case INITIAL_PAGE: {
      return container.appendChild(components.initalPage());
    }
    case PERFIL_PAGE: {
      container.appendChild(components.perfilPage());

      const userID = sessionStorage.getItem('id');
      getUser(userID, (userData) => {
        if (userData.exists) {
          const user = userData.data();
          const displayName = user.Usuario;
          const name = user.NombreCompleto;
          const userNameComplete = document.getElementById('name');
          const userName = document.getElementById('user-name');
          userNameComplete.textContent = name;
          userName.textContent = displayName;
          const userImage = document.getElementById('user-pic');
          const userPhoto = user.Photo;
          if (userPhoto != null) {
            userImage.src = userPhoto;
          } else {
            userImage.src = '../img/avataar.png';
          }
        } else {
          document.write('No encontrado');
        }
      });
      break;
    }
    default:
    { return container.appendChild(components.home()); }
  }
  return route;
};

const changeHash = (nameHash, setData) => {
  window.location.hash = nameHash;
  if (setData) {
    setData();
  }
};

export { changeView, changeHash };
