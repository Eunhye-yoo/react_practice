import { useState } from "react";
import "./App.css";

function App() {
  /*
   * State : 상태를 저장하는 특별한 변수
   * 스테이트(상태) 선언시 반드시 변수와 값을 변경할 수 있는 setter를 같이 초기화 한다.
   * 컴포넌트가 상태가 변경되는 것을 자동감지 -> 리렌더(리렌더링)발생 -> 화면에 상태값 반영
   * 리액트로 만든 웹앱은 새로고침 X
   */
  const [count, setCount] = useState(0);
  // 카운트 버튼 클릭시 h1, button, p 요소가 모두 리렌더링 된다.
  // 불필요하게 리렌더링 되는 요소가 많아지면 성능 저하
  // 따라서 컴포넌트를 분리하는 것이 좋다.
  return (
    <>
      <h1>Hello, React</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
    </>
  );
}

export default App;
