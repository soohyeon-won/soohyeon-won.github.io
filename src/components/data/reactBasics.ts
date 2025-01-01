import { Topic } from "../data";

export const reactBasicsTopics: Topic[] = [
    { id: "2", title: "React Basics", content: "Detailed content about React Basics", depth: 0 },
    {
        id: "2.1",
        title: "JSX(Javascript Syntax eXtension)",
        content:
            "JSX는 JavaScript와 HTML을 결합하여 사용할 수 있는 문법입니다. React 컴포넌트에서 HTML을 렌더링할 때 사용됩니다.\n브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환\n최신 문법이나 특수한 문법(예: JSX)으로 작성된 코드를 더 넓은 범위의 브라우저에서 실행 가능한 형태로 변환",
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
        id: "2.3",
        title: "State와 Lifecycle",
        content:
            "React에서 'State'는 컴포넌트의 내부 데이터나 속성을 나타내며, 시간이 지남에 따라 변경될 수 있는 값입니다.\nState를 통해 컴포넌트는 동적이고 상호작용적인 사용자 인터페이스를 생성할 수 있습니다.\nState 값은 컴포넌트 내에서 특정 메서드를 통해 업데이트할 수 있으며, state가 변경되면 컴포넌트가 다시 렌더링됩니다.\n'Lifecycle 메서드'는 컴포넌트의 생명주기를 제어하는 메서드로,\n컴포넌트가 생성되고 업데이트되고 삭제되는 각각의 단계에서 특정 작업을 수행할 수 있도록 해줍니다.",
        depth: 1,
        sections: [
            {
                title: "State란 무엇인가?",
                content:
                    "React에서 'State'는 컴포넌트의 현재 상태 또는 내부 데이터로, 컴포넌트 내에서 변할 수 있는 값을 저장합니다. 예를 들어, 사용자 입력을 추적하거나 UI 요소가 변경될 때마다 State를 사용하여 해당 정보를 저장하고 업데이트할 수 있습니다. 클래스 컴포넌트에서는 `this.state`로 접근하고, 값을 변경할 때는 `setState` 메서드를 사용합니다. State가 변경되면 React는 컴포넌트를 다시 렌더링하여 UI를 최신 상태로 유지합니다.",
                code: `class Counter extends React.Component {\n  state = { count: 0 };\n\n  increment = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n\n  render() {\n    return {this.state.count};\n  }\n}`,
            },
            {
                title: "라이프사이클 메서드란?",
                content:
                    "React 컴포넌트는 생성부터 제거까지 일련의 단계들을 거치며, 이 과정에서 특정 작업을 수행할 수 있도록 하는 라이프사이클 메서드가 있습니다. 라이프사이클 메서드는 컴포넌트의 초기화, 업데이트, 제거 과정에서 각각 호출되며, 각 메서드는 다양한 상황에서 필요한 작업을 수행하기에 적합합니다.",
                code: "",
            },
            {
                title: "componentDidMount",
                content:
                    "componentDidMount는 컴포넌트가 처음 화면에 렌더링된 직후에 호출됩니다. 이 메서드는 데이터 불러오기나 타이머 설정 등 초기화 작업을 수행하기에 적합합니다. 컴포넌트가 마운트될 때 한 번만 호출되기 때문에, 외부 API 호출이나 리소스 초기화 같은 비동기 작업을 여기서 처리할 수 있습니다.",
                code: `class DataFetcher extends React.Component {\n  componentDidMount() {\n    fetch('https://api.example.com/data')\n      .then(response => response.json())\n      .then(data => this.setState({ data }));\n  }\n\n  render() {\n    return {this.state.data};\n  }\n}`,
            },
            {
                title: "shouldComponentUpdate",
                content:
                    "shouldComponentUpdate는 컴포넌트가 업데이트될지 여부를 결정하는 메서드로, true나 false를 반환하여 렌더링을 최적화할 수 있습니다. 기본적으로 true를 반환하며, 특정 조건에서만 업데이트가 필요할 때 사용됩니다.",
                code: `class Counter extends React.Component {\n  shouldComponentUpdate(nextProps, nextState) {\n    return nextState.count % 2 === 0; // count가 짝수일 때만 업데이트\n  }\n\n  render() {\n    return {this.state.count};\n  }\n}`,
            },
            {
                title: "componentDidUpdate",
                content:
                    "componentDidUpdate는 컴포넌트가 업데이트된 직후에 호출되며, 이전 props와 state에 접근할 수 있습니다. 이 메서드는 외부 리소스를 다시 불러오거나 DOM 조작이 필요할 때 유용하며, props나 state 변화에 따른 추가 작업을 수행할 때 사용됩니다.",
                code: `class ColorChanger extends React.Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.color !== this.props.color) {\n      console.log('Color updated:', this.props.color);\n    }\n  }\n\n  render() {\n    return {this.props.color};\n  }\n}`,
            },
            {
                title: "componentWillUnmount",
                content:
                    "componentWillUnmount는 컴포넌트가 화면에서 제거되기 직전에 호출됩니다. 이 메서드는 타이머나 이벤트 리스너와 같은 리소스를 정리하여 메모리 누수를 방지하는 데 유용합니다. 컴포넌트가 언마운트될 때는 리소스를 정리하지 않으면 메모리 누수가 발생할 수 있으므로, 이 메서드에서 정리 작업을 수행하는 것이 중요합니다.",
                code: `class Timer extends React.Component {\n  componentDidMount() {\n    this.timerID = setInterval(() => this.tick(), 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.timerID);\n  }\n\n  tick() {\n    this.setState({ time: new Date() });\n  }\n\n  render() {\n    return {this.state.time.toLocaleTimeString()};\n  }\n}`,
            },
            {
                title: "getDerivedStateFromProps",
                content:
                    "getDerivedStateFromProps는 props에서 파생된 state를 컴포넌트의 상태로 가져와야 할 때 사용하는 메서드입니다. 이 메서드는 render 이전에 호출되어 새로운 props에 따라 state를 업데이트할 수 있습니다.",
                code: `class Example extends React.Component {\n  static getDerivedStateFromProps(nextProps, prevState) {\n    if (nextProps.value !== prevState.value) {\n      return { value: nextProps.value };\n    }\n    return null;\n  }\n\n  render() {\n    return {this.state.value};\n  }\n}`,
            },
            {
                title: "getSnapshotBeforeUpdate",
                content:
                    "getSnapshotBeforeUpdate는 업데이트되기 직전 DOM 상태를 캡처할 수 있는 메서드입니다. 반환된 값은 componentDidUpdate로 전달되어 추가적인 DOM 조작이 필요할 때 유용하게 사용됩니다.",
                code: `class ScrollTracker extends React.Component {\n  getSnapshotBeforeUpdate(prevProps, prevState) {\n    return this.div.scrollHeight;\n  }\n\n  componentDidUpdate(prevProps, prevState, snapshot) {\n    if (snapshot !== this.div.scrollHeight) {\n      this.div.scrollTop = this.div.scrollHeight;\n    }\n  }\n\n  render() {\n    return <div ref={div => this.div = div}>{/* content */}</div>;\n  }\n}`,
            },
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
    }
];