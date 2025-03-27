'use client'

import React, { ComponentType } from "react";
import { Section } from "../practice/PracticeComp";
import { RecoilCounterTutorialComp } from "./RecoilCounterTutorialComp";
import { RecoilState } from "recoil";

interface CardData {
  title: string;
  Component: ComponentType;
}

interface SectionData {
  title: string;
  cards: CardData[];
}

export const RecoilMainComp = () => {

  return (
    <MainComp />
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