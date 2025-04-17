/*
    기본형(Primitive type)
*/
let num = 20;
let str = "Hello, JS!";
let isReady = true;
let nothing = null;
let notDefined;
let bigNumber = 1234567891234567890n;
let unique = Symbol("id");

console.log("기본형 타입 출력");
console.log("num: ", num);
console.log("str: ", str);
console.log("isReady: ", isReady);
console.log("nothing: ", nothing);
console.log("notDefined: ", notDefined);
console.log("bigNumber: ", bigNumber);
console.log("unique: ", unique);

let obje1 = { name: "apple" };
console.log(obje1);
console.log(obje1.name);

let obj2 = obje1;
obj2.name = "banana";
console.log(obj2.name); //banana
console.log(obje1.name);

/*
    참조형(Reference Type)
*/
let person = { name: "apple", age: 20 };
let numbers = [1, 2, 3, 4, 5];
let greet = function () {
  return "안녕하세요!";
};
let now = new Date();

console.log("참조형 타입 출력");
console.log("person: ", person);
console.log("numbers: ", numbers);
console.log("greet(): ", greet());
console.log("now: ", now);

let num1 = 10;
let num2 = 5;

//
console.log(`${num1}*${num2}=${num1 * num2}`);
