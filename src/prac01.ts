export {}; // ファイルをモジュールとして扱いスコープを分離するために必要
const userName: string = "Bob";
// console.log(`Hi, ${userName}.`);
// Date型の変数 deadline の宣言と初期化
let deadline: Date = new Date(2024, 12, 2, 11, 45);

// 年、月、日、時、分を取得してフォーマット
const year = deadline.getFullYear();
const month = String(deadline.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため +1
const day = String(deadline.getDate()).padStart(2, '0');
const hours = String(deadline.getHours()).padStart(2, '0');
const minutes = String(deadline.getMinutes()).padStart(2, '0');

//上の処理を関数化(function形式)
function dateSet(dayDate:Date): string{
    const year = dayDate.getFullYear();
    const month = String(dayDate.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため +1
    const day = String(dayDate.getDate()).padStart(2, '0');
    const hours = String(dayDate.getHours()).padStart(2, '0');
    const minutes = String(dayDate.getMinutes()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
//アロー関数形式
const dateSet_2 = (dayDate:Date) : string=>{
    const year = dayDate.getFullYear();
    const month = String(dayDate.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため +1
    const day = String(dayDate.getDate()).padStart(2, '0');
    const hours = String(dayDate.getHours()).padStart(2, '0');
    const minutes = String(dayDate.getMinutes()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

import dayjs from "dayjs";
import 'dayjs/locale/ja';

dayjs.locale('ja');

const dtFmt = "YYYY/MM/DD HH:mm(ddd)";
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

const str =
  `期限 ${dayjs(deadline).format(dtFmt)}` +
  `(登録日 ${dayjs(cratedAt).format(dtFmt)})`;
console.log(str);

// フォーマットした文字列をコンソールに出力
console.log(`${year}/${month}/${day} ${hours}:${minutes}`);
console.log(`${dateSet(deadline)}`);
console.log(`${dateSet_2(deadline)}`);