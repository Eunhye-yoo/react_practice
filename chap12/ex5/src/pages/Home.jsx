import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useState, useContext, useMemo, useCallback } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryStateContext } from "../contexts/DiaryContext";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  usePageTitle(`감정일기장`);

  // [리팩토링]
  const monthlyData = useMemo(
    () => getMonthlyData(pivotDate, data),
    [pivotDate, data],
  );

  // [리팩토링] pivotDate에 대한 의존성 제거
  const onIncreaseMonth = useCallback(() => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }, []);

  const onDecreaseMonth = useCallback(() => {
    setPivotDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }, []);

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
