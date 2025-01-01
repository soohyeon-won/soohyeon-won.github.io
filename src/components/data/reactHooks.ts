import { Topic } from "../data";

export const reactHooksTopics: Topic[] = [
    { id: "3", title: "React Hooks", content: "Detailed content about React Hooks", depth: 0 },
    {
        id: "3.1",
        title: "useState and useEffect",
        content: "`useState`와 `useEffect`는 리액트의 기본 훅으로, 각각 컴포넌트의 상태를 관리하고 생명주기 이벤트를 다룰 수 있게 합니다.",
        depth: 1,
        sections: [
            {
                title: "useState",
                content: "`useState` 훅은 컴포넌트 상태를 선언하고, 이를 변경할 수 있는 함수를 제공하여 상태를 관리할 수 있습니다.",
                code: `import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);

return (
  <div>
    <p>Current Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);
}

export default Counter;`,
            },
            {
                title: "useEffect",
                content:
                    "`useEffect` 훅은 컴포넌트가 마운트되거나 업데이트될 때 특정 작업을 수행하도록 합니다. 두 번째 인자로 전달되는 의존성 배열을 통해 실행 타이밍을 조정할 수 있습니다.",
                code: `import React, { useState, useEffect } from 'react';

function Timer() {
const [seconds, setSeconds] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  // 컴포넌트 언마운트 시 타이머 정리
  return () => clearInterval(intervalId);
}, []);

return <div>Elapsed Time: {seconds} seconds</div>;
}

export default Timer;`,
            },
        ],
    },
    {
        id: "3.2",
        title: "Custom hooks",
        content:
            "커스텀 훅은 재사용할 수 있는 로직을 추상화하여, 다양한 컴포넌트에서 동일한 로직을 간편하게 사용할 수 있게 합니다. 모든 커스텀 훅은 `use`로 시작하는 함수 형태입니다.",
        depth: 1,
        sections: [
            {
                title: "Creating a Custom Hook",
                content:
                    "커스텀 훅을 통해 특정 로직을 여러 컴포넌트에서 재사용할 수 있습니다. 예를 들어, 브라우저의 창 크기를 추적하는 훅을 만들어보겠습니다.",
                code: `import { useState, useEffect } from 'react';

function useWindowSize() {
const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});

useEffect(() => {
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);

return windowSize;
}

// 사용 예시
import React from 'react';
import useWindowSize from './useWindowSize';

function App() {
const { width, height } = useWindowSize();

return (
  <div>
    <h1>Window Size</h1>
    <p>Width: {width}px, Height: {height}px</p>
  </div>
);
}

export default App;`,
            },
        ],
    },
    {
        id: "3.3",
        title: "Context API with useContext",
        content:
            "Context API와 `useContext` 훅을 사용하면 컴포넌트 트리 전체에 데이터를 쉽게 전달할 수 있습니다. 이 방법은 props 드릴링을 방지하고 상태를 최상위에서 하위 컴포넌트로 직접 전달할 수 있게 해줍니다.",
        depth: 1,
        sections: [
            {
                title: "Using Context API with useContext",
                content:
                    "`useContext` 훅과 Context API를 함께 사용하여 여러 컴포넌트에서 전역 상태를 공유할 수 있습니다. 예를 들어, 테마(Context)를 통해 컴포넌트의 스타일을 변경할 수 있습니다.",
                code: `import React, { createContext, useContext, useState } from 'react';

// 1. Context 생성
const ThemeContext = createContext();

function ThemeProvider({ children }) {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);
}

// 2. Context 사용
function ThemeButton() {
const { theme, toggleTheme } = useContext(ThemeContext);

return (
  <button
    onClick={toggleTheme}
    style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
    }}
  >
    Toggle Theme
  </button>
);
}

function App() {
return (
  <ThemeProvider>
    <div>
      <h1>Context API and useContext Example</h1>
      <ThemeButton />
    </div>
  </ThemeProvider>
);
}

export default App;`,
            },
        ],
    },
];