// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import TopicsList from "./components/TopicsList";
import TopicPage from "./components/TopicPage";
import ComponentsLifecycle from './components/practice/ComponentsLifecycle';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTab === 1) {
      navigate("/topics");
    } else if (activeTab === 2) {
      navigate("/components-lifecycle");
    } else {

    }
  }, [activeTab, navigate]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="app-container">
      {/* 상단 탭 UI */}
      <div className="tabs">
        <button className={activeTab === 0 ? 'tab active' : 'tab'} onClick={() => handleTabClick(0)}>empty</button>
        <button className={activeTab === 1 ? 'tab active' : 'tab'} onClick={() => handleTabClick(1)}>study</button>
        <button className={activeTab === 2 ? 'tab active' : 'tab'} onClick={() => handleTabClick(2)}>practice</button>
      </div>
      <div className="tab-indicator" style={{ transform: `translateX(${activeTab * 100}%)` }}></div>
      
      {/* 라우터 설정 */}
      <Routes>
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/topic/:id" element={<TopicPage />} />
        <Route path="/components-lifecycle" element={<ComponentsLifecycle />} />
        {/* 다른 탭에 대한 라우트를 나중에 추가할 수 있습니다. */}
      </Routes>
    </div>
  );
};

const RootApp: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default RootApp;