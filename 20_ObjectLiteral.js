const person = {
  name: "김사과",
  age: 20,
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name} 입니다`);
    // return `안녕하세요, 저는 ${this.name} 입니다`;
  }, //자기 객체의 name이 온다
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());
person.greet();
