/*
const fruits = ["사과", "바나나"];
const newFruits = [...fruits, "포도"];

console.log(newFruits); // ['사과', '바나나', '포도']
*/

/*
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // arr1을 복사해서 arr2에 넣는다, assign과 같은 기능. 얕은 복사
console.log(arr2); // [1, 2, 3]
*/

/*
const a = [1, 2];
const b = [3, 4];
const result = [...a, ...b]; // a와 b를 합친다
console.log(result); // [1, 2, 3, 4]
*/

/*
function add(x, y, z) {
  return x + y + z;
} //함수의 매개변수는 배열로 받을 수 없다. 그래서 스프레드 연산자 사용

const nums = [1, 2, 3];
console.log(add(...nums)); // nums를 펼쳐서 매개변수로 넣는다 add(nums[0], nums[1], nums[2])과 같다
*/

/*
const person = { name: "김사과", age: 20 };
const copy = { ...person }; // person을 복사해서 copy에 넣는다, assign과 같은 기능. 얕은 복사
console.log(copy); // { name: '김사과', age: 20 }
*/

/*
const a = { name: "김사과" };
const b = { age: 20 };
const merged = { ...a, ...b }; // a와 b를 합친다
console.log(merged); // { name: '김사과', age: 20 }
*/
