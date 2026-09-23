import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect은 두번째로 전달한 배열에 의존
  // 배열에 있는 값이 변경될 때마다 실행
  // 배열이 비어있으면 한번만 실행
  useEffect(() => {
    console.log(` useEffect count: ${count} / input: ${input}`);
  }, [count, input]);

  const onClickBtn = (value) => {
    // 지금 변경된 값이 아닌 변경되기 전 값이 출력
    // -> 비동기로 실행되기 때문에 함수 호출은 되었으나 완료가 안된 상태
    // 따라서 변경된 count값을 사용하고 싶으면 반드시 useEffect를 사용해야 함.
    // console.log("onClickBtn 전 ", count);
    setCount(count + value);
    // console.log("onClickBtn 후 ", count);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </section>
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
