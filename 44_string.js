const str1 = "안녕하세요 JavaScript";
const str2 = new String("안녕하세요 JavaScript");
console.log(str1); // 안녕하세요 JavaScript
console.log(str2); // [String: '안녕하세요 JavaScript']

console.log(str1 == str2); // true. str1과 str2는 같은 값을 가짐
console.log(str1 === str2); // false. str1은 원시값, str2는 객체이기 때문에 다름

//length: 문자열의 길이를 저장
console.log(str1.length); // 16

//indexOf: 특정 문자나 문자열이 처음으로 등장하는 위치를 인덱스로 반환
console.log(str1.indexOf("J")); // 6. J가 처음 등장하는 위치는 6이다.
console.log(str1.indexOf("Java")); // 6. Java가 처음 등장하는 위치는 6이다.
console.log(str1.indexOf("java")); // -1. java는 없기 때문에 -1을 반환한다. 못찾았다는 의미이다.

//charAt: 특정 문자열에서 전달 받은 인덱스에 위치한 문자를 반환
console.log(str1.charAt(7));

// includes(): 특정 문자열에서 전달 받은 문자열이 포함되어 있는지 여부를 반환
console.log(str1.includes("Java")); // true. Java가 포함되어 있다.
console.log(str1.includes("java")); // false. java가 포함되어 있지 않다.

// substring(): 전달 받은 시작 인덱스로브터 종료 인덱스 직전까지의 문자열을 추출
console.log(str1.substring(6));
console.log(str1.substring(6, 10));

// repalace(): 원본 문자열의 일부를 전달 받은 문자열로 치환
console.log(str1.replace("안녕하세요", "Hello")); // Hello JavaScript

// split(): 구분자를 기준으로 나뉜 문자열을 하나의 배열에 저장
const str3 = "김사과, 오렌지, 반하나, 이메론, 배애리";
const students = str3.split(", "); // , 를 기준으로 나누기
console.log(students); // [ '김사과', '오렌지', '반하나', '이메론', '배애리' ]

for (let i in students) {
  console.log(i, students[i]); // i는 인덱스, students[i]는 학생 이름
}

// trim(): 문자열의 앞뒤 공백을 제거
const str4 = "     JavaScript     ";
console.log(`g${str4}g`);
console.log(`g${str4.trim()}g`); // gJavaScriptg. 앞뒤 공백이 제거됨

// toUpperCase(), toLowerCase(): 문자열을 대문자, 소문자로 변환
console.log(`g${str4.trim().toLowerCase()}g`);
console.log(`g${str4.trim().toUpperCase()}g`);
