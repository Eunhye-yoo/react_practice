import { useState, useRef } from "react";
import "./App.css";
import GuestBookItem from "./components/GuestBookItem";

function App() {
  // [Q1-1] 이름과 내용을 State로 관리
  const [input, setInput] = useState({
    name: "",
    content: "",
  });

  // 고유 id 생성을 위한 ref (리렌더링되어도 값이 초기화되지 않음)
  const idRef = useRef(1);

  // 방명록 항목을 저장하는 배열 State
  const [guestbook, setGuestbook] = useState([]);

  // [Q1-2] 입력창의 변화를 감지해 input State를 변경하는 함수
  const onChange = (e) => {
    setInput({
      ...input, // 기존 값 복사
      [e.target.name]: e.target.value, // 타이핑한 input의 name에 맞는 값 갱신
    });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    // [Q2-1] 기존 guestbook에 새 방명록 객체 추가 (key로 쓸 id 포함)
    setGuestbook([
      ...guestbook,
      {
        id: idRef.current++, // id를 1씩 증가시키며 부여
        name: input.name,
        content: input.content,
      },
    ]);

    // [Q2-2] 등록이 끝난 후 입력창 State를 빈 값으로 초기화
    setInput({
      name: "",
      content: "",
    });
  };

  return (
    <>
      <h1>방명록</h1>
      <form onSubmit={onSubmit}>
        {/* [Q1-3] State와 연결: name, value, onChange 설정 */}
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={input.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          value={input.content}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <hr />
      {/* 배열을 순회하며 목록 렌더링 */}
      {guestbook.map((item) => (
        <GuestBookItem key={item.id} name={item.name} content={item.content} />
      ))}
    </>
  );
}

export default App;
