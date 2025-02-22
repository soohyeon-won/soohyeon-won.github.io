import React, { useState } from "react"

import '../../styles/App.css'
import StatePracticeComp from "./StatePracticeComp";
import UploadComp from "./UploadComp";
import UseEffectComp from "./UseEffectComp";
import UseEffectCleanComp from "./UseEffectCleanComp";
import { UseRefComp, UseRefDomComp, UseRefRenderCount } from "./UseRefComp";
import { UseContextComp } from "./UseContextComp";
import { UseMemoComp } from "./UseMemoComp";
import { UseCallBackComp, UseCallBackComp2, UseCallBackCompLegacy } from "./UseCallBackComp";
import { UseReducerComp, UseReducerComp2 } from "./UseReducerComp";

// const 함수이름 = (매개변수) => { 함수의 로직 };
const PracticeComp = () => { 

    const [ isOn, setToggle ] = useState(true);
    const toggleBtn = () => setToggle(!isOn)

    const [price, setPrice] = useState(0);
    const incrementPrice = (price: number) => {
        setPrice((prevValue) => prevValue + price);
    };

    let [like, setLike] = useState(0);

    const [ titleText, setText ] = useState("placeholder");
    const setTitle = (text: string) => {
        console.log(text);
        setText(text);
    };
    const [ savedText, setSavedText ] = useState("");
    const setSavedTitle = () => setSavedText(titleText);

    let [titles, setTitles] = useState(['test1', 'test2']);

    function Modal() {
        return(
            <>
            <div>
                <h4>{titles[0]} <span onClick={() => {
                    setLike(like+1);
                    let copyTitles = titles
                    copyTitles[0] = 'A'
                    setTitles(copyTitles);
                    }}>좋아요👍</span> {like} </h4>
                <h4>{titles[1]}</h4>
            </div>
            <div></div>
            </> // 병렬 된 div를 하나로 묶어줌
        )
    }

    return <div> 
        <p>1. useState를 이용한 Toggle버튼</p>
        <button onClick={toggleBtn}>{isOn ? "ON":"OFF"}</button>
        <br></br>

        <p>2. 버튼에 있는 값 input으로 옮기기</p>
        <button onClick={() => incrementPrice(10)}>10+</button>
        <button onClick={() => incrementPrice(50)}>50+</button>
        <input value={price}></input>

        <p>3. input Text 저장하기</p>
        <input onChange={(input) => setTitle(input.target.value)}></input>
        <p>{titleText}</p>
        <button onClick={setSavedTitle}>저장</button>
        <p>{savedText}</p>

        <h1>UseState</h1>
        <Modal></Modal>
        <StatePracticeComp></StatePracticeComp>
        <UploadComp></UploadComp>

        <h1>UseEffect</h1>
        <UseEffectComp></UseEffectComp>
        <UseEffectCleanComp></UseEffectCleanComp>

        <h1>UseRef</h1>
        <UseRefComp></UseRefComp>
        <UseRefRenderCount></UseRefRenderCount>
        <UseRefDomComp></UseRefDomComp>

        <h1>UseContext</h1>
        <UseContextComp></UseContextComp>

        <h1>UseMemo</h1>
        <p>렌더링 - Component함수 호출 - 모든 내부 변수 초기화</p>
        <p>렌더링 - Memoization - 렌더링 - Component함수 호출, memoize된 값 사용</p>
        <UseMemoComp></UseMemoComp>

        <h1>UseCallBack</h1>
        <UseCallBackCompLegacy></UseCallBackCompLegacy>
        <UseCallBackComp></UseCallBackComp>
        <UseCallBackComp2></UseCallBackComp2>

        <h1>UseReducer</h1>
        <UseReducerComp></UseReducerComp>
        <UseReducerComp2></UseReducerComp2>
    </div>
}

// 파일 당 하나의 컴포넌트를 내보낼 때 직관적으로 관리, 사용할 때 이름 변경 자유로움
export default PracticeComp;

