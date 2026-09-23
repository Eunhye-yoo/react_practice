// Spread 연산자 (...) : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러 개의 값을 각각 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); //[4, 1, 2, 3, 5, 6]

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2); // a:1, b:2, c:3, d:4

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1); //1->p1 2->p2, 3>p3

//Rest 매개변수 (...) : 나머지
//전달한 모든 인수들이 변수에 대입 후 나머지는 하나의 배열로 저장

function funcB(one, two, ...ds) {
  // ds뒤에는 변수 추가 불가
  console.log(one, two); //4, 1
  console.log(ds); //[2, 3, 5, 6] 배열 출력
}
//arr2 = [4, 1, 2, 3, 5, 6]
funcB(...arr2);
