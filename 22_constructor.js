function Person(name, age) {
  //생성자
  this.name = name; //우변은 스택에 저장
  this.age = age;
  this.greet = function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다`);
  };
}

const p1 = new Person("이메론", 30);
console.log(p1.name);
console.log(p1.age);
p1.greet();

console.log();

const p2 = new Person("배에리", 27);
console.log(p2.name);
console.log(p2.age);
p2.greet();
