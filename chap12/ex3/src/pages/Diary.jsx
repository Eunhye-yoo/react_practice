import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const currentDiaryItem = useDiary(params.id);
  if (!currentDiaryItem) {
    return <div>데이터 로딩중... 잠시만 기다려주세요.</div>;
  }
  const { createdDate, emotionId, contents } = currentDiaryItem;
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
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
