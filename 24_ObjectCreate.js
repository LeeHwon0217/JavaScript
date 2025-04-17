const proto = {
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다`);
  },
};

proto.greet();

console.log();

const person = Object.create(proto); //person은 proto를 상속받는다
person.name = "안가도";
person.age = 32;
person.greet(); //안녕하세요, 저는 안가도입니다
