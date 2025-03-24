import React from "react";
import { useState } from "react";

function Counter(props: {count: number, onUp: () => void}) {
    
    return (
        <div>
            <p>현재 카운터 값은 {props.count} 입니다.</p>
            <button onClick={() => props.onUp()}>+1</button>
        </div>
    );
};

export const RecoilCounterTutorialComp = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <Counter count={count} onUp={() => setCount(count+1)} />
        </div>
    );
}