const InputBox = ({ num1, num2, setNum1, setNum2, input1Ref, input2Ref }) => {
  return (
    <div>
      <input
        ref={input1Ref}
        type="number"
        placeholder="첫번째 숫자"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        ref={input2Ref}
        type="number"
        placeholder="두번째 숫자"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
    </div>
  );
};
export default InputBox;
