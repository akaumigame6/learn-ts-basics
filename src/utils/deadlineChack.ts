import dayjs from "dayjs";
import { Todo } from "../types"; // 型定義の読込み

export const dlChack=({isDone,  deadline}:Todo):boolean=>{
    let naw : number = dayjs().toDate().getTime();
    return (naw<deadline.getTime() && isDone!=false);
}

//未完了で期限を過ぎていなければ 【未】基礎物理3の宿題 (期限まで残りXX時間)、期限を過ぎていれば 【未】基礎物理3の宿題 (期限をXX時間超過)
export const dlChack_st=({name ,isDone,  deadline}:Todo):string=>{
    let naw : number = dayjs().toDate().getTime();
    console.log(`${naw}:${deadline.getTime()};${dayjs().toDate()}`);
    console.log(naw<=deadline.getTime());
    if(isDone===true){
        return `【済】${name}`;
    }else if(naw<=deadline.getTime()){
        let time : number = (deadline.getTime()-naw)/3600000;
        return `【未】${name} (期限まで残り${time}時間)`;
    }else{
        let time : number = (naw-deadline.getTime())/3600000;
        return `【未】${name} (期限を${time}時間超過)`;
    }
}