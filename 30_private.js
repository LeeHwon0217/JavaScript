class User {
  #password = "";

  constructor(userid, password) {
    this.userid = userid;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("apple", "1111");
console.log(user.userid); // apple
console.log(user.checkPassword("1111")); // true
console.log(user.checkPassword("2222")); // false
// console.log(user.#password); // SyntaxError: Private field '#password' must be declared in an enclosing class

// #password와 그냥 password는 다르다. #password는 private field로, 외부에서 접근할 수 없다.
