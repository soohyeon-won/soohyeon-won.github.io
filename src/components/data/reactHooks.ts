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
    { id: "4", title: "State Management", content: "Detailed content about State Management", depth: 0 },
    { id: "4.1", title: "Redux basics", content: "Detailed content about Redux basics", depth: 1 },
    { id: "4.2", title: "React Redux hooks", content: "Detailed content about React Redux hooks", depth: 1 },
    { id: "4.3", title: "Alternative: Zustand or Recoil", content: "Detailed content about Zustand or Recoil", depth: 1 },

    { id: "5", title: "Routing", content: "Detailed content about React Router", depth: 0 },
    { id: "5.1", title: "React Router", content: "Detailed content about React Router", depth: 1 },

    { id: "6", title: "Testing", content: "Detailed content about Testing", depth: 0 },
    { id: "6.1", title: "Jest and React Testing Library", content: "Detailed content about Jest and React Testing Library", depth: 1 },

    {
        id: "7",
        title: "Build Tools and Development Environment",
        content: "Detailed content about Build Tools and Development Environment",
        depth: 0,
    },
    { id: "7.1", title: "Webpack or Create React App", content: "Detailed content about Webpack or Create React App", depth: 1 },
    { id: "7.2", title: "ESLint and Prettier", content: "Detailed content about ESLint and Prettier", depth: 1 },

    { id: "8", title: "Advanced Topics", content: "Detailed content about Advanced Topics", depth: 0 },
    { id: "8.1", title: "Server-Side Rendering (Next.js)", content: "Detailed content about Server-Side Rendering (Next.js)", depth: 1 },
    { id: "8.2", title: "Performance optimization", content: "Detailed content about Performance optimization", depth: 1 },
    { id: "8.3", title: "Code splitting", content: "Detailed content about Code splitting", depth: 1 },
    { id: "8.4", title: "Progressive Web Apps (PWAs)", content: "Detailed content about Progressive Web Apps (PWAs)", depth: 1 },

    { id: "9", title: "JavaScript basic", content: "", depth: 0 },
    {
        id: "9-1",
        title: "JavaScript basic",
        content: "",
        depth: 1,
        sections: [
            {
                title: "Variables (변수)",
                content: "자바스크립트에서 변수를 선언하는 방법과 변수의 종류에 대해 배웁니다.",
                code: `// 변수 선언 예시
      let name = 'Alice'; // 변경 가능한 변수
      const age = 25; // 변경 불가능한 변수
      var city = 'Seoul'; // ES5의 변수 선언 (스코프에 주의)`,
            },
            {
                title: "Data Types (데이터 타입)",
                content: "자바스크립트에서 사용하는 다양한 데이터 타입을 이해합니다.",
                code: `// 데이터 타입 예시
      let num = 42; // Number
      let str = 'Hello'; // String
      let isActive = true; // Boolean
      let obj = { name: 'Alice', age: 25 }; // Object
      let arr = [1, 2, 3]; // Array
      let nothing = null; // Null
      let notDefined; // Undefined`,
            },
            {
                title: "Operators (연산자)",
                content: "자바스크립트에서 사용할 수 있는 다양한 연산자에 대해 배웁니다.",
                code: `// 연산자 예시
      let sum = 5 + 3; // 덧셈
      let isEqual = (5 === 5); // 비교
      let increment = 1; 
      increment++; // 증가`,
            },
            {
                title: "Control Structures (제어 구조)",
                content: "조건문과 반복문을 사용하여 흐름을 제어하는 방법을 배웁니다.",
                code: `// 조건문 예시
      if (age >= 18) {
        console.log('성인입니다.');
      } else {
        console.log('미성년자입니다.');
      }
      
      // 반복문 예시
      for (let i = 0; i < 5; i++) {
        console.log(i);
      }`,
            },
            {
                title: "Functions (함수)",
                content: "함수의 정의와 호출 방법, 매개변수 및 반환값을 이해합니다.",
                code: `// 함수 선언 예시
      function greet(name) {
        return 'Hello, ' + name + '!';
      }
      console.log(greet('Alice')); // 'Hello, Alice!'
      
      // 화살표 함수 예시
      const add = (a, b) => a + b;
      console.log(add(2, 3)); // 5`,
            },
            {
                title: "Objects and Arrays (객체와 배열)",
                content: "자바스크립트의 객체와 배열을 생성하고 사용하는 방법을 배웁니다.",
                code: `// 객체 예시
      let person = {
        name: 'Alice',
        age: 25,
        greet: function() {
          console.log('Hello, ' + this.name);
        }
      };
      person.greet(); // 'Hello, Alice!'
      
      // 배열 예시
      let fruits = ['apple', 'banana', 'orange'];
      console.log(fruits[0]); // 'apple'`,
            },
            {
                title: "ES6 Features (ES6 기능)",
                content: "ES6에서 도입된 주요 기능들에 대해 배웁니다.",
                code: `// 템플릿 리터럴
      let name = 'Alice';
      console.log(\`Hello, \${name}!\`); // 'Hello, Alice!'
      
      // 구조 분해 할당
      const point = { x: 10, y: 20 };
      const { x, y } = point;
      console.log(x, y); // 10 20`,
            },
        ],
    },
    // { id: 9, title: "Project Ideas", content: "Blog platform with comments", depth: 0 },

    // { id: 10, title: "Learning Resources", content: "Various React learning resources", depth: 0 },
    // { id: 10.1, title: "React Official Documentation", content: "https://reactjs.org/docs/getting-started.html", depth: 1 },
    // { id: 10.2, title: "freeCodeCamp's React Course", content: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react", depth: 1 },
    // { id: 10.3, title: "Codecademy's Learn React Course", content: "https://www.codecademy.com/learn/react-101", depth: 1 },
    // { id: 10.4, title: "Udemy: React - The Complete Guide", content: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/", depth: 1 },
    // { id: 10.5, title: "Egghead.io React Courses", content: "https://egghead.io/q/react", depth: 1 },

    // { id: 11, title: "Best Practices", content: "Various best practices for React development", depth: 0 },
    // { id: 11.1, title: "Apply SOLID principles to React components", content: "Detailed content about SOLID principles", depth: 1 },
    // { id: 11.2, title: "Use functional components and hooks instead of class components", content: "Detailed content about functional components and hooks", depth: 1 },
    // { id: 11.3, title: "Implement proper error boundaries", content: "Detailed content about error boundaries", depth: 1 },
    // { id: 11.4, title: "Follow React's performance optimization guidelines", content: "Detailed content about performance optimization guidelines", depth: 1 }
];