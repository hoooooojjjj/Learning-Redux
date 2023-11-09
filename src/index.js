import { createStore } from "redux"; // 상태를 저장하는 저장소

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// 상태 변화를 처리하는 함수 / 업데이트된 상태를 return 함
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier); // 상태를 저장하는 곳

const onChange = () => {
  number.innerText = countStore.getState();
};

// 상태변화를 감지하는 함수 = 상태 변화가 있을 때 마다 인자로 전달된 함수가 실행됨
countStore.subscribe(onChange);

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
