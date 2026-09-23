// useReducer : 상태 관리를 외부에서 처리할 수 있고, 상태 변경 로직을 한곳에 모을 수 있다.
// 상태 변경 로직을 한곳에 모을 수 있다.
// useState : 은행에서 고객이 직접 장부(setter)를 작성
// useReducer : 은행에서 고객이 요청(action)하면 직원이 장부(reducer)를 작성
// 기능이 5개 이상이거나 지속적인 업데이트 예정이면 useReducer를 사용하는 것이 좋다.

import { useReducer, useRef, useState } from "react";

// state에 발생할 수 있는 "모든 일"에 대한 로직 작성
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, text: action.text, isDone: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo,
      );
    default:
      return state;
  }
}

// 하나의 상태(todos)에 발생할 수 있는 일이 3가지(추가/삭제/토글)
// -> UseReducer 사용하여 상태 관리
// -> reducer 함수만 봐도 todos에 발생하는 모든 일을 파악할 수 있다.
const EX03_UseReducer = () => {
  const [text, setText] = useState(""); // 입력창은 기능이 한개 -> useState

  // const todos = useState([]);
  const [todos, dispatch] = useReducer(reducer, [
    { id: 0, text: "할일1", isDone: false },
  ]);
  const idRef = useRef(1); // 다음 id 자동 증가시키기 위해 선언 -> useRef : 값유지, 화면리렌더링X

  const onAdd = () => {
    if (!text.trim()) return;
    // dispatch()에 매개변수로 전달하는 객체가 reducer함수 action에 담긴다.
    dispatch({ type: "ADD", id: idRef.current++, text });
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={onAdd}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => dispatch({ type: "TOGGLE", id: todo.id })}
            />
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EX03_UseReducer;
