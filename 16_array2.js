/*
let fruits = ["사과", "바나나", "오렌지"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
*/

/*
//for...of 반복문. 인덱스가 필요 없을 떄만ㄴ? 사용 가능
for (let fruit of fruits) {
  console.log(fruit);
}
  */

/*
//forEach(): 제일 많이 쓰는 메소드. 메소드 안에 함수가 들어가줘야 한다다
let fruits = ["사과", "바나나", "오렌지"];

fruits.forEach(function (fruit, index) {
  console.log(`${index}번째 과일: ${fruit}`);
});
*/

const users = [1, "apple", "김사과", 20, "서울 서초구"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log(
  "-----------------------------------------------------------------------"
);

//for...of
for (let user of users) {
  console.log(user);
}

console.log(
  "-----------------------------------------------------------------------"
);

//forEach
users.forEach(function (user, idx, arr) {
  console.log(user, idx, arr);
});

console.log(
  "-----------------------------------------------------------------------"
);
