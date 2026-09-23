import { useState } from "react";
import "./App.css";
import ResultBox from "./components/ResultBox";
import ButtonBox from "./components/ButtonBox";
import InputBox from "./components/InputBox";
import { useRef } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [result, setResult] = useState(0);

  const input1Ref = useRef();
  const input2Ref = useRef();

  const calculate = (op) => {
    if (num1 === "") {
      alert("첫번째 숫자를 입력하세요");
      input1Ref.current.focus();
      return;
    }
    if (num2 === "") {
      alert("두번째 숫자를 입력하세요");
      input2Ref.current.focus();
      return;
    }

    switch (op) {
      case "+":
        setResult(Number(num1) + Number(num2));
        break;
      case "-":
        setResult(Number(num1) - Number(num2));
        break;
      case "*":
        setResult(Number(num1) * Number(num2));
        break;
      case "/":
        if (Number(num2) === 0) {
          alert("0으로 나눌 수 없습니다.");
          input2Ref.current.focus();
          return;
        }
        setResult(Number(num1) / Number(num2));
        break;
      default:
        setResult("잘못된 연산입니다.");
        break;
    }
  };

  return (
    <div className="App">
      <h1>사칙연산 계산기</h1>
      <section>
        <InputBox
          num1={num1}
          num2={num2}
          setNum1={setNum1}
          setNum2={setNum2}
          input1Ref={input1Ref}
          input2Ref={input2Ref}
        />
      </section>
      <section>
        <ButtonBox onClickBtn={calculate} />
      </section>
      <section>
        <ResultBox result={result} />
      </section>
    </div>
  );
}

export default App;
