import React, { useState } from "react";

// React.memo로 최적화하기 (with UseMemo, UseCallBack)
// 리액트에서는 컴포넌트가 랜더링 될 때 하위 컴포넌트들도 랜더링됨
// React.memo를 이용하면 prop check를 통해 데이터가 바뀌었을 때만 
// 이미 메모리에 저장해둔 컴포넌트를 재사용하도록 함
// 렌더링 횟수 감소를 할 수 있지만 메모이징을 과도하게 사용하면 메모리를 추가적으로 사용하게 됨
// 아래의 두 경우 체크
// 1. 컴포넌트가 같은 props로 자주 렌더링될 때
// 2. 컴포넌트가 렌더링 될 때 복잡한 계산을 수행할 때
// + 컴포넌트에 UseState가 있으면 그것으로 렌더링 됨, props check만 하는 것
// !!! ReactMemo는 오직 Props 변화에만 의존하는 최적화 방법입니다 !!!

// React.memo는 고차 컴포넌트
const ReactMemoComp = () => {

    const [parentRC, setParentRC] = useState(0);

    const childProp = () => {
        return {
            age: 10
        }
    }

    const childCallBack = () => {
        console.log('childCallBack 렌더링')
        return;
    }

    return (
        <div>
            <p> parent rendering count: </p>
            <button onClick = { () => setParentRC(parentRC+1) }>Parent RC+1</button>
            <ReactMemoUseMemoChildComp childProps={childProp()} />
            <ReactMemoUseCallBackChildComp childCallBack={childCallBack} />
        </div>
    );
}

// 1. Object 생성
interface ChildProp {
    childProps: {
        age: number;
    };
}

// 2. Prop에 Object 주입 => 렌더링 결과 확인

// 3. UseMemo로 Object 변경

const ReactMemoUseMemoChildComp = ({childProps}: ChildProp) => {

    const [parentRC, setParentRC] = useState(0);

    return (
        <div>
            <p> child rendering count: </p>
            <button onClick = { () => setParentRC(parentRC+1) }>Child RC+1</button>
            <p> prop age : {childProps.age}</p>
        </div>
    );
}

interface CallBackChildProps {
    childCallBack: () => void;
}

// 4. Prop에 함수 주입 -> UseCallBack 변경
const ReactMemoUseCallBackChildComp = ({childCallBack}: CallBackChildProps) => {

    const [parentRC, setParentRC] = useState(0);

    return (
        <div>
            <p> child rendering count: </p>
            <button onClick = { () => setParentRC(parentRC+1) }>Child RC+1</button>
        </div>
    );
}

export default ReactMemoComp;