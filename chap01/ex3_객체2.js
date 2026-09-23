//상수 : 변하지 않는 값 저장
const animal = {
  type: "강아지",
  name: "쿠키",
  color: "크림",
};

//상수 객체의 프로퍼티 추가, 수정, 삭제하는 조작 모두 가능
animal.name = "멍멍이"; // 상수객체의 프로퍼티 변경 가능
animal.age = "1"; // 상수객체의 새로운 프로퍼티 추가 가능
delete animal.color; //상수객체의 프로퍼티 삭제 가능

//let, const 차이
animal = { type: "고양이" }; // 상수 객체 자체를 재할당하는 것은 불가능

//배열
let arr = [1, 2, 3, 4, 5, true, false, "문자열", { name: "쿠키" }, [1, 2, 3]];
