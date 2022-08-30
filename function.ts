// return type will be number 
function add(n1:number , n2:number) {
    return n1 + n2;
}

// return type will be void but if console log the value will be undefined ? 
function printResult(number : number) : void {
    console.log('Result: ' + number);
}

function addAndHandle(n1: number, n2:number, cb:(num:number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

// function type 
// takes two number parameter and reture a number 
let combineValues : (a: number, b: number) => number;

//works 
combineValues = add;

//does not work
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8,8));

addAndHandle(10, 20, (res) => console.log(res));


