import "./App.css";
import { useCallback, useMemo, useReducer, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { useEffect } from "react";
// [리팩토링] Context를 외부에서 가져옴
import {
  DiaryDispatchContext,
  DiaryStateContext,
} from "./contexts/DiaryContext";

function reducer(state, action) {
  // 새로운 스테이트 값을 저장할 변수
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      nextState = [action.data, ...state];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    case "DELETE":
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    default:
      return state;
  }
  // 일기가 생성, 수정, 삭제 될때마다 현재 일기 데이터를 웹 스토리지에 저장
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState; // 기존에 스테이트 값 변경
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      return;
    }
    const parsedData = JSON.parse(storedData);

    // 저장된 일기 id값중 가장 높은 값 찾기 -> idRef값을 정해줘야 하기때문에
    let maxId = 0;
    parsedData.forEach((item) => {
      if (item.id > maxId) {
        maxId = item.id;
      }
    });

    idRef.current = maxId + 1; // 기존의 일기에 추가되는 새로운 일기 id 지정

    dispatch({
      type: "INIT",
      data: parsedData,
    });
  }, []);

  // [리팩토링] App이 리렌더링 될때마다 함수 재생성 되는 것을 방지 + useCallback 사용 하여 메모이제이션
  // 새로운 일기 추가
  const onCreate = useCallback((createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  }, []);

  // 기존 일기 수정
  const onUpdate = useCallback((id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  }, []);

  // 기존 일기 삭제
  const onDelete = useCallback((id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  }, []);

  // DiaryStateContext에 넘길 객체를 userMemo로 메모이제이션
  const memoizedDispatch = useMemo(
    () => ({ onCreate, onUpdate, onDelete }),
    [onCreate, onUpdate, onDelete],
  );

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={memoizedDispatch}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
