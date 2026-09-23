// 1. 객체 생성
let obj = {};

// 2. 프로퍼티 추가
obj.name = "홍은서";
obj.age = 27;

let person = {
  name: "홍은서",
  age: 27,
  sayHello: function () {
    console.log("안녕하세요. 저는 " + this.name + "입니다.");
  },
};

// 3. 프로퍼티 접근
console.log(person.name);
console.log(person["name"]);

// 4. 프로퍼티 추가
person.gender = "여자"; //존재하지 않는 키 값 추가
person["job"] = "훈련생";

// 5. 프로퍼티 삭제
delete person.age;
delete person["name"];

console.log(person);

//프로퍼티 존재여부 확인
console.log("gender" in person); //true
console.log("age" in person); // false
console.log(!("age" in person)); //true
