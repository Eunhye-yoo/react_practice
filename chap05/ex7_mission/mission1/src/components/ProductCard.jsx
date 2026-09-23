import { useState } from "react";

const ProductCard = ({ name, price, onAdd }) => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
    // App(부보) 컴포넌트에 addTotal 함수 호출하여
    // 장바구니에 추가된 상품 가격 전달
    onAdd(price);
  };
  // 상품명
  // 가격
  // 장바구니 담기 버튼
  // 수량 표시
  return (
    <div>
      <h3>{name}</h3>
      <p>가격 : {price.toLocaleString()}원</p>
      <button onClick={onClick}>장바구니 담기</button>
      <p>수량 : {count}</p>
    </div>
  );
};

export default ProductCard;
