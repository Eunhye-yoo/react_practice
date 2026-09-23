function add(a, b, callback) {
  setTimeout(() => {
    let sum = a + b;
    callback(sum);
  }, 300);
}

add(1, 2, (value) => {
  console.log("add함수 결과: ", value);
});

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// setTimeout() 동안 아래에 위치한 반복문 실행
// 기다리는 동작, 반복 동작 동시에 진행하는걸로 보임
// 자바스크립트는 단일(싱글) 쓰레드 사용 -> 동시에 일 처리 X
