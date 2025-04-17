let num = 10;
num++; //11
console.log(num); //11
++num; //12
console.log(num); //12
let result = 0;
result = ++num; //13
console.log(result); //13
result = num++; //13
console.log(result); //13
/* 연산의 우선순위. 등호가 먼저냐 부호가 먼저냐의 차이 */

console.log("---------------------");

let a = 23; //10111
let b = 14; //01110  //따라서 &연산은 6 |연산은 31

console.log(a & b);
console.log(a | b);
console.log(a ^ b); //같으면 1 반대묜 0?
console.log(~a);

console.log(1.5 + 1.2 == 2.7);
console.log(1.2 + 1.1 == 2.3);
console.log(1.1 + 0.1 == 1.2);

console.log(a << 1); //비트에서 왼쪽으로 한 칸 밀어줘. 자릿수가 늘어난다
console.log(a >> 1); //비트에서 오른쪽으로 한 칸 밀어줘
