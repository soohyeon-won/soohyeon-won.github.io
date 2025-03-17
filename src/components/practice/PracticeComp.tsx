import React, { useState, ComponentType } from "react";
import './PracticeComp.css';

// 컴포넌트 임포트
import StatePracticeComp from "./StatePracticeComp";
import UploadComp from "./UploadComp";
import UseEffectComp from "./UseEffectComp";
import UseEffectCleanComp from "./UseEffectCleanComp";
import { UseRefComp, UseRefDomComp, UseRefRenderCount } from "./UseRefComp";
import { UseContextComp } from "./UseContextComp";
import { UseMemoComp } from "./UseMemoComp";
import { UseCallBackComp, UseCallBackComp2, UseCallBackCompLegacy } from "./UseCallBackComp";
import { UseReducerComp, UseReducerComp2 } from "./UseReducerComp";
import ReactMemoComp from "./ReactMemoComp";
import { CustomHookComp } from "./CustomHooksComp";

// 타입 정의
interface CardData {
  title: string;
  Component: ComponentType;
}

interface SectionData {
  title: string;
  cards: CardData[];
}

// Card 컴포넌트
const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="card">
    <h3>{title}</h3>
    {children}
  </div>
);

// Section 컴포넌트 (재사용 가능)
const Section = ({ title, cards }: SectionData) => (
  <div>
    <h1 className="section-title">{title}</h1>
    <div className="card-container">
      {cards.map(({ title, Component }, index) => (
        <Card key={index} title={title}>
          <Component />
        </Card>
      ))}
    </div>
  </div>
);

const PracticeComp = () => {
  // 상태 관리 (기존과 동일)
  const [isOn, setToggle] = useState(true);
  const toggleBtn = () => setToggle(!isOn);

  const [price, setPrice] = useState(0);
  const incrementPrice = (price: number) => {
    setPrice((prevValue) => prevValue + price);
  };

  const [like, setLike] = useState(0);
  const [titleText, setText] = useState("placeholder");
  const setTitle = (text: string) => {
    setText(text);
  };
  const [savedText, setSavedText] = useState("");
  const setSavedTitle = () => setSavedText(titleText);

  const [titles, setTitles] = useState(['test1', 'test2']);

  // Modal 컴포넌트
  function Modal() {
    return (
      <>
        <div>
          <h4>
            {titles[0]}{" "}
            <span
              onClick={() => {
                setLike(like + 1);
                let copyTitles = [...titles];
                copyTitles[0] = 'A';
                setTitles(copyTitles);
              }}
            >
              좋아요👍
            </span>{" "}
            {like}
          </h4>
          <h4>{titles[1]}</h4>
        </div>
      </>
    );
  }

  // 섹션 데이터 정의
  const sections: SectionData[] = [
    {
      title: "UseState Examples",
      cards: [
        { title: "State Practice", Component: StatePracticeComp },
        { title: "Upload Component", Component: UploadComp },
      ],
    },
    {
      title: "UseEffect Examples",
      cards: [
        { title: "Basic UseEffect", Component: UseEffectComp },
        { title: "UseEffect Cleanup", Component: UseEffectCleanComp },
      ],
    },
    {
      title: "UseRef Examples",
      cards: [
        { title: "Basic UseRef", Component: UseRefComp },
        { title: "UseRef Render Count", Component: UseRefRenderCount },
        { title: "UseRef DOM", Component: UseRefDomComp },
      ],
    },
    {
      title: "UseContext Examples",
      cards: [
        { title: "UseContext", Component: UseContextComp },
      ],
    },
    {
      title: "UseMemo Examples",
      cards: [
        { title: "UseMemo", Component: UseMemoComp },
      ],
    },
    {
      title: "UseCallBack Examples",
      cards: [
        { title: "Legacy Callback", Component: UseCallBackCompLegacy },
        { title: "UseCallback 1", Component: UseCallBackComp },
        { title: "UseCallback 2", Component: UseCallBackComp2 },
      ],
    },
    {
      title: "UseReducer Examples",
      cards: [
        { title: "UseReducer 1", Component: UseReducerComp },
        { title: "UseReducer 2", Component: UseReducerComp2 },
      ],
    },
    {
      title: "ReactMemo Examples",
      cards: [
        { title: "React Memo", Component: ReactMemoComp },
      ],
    },
    {
      title: "Custom Hooks Examples",
      cards: [
        { title: "Custom Hooks", Component: CustomHookComp },
      ],
    },
  ];

  return (
    <div className="practice-container">
      {/* 기본 예제들 */}
      <div className="basic-section">
        <p>1. useState를 이용한 Toggle버튼</p>
        <button onClick={toggleBtn}>{isOn ? "ON" : "OFF"}</button>
      </div>

      <div className="basic-section">
        <p>2. 버튼에 있는 값 input으로 옮기기</p>
        <button onClick={() => incrementPrice(10)}>10+</button>
        <button onClick={() => incrementPrice(50)}>50+</button>
        <input value={price} readOnly />
      </div>

      <div className="basic-section">
        <p>3. input Text 저장하기</p>
        <input onChange={(input) => setTitle(input.target.value)} />
        <p>{titleText}</p>
        <button onClick={setSavedTitle}>저장</button>
        <p>{savedText}</p>
      </div>

      <div className="basic-section">
        <h1>Modal Example</h1>
        <Modal />
      </div>

      {/* 동적 섹션 렌더링 */}
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default PracticeComp;