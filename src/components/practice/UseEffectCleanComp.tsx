import React, { useEffect } from "react";
import { useState } from "react"

export const Timer = () => {

    // 이 상태로 두게 되면 타이머가 안보여도 계속 로그가 찍히게됨
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log('1초 타이머...');
    //     }, 1000);
    // }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('1초 타이머...');
        }, 1000);

        // clean up
        // timer component가 unmount될 때 (화면에서 사라질 때) 타이머를 끝내줌
        return () => {
            clearInterval(timer);
            console.log('타이머 종료')
        };
    }, []);

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    );
};

const UseEffectCleanComp = () => {

    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}> Toggle timer </button>
        </div>
    );
};

export default UseEffectCleanComp;