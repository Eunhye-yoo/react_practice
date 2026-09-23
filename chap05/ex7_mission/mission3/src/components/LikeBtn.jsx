import { useState } from "react";

const LikeBtn = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>좋아요 버튼</h2>
      <button onClick={onClick}>좋아요 🩷 {count}</button>
    </div>
  );
};

export default LikeBtn;
