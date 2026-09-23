// useMemo : 연간 결과를 기억 -> 다시 계산하지 않고 기억된 값을 반환
// 연산비용이 클 때 사용 - LLM같은 AI연산 사용 경우

import { useMemo, useState } from "react";

// 무거운 연산식
const heavyCalc = (n) => {
  console.log("무거운 연산");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return n * result;
};

const EX08_UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 렌더링 발생시 매번 함수 실행
  // 따라서 text 입력이 버벅인다. (무거운 연산식 때문)
  // const heavyCalcResult = heavyCalc(number);

  // number 값이 변경될 때만 heavyCalc를 실행
  // number 값이 변경되지 않을 때는 기억하고 있는 기존의 결과값을 재사용
  // 따라서 text입력이 부드럽게 된다.
  const heavyCalcResult = useMemo(() => heavyCalc(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>무거운 연산 결과: {heavyCalcResult}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default EX08_UseMemo;
