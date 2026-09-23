import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);
  // todoItem -> {id : 1, isDone:false, content : "할일1", date: Date객체 }

  const idRed = useRef(1);

  const onCreate = (content) => {
    const newTodo = {
      id: idRed.current++,
      isDone: false,
      content: { content },
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
