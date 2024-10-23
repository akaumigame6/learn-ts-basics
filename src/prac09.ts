export {};
import { Todo } from "./types";
import { initTodos } from "./initTodos";

const sortedTodos = [...initTodos].sort((a, b) => {
  return a.priority - b.priority;
});

const sortedTodos2 = [...initTodos].sort((a, b) => {
    return b.priority-a.priority;
  });

const sortedTodos3: Todo[] = [...initTodos].sort((a, b) => {
    if (a.isDone !== b.isDone) {
      return a.isDone ? 1 : -1;
    } else {
      return a.deadline.getTime() - b.deadline.getTime();
    }
  });

const sortedTodos4: Todo[] = [...initTodos].sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    } else {
      return a.deadline.getTime() - b.deadline.getTime();
    }
  });
  

console.log(JSON.stringify(initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));
console.log(JSON.stringify(sortedTodos2, null, 2));
console.log(JSON.stringify(sortedTodos3, null, 2));
console.log(JSON.stringify(sortedTodos4, null, 2));
