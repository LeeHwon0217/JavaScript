/*
const obj1 = { name: "김사과", age: 20 };
const obj2 = Object.assign({}, obj1); // obj1을 복사해서 obj2에 넣는다

obj2.name = "오렌지"; // obj2의 name을 바꿔도 obj1은 안바뀜
console.log(obj1.name); // obj1의 name은 그대로
console.log(obj2.name);
*/

/*
const obj1 = { name: "김사과", age: 20 };
const obj2 = { ...obj1 }; // obj1을 복사해서 obj2에 넣는다, assign과 같은 기능. 얕은 복사
obj2.age = 25; // obj2의 age를 바꿔도 obj1은 안바뀜
console.log(obj1.age); // obj1의 age는 그대로
console.log(obj2.age); // obj2의 age는 바뀜
*/

const obj1 = {
  name: "김사과",
  adress: {
    city: "서울",
  },
};

//얕은 복사의 의미
const obj2 = { ...obj1 }; // obj1을 복사해서 obj2에 넣는다, assign과 같은 기능. 얕은 복사
obj2.adress.city = "부산"; // obj2의 adress.city를 바꿔도 obj1은 바뀜. 점 이렇게 하면 접근 접근

// 얕은 복사 후 adress는 객체이기 떄문에, onj1과 obj2가 같은 주소를 공유
console.log(obj1.adress.city); // obj1의 adress.city는 바뀜
console.log(obj2.adress.city); // obj2의 adress.city는 바뀜
