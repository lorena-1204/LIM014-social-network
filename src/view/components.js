// eslint-disable-next-line import/no-cycle
import Home from './home.js';
// eslint-disable-next-line import/no-cycle
import SignIn from './signin.js';
// eslint-disable-next-line import/no-cycle
import SignUp from './signUp.js';
// eslint-disable-next-line import/no-cycle
import InitialPage from './initialPage.js';
// eslint-disable-next-line import/no-cycle
import PerfilPage from './perfilPage.js';

const components = {
  home: Home,
  signin: SignIn,
  signup: SignUp,
  initalPage: InitialPage,
  perfilPage: PerfilPage,
};

export { components };
