import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism"; // 원하는 테마로 변경 가능
import "prismjs/themes/prism-tomorrow.css";
import ComponentsBtn from "./ComponentsBtn";

const ComponentsLifecycle = () => {
    const [lifecycleStage, setLifecycleStage] = useState("Mounted");

    useEffect(() => {
        console.log("Component Mounted");
        setLifecycleStage("Mounted");

        return () => {
            console.log("Component Unmounted");
            setLifecycleStage("Unmounted");
        };
    }, []);

    useEffect(() => {
        if (lifecycleStage !== "Mounted") {
            console.log("Component Updated");
            setLifecycleStage("Updated");
        }
    }, [lifecycleStage]);

    return (
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

            <ComponentsBtn></ComponentsBtn>
        </div>
    );
};

export default ComponentsLifecycle;
