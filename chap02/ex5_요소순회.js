let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of 반복문
for (let item of arr) {
  console.log(item);
}

// for in 반복문
for (let idx in arr) {
  console.log(arr[idx]);
}

// 객체
const person = {
  name: "이름",
  age: 27,
  job: "직업",
};
for (let key in person) {
  //console.log(person.key); // undefined //person에 key라는 프로퍼티가 없음
  console.log(person[key]);
}

//주의! for of 반복문은 배열만 사용 가능
// for (let item of person) {
//   console.log(item);
// }
