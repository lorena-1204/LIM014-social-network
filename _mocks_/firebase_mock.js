const firestore = {
  __collection__: {
    posts: {
      __doc__: {
        post_1: {
          post: 'text Post',
          idUser: '001',
          email: 'ichef@mailito.com',
          timePost: new Date().toLocaleString('GMT-0500'),
          likes: [],
        },
      },
    },
  },
};
const firebase = {
  firestore,
};
export default jest.fn(() => firebase);
