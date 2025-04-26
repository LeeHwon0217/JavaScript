/*
for (let i = 1; i <= 5; i++) {
  console.log(`현재 숫자: ${i}`);
}
*/

/*
for (let i = 1; i <= 10; i = i + 2) {
  console.log(`현재 숫자: ${i}`);
}
*/

/* 구구단 출력 
for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan}*${i}=${dan * i}`);
  }
}
  */

let a = 2;
let b = 1;

while (a <= 9) {
  while (b <= 9) {
    console.log(`${a}*${b}=${a * b}`);
    b++;
  }
  console.log("");
  a++;
  b = 1;
}
