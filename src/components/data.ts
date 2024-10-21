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
                title: "Arrow Function(화살표 함수)",
                content: "화살표 함수는 함수 작성에 더 간결한 문법을 제공하며, this 바인딩에 대해 다른 동작을 가집니다.",
                code: `const sum = (a, b) => a + b;`,
            },
            {
                title: "Destructuring(구조 분해 할당)",
                content: "구조 분해 할당은 배열에서 값이나 객체에서 속성을 쉽게 추출할 수 있도록 해줍니다.",
                code: `const [a, b] = [1, 2];\nconst {name, age} = {name: 'Alice', age: 25};`,
            },
            {
                title: "Modules",
                content: "모듈은 코드를 재사용 가능한 조각으로 나누고, import와 export 구문을 통해 가져오고 내보낼 수 있게 해줍니다.",
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
    { id: "1.3", title: "Functional programming concepts", content: "Detailed content about Functional programming concepts", depth: 1 },

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
