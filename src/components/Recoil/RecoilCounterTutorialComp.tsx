import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { countState } from "./RecoilMainComp";

function LegacyCounter(props: { count: number, onUp: () => void }) {

    return (
        <div>
            <p>현재 카운터 값은 {props.count} 입니다.</p>
            <button onClick={() => props.onUp()}>+1</button>
        </div>
    );
};

function LegacyDisplayCounter(props: { count: number }) {

    return (
        <div>
            <p>현재 카운터 값은 {props.count} 입니다.</p>
        </div>
    );
};

export const LagacyRecoilCounterTutorialComp = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            {/* 상태가 많아지면, Props Drilling이 발생됨 중간 컴포넌트들은 관련없는데 props를 더 받아야 하는 문제 발생, 렌더링도 다시 일어남 */}
            <LegacyCounter count={count} onUp={() => setCount(count + 1)} />
            <LegacyDisplayCounter count={count} />
        </div>
    );
}

function Counter() {

    const [count, setCount] = useRecoilState(countState);

    return (
        <div>
            <p>현재 카운터 값은 {count} 입니다.</p>
            <button onClick={() => setCount(count+1)}>+1</button>
        </div>
    );
};

function DisplayCounter() {

    const [count] = useRecoilState(countState);

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
            <Counter />
            <DisplayCounter />
        </div>
    );
}