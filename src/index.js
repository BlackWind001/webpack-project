import _ from 'lodash';
import printMe from './print';
// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

const h1 = document.createElement('h1');
h1.innerHTML = _.join(['Hello', 'webpack'], ' ');
document.body.appendChild(h1);
printMe('I am data');
