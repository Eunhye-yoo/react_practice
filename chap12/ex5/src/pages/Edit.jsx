import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryDispatchContext } from "../contexts/DiaryContext";

const Edit = () => {
  const params = useParams(); // url에서 /edit뒤에오는 값 반환 ex) {id:3}
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  usePageTitle(`일기 수정`);

  const currentDiaryItem = useDiary(params.id);
  if (!currentDiaryItem) {
    return <div>데이터 로딩중... 잠시만 기다려주세요.</div>;
  }

  const onClickDelete = () => {
    // 삭제의 경우 사용자에게 한번 더 확인 메세지 표시되는 것이 일반적 (확인과 취소버튼이 있는 js 입력창은? 확인-true, 취소-false)
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 일기 삭제 로직 (App 컴퍼넌트에 이미 만들어놓음 : Context에서 가져오면됨)
      onDelete(params.id);
      // 일기 삭제되면 자동으로 Home 페이지로 이동하고 뒤로가기 방지
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
