// 입력 폼 만들기
// 1. 이름
// 2. 생년 월일
// 3. 국적(선택 범위 제한)
// 4. 자기소개

import { useState } from "react";

const Register1 = () => {
  const [name, setName] = useState("아무개");
  const onChangeName = (e) => {
    console.log(e);
    console.log(e.target);
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={onChangeName}
      />
      <input type="date" />
      <select>
        <option value="kr">대한민국</option>
        <option value="us">미국</option>
        <option value="jp">일본</option>
      </select>
      <textarea placeholder="자기소개"></textarea>
    </div>
  );
};
export default Register1;
