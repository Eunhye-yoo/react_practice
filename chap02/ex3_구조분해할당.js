let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
// 1->one, 2->two, 3->three
//배열에 저장된 요소 순서에 맞춰 각각 대입
//배열에 있는 값 외에 추가적인 변수 선언시 값 초기화 가능
//초기화 안하면 undefined 들어감

let person = {
  name: "이름",
  age: 27,
  hobby: "취미",
};

//객체 프로퍼티 이름에 따라 구조분해 할당 적용
// //(위치를 바꿔도 상관없음 key에따라 value 저장)
const func = ({ name, age, hobby, etc }) => {
  console.log(name, age, hobby, etc);
};

func(person); //이름 27 취미 undefined
func(arr); //undefined undefined undefined undefined : 객체를 넘겨야 구조분해 가능
