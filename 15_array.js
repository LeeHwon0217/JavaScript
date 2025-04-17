const user = [1, "apple", "김사과", 20, "서울 서초구"];
console.log(user);
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);

user[7] = "여자";
console.log(user);

user[4] = "서울 강남구";
console.log(user);
console.log(user.length);

// user = 100; 에러. 가리키는 주소느 같기 떄무에 const 사용. 안의 값은 바꿀 수 있다

console.log("--------------------------------------------------");
for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

console.log("--------------------------------------------------");
// push(): 배열의 요소를 추가
user.push("ISTJ");
console.log(user);

console.log("--------------------------------------------------");

// pop90: 배열의 마지막 인덱스 번호에 있는 값을 제거 하고, 왼쪽에 담아줌
let temp = user.pop();
console.log(user);
console.log(temp);
// user.pop();이렇겜ㄴ 써도 된다다
// console.log(user);

console.log("--------------------------------------------------");

// 배열의 첫번째 인덱스 번호에 있는 값을 제거
temp = user.shift();
console.log(user);
console.log(temp);

console.log("--------------------------------------------------");

//concat(): 두 배열의 요소를 합침
const profile = ["A형", "ISTJ"];
result = user.concat(profile);
console.log(result);

console.log("--------------------------------------------------");

// join(): 배열 요소 사이에 원하는 문자를 삽입: 배열 -> 문자열
result = user.join("😁");
console.log(result);
console.log(typeof result);

console.log("--------------------------------------------------");

// sort(): 배열의 요소를 오름차순. 유니코드의 순서를 따름름
const arr = ["apple", "banana", "Apple", "orange", "melon"];
arr.sort();
console.log(arr);

console.log("--------------------------------------------------");

//reverse(): 배열을 역순으로 재배치
arr.reverse();
console.log(arr);

console.log("--------------------------------------------------");
