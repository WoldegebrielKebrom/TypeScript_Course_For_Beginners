"use strict";
// return type will be number 
function add(n1, n2) {
    return n1 + n2;
}
// return type will be void but if console log the value will be undefined ? 
function printResult(number) {
    console.log('Result: ' + number);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// function type 
// takes two number parameter and reture a number 
let combineValues;
//works 
combineValues = add;
//does not work
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (res) => console.log(res));
