// memo : props가 변경되지 않았으면 리렌더링 하지 않음
// 리렌더링 규칙(부모가 리렌더링되면 자식도 리렌더링 된다) 파괴

import { memo, useState } from "react";

const NormalChild = () => {
  console.log("NormalChild 렌더링 (부모가 렌더링 되면 매번 같이)");
  return <div>일반 자식 - 부모 렌더링 되면 같이 렌더링 </div>;
};

// 전달되는 props가 존재하지 않으므로 리렌더링은 아예 안된다.
const MemoChild = memo(() => {
  console.log("MemoChild 렌더링 (props가 같으면 리렌더링 하지 않음))");
  return <div>MemoChild - props가 같으면 리렌더링 하지 않음</div>;
});

const EX06_Memo = () => {
  console.log("부모 렌더링");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>부모 버튼</button>
      <NormalChild />
      <MemoChild />
    </div>
  );
};

export default EX06_Memo;
