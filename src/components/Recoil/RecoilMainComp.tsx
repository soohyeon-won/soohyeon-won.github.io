import React, { ComponentType } from "react";
import { Section } from "../practice/PracticeComp";
import { RecoilCounterTutorialComp } from "./RecoilCounterTutorialComp";
import { atom, RecoilRoot } from "recoil";

interface CardData {
  title: string;
  Component: ComponentType;
}

interface SectionData {
  title: string;
  cards: CardData[];
}

export const countState = atom({
  key: "count",
  default: 10
});

export const RecoilMainComp = () => {

  return (
    <div>
      <RecoilRoot>
        {/* Recoil의 전역 상태는 감싼 영역에서 유효하게 됨. */}
        <MainComp />
      </RecoilRoot>
    </div>
  );
};

const MainComp = () => {
  const sections: SectionData[] = [
    {
      title: "Recoil Tutorial",
      cards: [
        { title: "Counter", Component: RecoilCounterTutorialComp }
      ],
    },
  ];

  return (
    <div className="practice-container">
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
}