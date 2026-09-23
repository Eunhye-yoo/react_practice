# React Practice

JavaScript 기본 문법에서 React 컴포넌트·상태·Hooks까지 실습한 저장소입니다. 여러 개의 **독립적인 예제 프로젝트**로 구성되어 있으며, 학습 코드를 그대로 기록합니다.

| 경로 | 주요 내용 |
| --- | --- |
| [`chap01`](./chap01/) · [`chap02`](./chap02/) | JavaScript 타입·객체, Truthy/Falsy, 구조 분해, 배열 순회, 콜백·Promise·async/await |
| [`chap03_node.js`](./chap03_node.js/) | Node.js 실행 환경 기초 |
| [`chap04`](./chap04/) | Vite 기반 React 프로젝트와 렌더링 |
| [`chap05`](./chap05/) | 컴포넌트·Props·이벤트·State·폼, 별도 `_mission` 실습 |
| [`chap06`](./chap06/) | Counter, Calculator로 상태 전달과 `useRef` 연습 |
| [`chap07`](./chap07/) | `useEffect`와 렌더링 시점 |
| [`chap08/TodoList`](./chap08/TodoList/) | Header·Editor·List·TodoItem 분리와 상태 관리 |
| [`chap12`](./chap12/) | 단계별 Diary App: Router, Reducer, Context, LocalStorage |
| [`final_review`](./final_review/) | Hooks와 리렌더링 개념 복습 |

## 살펴볼 예제

**[Diary App — chap12/ex5](./chap12/ex5/)**  
페이지 라우팅과 동적 URL, `useReducer`를 이용한 일기 생성·수정·삭제, Context와 Custom Hook을 통한 상태 전달, LocalStorage 저장을 묶어 연습했습니다. `useCallback`·`useMemo` 적용 코드도 포함됩니다. LocalStorage에 저장된 데이터의 형식을 가정하는 학습 예제이며, 배포용 서비스로 검증한 것은 아닙니다.

**[TodoList — chap08](./chap08/TodoList/)**  
입력과 목록 컴포넌트를 분리하고, 부모의 상태를 자식에게 Props로 전달하는 흐름을 확인합니다.

## 실행 방법

React 예제는 각 하위 폴더에 별도의 `package.json`이 있습니다. 예를 들어 Diary App을 실행하려면:

~~~bash
cd chap12/ex5
npm install
npm run dev
~~~

루트에서 실행하는 단일 앱은 없습니다. 예제에 따라 React 18 또는 19, React Router 6, Vite 버전이 다르므로 각 폴더의 `package.json`을 기준으로 확인하세요.
