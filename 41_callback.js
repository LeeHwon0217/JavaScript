/*
console.log("물 끓이기 시작!");
setTimeout(function () {
  console.log("면 넣기!");
}, 3000); // 3초 후에 실행되는 함수

console.log("계란 준비하기!");
*/

/*
function greet(name, callback) {
  console.log("안녕, " + name + "!");
  callback(); // 콜백 함수 호출
}

function sayBye() {
  console.log("잘가!");
}

greet("김사과", sayBye); // greet 함수 호출, sayBye를 콜백으로 전달. 뒤에 ()를 붙이지 않음. sayBye는 함수이기 때문에 ()를 붙이지 않음. greet 함수에서 sayBye를 호출함
*/

/*
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2); // map 함수는 배열의 각 요소에 대해 함수를 호출하고, 그 결과로 새로운 배열을 생성한다. n은 배열의 각 요소를 의미한다. n * 2는 각 요소를 2배로 만드는 함수이다.
console.log(doubled); // [2, 4, 6, 8]
*/

/*
function doSomething(callback) {
  console.log("작업 시작!");
  callback(); // 콜백 함수 호출
}

doSomething(() => {
  console.log("작업 완료!");
});
*/

/*
const calc_add = (a, b) => a + b; // 화살표 함수. a와 b를 더한 값을 리턴한다.
const calc_multiply = (a, b) => a * b; // 화살표 함수. a와 b를 곱한 값을 리턴한다.

function calculater(num1, num2, action) {
  if (num1 < 0 || num2 < 0) return; // 음수일 경우 리턴한다. 음수는 계산할 수 없다.

  const result = action(num1, num2);
  return result; // action(num1, num2) 결과를 리턴한다.
}

console.log(calculater(10, 3, calc_add)); // 13
console.log(calculater(10, 3, calc_multiply)); // 30
*/

/*
    회문은 앞에서 읽으나 뒤에서 읽으나 같은 단어를 의미한다.

    회문을 재귀함수를 통해 체크하는 함수를 만들어보자.

    함수 이름: isPalindrome
    매개변수: str (문자열)
    리턴값: true / false (회문이면 true, 아니면 false)
*/

function isPalindrome(value) {
  for (let i = 0; i < value.length / 2; i++) {
    if (value[i] == value[value.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
