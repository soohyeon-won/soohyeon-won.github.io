// src/App.tsx
import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import TopicsList from "./components/TopicsList";
import "./styles/App.css";
import PracticeComp from "./components/practice/PracticeComp";
import Tab from "./components/Tab";

const App = () => {
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
          <div className="tab-indicator" style={tabIndicatorStyle}></div>
        </div>
  
        <Routes>
          <Route path="/" element={<Navigate to="/study" replace />} />
          <Route path="/study" element={<TopicsList />} />
          <Route path="/practice" element={<PracticeComp />} />
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