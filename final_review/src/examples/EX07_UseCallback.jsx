// useCallBack : 함수를 새로 만들지 않음.
// memo가 props로 전달 되는 함수 때문에 무력화 되는 문제를 해결하기 위해 사용
// useCallback은 memo가 있을 때에만 효과

import { memo, useCallback, useState } from "react";

/* props로 전달되는 함수가 인라인 함수  -> 이벤트 발생시 매번 함수 재생성
 함수 재생성 -> 함수가 다르므로 props가 바뀜으로 인식 
 -> memo로 구현한 컴포넌트도 리렌더링 */

/* props로 전달되는 함수가 useCallback로 감싸져 있는 함수
함수 재생성 X -> props 바뀌지 않음
 -> memo로 구현한 컴포넌트도 리렌더링 X
*/
const MemoBtn = memo(({ onClick, text }) => {
  console.log(`${text} 렌더링`);
  return <button onClick={onClick}>{text}</button>;
});

const EX07_UseCallback = () => {
  console.log("부모 렌더링");
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);

  const onLike = useCallback(() => {
    setLikes((prev) => prev + 1);
  }, []);

  return (
    <div>
      <MemoBtn onClick={() => setCount(count + 1)} text="일반 함수 버튼" />
      <MemoBtn onClick={onLike} text="useCallback 함수 버튼" />
      <p>count: {count}</p>
      <p>likes: {likes}</p>
    </div>
  );
};

export default EX07_UseCallback;
