const now = new Date();
console.log("현재: ", now.toString()); //os의 날짜와 시간을 출력
console.log("현재: ", now.toLocaleString()); // 현재 날짜와 시간을 로컬 형식으로 출력

console.log("년: ", now.getFullYear()); // 년도
console.log("월: ", now.getMonth() + 1); // 월 (0부터 시작하므로 1을 더해줌)
console.log("일: ", now.getDate()); // 일

const bitrthday = new Date(1998, 1, 17);
console.log("생일: ", bitrthday.toDateString()); //얘도 달이 이상하다

const nowTime = now.getTime();
console.log(nowTime); //1970년 1월 1일 00:00:00 UTC부터 현재까지의 밀리초를 출력. 프로그램의 실행 시간을 계산할 때 활용
const birthTime = bitrthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24)); // 밀리초를 일로 변환
console.log(`태어난 지 ${diffDays}일 지남`); // 생일까지 남은 일 수
