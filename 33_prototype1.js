function Person(name) {
  this.name = name;
}

const p1 = new Person("김사과");
const p2 = new Person("반하나");

console.log(p1.name); // 김사과
console.log(p2.name); // 반하나

Person.prototype.sayHello = function () {
  console.log(`안녕하세요, 저는 ${this.name}입니다.`);
};

p1.sayHello(); // 안녕하세요, 저는 김사과입니다.
p2.sayHello(); // 안녕하세요, 저는 반하나입니다.
