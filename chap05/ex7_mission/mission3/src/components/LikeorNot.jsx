import { useState } from "react";

const LikeorNot = () => {
  const [count, setCount] = useState(0); // 좋아요 갯수
  const [isLike, setIsLike] = useState(false); // 좋아요 여부

  const onClick = () => {
    if (isLike) {
      // setIsLike(false);
      setCount(count - 1); // 좋아요 취소
    } else {
      setCount(count + 1); // 좋아요
      // setIsLike(true);
    }
    setIsLike(!isLike); // 좋아요 여부 반전
  };
  return (
    <div>
      <h2>좋아요 버튼</h2>
      <button onClick={onClick}>
        {isLike ? "좋아요 취소 👎 " : "좋아요 👍 "}
        {count}
      </button>
    </div>
  );
};

export default LikeorNot;
