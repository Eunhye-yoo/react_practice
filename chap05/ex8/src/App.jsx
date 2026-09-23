import "./App.css";
import Register1 from "./components/Register1";
/*
React 변수 선언 3종류 
- 일반 변수(const, let, var) : 리렌더링 시 매번 초기화, 값 변경시 리렌더링X
- 상태 변수(state) : 리렌더링 시 값 유지, 값 변경시 리렌더링O
- 변수(useRef) : 리렌더링 시 값 유지, 값 변경시 리렌더링X
 */

function App() {
  return (
    <>
      <h1>Hello, React</h1>
      <Register1 />
    </>
  );
}

export default App;
