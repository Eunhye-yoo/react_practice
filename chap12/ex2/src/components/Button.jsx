import "./Button.css";

// 버튼 컴포넌트는 부모 컴포넌트가 전달하는 props에 따라
// 각각 다른 버튼을 표시 할 수 있어야 합니다.
// text : 버튼의 텍스트
// type : 버튼의 타입 (디자인 적용시 사용)
// onClick : 버튼 클릭시 실행할 함수
const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
