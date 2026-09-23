// 1. Falsy values (총 7개 존재)
//  0, -0, 0n, "", null, undefined, NaN
let f1 = 0n; //더 큰 수(BigInt)를 저장할 수 있는 number의 자료형

// 2. Truthy values (7개의 falsy를 제외한 모두)
let t1 = 1;
let t2 = []; //값을 가지지않은 배열 (주머니는 존재)
let t3 = {}; //값 없는 객체 (틀 존재)
let t4 = () => {}; // 기능 없는 함수

// 회원관리 시스템 예시
let user = { id: "아이디", nickName: "닉네임" };

//if(user === undefined || user === null)
// 조건이 훨씬 간결해진다.
if (!user) {
  log("반환된 회원 정보가 없습니다.");
}
