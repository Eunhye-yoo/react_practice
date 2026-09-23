import "./Main.css";

const Main = () => {
  // 로그인 시 사용자 정보 반환
  const user = {
    name: "유은혜",
    isLogin: true,
  };

  // 로그인이 되어있으면 로그아웃 버튼을, 아니면 로그인 버튼을 보여준다.
  if (user.isLogin) {
    return (
      <div>
        <h2>{user.name}님 환영합니다.</h2>
        <button className="logout">로그아웃</button>
      </div>
    );
  } else {
    return (
      <div>
        <button>로그인</button>
      </div>
    );
  }
};

export default Main;
