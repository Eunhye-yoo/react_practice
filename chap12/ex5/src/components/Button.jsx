import { memo } from "react";
import "./Button.css";

// [리팩토링] memo로 감싸면 props가 변경되지 않는한 리렌더링 발생 X
// 단, 부모가 넘기는 onClick 부모 쪽에서 재생성(리렌더링)이 되면 memo가 무의미
// 따라서 부모쪽에서 useCallback을 사용하여 함수 고정 필요
const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default memo(Button);
