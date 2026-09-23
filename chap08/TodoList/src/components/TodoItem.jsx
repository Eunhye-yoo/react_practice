import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">{todo.content}</div>
      <div className="date">{todo.date}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
