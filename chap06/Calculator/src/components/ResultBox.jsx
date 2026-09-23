const ResultBox = ({ result }) => {
  return (
    <div>
      <h2>결과 : {result != null ? result : "없음"} </h2>
    </div>
  );
};

export default ResultBox;
