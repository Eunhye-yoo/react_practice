const Button = ({ text, color, children }) => {
  return (
    // style={{ color : color }} 축약형
    <button style={{ color }}>
      {text} - {children}
    </button>
  );
};

// props를 설정하지 않으면 defaultProps로 설정된 기본값이 사용됨
Button.defaultProps = {
  text: "버튼",
  color: "black",
};

export default Button;
