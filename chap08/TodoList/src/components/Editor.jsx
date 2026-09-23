import { useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    onCreate("새로운 Todo");
    alert("새로운 Todo가 추가되었습니다.");
  };

  return (
    <div className="Editor">
      <input
        type="text"
        placeholder="새로운 Todo..."
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
