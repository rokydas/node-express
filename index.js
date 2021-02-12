// const lodash = require('lodash');

// console.log(lodash.last([3, 4, 1, 2]));

// setTimeout(() => {
//     console.log('this is set time out function');
// }, 1000);

console.log(global);

console.log(__dirname);
console.log(__filename);

const { people, test } = require('./people');
console.log(people);
test();

/* ryan dahl took chrome's v8 engine and made wrote some c++ 
code. 

he took the whole file code in a function and make it default
for all js files in node. And also make it IFFIE

There are some default parameters in that function. 
They are: 
exports, require, module, __filename, __dirname

exports is a default empty object
require is a function
module is a default empty object

so that we can use these without declared. 


*/

const path = require('path');
// console.log(path);

const myPath = "L:/Node-Deep/node-express/index.js";

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));

const os = require('os');
console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());

const fs = require('fs');

fs.writeFileSync('myFile.txt', "Hello programmers");
fs.writeFileSync('myFile.txt', "Hello world"); // it will replace the previous text

fs.appendFileSync('myFile.txt', ', How are you?'); // it will not replace the previous text.

// const fileData = fs.readFileSync('myFile.txt');


fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
});

const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for bellRing event
// we need to make a listener before firing an event
emitter.on('bellRing', ({period, text}) => {
    console.log(`We need to run because ${text}`);
});

// raise an event
setTimeout(() => {
    emitter.emit('bellRing', {
        period: 'first', 
        text: 'second period ended',
    });
}, 2000);
