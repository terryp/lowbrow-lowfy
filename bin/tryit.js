var golden = require('golden');
var goldenDiv = require('../react/golden-div.jsx');

goldenDiv.makeDiv('g-div');
goldenDiv.makeDiv('g-div2');

goldenDiv.makeTimer('timer');

console.log(golden.PHI);
