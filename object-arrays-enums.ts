// can explicitly assign object 

 /*   const person: {
        name: string;
        age: number;
    } = {
        name : 'KB',
        age : 29
    } */


// for tuple explictly declare object 
// const person : {
//     name : string;
//     age : number;
//     hobbies : string[];
//     role: [number, string];

//  } = {
//      name : 'KB',
//      age : 29,
//      hobbies : ['Sport', 'Cooking'],
//      role : [2, 'author']
//  }


enum Role {ADMIN, READ_ONLY, AUTHOR}
const person = {
    name : 'KB',
    age : 29,
    hobbies : ['Sport', 'Cooking'],
    role : Role.ADMIN

}


 //person.role[1] = 10; / does not work becuse the value at index 1 is string 
 // person.role = [0,'admin', 'user'] / does not work becuse the tuple is a fixed length 
 // person.role.push('admin') / push works but it shoudln't 

 console.log(person.name);
 
 for(const hoby of person.hobbies) {
    // expecting string becuse the array is a string type
    console.log(hoby.toUpperCase());
    // console.log(hoby.mao()) error 
 }

 if(person.role === Role.AUTHOR) {
    console.log('Author');
 }

 let favoriteActivities : any;
 favoriteActivities = ['sports'];