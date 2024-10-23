export {};
import { dlChack, dlChack_st } from "./utils/deadlineChack"; // 型定義の読込み
import { Todo } from "./types"; // 型定義の読込み

// Todo型のオブジェクトを作成
const todo1: Todo = {
    id:1,
    name: "TypeScriptの勉強",  // カンマで区切り
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 10, 30, 9, 45),
};

console.log(`${dlChack(todo1)}`);
console.log(`${dlChack_st(todo1)}`);
