
// Ref의 변화 -> No fpsejfld -> 변수 값 유지 (불필요한 렌더링 줄임)
// State변화 -> 렌더링 -> ref값 유지
// DOM 요소에 접근하여 여러가지 일을 할 수 있음

import React, { useEffect } from "react";
import { useState, useRef } from "react";

// 1. input을 클릭하지 않아도 input창 focus 하기
export const UseRefComp = () => {

    const [count, setCount] = useState(0);
    const countRef = useRef(0); // countRef.current 로 접근
    let countVar = 0;

    const [renderer, setRenderer] = useState(0);

    console.log(countRef);

    console.log('렌더링11');

    // 렌더링 O
    const increaseCountState = () => {
        setCount(count + 1);
    };

    // 렌더링 X
    // Ref는 수정해도 렌더링을 유발하지않음.
    // 바뀔때마다 렌더링 할 필요 없는 값들은 Ref로 선언해서 성능저하를 일으키지 않게함
    const increaseCountRef = () => {
        countRef.current += 1;
        console.log('Ref: ', countRef.current);
    };

    // 렌더링 X
    // mount -> unMount까지 같은 값을 제공
    const increaseCountVar = () => {
        countVar += 1;
        console.log('countVar: ', countVar);
    };

    // 렌더링 시에 새로고침 됨, 초기값으로 변경됨
    const doRendering = () => {
        setRenderer(renderer+1);
    };

    const printResults = () => {
        console.log('ref:',countRef.current, 'var: ', countVar)
    }

    return (
        <div>
            <p>State: {count}</p>
            <button onClick={increaseCountState}>Up state</button>
            <p>Ref: {countRef.current}</p>
            <button onClick={increaseCountRef}>Up Ref</button> 
            <p>countVar: {countVar}</p>
            <button onClick={increaseCountVar}>Up countVar(변수)</button> 
            <button onClick={doRendering}>렌더링</button> 
            <button onClick={printResults}>Ref, var 값 출력</button> 
        </div>
    );
};

export const UseRefRenderCount = () => {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);
    const renderCountRef = useRef(1);

    useEffect(() => {
        console.log('렌더링 카운트')
        renderCountRef.current += 1
    });

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count+1)}>Up RenderCount</button>
        </div>
    );
};