import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../contexts/DiaryContext";

// id를 받아서 DiaryStateContext에서
// 일치하는 일기 데이터를 찾아서 반환하는 hook -> 연산수행

// [리팩토링] 메모이제이션을 사용하여 바로 계산 처리
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();

  const curDiaryItem = useMemo(
    () => data.find((item) => String(item.id) === String(id)),
    [data, id],
  );

  // 부가 기능은 useEffect로 처리
  useEffect(() => {
    if (!curDiaryItem) {
      window.alert("해당 일기가 존재하지 않습니다.");
      nav("/", { replace: true });
    }
  }, [curDiaryItem]);

  return curDiaryItem;
};

export default useDiary;
