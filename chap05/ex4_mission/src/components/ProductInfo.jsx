const ProductInfo = (title, price) => {
  const clickBtn = () => {
    const isExpensive = price > 100000;
    console.log("상품명: " + title + ", 가격: " + price + "원");
    if (isExpensive) {
      console.log("이 상품은 고가 제품입니다.");
    } else {
      console.log("이 상품은 저가 제품입니다.");
    }
  };

  return (
    <>
      <p>
        {title} - {price.toLocaleString("ko-KR")}원
      </p>
      <button onClick={clickBtn}>콘솔에 정보 출력</button>
    </>
  );
};

export default ProductInfo;
