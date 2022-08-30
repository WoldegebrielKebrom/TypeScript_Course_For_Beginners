"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'MAx';
if (typeof userInput === 'string')
    userName = userInput;
// never type. a function that does not return anything. not voud , unknown etc 
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //while(true) {}
}
generateError('Error', 500);
