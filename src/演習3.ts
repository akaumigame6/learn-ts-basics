export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";

const targetId = 3;
const newName = "電気電子回路1の課題";
const updatedTodos: Todo[] = initTodos.map((todo) => { // mapメソッドを利用
    if (todo.id === targetId) {
      return { ...todo, name: newName }; // スプレッド構文を利用
    } else {
      return todo;
    }
  });

console.log(JSON.stringify(updatedTodos, null, 2));