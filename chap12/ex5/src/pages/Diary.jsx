import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { getStringedDate } from "../util/get-stringed-date";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`일기장 - ${params.id}`);

  const currentDiaryItem = useDiary(params.id);
  if (!currentDiaryItem) {
    return <div>데이터 로딩중... 잠시만 기다려주세요.</div>;
  }
  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
