import { Topic } from "../data";


export const javascriptTopics: Topic[] = [
    { id: "1", title: "JavaScript Fundamentals", content: "Detailed content about JS Fundamentals", depth: 0 },
    {
        id: "1.1",
        title: "ES6+ features (arrow functions, destructuring, modules)",
        sections: [
            {
                title: "변수와 상수 (Variables and Constants)",
                content:
                    "변수는 데이터를 저장하기 위해 사용되며, let과 const는 ES6에서 도입된 변수 선언 방법입니다. var는 이제 잘 사용하지 않습니다.",
                code: `// let: 변경 가능한 변수
let age = 30;
age = 31;

// const: 변경 불가능한 상수
const birthYear = 1990;`,
            },
            {
                title: "자료형 (Data Types)",
                content: "JavaScript는 문자열, 숫자, 불리언, 객체, 배열 등의 다양한 자료형을 제공합니다.",
                code: `let name = "Alice"; // 문자열
let age = 25; // 숫자
let isStudent = true; // 불리언
let hobbies = ["reading", "traveling"]; // 배열
let person = { name: "Alice", age: 25 }; // 객체`,
            },
            {
                title: "조건문 (Conditional Statements)",
                content: "if-else 및 switch 구문을 사용하여 프로그램의 흐름을 제어합니다.",
                code: `if (age > 18) {
console.log("성인입니다.");
} else {
console.log("미성년자입니다.");
}

// switch 예제
let grade = "A";
switch (grade) {
case "A":
    console.log("Excellent");
    break;
case "B":
    console.log("Good");
    break;
default:
    console.log("Try Again");
}`,
            },
            {
                title: "반복문 (Loops)",
                content: "for, while, do-while 문을 사용하여 반복 작업을 수행합니다.",
                code: `// for 반복문
for (let i = 0; i < 5; i++) {
console.log(i);
}

// while 반복문
let i = 0;
while (i < 5) {
console.log(i);
i++;
}`,
            },
            {
              title: "함수 (Functions)",
              content: "함수는 코드를 재사용할 수 있게 합니다. ES6 이후 화살표 함수가 추가되었습니다.",
              code: `// 함수 선언식
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice"));

// 화살표 함수
const add = (a, b) => a + b;
console.log(add(2, 3));`,
          },
          {
            title: "ES6+ 문법 (ES6+ Features)",
            content: "템플릿 리터럴, 구조 분해 할당 등 ES6+의 새로운 문법을 배웁니다.",
            code: `// 템플릿 리터럴
let name = "Alice";
console.log(\`Hello, \${name}!\`);

// 구조 분해 할당
let person = { name: "Alice", age: 25 };
let { name, age } = person;
console.log(name, age);`,
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
];