import { useRef } from "react";
import { useState } from "react";

const Register1 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    nation: "",
    self: "",
  });

  // 이름을 입력하는 input 태그(DOM) 접근을 위한 Ref 변수 선언
  const nameRef = useRef("");

  // 입력 폼에서 값이 변경될때마다 횟수 누적
  const countRef = useRef(0);

  // 비교를 위한 일반 변수 선언
  let count = 0;

  const onChange = (event) => {
    // countRef.current += 1;
    countRef.current++; // useRef는 항상 current를 사용해야함

    // count += 1;
    count++;
    console.log("Ref: ", countRef.current);
    console.log("일반변수: ", count);

    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = () => {
    // 사용자가 이름을 입력하지 않으면 이름 입려창에 포커스
    if (inputs.name === "") {
      // useRef를 이용하여 DOM요소 포커스
      nameRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={nameRef}
        type="text"
        placeholder="이름"
        name="name"
        value={inputs.name}
        onChange={onChange}
      />
      <input type="date" name="birth" value={inputs.birth} />
      <select name="nation" value={inputs.nation} onChange={onChange}>
        <option value="kr">대한민국</option>
        <option value="us">미국</option>
        <option value="jp">일본</option>
      </select>
      <textarea
        placeholder="자기소개"
        name="self"
        value={inputs.self}
        onChange={onChange}
      ></textarea>
      <button onClick={onSubmit}>등록</button>
    </div>
  );
};
export default Register1;
