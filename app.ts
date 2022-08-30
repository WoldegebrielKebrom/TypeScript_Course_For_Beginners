let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'MAx';

if(typeof userInput=== 'string') userName = userInput;

// never type. a function that does not return anything. not voud , unknown etc 
function generateError(message: string, code: number) : never {
    throw {message:message, errorCode:code};

    //while(true) {}
}

generateError('Error', 500)