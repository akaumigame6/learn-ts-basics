export {};
import { Todo } from "./types"; // 型定義の読込み

// Todo型のオブジェクトを作成
const todo1: Todo = {
    id:1,
    name: "TypeScriptの勉強",  // カンマで区切り
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 11, 9, 45),
  };
  
  // Todo型のオブジェクトを作成
  const todo2: Todo = {
    id:2,
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 10, 16, 0),
  };

  console.log(JSON.stringify(todo1, null, 2));
  console.log(JSON.stringify(todo2, null, 2));

import { printTodo } from "./utils/printTodo";

// todo1 と todo2 の初期化処理 (略)

printTodo(todo1);
printTodo(todo2);