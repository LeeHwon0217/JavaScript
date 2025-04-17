function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

const Rucy = new Dog("루시", 15, "흰색");
console.log(Rucy); // Dog { name: '루시', age: 15, color: '흰색' }

console.log(`이름: ${Rucy.name}`);
console.log(`색상: ${Rucy.color}`);
console.log(`나이: ${Rucy.age}`);

console.log();
const PPomi = new Dog("뽀미", 7, "흰색");
console.log(PPomi); // Dog { name: '꼬미', age: 7, color: '흰색' }
console.log(`이름: ${PPomi.name}`);
console.log(`색상: ${PPomi.color}`);
console.log(`나이: ${PPomi.age}`);

console.log();

Rucy.family = "포메";
Rucy.getFamily = function () {
  return this.family;
};
console.log(`종: ${Rucy.family}`); // 종: 포메
console.log(`getFamily: ${Rucy.getFamily}`);
console.log(`종: ${PPomi.family}`); // 종: 포메
console.log(`getFamily: ${PPomi.getFamily}`);

console.log("---------------------------------------");

Dog.prototype.owner = "김사과";
Dog.prototype.run = function () {
  return this.name + " 가 달린다";
};

console.log(`Rucy 소유자: ${Rucy.owner}`); // Rucy 소유자: 김사과
console.log(`PPomi 소유자: ${PPomi.owner}`); // PPomi 소유자: 김사과

console.log(`Rucy run: ${Rucy.run()}`); // Rucy run: 루시 가 달린다
console.log(`PPomi run: ${PPomi.run()}`); // PPomi run: 뽀미 가 달린다
