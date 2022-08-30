"use strict";
// union  type
// literal type 
// type alias 
function combine(input1, input2, resultConversion) {
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        return +input1 + +input2;
    }
    return input1.toString() + input2.toString();
}
console.log(combine(30, 20, 'as-number'));
console.log(combine('30', '26', 'as-number'));
console.log(combine("Max", "Anna", 'as-text'));
