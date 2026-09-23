// 1. Null 병합 연산자
//원래 if문 썼었음
// -> 존재하는 값을 뽑아내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
let var1; //undefined
let var2 = 10;
let var3 = 20;

// ??
console.log(var1 ?? var2); // 10 (null이나 undefined이 아닌 var2 출력)
console.log(var1 ?? var3); // 20
console.log(var2 ?? var3); // 10 (둘다 null, undefined이 아닌 경우 앞에있는 값 선택)

// 회원관리 시스템 예시
// 카카오 -> id, 네이버 -> nickName 을 response
let kakao = "eunseo03170";
let naver; //undefined
let displayName = kakao ?? naver; //eunseo03170
console.log(displayName);

// 삼항 연산자 -> 항이 3개인 연산자
let result = 10 % 2 === 0 ? "짝수" : "홀수";
console.log(result);
