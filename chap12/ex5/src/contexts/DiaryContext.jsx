import { createContext, useContext } from "react";

// [리팩토링] Context를 App에서 분리
// 순환 참조 제거 : import가 한바퀴 돈다
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 커스텀 훅으로 감싸서 제공
// Provider 밖에서 Context사용시 즉시 에러 발생
export const useDiaryState = () => {
  const state = useContext(DiaryStateContext);
  if (state === undefined) {
    throw new Error(
      "useDiaryState는 DiaryStateContext.Provider 안에서만 사용할 수 있습니다.",
    );
  }
  return state;
};

export const useDiaryDispatch = () => {
  const dispatch = useContext(DiaryDispatchContext);
  if (dispatch === undefined) {
    throw new Error(
      "useDiaryDispatch는 DiaryDispatchContext.Provider 안에서만 사용할 수 있습니다.",
    );
  }
  return dispatch;
};
