import { Topic } from "../data";

export const reactHooksTopics: Topic[] = [
    {
        id: "3",
        title: "React Hooks",
        content:
            "React Hooks는 함수형 컴포넌트에서도 상태와 생명주기 메서드를 사용할 수 있도록 도와주는 기능입니다. Hooks는 React 16.8에서 도입되었으며, 클래스형 컴포넌트의 대안으로 많이 사용됩니다.",
        depth: 0,
    },
    {
        id: "3.1",
        title: "useState and useEffect",
        content:
            "`useState`와 `useEffect`는 React에서 가장 기본적인 훅으로, 각각 컴포넌트의 상태를 관리하고 생명주기 이벤트를 처리하는 데 사용됩니다.",
        depth: 1,
        sections: [
            {
                title: "useState",
                content:
                    "`useState`는 함수형 컴포넌트에서 상태를 선언할 수 있도록 해줍니다. 배열 구조 분해를 통해 상태 값과 상태를 업데이트하는 함수를 얻을 수 있습니다.",
                code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;`,
            },
            {
                title: "useEffect",
                content:
                    "`useEffect`는 React 컴포넌트가 마운트되거나 업데이트될 때 특정 작업을 수행하도록 해줍니다. 의존성 배열을 사용하여 실행 조건을 제어할 수 있습니다.",
                code: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup: 컴포넌트 언마운트 시 타이머 정리
    return () => clearInterval(intervalId);
  }, []);

  return <div>Elapsed Time: {seconds} seconds</div>;
}

export default Timer;`,
            },
            {
                title: "Dependency Array (의존성 배열)",
                content:
                    "의존성 배열을 통해 `useEffect`가 실행될 조건을 제어할 수 있습니다. 배열이 비어 있으면 한 번만 실행되며, 배열에 값이 포함되면 해당 값이 변경될 때마다 실행됩니다.",
                code: `useEffect(() => {
  console.log("Effect triggered!");

  return () => {
    console.log("Cleanup triggered!");
  };
}, [dependency]); // dependency가 변경될 때만 실행`,
            },
        ],
    },
    {
        id: "3.2",
        title: "Custom Hooks",
        content:
            "Custom Hooks는 로직을 재사용 가능하게 추상화한 훅입니다. React의 기본 훅을 조합하여 새로운 훅을 생성할 수 있습니다.",
        depth: 1,
        sections: [
            {
                title: "Creating a Custom Hook",
                content:
                    "Custom Hook은 이름이 `use`로 시작하는 함수입니다. 이를 통해 여러 컴포넌트에서 동일한 로직을 쉽게 공유할 수 있습니다.",
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
            {
                title: "Benefits of Custom Hooks",
                content:
                    "Custom Hooks를 사용하면 중복된 로직을 줄이고, 코드의 가독성과 유지보수성을 높일 수 있습니다. 또한, 재사용성을 극대화할 수 있습니다.",
                code: `// 예: API 데이터 Fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}`,
            },
        ],
    },
    {
        id: "3.3",
        title: "Context API with useContext",
        content:
            "Context API와 `useContext` 훅을 사용하면 전역 상태를 손쉽게 관리할 수 있습니다. 이를 통해 props를 계속 전달하는 'props drilling' 문제를 해결할 수 있습니다.",
        depth: 1,
        sections: [
            {
                title: "Using Context API with useContext",
                content:
                    "`useContext` 훅을 사용하여 Context 데이터를 쉽게 접근하고 사용할 수 있습니다. 아래는 테마 변경 기능을 예로 든 구현입니다.",
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
            {
                title: "Nested Context Handling",
                content:
                    "Context를 중첩해서 사용할 경우, 별도의 Custom Hook을 생성하여 복잡도를 줄일 수 있습니다.",
                code: `// 예: UserContext와 ThemeContext를 함께 사용
function useCombinedContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  
  return { user, theme };
}`,
            },
        ],
    },
];