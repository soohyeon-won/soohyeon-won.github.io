// src/data.ts
export interface Section {
    title: string;
    content: string;
    code: string;
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
        content: "함수형 프로그래밍은 상태 변이를 피하고 순수 함수를 사용하는 것을 기본 원칙으로 합니다. 이를 통해 코드의 예측 가능성과 가독성을 높일 수 있습니다.",
        depth: 1,
        sections: [
          {
            title: "Pure Functions (순수 함수)",
            content: "순수 함수는 외부 상태를 변경하지 않으며, 동일한 입력에 대해 항상 동일한 출력을 반환하는 함수입니다. 부작용이 없기 때문에 예측 가능한 코드를 작성하는 데 유용합니다.",
            code: `// 순수 함수 예시
      const add = (a, b) => a + b;
      
      console.log(add(2, 3)); // 5
      console.log(add(2, 3)); // 5 (항상 같은 입력에 대해 같은 출력)`,
          },
          {
            title: "Immutability (불변성)",
            content: "불변성은 데이터의 상태를 직접 변경하지 않고, 데이터를 복사하여 새로운 값을 만들어내는 것을 의미합니다. 이를 통해 상태 관리가 쉬워지고 버그 발생 가능성이 줄어듭니다.",
            code: `// 불변성 예시 (배열 복사)
      const numbers = [1, 2, 3];
      const newNumbers = [...numbers, 4]; // 기존 배열을 변경하지 않고 새로운 배열 생성
      console.log(numbers); // [1, 2, 3]
      console.log(newNumbers); // [1, 2, 3, 4]`,
          },
          {
            title: "Higher-Order Functions (고차 함수)",
            content: "고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수입니다. 이는 함수형 프로그래밍의 중요한 특징 중 하나로, 코드를 재사용하고 모듈화하는 데 도움을 줍니다.",
            code: `// 고차 함수 예시
      const applyOperation = (a, b, operation) => operation(a, b);
      
      const multiply = (a, b) => a * b;
      console.log(applyOperation(5, 3, multiply)); // 15`,
          },
          {
            title: "First-Class Functions (일급 함수)",
            content: "자바스크립트에서는 함수가 일급 시민(First-Class Citizen)입니다. 이는 함수를 변수에 할당하거나, 다른 함수의 인자로 전달하거나, 반환할 수 있음을 의미합니다.",
            code: `// 일급 함수 예시
      const sayHello = () => 'Hello';
      const greet = sayHello; // 함수를 변수에 할당
      console.log(greet()); // 'Hello'`,
          },
          {
            title: "Recursion (재귀)",
            content: "재귀는 함수가 자기 자신을 호출하는 방식입니다. 재귀는 반복문 대신 사용되기도 하며, 특히 재귀적 데이터 구조를 처리할 때 유용합니다.",
            code: `// 재귀 함수 예시 (팩토리얼 계산)
      const factorial = (n) => {
        if (n === 1) return 1;
        return n * factorial(n - 1);
      };
      
      console.log(factorial(5)); // 120`,
          },
          {
            title: "Map, Filter, Reduce (맵, 필터, 리듀스)",
            content: "함수형 프로그래밍에서 자주 사용하는 배열 메서드입니다. 각 메서드는 배열을 순회하면서 새로운 배열이나 값을 반환하는 역할을 합니다.",
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
    { id: "2.1", title: "JSX syntax", content: "Detailed content about JSX syntax", depth: 1 },
    { id: "2.2", title: "Components and props", content: "Detailed content about Components and props", depth: 1 },
    { id: "2.3", title: "State and lifecycle", content: "Detailed content about State and lifecycle", depth: 1 },
    { id: "2.4", title: "Handling events", content: "Detailed content about Handling events", depth: 1 },
    { id: "2.5", title: "Lists and keys", content: "Detailed content about Lists and keys", depth: 1 },

    { id: "3", title: "React Hooks", content: "Detailed content about React Hooks", depth: 0 },
    { id: "3.1", title: "useState and useEffect", content: "Detailed content about useState and useEffect", depth: 1 },
    { id: "3.2", title: "Custom hooks", content: "Detailed content about Custom hooks", depth: 1 },
    { id: "3.3", title: "Context API with useContext", content: "Detailed content about Context API with useContext", depth: 1 },

    { id: "4", title: "State Management", content: "Detailed content about State Management", depth: 0 },
    { id: "4.1", title: "Redux basics", content: "Detailed content about Redux basics", depth: 1 },
    { id: "4.2", title: "React Redux hooks", content: "Detailed content about React Redux hooks", depth: 1 },
    { id: "4.3", title: "Alternative: Zustand or Recoil", content: "Detailed content about Zustand or Recoil", depth: 1 },

    { id: "5", title: "Routing", content: "Detailed content about React Router", depth: 0 },
    { id: "5.1", title: "React Router", content: "Detailed content about React Router", depth: 1 },

    { id: "6", title: "Testing", content: "Detailed content about Testing", depth: 0 },
    { id: "6.1", title: "Jest and React Testing Library", content: "Detailed content about Jest and React Testing Library", depth: 1 },

    { id: "7", title: "Build Tools and Development Environment", content: "Detailed content about Build Tools and Development Environment", depth: 0 },
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
      }      
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
