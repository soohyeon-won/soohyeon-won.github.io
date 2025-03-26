'use client';

import React from "react";
// import { useState } from "react";
import { countState } from "./Atom";
import { useRecoilState } from "recoil";

// function LegacyCounter(props: { count: number, onUp: () => void }) {

//     return (
//         <div>
//             <p>현재 카운터 값은 {props.count} 입니다.</p>
//             <button onClick={() => props.onUp()}>+1</button>
//         </div>
//     );
// };

// function LegacyDisplayCounter(props: { count: number }) {

//     return (
//         <div>
//             <p>현재 카운터 값은 {props.count} 입니다.</p>
//         </div>
//     );
// };

// export const LagacyRecoilCounterTutorialComp = () => {

//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             {/* 상태가 많아지면, Props Drilling이 발생됨 중간 컴포넌트들은 관련없는데 props를 더 받아야 하는 문제 발생, 렌더링도 다시 일어남 */}
//             <LegacyCounter count={count} onUp={() => setCount(count + 1)} />
//             <LegacyDisplayCounter count={count} />
//         </div>
//     );
// }

function Counter() {

    const [count, setCount] = useRecoilState(countState);

    console.log('Counter render');

    return (
        <div>
            <p>현재 카운터 값은 {count} 입니다.</p>
            <button onClick={() => setCount(count+1)}>+1</button>
        </div>
    );
};

function DisplayCounter() {

    {/* 
        전역 상태의 countState를 구독하고 있다는 뜻. 
        state가 변경 될 때 컴포넌트가 렌더링 됨
        중간 컴포넌트는 렌더링 되지 않음.
    */}
    const [count] = useRecoilState(countState);

    console.log('DisplayCounter render');

    return (
        <div>
            <p>현재 카운터 값은 {count} 입니다.</p>
        </div>
    );
};

export const RecoilCounterTutorialComp = () => {

    return (
        <div>
            {/* 상태가 많아지면, Props Drilling이 발생됨 중간 컴포넌트들은 관련없는데 props를 더 받아야 하는 문제 발생, 렌더링도 다시 일어남 */}
            {/* <Counter />
            <DisplayCounter /> */}
            <Counter />
            {/* <DisplayCounter></DisplayCounter> */}
        </div>
    );
}