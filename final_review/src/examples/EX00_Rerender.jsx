// Render : 콛드를 화면에 표시
// Rerender : 화면에 표시된 코드를 다시 화면에 표시 -> 코드를 처음부터 다시 실행
// -> 선언된 함수, 객체, 변수 모두 새로 만들어진다.

import { useState } from "react";

const Child = () => {
  console.log("Child 렌더링");
  return <h3>자식 컴포넌트(props, state 없음)</h3>;
};

const EX00_Rerender = () => {
  const [count, setCount] = useState(0);

  console.log("Parent 렌더링");

  const fnA = () => {};
  const fnB = () => {};
  console.log("함수 비교: ", fnA === fnB); // 무조건 false! 함수는 새로 만들어짐
  console.log("객체 비교:", { x: 1 } === { x: 1 }); // 무조건 false! 객체도 새로 만들어짐

  return (
    <div>
      <p>
        Child는 아무것도 바뀐것이 없음에도 부모 컴포넌트와 같이 리렌더링 된다.
        함수와 객체는 매번 새로 만들어지기 때문에 === 비교시 무조건 false
        memo/useCallback/useMemo는 전부 false를 true로 만들기 위한 기능 (새로
        만드는것 방지)
      </p>
      <button onClick={() => setCount(count + 1)}>
        부모 리렌더링({count})
      </button>
      <Child />
    </div>
  );
};

export default EX00_Rerender;
