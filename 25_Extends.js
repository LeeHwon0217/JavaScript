class Animal {
  speak() {
    console.log("동물이 소리를 냅니다.");
  }
}

class Dog extends Animal {
  eat() {
    console.log("강아지가 먹습니다.");
  }
  speak() {
    console.log("강아지가 소리를 냅니다.");
  }
  // 오버라이딩(overriding) : 부모 클래스의 메서드를 자식 클래스에서 재정의하는 것
}

const animal = new Animal();

animal.speak(); // 동물이 소리를 냅니다.
// animal.eat(); // TypeError: animal.eat is not a function 자식 클래스의 메서드를 사용하지 못함

const dog = new Dog();
dog.speak(); // 강아지가 소리를 냅니다.
dog.eat(); // 강아지가 먹습니다.
