import React, { useEffect, useLayoutEffect, useState } from "react";

export const UseLayoutEffectComp = () => {
    const [count, setCount] = useState(0);

    // effect실행 => 화면 업데이트
    // 먼저 실행 됨.
    // 컴포넌트가 화면에 그려지기 이전
    // 공식문서: can hurt performance.
    // 동기적 실행
    useLayoutEffect(() => {
        console.log("useLayoutEffect", count);
    }, [count]);

    // 화면업데이트 => effect실행
    // 비동기 실행, 컴포넌트가 화면에 그려지는 과정을 블로킹 하지 않음.
    // 알아서 적절한 때에 호출 됨
    useEffect(() => {
        console.log("useEffect", count);
    }, [count]);

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={handleCountUpdate}>Update</button>
        </div>
    );
};
