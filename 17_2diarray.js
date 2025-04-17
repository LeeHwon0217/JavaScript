let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]);
console.log(matrix[2][0]);
console.log(matrix[2][2]);

console.log(
  "------------------------------------------------------------------------------------"
);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

console.log(
  "------------------------------------------------------------------------------------"
);

let menuBoard = [
  ["🍔 불고기버거", "🍟 감자튀김", "🥤 콜라"],
  ["🍔 치즈버거", "🌭 핫도그", "🍹 사이다"],
  ["🍔 새우버거", "🍗 치킨너겟", "🍵 녹차"],
];

// 메뉴판 출력
for (let row = 0; row < menuBoard.length; row++) {
  let line = ""; //빈 문자열. 한번 돌고 초기화.
  for (let col = 0; col < menuBoard[row].length; col++) {
    line += menuBoard[row][col] + "\t"; //탭문자;
  }
  console.log(line);
}
