'use client';

import { JSX, useMemo, useState } from "react";
import Tab from "../Tab";
import PracticeComp from "../practice/PracticeComp";
import { RecoilMainComp } from "../recoilComp/RecoilMainComp";
import TopicsList from "../TopicsList";
import { RecoilRoot } from "recoil";
import { NextPracticeComp } from "../next/NextPracticeComp";

export const NavigationTabView = () => {

    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    interface TabChildModel {
        title: string;
        Component: JSX.Element;
    }
    
    const tabList: TabChildModel[] = useMemo(() => {
        return [
            { title: 'study', Component: <TopicsList /> },
            { title: 'practice', Component: <PracticeComp /> },
            { title: 'next', Component: <NextPracticeComp /> },
            // { title: 'recoil', Component: <RecoilRoot><RecoilMainComp /></RecoilRoot> }
        ];
    }, []);

    return (
        <div className="app-container">
            <div className="top-tabs">
               {tabList.map((tab, index) => (
                   <Tab
                       key={index}
                       to={tab.title}
                       label={tab.title}
                       $isActive={index === activeTab}
                       onClick={() => handleTabClick(index)}
                   />
               ))}
            </div>
            {tabList.at(activeTab)?.Component}
        </div>
    );
};