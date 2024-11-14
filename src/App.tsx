// src/App.tsx
import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopicsList from "./components/TopicsList";
import ComponentsLifecycle from "./components/practice/ComponentsLifecycle";
import "./styles/App.css";

const App = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="app-container">
            {/* 상단 탭 네비게이션 바 */}
            <div className="top-tabs">
                <Link to="/topics">
                    <button className={activeTab === 1 ? "top-tab active" : "top-tab"} onClick={() => handleTabClick(1)}>
                        Study
                    </button>
                </Link>
                <Link to="/components-lifecycle">
                    <button className={activeTab === 2 ? "top-tab active" : "top-tab"} onClick={() => handleTabClick(2)}>
                        Practice
                    </button>
                </Link>
                <div className="tab-indicator" style={{ transform: `translateX(${(activeTab - 1) * 100}%)` }}></div>
            </div>

            {/* 라우터 설정 */}
            <Routes>
                <Route path="/" element={<TopicsList />} />
                <Route path="/topics" element={<TopicsList />} />
                {/* <Route path="/topic/:id" element={<TopicPage />} /> */}
                <Route path="/components-lifecycle" element={<ComponentsLifecycle />} />
            </Routes>
        </div>
    );
};

const RootApp = () => {
    return (
        <Router>
            
            <App />
        </Router>
    );
};

export default RootApp;