import _ from 'lodash';
// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

window.onload = () => {
  const h1 = document.createElement('h1');
  h1.innerHTML = _.join(['Hello', 'webpack'], ' ');
  document.appendChild(h1);
};
