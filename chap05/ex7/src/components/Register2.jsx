// 입력 폼 만들기
// 1. 이름
// 2. 생년 월일
// 3. 국적(선택 범위 제한)
// 4. 자기소개

import { useState } from "react";

const Register2 = () => {
  // 총 4개의 스테이트를 하나의 객체로 묶어서 관리
  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    country: "",
    intro: "",
  });

  console.log(inputs);

  const onChange = (e) => {
    console.log(e.target.name + " : " + e.target.value);
    setInputs({
      // spread 연산자를 사용하여 기존의 객체를 복사하고, 새로운 키-값 쌍을 추가
      ...inputs,
      // 각 태그에 name 속성 추가 -> 객체에 key로 활용 하기 위함
      // 사용자가 입력한 값을 객체에 저장
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={inputs.name}
        onChange={onChange}
      />
      <input
        type="date"
        name="birth"
        value={inputs.birth}
        onChange={onChange}
      />
      <select name="country" value={inputs.country} onChange={onChange}>
        <option value="kr">대한민국</option>
        <option value="us">미국</option>
        <option value="jp">일본</option>
      </select>
      <textarea
        placeholder="자기소개"
        name="intro"
        value={inputs.intro}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
export default Register2;
