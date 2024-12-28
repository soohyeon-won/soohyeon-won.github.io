import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"; // 원하는 테마로 변경 가능
import "prismjs/themes/prism-tomorrow.css";
import ComponentsBtn from "./ComponentsBtn";

const ComponentsLifecycle = () => {
    const [lifecycleStage, setLifecycleStage] = useState("Mounted"); // React의 상태 관리 Hook

    // `useEffect` 훅은 컴포넌트가 마운트되거나 업데이트될 때 특정 작업을 수행하도록 합니다. 
    // 두 번째 인자로 전달되는 의존성 배열을 통해 실행 타이밍을 조정할 수 있습니다
    useEffect(() => { // useEffect**는 컴포넌트가 렌더링된 이후 실행됩니다.
        console.log("Component Mounted");
        setLifecycleStage("Mounted");

        return () => {
            console.log("Component Unmounted");
            setLifecycleStage("Unmounted");
        };
    }, []); // (빈 배열)을 의존성 배열로 전달했기 때문에 이 코드는 컴포넌트가 **마운트(생성)**되거나 **언마운트(제거)**될 때만 실행

    useEffect(() => {
        console.log("두번째 lifecycleStage:", lifecycleStage);
        if (lifecycleStage !== "Mounted" && lifecycleStage !== "Updated") {
            console.log("두번째 Component Updated");
            setLifecycleStage("Updated");
        }
    }, [lifecycleStage]);

    // 언마운트 시: useEffect의 클린업 함수(return으로 정의된 함수)가 호출됩니다.
    return ( // 클린업 함수
        <div>
            <p>함수형 컴포넌트: {lifecycleStage}</p>
            <p>
                함수형 컴포넌트에는 전통적인 라이프사이클 메서드가 없었습니다. 그러나 React Hooks가 도입되면서 함수형 컴포넌트에서도 라이프사이클
                관리가 가능해졌습니다.
            </p>
            <p>useEffect Hook을 사용하여 componentDidMount, componentDidUpdate, componentWillUnmount와 같은 기능을 수행할 수 있습니다.</p>
            <p>
                예를 들어,
                <SyntaxHighlighter language="typescript" style={solarizedlight}>
                    {"useEffect(() => { /* 작업을 수행합니다. */ }, [])>"}
                </SyntaxHighlighter>
                return 문 내에 정리 함수로 componentWillUnmount 작업을 수행할 수 있습니다.
            </p>

            <ComponentsBtn buttonId={10}></ComponentsBtn>
        </div>
    );
};

export default ComponentsLifecycle;
