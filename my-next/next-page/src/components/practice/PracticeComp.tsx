//  Shift + Alt + F : 코드정렬
//  cmd+b : 파일탐색기 토글
//  cmd+B : 빌드 스크립트
//  cmd+1,2,3 : 에디터 열기, 이동하기
//  cmd+j : 하단 창 토글
//  cmd+P : shell 명령어 넣기
//  cmd+D : 동일 값 다중커서

import React, { ComponentType } from "react";
import './PracticeComp.css';

// 컴포넌트 임포트
import StatePracticeComp, { StatePractticeComp2, StatePractticeComp3, StatePractticeComp4 } from "./StatePracticeComp";
import UploadComp from "./UploadComp";
import UseEffectComp from "./UseEffectComp";
import UseEffectCleanComp from "./UseEffectCleanComp";
import { UseRefComp, UseRefDomComp, UseRefRenderCount } from "./UseRefComp";
import { UseContextComp } from "./UseContextComp";
import { UseMemoComp } from "./UseMemoComp";
import { UseCallBackComp, UseCallBackComp2, UseCallBackCompLegacy } from "./UseCallBackComp";
import { UseReducerComp, UseReducerComp2 } from "./UseReducerComp";
import ReactMemoComp from "./ReactMemoComp";
import { CustomHookComp, UseFetchComp } from "./CustomHooksComp";
import { UseIdComp } from "./UseIdComp";
import { UseLayoutEffectComp } from "./UseLayoutEffect";
import { UseDebounceComp, UseDebounceCompCustomHook } from "./UseDebounceComp";
import { UseThrottleComp, UseThrottleCustomHookComp } from "./UseThrottleComp";

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
export const Section = ({ title, cards }: SectionData) => (
  <div>
    <h1 className="section-title">{title}</h1>
    <HorizontalScroll spacer={16}>
        {
          cards.map(({ title, Component }, index) => (
            <Card key={index} title={title}>
              <Component />
            </Card>
          ))
        }
      </HorizontalScroll>
  </div>
);

const PracticeComp = () => {

  // 섹션 데이터 정의
  const sections: SectionData[] = [
    {
      title: "UseState Examples",
      cards: [
        { title: "useState ex1", Component: StatePracticeComp },
        { title: "useState ex2", Component: StatePractticeComp2 },
        { title: "useState ex3", Component: StatePractticeComp3 },
        { title: "useState ex4", Component: StatePractticeComp4 },
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
        { title: "UseFetchComp", Component: UseFetchComp },
      ],
    },
    {
      title: "useId",
      cards: [
        { title: "useId", Component: UseIdComp },
      ],
    },
    {
      title: "useLayoutEffect",
      cards: [
        { title: "UseLayoutEffectComp", Component: UseLayoutEffectComp },
      ],
    },
    {
      title: "Debounce",
      cards: [
        { title: "UseDebounceComp", Component: UseDebounceComp },
        { title: "UseDebounceComp", Component: UseDebounceCompCustomHook },
      ],
    },
    {
      title: "Throttle",
      cards: [
        { title: "UseThrottleComp", Component: UseThrottleComp },
        { title: "UseThrottleComp", Component: UseThrottleCustomHookComp }
      ],
    }
  ];

  return (
    <div className="practice-container">
      {/* 동적 섹션 렌더링 */}
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default PracticeComp;

export const HorizontalScroll = ({ children, spacer = 10 }: { children: React.ReactNode; spacer?: number }) => {
  return (
    <div className="scroll-container" style={{ gap: `${spacer}px`, padding: `${spacer}px` }}>
      {children}
    </div>
  );
};