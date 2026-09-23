const TodoItem = ({ text, isDone }) => {
  return (
    <li style={{ textDecoration: isDone ? "line-through" : "none" }}>{text}</li>
  );
};

export default TodoItem;
