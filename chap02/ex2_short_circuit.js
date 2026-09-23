// 단락 평가 : 앞의 값만으로 전체 결과가 정해지면 뒤 연산 생략
// || 연산 - 앞의 값이 truthy면 그 값 자체 반환, 아니면 뒤의 값 반환
// && 연산 - 앞의 값이 falsy면 그 값 자체 반환, 아니면 뒤의 값 반환

let var1 = undefined; //falsy
let var2 = 10; //truthy

console.log(var2 || var1); // 10 (true나 false가 아닌 값 반환)
console.log(var1 || var2); // 10

person = { name: "이름" };
const name = person && person.name;
console.log(name); //이름
