import { useRef } from "react";

export function useThrottle(callback: ()=>void, delay: number) {
    const lastRun = useRef(Date.now()); // 마지막 실행 시간

    return function () {
        const now = Date.now();
        if (now - lastRun.current < delay) {
            console.log(`${delay / 1000}초 뒤에 다시 시도하세요.`);
            return;
        }
        lastRun.current = now;
        callback();
    };
}