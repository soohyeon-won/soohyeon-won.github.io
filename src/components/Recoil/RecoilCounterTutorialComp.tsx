import React from "react";
import { useState } from "react";

function Counter(props: { count: number, onUp: () => void }) {

    return (
        <div>
            <p>현재 카운터 값은 {props.count} 입니다.</p>
            <button onClick={() => props.onUp()}>+1</button>
        </div>
    );
};

function DisplayCounter(props: { count: number }) {

    return (
        <div>
            <p>현재 카운터 값은 {props.count} 입니다.</p>
        </div>
    );
};

export const RecoilCounterTutorialComp = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            {/* 상태가 많아지면, Props Drilling이 발생됨 중간 컴포넌트들은 관련없는데 props를 더 받아야 하는 문제 발생, 렌더링도 다시 일어남 */}
            <Counter count={count} onUp={() => setCount(count + 1)} />
            <DisplayCounter count={count} />
        </div>
    );
}