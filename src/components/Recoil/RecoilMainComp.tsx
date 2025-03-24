import React, { ComponentType } from "react";
import { Section } from "../practice/PracticeComp";
import { RecoilCounterTutorialComp } from "./RecoilCounterTutorialComp";

interface CardData {
  title: string;
  Component: ComponentType;
}

interface SectionData {
    title: string;
    cards: CardData[];
  }

export const RecoilMainComp = () => {
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
};