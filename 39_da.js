/*
const obj1 = { name: "김사과", age: 20 };
const {name, age} = obj1; // 비구조화 할당. 객체의 속성을 변수에 할당
console.log(name); // 김사과
console.log(age); // 20
*/

function display({ name, age, address, job }) {
  console.log(name, age, address, job);
}

const apple = {
  name: "사과",
  age: 20,
  address: { si: "서울시", gu: "서초구", dong: "양재동" },
};

console.log(apple);
const new_apple = { ...apple, job: "개발자" }; // apple을 복사해서 new_apple에 넣는다, assign과 같은 기능. 얕은 복사
console.log(new_apple); // { name: '사과', age: 20, address: { si: '서울시', gu: '서초구', dong: '양재동' }, job: '개발자' }
display(new_apple); // 사과 20 { si: '서울시', gu: '서초구', dong: '양재동' } 개발자

// const { pet = "루시" } = new_apple; // pet이 없으면 루시로 초기화. 새로 만든다
// console.log(new_apple);

/*
const { job: hobby} = new_apple; // job을 hobby로 바꾼다
console.log(new_apple); 
*/

const component = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  // 비구조화 할당. styles의 color를 가져온다
  console.log(color);
}
changeColor(component); // black
