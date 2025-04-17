class Animal {
  constructor(name) {
    this.name = name;
  }
}

const animal = new Animal("코끼리");

console.log(animal.name); // 코끼리

class Dog extends Animal {
  constructor(name, color) {
    super(name); // Animal의 생성자를 호출. 부모의 name이어서 자식에서는 this.name이라고 할 수 없다 흠
    this.color = color;
  }
  showInfo() {
    console.log(`${this.name}는 ${this.color} 강아지입니다`);
  }
}

const dog = new Dog("루시", "흰색");
dog.showInfo(); // 루시는 흰색 강아지입니다
