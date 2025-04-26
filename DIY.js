const apple = {
  name: "사과",
  age: 20,
  address: { si: "서울시", gu: "서초구", dong: "양재동" },
  job: "개발자",
};

const { pet = "루시" } = apple; // pet이 없으면 루시로 초기화. 새로 만든다

const { job: hobby } = apple; // job을 hobby로 바꾼다

console.log(apple);
