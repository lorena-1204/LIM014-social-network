export default () => {
  const viewHome = `
    <h1>I CHEF</h1>`;

  const divElemen = document.createElement('div');
  divElemen.innerHTML = viewHome;

  return divElemen;
};
