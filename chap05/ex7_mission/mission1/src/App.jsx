import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  /*
  total은 전체 상품의 총 가격을 나타내는 상태이기 때문에
  각각의 상품(ProductCard)의 버튼 클릭에 영향을 받아야 한다.
  (React는 상태를 선언한 곳에서만 그 상태 값 변경 가능)
  따라서 장바구니 버튼 클릭시 상품의 가격을 전달 받아서 total 상태를 변경하는
  함수 필요.
   */

  const [total, setTotal] = useState(0);

  // 상품 목록
  const products = [
    { id: 1, name: "운동화", price: 50000 },
    { id: 2, name: "백팩", price: 80000 },
    { id: 3, name: "모자", price: 20000 },
  ];

  const addTotal = (price) => {
    setTotal(total + price);
  };

  return (
    <>
      <h1>상품 목록</h1>
      {/* ProductCard가 배열 요소의 갯수만큼 추가 */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          onAdd={addTotal}
        />
      ))}
      <hr />
      <h2>총 금액: {total.toLocaleString()}원</h2>
    </>
  );
}

export default App;
