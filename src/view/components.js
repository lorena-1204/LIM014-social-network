import Home from './home.js';
// eslint-disable-next-line import/no-cycle
import SignIn from './signin.js';
// eslint-disable-next-line import/no-cycle
import SignUp from './signUp.js';
import InitialPage from './initialPage.js';

const components = {
  home: Home,
  signin: SignIn,
  signup: SignUp,
  initalPage: InitialPage,
};

export { components };
