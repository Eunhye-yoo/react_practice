import { useState } from "react";
import "./App.css";
import EX00_Rerender from "./examples/EX00_Rerender";
import EX01_UseState from "./examples/EX01_UseState";
import EX02_UseRef from "./examples/EX02_UseRef";
import EX03_UseReducer from "./examples/EX03_UseReducer";
import EX04_UseEffect from "./examples/EX04_UseEffect";
import EX05_UseContext from "./examples/EX05_UseContext";
import EX06_Memo from "./examples/EX06_Memo";
import EX07_UseCallback from "./examples/EX07_UseCallback";
import EX08_UseMemo from "./examples/EX08_UseMemo";

// 예제 목록 저장하는 배열
const examples = [
  { name: "0. 리렌더링", component: <EX00_Rerender /> },
  { name: "1. useState", component: <EX01_UseState /> },
  { name: "2. useRef", component: <EX02_UseRef /> },
  { name: "3. useReducer", component: <EX03_UseReducer /> },
  { name: "4. useEffect", component: <EX04_UseEffect /> },
  { name: "5. useContext", component: <EX05_UseContext /> },
  { name: "6. Memo", component: <EX06_Memo /> },
  { name: "7. UseCallback", component: <EX07_UseCallback /> },
  { name: "8. UseMemo", component: <EX08_UseMemo /> },
];

function App() {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <h1>단계별 예제</h1>
      <div>
        {examples.map((example, index) => (
          <button key={index} onClick={() => setCurrent(index)}>
            <h2>{example.name}</h2>
          </button>
        ))}
        {examples[current].component}
      </div>
    </div>
  );
}

export default App;
