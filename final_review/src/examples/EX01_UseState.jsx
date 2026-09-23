// useState : 값을 기억(유지)하고 변경시 리렌더링 발생시키는 변수

import { useState } from "react";

const FailCounter = () => {
  let count = 0; // 리렌더링되면 매번 0으로 초기화
  return (
    <div>
      <h3>일반 변수 카운터</h3>
      {/* 일반 변수는 값 변경이 되어도 감지되지 않는다. 
      화면이 리렌더링 된다고 해도 0으로 초기화 */}
      <button
        onClick={() => {
          count++;
          console.log("일반 변수: ", count); // 콘솔에서는 증가
        }}
      >
        +
      </button>
      {/* 화면에는 영원히 0으로 표시 */}
      <span>{count}</span>
    </div>
  );
};

const SuccessCounter = () => {
  // 값이 변경되면 자동 감지 + 화면 리렌더링 시에도 이전 값을 유지
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>일반 변수 카운터</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {/* useCallBack사용시 참고를 위해 추가 */}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <span>{count}</span>
    </div>
  );
};

const EX01_UseState = () => {
  return (
    <div>
      <FailCounter />
      <SuccessCounter />
    </div>
  );
};

export default EX01_UseState;
