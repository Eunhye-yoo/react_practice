const ButtonBox = ({ onClickBtn }) => {
  const ops = ["+", "-", "*", "/"];
  return (
    <div>
      {ops.map((op) => (
        <button key={op} onClick={() => onClickBtn(op)}>
          {op}
        </button>
      ))}
    </div>
  );
};
export default ButtonBox;
