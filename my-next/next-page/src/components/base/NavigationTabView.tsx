'use client';

// Server component
// 기본적으로 생성하면 Server component가 된다
// html에 자바스크립트 기능넣기 불가능 - ex) onClick
// 리액트 훅 불가능
// 로딩속도가 매우 빠름, SEO, 캐싱 가능

// Client component
// 'use client'; 를 사용하면 client component가 됨
// 맨 위에 작성해야함
// 로드할 때 JS가 많이 필요해서 로딩 느림
// hydration: (html -> javascript로 html을 다시 읽고 분석하는 일)
// 렌더링이 완료된 후에 JS가 실행됨

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