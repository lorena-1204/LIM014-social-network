const initFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyB0jVcbmWHDtzmiNPj6mm1IK2MOP_z6aK0',
    authDomain: 'i-chef-23b69.firebaseapp.com',
    projectId: 'i-chef-23b69',
    storageBucket: 'i-chef-23b69.appspot.com',
    messagingSenderId: '403365867393',
    appId: '1:403365867393:web:df5d3868c906bffe6d0280',
  };
  firebase.initializeApp(firebaseConfig);
};
export { initFirebase };
