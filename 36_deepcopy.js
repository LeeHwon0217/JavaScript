function deepcopy(value) {
  //원시값은 그대로 반환
  if (typeof value !== "object" || value === null) {
    return value; //object는 원시타입?
  }

  //배열인 경우
  if (Array.isArray(value)) {
    //앞에 is붙은 메소드는 boolean값을 반환하는 메소드
    const result = [];
    for (let i = 0; i < value.length; i++) {
      result[i] = deepcopy(value[i]); //재귀함수
    }
    return result;
  }

  //객체인 경우
  const result = {};
  for (let key in value) {
    result[key] = deepcopy(value[key]);
  }
  return result;
} //뭔말인지..

const original = {
  name: "오렌지",
  scores: [90, 80, 100],
  address: {
    city: "서울",
    street: "12345",
  },
};

const copy = deepcopy(original); // 깊은 복사
copy.name = "김사과"; // 원본과 복사본의 name을 다르게 설정
copy.scores[0] = 70; // 원본과 복사본의 scores를 다르게 설정
copy.address.city = "부산"; // 원본과 복사본의 address를 다르게 설정

console.log(original.name); // 오렌지
console.log(original.scores[0]); // 90
console.log(original.address.city); // 서울
