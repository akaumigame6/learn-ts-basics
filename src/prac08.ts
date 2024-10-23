export {};
const numArr: number[] = [1, 2, 3, 4, 5, 6];
const oddArr: number[] = numArr.filter((num) => {
  return num % 2 === 1; // 奇数か? ture or false
});
console.log(`numArr = ${numArr}`);
console.log(`oddArr = ${oddArr}`);

import { initTodos } from "./initTodos";

const updatedTodos1 = initTodos.filter((todo) => !todo.isDone);
console.log("未完了Todoの一覧");
console.log(JSON.stringify(updatedTodos1, null, 2));

const targetId = 2; // 削除対象のTodoのID
const updatedTodos2 = initTodos.filter((todo) => todo.id !== targetId);
console.log("削除処理後のTodoの一覧");
console.log(JSON.stringify(updatedTodos2, null, 2));