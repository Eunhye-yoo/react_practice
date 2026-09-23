import "./App.css";
import TodoAction from "./components/TodoAction";
// import ProductInfo from "./components/ProductInfo";
// import UserButton from "./components/UserButton";
// import Button from "./components/Button";

function App() {
  const todos = [
    { text: "React 예제 실습하기", isDone: true },
    { text: "Vite로 프로젝트 생성 복습하기", isDone: false },
    { text: "컴포넌트 props 복습하기", isDone: false },
  ];

  return (
    // <>
    //   <Button text={"메일"} color={"red"} />
    //   <Button text={"카페"} />
    //   <Button {...buttonProps} />
    // </>

    // <>
    //   <UserButton name="철수" age={25} gender="male" />
    //   <UserButton name="영희" age={33} gender="female" />
    // </>

    // <>
    //   <UserButton name="철수" btnText="철수 정보 출력" age={25} gender="male" />
    //   <UserButton
    //     name="영희"
    //     btnText="영희 프로필 보기"
    //     age={25}
    //     gender="female"
    //   />
    // </>

    // <>
    //   <ProductInfo title="이어폰" price={129000} />
    //   <ProductInfo title="키보드" price={49000} />
    // </>

    <>
      {todos.map((item, idx) => (
        <TodoAction key={idx} todo={item} />
      ))}
    </>
  );
}

export default App;
