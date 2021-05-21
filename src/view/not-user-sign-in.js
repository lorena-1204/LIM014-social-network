export const notUserSignIn = () => {
  const section = document.createElement('section');
  section.classList.add('template-not-user');
  const template = `
  <p>Usuario no registrado<p>
 `;
  section.innerHTML = template;
  return section;
};
