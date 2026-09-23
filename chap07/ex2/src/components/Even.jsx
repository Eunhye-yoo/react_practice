import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백 함수 안에 리턴으로 새로운 함수 반환시 콜백함수가 언마운트될 때 실행된다.
    // 클린업 함수
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>짝수</div>;
};

export default Even;
