import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { DiaryDispatchContext } from "../contexts/DiaryContext";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle(`새 일기 쓰기`);

  const onSubmit = useCallback(
    (input) => {
      onCreate(input.createdDate.getTime(), input.emotionId, input.content);
      nav("/", { replace: true });
    },
    [onCreate, nav],
  );

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
