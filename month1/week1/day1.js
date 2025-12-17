// console.log("Hello JS Backend");

// function add(a,b){
//     return a+b;
// }
// const result = add(1,2);
// console.log(result);

// function isEven(num){
//     return num%2===0;
// }
// function isOdd(num){
//     return num%2===1;
// }

// console.log(isEven(2));
// console.log(isOdd(2));

// // practise 1
// function typeValidation(arg,type){
//     if( typeof arg !== type ){
//         console.log(`error : ${arg} must be a ${type}.`);
//         return false;
//     }else{
//         return true;
//     }
// }

// function userInfo(name,age){
//     const validArg = typeValidation(name,"string") && typeValidation(age,"number");
//     if(!validArg){
//         return null
//     }
//     return `My name is ${name} and I am ${age} years old`;
// }
// console.log(userInfo("Mahdi",24))

// practise 2
function assertString(value, fieldName) {
  if (typeof value !== "string") {
    throw new TypeError(`${fieldName} must be a string`);
  }
}

function assertNumber(value, fieldName) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError(`${fieldName} must be a valid number`);
  }
}

function userInfo(name, age) {
  assertString(name, "name");
  assertNumber(age, "age");

  return `My name is ${name} and I am ${age} years old`;
}

console.log(userInfo("Mahdi", 24));

