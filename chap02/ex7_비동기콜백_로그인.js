// id, pw 로그인 요청 -> 서버 응답 기다리는 동안 UI는 계속 반응
// 두가지 작업을 비동기 처리 (웹,앱에서 필수)

// 1. 로그인 요청 - 서버통신 필요
function login(id, pw, callback) {
  setTimeout(() => {
    console.log("로그인 성공");
    callback(id, pw); // 로그인 서버 호출
  }, 3000);
}

// 2. 사용자 정보 불러오기
function getUserInfo(id, pw, callback) {
  setTimeout(() => {
    // DB에서 전달받은 회원 객체
    const user = { name: "홍길동", age: 30 };
    console.log("사용자 정보 불러오기 성공", user);
  }, 2000);
}

// 3. 웹 페이지에 사용자 정보 표시(마이페이지)
function displayUserInfo(user, callback) {
  setTimeout(() => {
    console.log("사용자 정보 표시 성공", user);
    callback();
  }, 15000);
}

// 1 -> 2 -> 3 순서로 실행
// 콜백 체인 실행
// 콜백 지옥 주의
login("hong", "1234", (id, pw) => {
  getUserInfo(id, pw, (user) => {
    displayUserInfo(user, () => {
      console.log("로그인 완료");
    });
  });
});
