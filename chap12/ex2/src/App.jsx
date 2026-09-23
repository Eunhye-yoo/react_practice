import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import { useReducer, useRef, createContext } from "react";

// 임시 일기 데이터
const mockData = [
  {
    id: 1,
    emotionId: 1,
    content: "1번 일기 내용",
    createDate: new Date("2026-09-11").getTime(),
  },
  {
    id: 2,
    emotionId: 2,
    content: "2번 일기 내용",
    createDate: new Date("2026-09-12").getTime(),
  },
  {
    id: 3,
    emotionId: 3,
    content: "3번 일기 내용",
    createDate: new Date("2026-09-13").getTime(),
  },
];

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // 새 일기 추가
  const onCreate = (emotionId, content, createDate) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, emotionId, content, createDate },
    });
  };

  // 일기 상세 보기

  // 기존 일기 수정

  // 기존 일기 삭제

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
