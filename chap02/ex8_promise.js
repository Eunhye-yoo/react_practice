// Promise 객체 생성
// 비동기 작업을 좀 더 쉽게 처리하도록 도와주는 객체

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    // resolve("성공");
    reject("실패");
  }, 2000);
});

console.log(promise);
