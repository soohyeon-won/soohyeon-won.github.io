import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import TopicsList from "./components/TopicsList";
import TopicPage from "./components/TopicPage";
import ComponentsLifecycle from './components/practice/ComponentsLifecycle';
import './styles/App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="app-container">
      {/* 상단 탭 네비게이션 바 */}
      <div className="top-tabs">
        <Link to="/topics">
          <button className={activeTab === 1 ? 'top-tab active' : 'top-tab'} onClick={() => handleTabClick(1)}>
            Study
          </button>
        </Link>
        <Link to="/components-lifecycle">
          <button className={activeTab === 2 ? 'top-tab active' : 'top-tab'} onClick={() => handleTabClick(2)}>
            Practice
          </button>
        </Link>
      </div>
      <div className="tab-indicator" style={{ transform: `translateX(${(activeTab - 1) * 100}%)` }}></div>
      
      {/* 라우터 설정 */}
      <Routes>
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/topic/:id" element={<TopicPage />} />
        <Route path="/components-lifecycle" element={<ComponentsLifecycle />} />
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
