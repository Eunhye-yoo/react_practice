import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  // 사용자가 입력한 여러개의 값을 관리하기 위한 state를 객체로 생성
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]); // initData가 바뀔 때마다 실행됨

  // [리팩토링]
  const onChangeInput = useCallback((e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // inputRef는 리렌더링에 관여하지 않음
  // input 스테이트와 ref를 동기화
  const inputRef = useRef(input);
  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  const onSubmitButtonClick = useCallback(() => {
    // 작성완료 버튼 클릭시 ref의 최신값을 전달 -> 사용자가 입력한 state값 전달
    onSubmit(inputRef.current);
  }, [onSubmit]);

  // [리팩토링] 감정선택시 이벤트 처리기 분리
  // 기존에는 map을 이용해서 화살표 함수를 매번 만들어서  EmotionItem 컴포넌트에 전달
  // 따라서 계속 리렌더링 발생
  const onChangeEmotion = useCallback((emotionId) => {
    setInput((prev) => ({
      ...prev,
      emotionId,
    }));
  }, []);

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={onChangeEmotion}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default memo(Editor);
