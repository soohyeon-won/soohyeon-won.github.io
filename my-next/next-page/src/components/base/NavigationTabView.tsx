'use client';

import { useMemo, useState } from "react";
import Tab from "../Tab";
import PracticeComp from "../practice/PracticeComp";
import { RecoilMainComp } from "../recoil/RecoilMainComp";
import TopicsList from "../TopicsList";

export const NavigationTabView = () => {

    const [activeTab, setActiveTab] = useState(1);

    let tab1Title = 'study'

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    // 꼭 필요할 때만 적절하게 사용하는 것이 좋다
    const tabIndicatorStyle = useMemo(() => ({
        transform: `translateX(${(activeTab - 1) * 100}%)`
    }), [activeTab]);

    return (
        <div className="app-container">
            <div className="top-tabs">
                <Tab
                    to="/study"
                    label={tab1Title}
                    isActive={activeTab === 1}
                    onClick={() => handleTabClick(1)}
                />
                <Tab
                    to="/practice"
                    label="Practice"
                    isActive={activeTab === 2}
                    onClick={() => handleTabClick(2)}
                />
                <Tab
                    to="/recoil"
                    label="Recoil"
                    isActive={activeTab === 3}
                    onClick={() => handleTabClick(3)}
                />
                <div className="tab-indicator" style={tabIndicatorStyle}></div>
            </div>

            {activeTab === 1 && <TopicsList />}
            {activeTab === 2 && <PracticeComp />}
            {activeTab === 3 && <RecoilMainComp />}
        </div>
    );
};