import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

/* 
리엑트에서는 SPA기법으로 라우팅 페이징 구현
따라서 페이지도 컴포넌트로 만들어서 라우팅
일반적으로 페이지를 나타내는 컴포넌트는 pages 폴더에 생성
*/

function App() {
  // useNavigate : 라우팅을 위한 객체 반환
  const nav = useNavigate();
  return (
    <>
      <h1>Hello, React</h1>
      {/* a 태그 대신 React에서 사용하는 컴포넌트 */}
      <div>
        {/* <a href="/">홈</a> */}
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
      </div>
      <button onClick={() => nav("/new")}>New</button>
      {/* 
      Routes 태그는 스위치 조건식과 유사하게 동작
      Route 태그는 case문과 유사하게 동작
      props로 path(url 경로)와 element(페이지 컴포넌트)를 전달
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
