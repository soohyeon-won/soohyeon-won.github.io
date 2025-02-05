import React, { useState } from "react";


export const UseContextComp = () => {
    // Prop Drilling
    // 단점: 모든 중간 컴포넌트들은 필요없는 Props를 알게됨
    // 전달과정에서 이슈가 생기면 부모 컴포넌트들을 하나씩 찾아서 수정해줘야함
    // 
    // useContext를 이용해서 Context를 통해 방출된 데이터를 알 수 있게 함
    // 단점: 컴포넌트를 재사용하기 어려워짐.
    // 다양한 레벨의 많은 컴포넌트들에게 같은 데이터를 전달할 때 사용
    // 사용예제1 - 다크모드 전역 변경

    const [isDark, setIsDark] = useState(false);

    return (
        <div>
            <p>{isDark}</p>
            <button onClick={() => setIsDark(!isDark)}>다크모드 선택</button>
            <Header isDark={isDark}></Header>
        </div>
    );
};

const Header = ({isDark=false}) => {

    return (
        <div style={{backgroundColor : isDark ? 'black' : 'red', width: 200, height: 200}}></div>
    );
}