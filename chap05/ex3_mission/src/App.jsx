import "./App.css";
import TodoItem from "./components/TodoItem";
// import ProductCard from "./components/ProductCard";
// import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const todos = [
    { text: "React 예제 실습하기", isDone: true },
    { text: "Vite로 프로젝트 생성 복습하기", isDone: false },
    { text: "컴포넌트 props 복습하기", isDone: false },
  ];

  return (
    // <>
    //   <WelcomeMessage name="철수" />
    //   <WelcomeMessage name="영희" />
    // </>

    // <>
    //   <ProductCard productName="무선 이어폰" price={129000} isNew={true} />
    //   <ProductCard productName="유선 키보드" price={49000} isNew={false} />
    // </>

    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo.text} isDone={todo.isDone} />
      ))}
    </ul>
  );
}

export default App;
