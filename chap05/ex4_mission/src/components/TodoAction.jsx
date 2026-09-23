const TodoAction = ({ todo }) => {
  const clickBtn = () => {
    console.log(todo.text, todo.isDone);
    if (todo.isDone) {
      console.log("이미 완료된 할일입니다.");
    } else {
      console.log("아직 완료되지 않은 할일입니다.");
    }
  };

  return (
    <div>
      <p>{todo.text}</p>
      <button onClick={clickBtn}>할일 정보 보기</button>
    </div>
  );
};
export default TodoAction;
