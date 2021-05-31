const firestore = () => ({
  collection: () => ({
    add: () => new Promise((resolve) => {
      resolve('la nota fué agregada');
    }),
  }),
});

const firebase = {
  firestore,
};

export default jest.fn(() => firebase);
// fn permite crear funciones mocks
