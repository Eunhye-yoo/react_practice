import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  /*
  현재 숫자를 보여주는 count 상태 변수 필요
  App, Viewer, Controller 컴포넌트 중 한곳에 선언
  Viewer, Controller 컴포넌트에서 count 상태 변수를 사용
  따라서 두 컴포넌트의 부모인 App 컴포넌트에서 선언하여 props로 전달
  props는 부모 -> 자식 전달 가능
  스테이트 변수는 선언된 곳에서만 변경 가능
  */
  const [count, setCount] = useState(0);
  // Controller 컴포넌트에서 적용할 버튼 클릭 이벤트 핸들러 생성 후
  // props로 전달
  const onClickBtn = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App;
