const R = require('ramda');
const latinSquare = require('latin-square');
const shuffle = require('shuffle-array');

let blocking_vars = ['Device 1', 'Device 2'];

let treatments  = ['Treatment A', 'Treatment B'];
let treatSampler = latinSquare(treatments);

console.log('    Device 1\t    Device 2');
treatments.forEach(()=>{
    console.log(treatSampler());
});

console.log('\nwhith:');

[
[shuffle(treatments), shuffle(['RxJS', 'Most.js'])],
[shuffle(blocking_vars), shuffle(['J7', 'G5 Plus'])]
].forEach((val) =>{
    R.transpose(val).forEach((transposed)=>{
        console.log(transposed[0] + ' = ' + transposed[1]);
    });
});