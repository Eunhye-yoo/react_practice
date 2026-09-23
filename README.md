# React Practice

JavaScript 기초부터 React의 컴포넌트, 상태 관리, Hooks, Router까지 단계적으로 학습하며 작성한 실습 저장소입니다.

단순히 예제 코드를 보관하는 것보다 **JavaScript의 동작 원리를 먼저 익히고, React에서 상태와 컴포넌트가 어떻게 연결되는지 직접 구현하며 이해하는 과정**을 기록하는 데 목적이 있습니다.

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-18%20%2F%2019-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-6.x-CA4245?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Basic-339933?logo=nodedotjs&logoColor=white)

## Learning Flow

```text
JavaScript 기초
    ↓
ES6+ 문법 / 비동기 처리
    ↓
Node.js 기초
    ↓
React 프로젝트 구조
    ↓
Component / Props / Event
    ↓
State / Form / useRef
    ↓
useEffect / Life Cycle
    ↓
Todo List 등 실습
    ↓
React Router / useReducer / Context
    ↓
Memoization / Hooks 종합 복습
```

## Repository Structure

| Folder | 주요 학습 내용 |
| --- | --- |
| `chap01` | JavaScript 원시 타입, 연산, 객체 |
| `chap02` | Truthy/Falsy, 단락 평가, 구조 분해 할당, Spread/Rest, 배열 순회, Promise, async/await |
| `chap03_node.js` | Node.js 실행 환경 기초 |
| `chap04` | Vite 기반 React 프로젝트 구조와 기본 렌더링 |
| `chap05` | Component, Props, 조건부 렌더링, Event, State, Form 실습 및 개인 미션 |
| `chap06` | Counter App, 사칙연산 Calculator를 통한 상태 공유와 useRef 실습 |
| `chap07` | useEffect와 컴포넌트 생명주기 이해 |
| `chap08` | Todo List를 통한 컴포넌트 분리와 상태 관리 연습 |
| `chap12` | React Router, useReducer, Context, LocalStorage를 활용한 Diary App |
| `final_review` | 주요 React Hooks와 렌더링 동작 종합 복습 |

## What I Practiced

### 1. JavaScript Fundamentals

React를 배우기 전 JavaScript 문법과 데이터 처리 방식을 먼저 실습했습니다.

- Primitive Type
- Object
- Truthy / Falsy
- Short Circuit Evaluation
- Destructuring Assignment
- Spread / Rest
- Array Iteration
- Callback Function
- Promise
- async / await

특히 비동기 처리에서는 로그인 예제를 통해 성공과 실패 흐름을 나누어 연습했습니다.

### 2. Component & Props

화면을 하나의 큰 코드로 작성하지 않고 역할별 컴포넌트로 분리하고, 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방식을 실습했습니다.

예제:

- Header / Main / Footer 분리
- ProductCard
- TodoItem
- WelcomeMessage
- Button Component
- Counter의 Viewer / Controller 구조

### 3. State & Event

사용자의 입력이나 버튼 클릭에 따라 화면이 다시 렌더링되는 React의 상태 관리 방식을 학습했습니다.

- `useState`
- 클릭 이벤트 처리
- 조건부 렌더링
- 입력 폼 제어
- 여러 상태를 이용한 UI 변경
- 부모 컴포넌트에서 상태를 관리하고 자식에게 Props로 전달

좋아요 버튼, Counter, Form 등의 작은 예제를 통해 상태 변경과 리렌더링 관계를 확인했습니다.

### 4. useRef

렌더링과 직접 관계없는 값을 저장하거나 DOM 요소에 접근할 때 `useRef`를 사용하는 방식을 연습했습니다.

사칙연산 Calculator에서는 입력값 검증 후 필요한 Input으로 Focus를 이동하도록 구현했습니다.

### 5. useEffect & Component Life Cycle

컴포넌트가 생성되고 변경되고 사라지는 시점에 따라 실행되는 로직을 학습했습니다.

- Mount
- Update
- Unmount
- Dependency Array
- 상태 변경에 따른 Effect 실행

### 6. Todo List

Todo List 예제를 통해 화면을 기능별 컴포넌트로 나누고 상태 데이터를 전달하는 구조를 연습했습니다.

```text
App
├── Header
├── Editor
└── List
    └── TodoItem
```

### 7. Diary App

`chap12`에서는 이전에 배운 개념을 조합하여 페이지가 나뉜 Diary App을 단계적으로 구현했습니다.

주요 학습 내용:

- `react-router-dom`을 이용한 페이지 Routing
- 동적 URL Parameter
- `useReducer`를 이용한 상태 변경 로직 분리
- Context API를 이용한 전역 상태 전달
- Custom Hook을 통한 Context 사용
- LocalStorage를 이용한 데이터 저장
- 생성 / 수정 / 삭제 로직
- `useCallback`, `useMemo`를 이용한 불필요한 함수·객체 재생성 방지

### 8. Hooks Final Review

`final_review`에서는 주요 개념을 각각 독립된 예제로 다시 정리했습니다.

- Re-rendering
- `useState`
- `useRef`
- `useReducer`
- `useEffect`
- `useContext`
- `memo`
- `useCallback`
- `useMemo`

단순히 Hook의 문법을 외우기보다 **어떤 상황에서 왜 사용하는지 비교하며 복습하는 것**을 목표로 구성했습니다.

## Learning Approach

학습할 때 아래 과정을 반복했습니다.

**JavaScript 개념 이해 → 작은 예제 작성 → React Component로 분리 → State 흐름 확인 → 개인 미션 구현 → 종합 예제로 복습**

React에서는 특히 아래 질문에 답할 수 있도록 공부하고 있습니다.

- 이 상태는 어느 컴포넌트가 가지고 있어야 하는가?
- Props는 어느 방향으로 전달되는가?
- 상태가 바뀌면 왜 다시 렌더링되는가?
- `useEffect`는 언제 실행되는가?
- `useRef`와 `useState`는 어떤 차이가 있는가?
- 여러 컴포넌트가 같은 상태를 사용할 때 어떻게 구조화할 것인가?

## Related Repositories

- [SpringBoot_practice](https://github.com/Eunhye-yoo/SpringBoot_practice) — Spring MVC, Thymeleaf, Interceptor, JPA, QueryDSL 학습
- [study_log](https://github.com/Eunhye-yoo/study_log) — Java, Python, Network 기초 학습 기록
- [EduPOP](https://github.com/Eunhye-yoo/EduPOP) — Java / Spring 기반 학원 관리 서비스 팀 프로젝트

---

This repository is a record of my JavaScript and React learning process from fundamentals to practical implementation.
