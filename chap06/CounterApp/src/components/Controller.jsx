const Controller = ({ onClickBtn }) => {
  const buttons = [-1, -10, -100, +100, +10, +1];
  return (
    <div>
      {buttons.map((value) => (
        <button key={value} onClick={() => onClickBtn(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  );
};
export default Controller;

// const Controller = ({ onClickBtn }) => {
//   return (
//     <div>
//       <button onClick={() => onClickBtn(-1)}>-1</button>
//       <button onClick={() => onClickBtn(-10)}>-10</button>
//       <button onClick={() => onClickBtn(-100)}>-100</button>
//       <button onClick={() => onClickBtn(100)}>+100</button>
//       <button onClick={() => onClickBtn(10)}>+10</button>
//       <button onClick={() => onClickBtn(1)}>+1</button>
//     </div>
//   );
// };

// export default Controller;
