import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

// JSX 주의사항
// 최상위 태그는 반드시 하나여야 한다. (빈 태그라도 있어야한다.)
// 컴포넌트에서 return 전에는 JS 코드 작성, return 안에는 html코드 작성

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
