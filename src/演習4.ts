export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";

const today = new Date(2024, 9, 22);
const overdueTodos: Todo[] = initTodos.filter((todo) => todo.deadline < today && todo.isDone == false);
console.log("期日を過ぎている未完了Todoの一覧");
console.log(JSON.stringify(overdueTodos, null, 2));