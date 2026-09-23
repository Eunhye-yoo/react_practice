// UseEffect : 렌더링이 끝난 뒤에 side effect를 발생시키기 위해 실행되는 훅

import { useEffect, useState } from "react";

// side effect (부수적으로 발생하는 효과)
const EX04_UseEffect = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 콜백 함수 : 다른 함수에 매개변수로 전달되는 모든 함수
  // 의존성 배열 없음 -> 매 랜더링 마다 실행 -> 안씀(콘솔 확인)
  useEffect(() => {
    console.log("1. 매 랜더링 마다 실행");
  });

  console.log("useEffect를 사용하지 않은 그냥 로그 출력문");

  // 의존성 배열을 빈배열로 선언 -> 한번만 실행
  // 마운트(처음으로 컴포넌트가 렌더링 될 때)시 실행
  // ex) 데이터를 가져오는 작업, DOM에 접근하는 작업
  useEffect(() => {
    console.log("2. 마운트 시 딱 한번만 실행");
  }, []);

  //
  useEffect(() => {
    console.log("3. count 스테이트가 바뀔때만 실행");
    // 부수적으로 발생하는 작업 : 문서의 제목 변경
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div>
      {/* count 상태 ㅂ변경시 1,3 useEffect실행 */}
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      {/* text 상태 변경시 1 useEffect실행 */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default EX04_UseEffect;
