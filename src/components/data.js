export const topics = [
    { id: 1, title: "JavaScript Fundamentals", content: "Detailed content about JS Fundamentals", depth: 0 },
    {
        id: 1.1,
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
    { id: 1.2, title: "Asynchronous JavaScript (Promises, async/await)", content: "Detailed content about Asynchronous JavaScript", depth: 1 },
    { id: 1.3, title: "Functional programming concepts", content: "Detailed content about Functional programming concepts", depth: 1 },

    { id: 2, title: "React Basics", content: "Detailed content about React Basics", depth: 0 },
    { id: 2.1, title: "JSX syntax", content: "Detailed content about JSX syntax", depth: 1 },
    { id: 2.2, title: "Components and props", content: "Detailed content about Components and props", depth: 1 },
    { id: 2.3, title: "State and lifecycle", content: "Detailed content about State and lifecycle", depth: 1 },
    { id: 2.4, title: "Handling events", content: "Detailed content about Handling events", depth: 1 },
    { id: 2.5, title: "Lists and keys", content: "Detailed content about Lists and keys", depth: 1 },

    { id: 3, title: "React Hooks", content: "Detailed content about React Hooks", depth: 0 },
    { id: 3.1, title: "useState and useEffect", content: "Detailed content about useState and useEffect", depth: 1 },
    { id: 3.2, title: "Custom hooks", content: "Detailed content about Custom hooks", depth: 1 },
    { id: 3.3, title: "Context API with useContext", content: "Detailed content about Context API with useContext", depth: 1 },

    { id: 4, title: "State Management", content: "Detailed content about State Management", depth: 0 },
    { id: 4.1, title: "Redux basics", content: "Detailed content about Redux basics", depth: 1 },
    { id: 4.2, title: "React Redux hooks", content: "Detailed content about React Redux hooks", depth: 1 },
    { id: 4.3, title: "Alternative: Zustand or Recoil", content: "Detailed content about Zustand or Recoil", depth: 1 },

    { id: 5, title: "Routing", content: "Detailed content about React Router", depth: 0 },
    { id: 5.1, title: "React Router", content: "Detailed content about React Router", depth: 1 },

    { id: 6, title: "Testing", content: "Detailed content about Testing", depth: 0 },
    { id: 6.1, title: "Jest and React Testing Library", content: "Detailed content about Jest and React Testing Library", depth: 1 },

    { id: 7, title: "Build Tools and Development Environment", content: "Detailed content about Build Tools and Development Environment", depth: 0 },
    { id: 7.1, title: "Webpack or Create React App", content: "Detailed content about Webpack or Create React App", depth: 1 },
    { id: 7.2, title: "ESLint and Prettier", content: "Detailed content about ESLint and Prettier", depth: 1 },

    { id: 8, title: "Advanced Topics", content: "Detailed content about Advanced Topics", depth: 0 },
    { id: 8.1, title: "Server-Side Rendering (Next.js)", content: "Detailed content about Server-Side Rendering (Next.js)", depth: 1 },
    { id: 8.2, title: "Performance optimization", content: "Detailed content about Performance optimization", depth: 1 },
    { id: 8.3, title: "Code splitting", content: "Detailed content about Code splitting", depth: 1 },
    { id: 8.4, title: "Progressive Web Apps (PWAs)", content: "Detailed content about Progressive Web Apps (PWAs)", depth: 1 },

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
