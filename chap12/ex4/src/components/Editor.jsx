import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
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

  // 초기 렌더링 이후에 prop으로 전달된 데이터를 기반으로 상태를 설정해야 하기 때문에 useEffect 사용
  useEffect(() => {
    // initData가 존재하면(= 수정 모드일 경우),
    // initData를 기반으로 input 상태값을 설정한다.
    if (initData) {
      setInput({
        ...initData,
        // 특히 createdDate는 숫자(timestamp)로 되어있으므로,
        // 이를 Date 객체로 변환해 input에서 사용할 수 있게 함.
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]); // initData가 바뀔 때마다 실행됨

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // 날짜 변경시 Date객체가 아닌 문자열이 반환되므로
    // 문자열을 Date객체로 변환해야 한다.
    if (name === "createdDate") {
      value = new Date(value);
    }

    // 기존의 input 스테이트 값 유지(emotionId, content)
    // 현재 입력이 발생한 태그의 name을 input스테이트의 key값으로 활용
    // 현재 입력이 발생한 태그의 value를 위에서 찾은 key에 대응되는 값으로 활용
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

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
            // 직접 만든 컴포넌트의 경우 이벤트 객체를 직접 생성해서 전달해야함
            // (컴포넌트는 이벤트 객체가 자동으로 전달 X)
            <EmotionItem
              // onClick이라는 props를 EmotionItem 컴퍼넌트에게 전달
              // 이벤트 아님!!
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
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

export default Editor;
