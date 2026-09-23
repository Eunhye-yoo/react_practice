// id, pw 로그인 요청 -> 서버 응답 기다리는 동안 UI는 계속 반응
// 두가지 작업을 비동기 처리 (웹, 앱에서 필수)
function login(id, pw, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("로그인 요청");
      resolve(id, pw); // 로그인 서버 호출
    }, 3000);
  });
}

// 2. 사용자 정보 불러오기
function getUserInfo(id, pw) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // DB에서 전달 받은 회원 객체
      const user = { name: "홍길동", age: 30 };
      console.log("회원 정보 불러오기", user);
      resolve(id, pw); // 로그인 서버 호출
    }, 2000);
  });
}

// 3. 웹 페이지에 사용자 정보 표시(마이페이지)
function displayUserInfo(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("사용자 정보 표시 성공", user);
      resolve();
    }, 1500);
  });
}

// 1 -> 2 -> 3 순서로 실행
login("hong", "1234")
  .then((id, pw) => getUserInfo(id, pw))
  .then((user) => displayUserInfo(user))
  .then(() => console.log("모든 로그인 관련 작업 완료"));
