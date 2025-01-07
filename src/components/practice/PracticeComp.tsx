import React from "react"
import ComponentsLifecycle from "./ComponentsLifecycle"
import useWindowSize from "./StudyCustomHooks";

// const 함수이름 = (매개변수) => { 함수의 로직 };
const PracticeComp = () => {  

    const { width, height } = useWindowSize();

    return <div>
        <ComponentsLifecycle></ComponentsLifecycle>
        <h1>Window Size</h1> {/* 제목 */}
        <p>Width: {width}px, Height: {height}px</p>
    </div>
}

// 파일 당 하나의 컴포넌트를 내보낼 때 직관적으로 관리, 사용할 때 이름 변경 자유로움
export default PracticeComp;

