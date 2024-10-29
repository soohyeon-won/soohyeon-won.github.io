// src/data.ts
// option + shift + f : 정렬
export interface Section {
    title: string;
    content: string;
    code: string; // 인터페이스에 기본값을 정의하진 못해 code?: String 선택성 속성 이용 가능
}

export interface Topic {
    id: string; // id가 문자열이라면 유지
    title: string;
    content?: string; // content는 선택적 속성
    depth: number;
    sections?: Section[]; // sections도 선택적 속성
}

export const topics: Topic[] = [
    { id: "1", title: "JavaScript Fundamentals", content: "Detailed content about JS Fundamentals", depth: 0 },
    {
        id: "1.1",
        title: "ES6+ features (arrow functions, destructuring, modules)",
        sections: [
            {
                title: "Arrow Functions",
                content: "Arrow functions provide a more concise syntax for writing functions and have a different behavior for `this` binding.",
                code: `const sum = (a, b) => a + b;`,
            },
            {
                title: "Destructuring",
                content: "Destructuring allows easy extraction of values from arrays or properties from objects.",
                code: `const [a, b] = [1, 2];\nconst {name, age} = {name: 'Alice', age: 25};`,
            },
            {
                title: "Modules",
                content: "Modules allow splitting code into reusable pieces with import and export statements.",
                code: `export const sum = (a, b) => a + b;\nimport { sum } from './math.js';`,
            },
        ],
        depth: 1,
    },
    {
        id: "1.2",
        title: "Asynchronous JavaScript (Promises, async/await)",
        sections: [
            {
                title: "Promises(프로미스)",
                content: "프로미스는 비동기 작업이 완료된 후의 결과 값을 나타내는 객체로, 성공(resolved) 또는 실패(rejected) 상태를 가집니다.",
                code: `const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Success!');
      }, 1000);
    });
    
    promise.then(result => {
      console.log(result); // 'Success!' 출력
    }).catch(error => {
      console.error(error);
    });`,
            },
            {
                title: "async/await",
                content: "`async/await`는 비동기 코드를 작성하는 더 직관적인 방법을 제공하며, 프로미스를 보다 읽기 쉽게 다룰 수 있습니다.",
                code: `const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData();`,
            },
        ],
        depth: 1,
    },
    {
        id: "1.3",
        title: "Functional programming concepts (함수형 프로그래밍 개념)",
        content:
            "함수형 프로그래밍은 상태 변이를 피하고 순수 함수를 사용하는 것을 기본 원칙으로 합니다. 이를 통해 코드의 예측 가능성과 가독성을 높일 수 있습니다.",
        depth: 1,
        sections: [
            {
                title: "Pure Functions (순수 함수)",
                content:
                    "순수 함수는 외부 상태를 변경하지 않으며, 동일한 입력에 대해 항상 동일한 출력을 반환하는 함수입니다. 부작용이 없기 때문에 예측 가능한 코드를 작성하는 데 유용합니다.",
                code: `// 순수 함수 예시
      const add = (a, b) => a + b;
      
      console.log(add(2, 3)); // 5
      console.log(add(2, 3)); // 5 (항상 같은 입력에 대해 같은 출력)`,
            },
            {
                title: "Immutability (불변성)",
                content:
                    "불변성은 데이터의 상태를 직접 변경하지 않고, 데이터를 복사하여 새로운 값을 만들어내는 것을 의미합니다. 이를 통해 상태 관리가 쉬워지고 버그 발생 가능성이 줄어듭니다.",
                code: `// 불변성 예시 (배열 복사)
      const numbers = [1, 2, 3];
      const newNumbers = [...numbers, 4]; // 기존 배열을 변경하지 않고 새로운 배열 생성
      console.log(numbers); // [1, 2, 3]
      console.log(newNumbers); // [1, 2, 3, 4]`,
            },
            {
                title: "Higher-Order Functions (고차 함수)",
                content:
                    "고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수입니다. 이는 함수형 프로그래밍의 중요한 특징 중 하나로, 코드를 재사용하고 모듈화하는 데 도움을 줍니다.",
                code: `// 고차 함수 예시
      const applyOperation = (a, b, operation) => operation(a, b);
      
      const multiply = (a, b) => a * b;
      console.log(applyOperation(5, 3, multiply)); // 15`,
            },
            {
                title: "First-Class Functions (일급 함수)",
                content:
                    "자바스크립트에서는 함수가 일급 시민(First-Class Citizen)입니다. 이는 함수를 변수에 할당하거나, 다른 함수의 인자로 전달하거나, 반환할 수 있음을 의미합니다.",
                code: `// 일급 함수 예시
      const sayHello = () => 'Hello';
      const greet = sayHello; // 함수를 변수에 할당
      console.log(greet()); // 'Hello'`,
            },
            {
                title: "Recursion (재귀)",
                content:
                    "재귀는 함수가 자기 자신을 호출하는 방식입니다. 재귀는 반복문 대신 사용되기도 하며, 특히 재귀적 데이터 구조를 처리할 때 유용합니다.",
                code: `// 재귀 함수 예시 (팩토리얼 계산)
      const factorial = (n) => {
        if (n === 1) return 1;
        return n * factorial(n - 1);
      };
      
      console.log(factorial(5)); // 120`,
            },
            {
                title: "Map, Filter, Reduce (맵, 필터, 리듀스)",
                content:
                    "함수형 프로그래밍에서 자주 사용하는 배열 메서드입니다. 각 메서드는 배열을 순회하면서 새로운 배열이나 값을 반환하는 역할을 합니다.",
                code: `// map: 배열의 각 요소를 변환하여 새로운 배열 반환
      const numbers = [1, 2, 3];
      const doubled = numbers.map(n => n * 2);
      console.log(doubled); // [2, 4, 6]
      
      // filter: 조건에 맞는 요소만 추출하여 새로운 배열 반환
      const evenNumbers = numbers.filter(n => n % 2 === 0);
      console.log(evenNumbers); // [2]
      
      // reduce: 배열을 하나의 값으로 합침
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      console.log(sum); // 6`,
            },
        ],
    },
    { id: "2", title: "React Basics", content: "Detailed content about React Basics", depth: 0 },
    {
        id: "2.1",
        title: "JSX syntax",
        content: "JSX는 JavaScript와 HTML을 결합하여 사용할 수 있는 문법입니다. React 컴포넌트에서 HTML을 렌더링할 때 사용됩니다.",
        depth: 1,
        sections: [
            {
                title: "JSX Basics",
                content: "JSX는 JavaScript의 확장 문법으로, HTML처럼 보이지만 JavaScript 코드로 변환됩니다.",
                code: `const element = <h1>Hello, world!</h1>;`,
            },
            {
                title: "Embedding Expressions in JSX",
                content: "중괄호 `{}`를 사용해 JSX 내부에 JavaScript 표현식을 삽입할 수 있습니다.",
                code: `const name = 'Alice';\nconst element = <h1>Hello, {name}!</h1>;`,
            },
        ],
    },
    {
        id: "2.2",
        title: "Components and props",
        content: "컴포넌트는 React의 기본 구성 요소입니다. props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다.",
        depth: 1,
        sections: [
            {
                title: "React란?",
                content:
                    "React는 웹사이트를 만들 때 사용하는 도구예요. 마치 레고 블록처럼 작은 부품들(이걸 '컴포넌트'라고 해요)을 조립해서 웹사이트를 만듭니다.",
                code: ``,
            },
            {
                title: "컴포넌트란?",
                content: "컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나눌 수 있습니다. 함수형 컴포넌트는 함수 형태로 정의되며 주로 사용됩니다.",
                code: `// 간단한 인사말 컴포넌트\nfunction 인사말() {\nreturn <h1>안녕하세요!</h1>;\n}\n\n// 사용할 때는 이렇게 씁니다\n<인사말 />  // 화면에 "안녕하세요!" 가 표시됩니다`,
            },
            {
                title: "Props",
                content: "Props는 컴포넌트에 정보를 전달할 때 사용합니다. 데이터를 교환하는 데 사용됩니다.",
                code: `<Welcome name="Alice" /> // 'Hello, Alice' 출력`,
            },
            {
                title: "Functional and Class Components",
                content: "컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나눌 수 있습니다. 함수형 컴포넌트는 함수 형태로 정의되며 주로 사용됩니다.",
                code: `//함수형 컴포넌트 (새로운 방식, 더 많이 사용됨)\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n//클래스형 컴포넌트 (예전 방식)\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}`,
            },
            {
                title: "함수형 컴포넌트를 더 많이 쓰는 이유는?",
                content: "- 코드가 더 간단하고 읽기 쉬워요\n- Hooks라는 편리한 기능을 사용할 수 있어요\n- 성능이 더 좋아요\n- 테스트하기가 더 쉬워요",
                code: "",
            },
        ],
    },
    {
      "id": "2.3",
      "title": "State와 Lifecycle",
      "content": "React에서 'State'는 컴포넌트의 내부 데이터나 속성을 나타내며, 시간이 지남에 따라 변경될 수 있는 값입니다.\nState를 통해 컴포넌트는 동적이고 상호작용적인 사용자 인터페이스를 생성할 수 있습니다.\nState 값은 컴포넌트 내에서 특정 메서드를 통해 업데이트할 수 있으며, state가 변경되면 컴포넌트가 다시 렌더링됩니다.\n'Lifecycle 메서드'는 컴포넌트의 생명주기를 제어하는 메서드로,\n컴포넌트가 생성되고 업데이트되고 삭제되는 각각의 단계에서 특정 작업을 수행할 수 있도록 해줍니다.",
        depth: 1,
        sections:[
          {
              "title": "State란 무엇인가?",
              "content": "React에서 'State'는 컴포넌트의 현재 상태 또는 내부 데이터로, 컴포넌트 내에서 변할 수 있는 값을 저장합니다. 예를 들어, 사용자 입력을 추적하거나 UI 요소가 변경될 때마다 State를 사용하여 해당 정보를 저장하고 업데이트할 수 있습니다. 클래스 컴포넌트에서는 `this.state`로 접근하고, 값을 변경할 때는 `setState` 메서드를 사용합니다. State가 변경되면 React는 컴포넌트를 다시 렌더링하여 UI를 최신 상태로 유지합니다.",
              "code": `class Counter extends React.Component {\n  state = { count: 0 };\n\n  increment = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n\n  render() {\n    return {this.state.count};\n  }\n}`
          },
          {
              "title": "componentDidMount",
              "content": "componentDidMount는 컴포넌트가 처음 화면에 렌더링된 직후에 호출됩니다. 이 메서드는 데이터 불러오기나 타이머 설정 등 초기화 작업을 수행하기에 적합합니다.",
              "code": `class DataFetcher extends React.Component {\n  componentDidMount() {\n    fetch('https://api.example.com/data')\n      .then(response => response.json())\n      .then(data => this.setState({ data }));\n  }\n\n  render() {\n    return {this.state.data};\n  }\n}`
          },
          {
              "title": "componentDidUpdate",
              "content": "componentDidUpdate는 컴포넌트가 업데이트될 때마다 호출됩니다. 이 메서드는 props나 state가 변경된 후 추가 작업을 수행할 때 유용합니다.",
              "code": `class ColorChanger extends React.Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.color !== this.props.color) {\n      console.log('Color updated:', this.props.color);\n    }\n  }\n\n  render() {\n    return 
  
  {this.props.color}
  
  ;\n  }\n}`
          },
          {
              "title": "componentWillUnmount",
              "content": "componentWillUnmount는 컴포넌트가 화면에서 제거되기 직전에 호출됩니다. 이 메서드는 타이머나 이벤트 리스너와 같은 리소스를 정리하여 메모리 누수를 방지하는 데 유용합니다.",
              "code": `class Timer extends React.Component {\n  componentDidMount() {\n    this.timerID = setInterval(() => this.tick(), 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.timerID);\n  }\n\n  tick() {\n    this.setState({ time: new Date() });\n  }\n\n  render() {\n    return {this.state.time.toLocaleTimeString()};\n  }\n}`
          }
      ],
    },
    {
        id: "2.4",
        title: "Handling events",
        content: "React에서 이벤트를 처리하는 방법에 대해 학습합니다. JSX에서 이벤트는 camelCase로 작성되며, 함수 참조를 통해 전달됩니다.",
        depth: 1,
        sections: [
            {
                title: "Event Handling",
                content: "이벤트 핸들러는 JSX에서 `{}`를 사용해 전달할 수 있으며, 함수 참조를 통해 전달됩니다.",
                code: `<button onClick={handleClick}>Click me</button>`,
            },
            {
                title: "Passing Arguments to Event Handlers",
                content: "이벤트 핸들러에 인수를 전달하려면 람다 함수를 사용할 수 있습니다.",
                code: `<button onClick={() => this.handleClick(id)}>Click me</button>`,
            },
        ],
    },
    {
        id: "2.5",
        title: "Lists and keys",
        content: "리스트는 JavaScript의 map 메서드를 사용해 렌더링할 수 있으며, 각 항목에는 고유한 키를 부여해야 합니다.",
        depth: 1,
        sections: [
            {
                title: "Rendering Lists",
                content: "map 함수를 사용해 리스트를 렌더링할 수 있습니다.",
                code: `const listItems = numbers.map((number) =>\n  <li key={number.toString()}>{number}</li>\n);`,
            },
            {
                title: "Keys",
                content: "리스트 항목에 고유한 키를 추가하여 리액트가 항목을 식별하고 최적화할 수 있게 합니다.",
                code: `<ul>{listItems}</ul>`,
            },
        ],
    },
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
