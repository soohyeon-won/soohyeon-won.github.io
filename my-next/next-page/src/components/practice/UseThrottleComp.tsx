import React, { useRef } from "react";
import { useState } from "react";
import { useThrottle } from "./hooks/UseThrottle";

// Throttle: 일정 시간 동안 한 번만 실행되도록 하는 것
export const UseThrottleComp = () => {
    const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

    const lastRun = useRef(Date.now()); // 마지막 실행 시간

    const handleClick = () => {
        const now = Date.now();
        if (now - lastRun.current < 2000) {
            console.log("2초 뒤에 다시 시도하세요.");
            return;
        }
        lastRun.current = now;
        generateLottoNumbers();
    };

    const generateLottoNumbers = () => {
        const numbers = new Set<number>();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1; // 1부터 45까지
            numbers.add(randomNum);
        }
        console.log("로또 번호 생성");
        setLottoNumbers(Array.from(numbers).sort((a, b) => a - b)); // 정렬된 배열로 변환
    };

    return (
        <div>
            <h1>로또 번호 생성기</h1>
            <button onClick={handleClick}>번호 생성</button>
            <div>
                {lottoNumbers.length > 0 && (
                    <p>생성된 번호: {lottoNumbers.join(", ")}</p>
                )}
            </div>
        </div>
    );
};


export const UseThrottleCustomHookComp = () => {
    const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

    const handleClick = useThrottle(() => {
        generateLottoNumbers();
    }, 2000);

    const generateLottoNumbers = () => {
        const numbers = new Set<number>();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1; // 1부터 45까지
            numbers.add(randomNum);
        }
        console.log("로또 번호 생성");
        setLottoNumbers(Array.from(numbers).sort((a, b) => a - b)); // 정렬된 배열로 변환
    };

    return (
        <div>
            <h1>로또 번호 생성기</h1>
            <button onClick={handleClick}>번호 생성</button>
            <div>
                {lottoNumbers.length > 0 && (
                    <p>생성된 번호: {lottoNumbers.join(", ")}</p>
                )}
            </div>
        </div>
    );
};