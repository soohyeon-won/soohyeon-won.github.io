import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeConsumer } from "styled-components";

export const UseContextComp = () => {
    // Prop Drilling
    // 단점: 모든 중간 컴포넌트들은 필요없는 Props를 알게됨
    // 전달과정에서 이슈가 생기면 부모 컴포넌트들을 하나씩 찾아서 수정해줘야함
    // 
    // useContext를 이용해서 Context를 통해 방출된 데이터를 알 수 있게 함
    // 단점: 컴포넌트를 재사용하기 어려워짐.
    // 다양한 레벨의 많은 컴포넌트들에게 같은 데이터를 전달할 때 사용
    // 사용예제1 - 다크모드 전역 변경

    const [isDark, setIsDark] = useState(false); // isDark 를 실제로 필요로 하지는 않는 중간 컴포넌트

    return (
        // 1. useState를 Props로 넘겨서 사용
        // <div>
        //     <p>{isDark}</p>
        //     <button onClick={() => setIsDark(!isDark)}>다크모드 선택</button>
        //     <Header isDark={isDark}></Header>
        //     <Content isDark={isDark}></Content>
        //     <Footer isDark={isDark} setIsDark={setIsDark} />
        // </div>

        // 2. 아래는 useContext를 이용
        <ThemeContext.Provider value={{isDark, setIsDark}}>
        <div>
            <p>{isDark}</p>
            <button onClick={() => setIsDark(!isDark)}>다크모드 선택</button>
            <Header></Header>
            <Content isDark={isDark}></Content>
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
        </ThemeContext.Provider>
    );
};

// const Header = ({isDark=false}) => {

//     return (
//         <div style={{backgroundColor : isDark ? 'black' : 'red', width: 200, height: 200}}></div>
//     );
// }

const Header = () => {
  const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeContext.Provider");
    }
    return context;
};

    return (
      <div></div>
        // <div style={{backgroundColor : isDark ? 'black' : 'red', width: 200, height: 200}}></div>
    );
}


const Content = ({ isDark }: { isDark: boolean }) => (
    <div
      style={{
        backgroundColor: isDark ? "black" : "red",
        width: 200,
        height: 200,
        color: isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  );

interface FooterProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ isDark, setIsDark }: FooterProps) => {
    const toggleTheme = () => {
      setIsDark((prev) => !prev);
    };
  
    return (
      <div>
        <div
          style={{
            backgroundColor: isDark ? "black" : "yellow",
            width: 200,
            height: 50,
          }}
        ></div>
        <button className="button" onClick={toggleTheme}>
          Dark Mode
        </button>
      </div>
    );
  };