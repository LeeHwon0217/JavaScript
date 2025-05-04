// min() : 가장 작은 수를 반환
console.log(Math.min()); // Infinity.양의 무한대
console.log(Math.min(1, -2, 3, -"100")); // -100 가장 작은 수
console.log(Math.min(1, -2, "천", -"100")); //NaN 숫자가 아냐, 계산할 수 없어

console.log();

// console.log();max() : 가장 큰 수를 반환
console.log(Math.max()); // -Infinity. 음의 무한대
console.log(Math.max(1, -2, 3, -"100")); // 3 가장 큰 수
console.log(Math.max(1, -2, "천", -"100")); //NaN 숫자가 아냐, 계산할 수 없어

console.log();
// round() : 소수점 첫번째 자리에서 반올림하여 그 결과를 반환
console.log(Math.round(10.49)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.round(-10.5)); // -10
console.log(Math.round(-10.51)); // -11

console.log();
// n번째 자리에서 반올림
let num = 123.4567;
console.log(Math.round(num * 100) / 100); // 123.46 소수점 둘째자리에서 반올림

console.log();
console.log(num.toFixed(2)); // 123.46 소수점 둘째자리에서 반올림, 문자열로 반환

console.log();
// floor() : 소수점 첫 번째 자리에서 소수점을 버림
console.log(Math.floor(10.49)); // 10
console.log(Math.floor(10.5)); // 10
console.log(Math.floor(-10.5)); // -11
console.log(Math.floor(-10.51)); // -11

console.log();
// ceil() : 소수점 첫 번째 자리에서 소수점을 올림
console.log(Math.ceil(10.49)); // 11
console.log(Math.ceil(10.5)); //  11
console.log(Math.ceil(-10.5)); // -10
console.log(Math.ceil(-10.51)); // -10

console.log();
//random() : 0.0 <= x < 1.0 사이의 난수를 반환
console.log(Math.random());
const r = Math.random(); // 0.0 <= r < 1.0
console.log(r); // 0.0 <= r < 1.0
console.log(Math.ceil(r * 10)); // 1 ~ 10 무작위 수
