import "./App.css";
import Controller from "./components/Controller";
import Even from "./components/Even";
import Viewer from "./components/Viewer";
import { useEffect, useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  let isMount = useRef(false);

  // 1. 마운트 : 탄생 -> 맨 처음에 화면에 렌더링 될 때
  // deps: [] ->  의존성 배열 -> 빈배열로 선언하면 컴포넌트 최초 생성시 하번만 실행
  useEffect(() => {
    console.log("마운트"); // 1회만 실행
  }, []);

  // 2. 업데이트 : 변경 -> 리렌더링 될때마다
  //  deps: 자체를 생략하면 App 컴포넌트가 마운트, 업데이트 될 때마다 실행
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("업데이트");
  });

  // 3. 언마운트 : 사망 -> 화면에서 사라질 때

  const onClickBtn = (value) => {
    setCount(count + value);
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
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
  );
}

export default App;
