export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";
import dayjs from "dayjs";

const dtFmt = "YYYY/MM/DD HH:mm";
const formattedTodos: string[] = initTodos.map((t: Todo) => {
  const str =
    `<li>[${t.id}] ${t.name} 優先度${t.priority} ` +
    `(期限${dayjs(t.deadline).format(dtFmt)})` +
    (t.isDone ? "【済】" : "") +
    "</li>";
  return str;
});

console.log(formattedTodos);

console.log("プロパティ変更前");
console.log(JSON.stringify(initTodos, null, 2));
// React の useState の更新関数
// setTodos(initTodos);

// 推奨されるプロパティ変更
const targetId = 4;
const updatedTodos = initTodos.map((todo) => { // mapメソッドを利用
  if (todo.id === targetId) {
    return { ...todo, isDone: false }; // スプレッド構文を利用
  } else {
    return todo;
  }
});
console.log("プロパティ変更後");
console.log(JSON.stringify(updatedTodos, null, 2));
// React の useState の更新関数
// setTodos(updatedTodos);