// useContext : props 없이 데이터 전달하기
// props : 부모 컴포넌트 -> 자식 컴포넌트 전달하는 데이터 (키-값 쌍)
// props drilling 발생 위험 방지 위해 context 사용

import { createContext, useContext, useState } from "react";

const DrillGrandChild = ({ name }) => <p>손자 이름: {name}</p>;
const DrillMiddle = ({ name }) => <DrillGrandChild name={name} />;

const NameContext = createContext();

const CtxGrandChild = () => {
  const name = useContext(NameContext);
  return <p>손자 이름: {name}</p>;
};

const CtxMiddle = () => <CtxGrandChild />;

const EX05_UseContext = () => {
  const [name, setName] = useState("홍길동");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>props로 이름 전달</h3>
      {/* props 전달 순서 : 
      EX05_UseContext -> DrillMiddle -> DrillGrandChild 
      */}
      <DrillMiddle name={name} />
      <h3>Context로 이름 전달</h3>
      {/* Provider가 name을 CtxMiddle 바로 사용 */}
      <NameContext.Provider value={name}>
        <CtxMiddle />
      </NameContext.Provider>
    </div>
  );
};

export default EX05_UseContext;
