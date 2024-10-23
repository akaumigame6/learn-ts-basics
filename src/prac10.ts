export {};
import dayjs from "dayjs";
import { Todo } from "./types";
import { initTodos } from "./initTodos";
const dtFmt = "YYYY/MM/DD HH:mm";

const listItemsTodos: string[] = initTodos
  .filter((todo) => !todo.isDone)
  .sort((a, b) => a.priority - b.priority)
  .map(
    (todo) =>
      `<li>優先度[${todo.priority}] ${todo.name}` +
      `...期限${dayjs(todo.deadline).format(dtFmt)}</li>`
  );
console.log(JSON.stringify(initTodos, null, 2)); // 変更操作の影響を受けていない
console.log(JSON.stringify(listItemsTodos, null, 2));

const deleteTodoById = (todos: Todo[], id: number): Todo[] => {
  if (!Number.isInteger(id) || id < 0) {
    return todos;
  }
  return todos.filter((todo) => todo.id !== id);
};

const stringifyTodos = (todos: Todo[]): string[] =>
  todos.map(
    (todo) =>
      `id=${todo.id} ${todo.name} ` +
      `期限 ${dayjs(todo.deadline).format(dtFmt)}`
  );

const todo = [...initTodos];
const updatedTodos = deleteTodoById(todo, 2);

console.log("Before:", stringifyTodos(todo));
console.log("After:", stringifyTodos(updatedTodos));