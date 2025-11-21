/**
 * 버튼을 눌렀을 때 카운트 되는 상태
 * 1씩 증가
 * useState *
 * const [state,setState] = useState(initavalue);
 * state : 현재 상태 값
 * setState : 상태를 바꾸는 함수
 * initaValue :  초기값
 * 비동기식, 배치 처리
 *  state 값이 즉시 변경 되지 않는다
 */
import { useState } from 'react';
const  StateBass = ()=>{
    // let count = 0;
    // const add =()=>{
    //     count++;
    // }
    const [count, setCount] = useState(0);
    const add = ()=>{
        setCount((prev)=>{return prev+1}); //1
        setCount((prev)=>{return prev+1}); //1
        setCount( aaa => aaa+1 ); //1
        // setCount(count+1); //1
        // setCount(count+1); //2
        // setCount(count+1); //3
    }
    return (
        <h2>하이</h2>
    );
}
export default StateBass;