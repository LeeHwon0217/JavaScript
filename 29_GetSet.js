class User {
  constructor(name) {
    this._name = name;
  }

  // getter
  get name() {
    return this._name;
  }

  // setter. 값을 대입하면 자동으로 호출됨
  set name(newName) {
    if (newName.length < 2) {
      console.log("이름은 두 글자 이상이어야 합니다.");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("김사과");
console.log(user._name); // 김사과
console.log(user.name); // 김사과. getter의 기능

user.name = "반"; // setter의 기능.
user.name = "반하나"; // setter의 기능.
console.log(user.name); // 반하나. getter의 기능
