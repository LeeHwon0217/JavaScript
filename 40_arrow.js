//일반 함수
function add1(a, b) {
  return a + b;
}

//화살표 함수
const add2 = (a, b) => a + b; //함수의 매개변수는 배열로 받을 수 없다. 그래서 스프레드 연산자 사용
//화살표함수는 무조건 리턴형이다

// 매개변수가 1개일 때는 괄호를 생략할 수 있다.
const square = (x) => x * x; // x * x를 리턴한다

//코드 블록이 있는 경우는 return을 써야 한다. 여러줄일 때는 return을 써야 한다.
const add3 = (a, b) => {
  return a + b;
};

/*
const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(function () {
      console.log(`안녕! 나는 ${this.name}`);
    }, 1000); // 1초 후에 실행되는 함수
  },
};

obj.sayHello(); // undefined. this가 obj를 가리키지 않음. setTimeout의 this는 window를 가리킴. this는 가장 가까운 객체를 가리킴
*/

const obj = {
  name: "김사과",
  sayHello: function () {
    setTimeout(() => {
      console.log(`안녕! 나는 ${this.name}`);
    }, 1000); // 1초 후에 실행되는 함수
  },
};

obj.sayHello(); // 안녕! 나는 김사과. this가 obj를 가리킴. setTimeout의 this는 obj를 가리킴. 화살표 함수는 this를 바인딩하지 않음
