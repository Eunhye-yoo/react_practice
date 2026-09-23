// useRef : 값을 기억(유지)하되, 리렌더링 X
// 값이 바뀌었을때 화면도 바뀌어야 하는지 여부에 따라 사용

import { useRef, useState } from "react";

// -> true : useState, false: useRef
const EX02_UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // 화면이 몇번 랜더링 됐는지 횟수 카운트
  // Q. useState를 사용해도 될까?
  // A. 렌더린 -> +1 -> state 변경 -> 화면 변경 -> 렌더링 -> +1 -> state 변경 -> 화면 변경 -> 렌더링...
  // ... 무한 루프에 빠진다!
  const renderCount = useRef(0);
  renderCount.current++;

  console.log(
    `렌더링 ${renderCount.current}번째 | state: ${count} | ref: ${countRef.current}`,
  );

  return (
    <div>
      {/* 버튼 클릭시 useState와 useRef모두 값이 증가
      차이점: useRef는 화면이 바뀌지 않는다.
      state 버튼을 누르면 컴포넌트가 리렌더링 되면서 그동안 증가했던 
      Ref값이 한꺼번에 화면에 반영 */}
      <button onClick={() => setCount(count + 1)}>state: {count}</button>
      <button
        onClick={() => {
          countRef.current++;
          console.log(countRef.current);
        }}
      >
        Ref: {countRef.current}
      </button>
    </div>
  );
};

export default EX02_UseRef;
