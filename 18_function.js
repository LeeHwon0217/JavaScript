// sayHello(); //선언보다 먼저 사용되어도 사용이 된다
/*
function sayHello() {
  console.log("안녕하세요!");
}

sayHello(); //선언보다 먼저 사용되어도 사용이 된다

console.log(a);

let a = 10; //var면 콘솔이 나옴, let은 안됨. 그게 둘의 차이
*/

/*
const sayHello = function () {
  console.log("안녕하세요");
};

sayHello(); //얘는 위로 올리면 에러남. const나 let은 먼저 선언하고 쓰도록 되어있기 때문에
*/

// 1. 매개변수가 없는 함수
function showmessage() {
  console.log("환영합니다!");
}

showmessage();

// 2. 매개변수가 있는 함수
// let name = "김사과";
function greet(name) {
  console.log("안녕하세요, " + name + "님!");
} //스택에 올라간 후 중괄호를 빠져나가면 사라짐.

greet("이훤");
greet();
greet(true);

function subtract(num1, num2) {
  result = num1 - num2;
  console.log(`뺄셈 결과: ${result}`);
}

subtract(10, 5);
subtract("십", "오");

//3. 리턴이 있는 함수
function add(a, b) {
  return a + b;
}

console.log(add(3, 4));
result2 = add(10, 3);
console.log(result2);

//4. 기본값이 있는 함수
function greet2(name = "게스트") {
  console.log("안녕하세요, " + name + "님!");
}

greet2();
greet2("이훤");

//5. 가변 매개변수 함수
function sum(...numbers) {
  //numbers = [1, 2, 3]
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(96, 96, 98, 88, 80));

//6.즉시 실행 함수
(function () {
  console.log("이 함수는 즉시 실행됩니다");
})();

//7.함수 안에 함수
function outer() {
  function inner() {
    console.log("안쪽 함수 실행!");
  }
  inner();
}

outer();

//8. 함수에서 함수 반환(고차함수)
//반환한다? 무조건 return

/*
    return function (name) {
        console.log("안녕하세요" + ", " + name + "님!");
    };
*/
function creatGreeting(message) {
  return function (name) {
    console.log(message + ", " + name + "님!");
  };
}
const hello = creatGreeting("안녕하세요");

/*
    const hello = function (name) {
        console.log("안녕하세요" + ", " + name + "님!");
    };
*/
hello("이훤");
