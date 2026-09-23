import "./ProductCard.css";

const ProductCard = ({ productName, price, isNew }) => {
  return (
    <div className="product-card">
      <h2>{productName}</h2>
      {/* 가격 표시에서 가독성을 위해 자주 사용 */}
      <p>가격: {price.toLocaleString("ko-KR")}원</p>
      {isNew && <p className="new-label">NEW</p>}
    </div>
  );
};

export default ProductCard;
