// Promise를 더 편하게 사용하기 위해
// async
// 특정 함수를 비동기 함수로 만들어주는 키워드

async function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}
console.log(add(1, 2)); // Promise 객체 반환

// await
// async 함수 내부에서만 사용 가능
// 비동기 함수가 결과를 반환할 때까지 기다려주는 키워드

async function main() {
  const result = await add(1, 2);
  console.log(result);
}

main();
