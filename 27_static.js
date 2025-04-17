class MathTool {
  constructor(num1, num2) {
    //객체를 만들때 실행
    this.num1 = num1;
    this.num2 = num2;
  }

  static add(a, b) {
    return a + b; //this.num1 + this.num2; 불가. this는 생성자에서 나오기 때문
  }
  subtract(a, b) {
    return this.num1 - this.num2; //이 가능하다.
  }
}

// tool = new MathTool();
// console.log(tool.add(10, 3)); // 13

console.log(MathTool.add(10, 3)); // 13
//static이 붙은 애들은 미리 heap으로 올라간다
//시작하기 전에 먼저 힙으로 올라감
// subtract는 static이 없으므로 new로 생성해야 사용 가능

//constructor은 static이 없으므로 new로 생성해야 사용 가능

// 다 static으로 만들면 사용에 편하다. 그런데 메모리에 무리가 감.heap에 계속 쌓이기 때문

// 처음 시작할때 로딩이 많은게 static. 처음을 빠르게 하면 중간에 로딩딩
