import { useState } from "react";
import "./App.css";
import LikeBtn from "./components/LikeBtn";
import LikeorNot from "./components/LikeorNot";

function App() {
  const [name, setName] = useState("");
  // 좋아요를 누른 사람들 목록
  const [likedUsers, setLikedUsers] = useState([]);
  const onClick = () => {
    // 좋아요 누른 사람인지 확인
    const alreadyLiked = likedUsers.includes(name);
    if (alreadyLiked) {
      setLikedUsers(likedUsers.filter((user) => user !== name));
    } else {
      // 좋아요 누른 사람 목록에 추가
      setLikedUsers([...likedUsers, name]);
    }
  };

  return (
    <>
      <LikeBtn />
      <LikeorNot />

      <hr />

      <div>
        <h2>좋아요를 누른 사람</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요."
        ></input>
        <button onClick={onClick}>
          {alreadyLiked ? "좋아요 취소" : "좋아요"}
        </button>

        <p>현재 좋아요 수 : {likedUsers.length}</p>
        <p>누른 사람: {likedUsers.join(", ")} </p>
      </div>
    </>
  );
}

export default App;
