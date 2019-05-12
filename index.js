const R = require('ramda');
const latinSquare = require('latin-square');
const shuffle = require('shuffle-array');

let greek_treatments = ['\u03B1', '\u03B2'];
let blocking_var1 = ['Device I', 'Device II'];
let blocking_var2 = ['Interval I', 'Interval II'];
let blocking_var3 = ['A1', 'B1'];
let blocking_var4 = ['A2', 'B2'];

let gTSampler = latinSquare(greek_treatments);
let bV3Sampler = latinSquare(blocking_var3);
let bV4Sampler = latinSquare(blocking_var4);

console.log('\t\tDevice I\t    Device II');
greek_treatments.forEach((val, index)=>{
    console.log(blocking_var2[index], R.transpose([gTSampler(), bV3Sampler(), bV4Sampler()]));
});

console.log('\nwhith:');

[
[shuffle(greek_treatments), shuffle(['RxJS', 'Most.js'])],
[shuffle(blocking_var1), shuffle(['J7', 'S8'])],
[shuffle(blocking_var2), shuffle(['minInterval', 'maxInterval'])],
[shuffle(blocking_var3), shuffle(['tumblingCountWindow', 'slidingCountWindow'])],
[shuffle(blocking_var4), shuffle(['minWindowSize', 'maxWindowsize'])]
].forEach((val) =>{
    R.transpose(val).forEach((transposed)=>{
        console.log(transposed[0] + ' = ' + transposed[1]);
    });
});
