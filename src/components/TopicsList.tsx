// src/TopicsList.tsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Route, Routes } from "react-router-dom";
import "../styles/TopicsList.css";
import { topics } from "./data";
import ComponentsLifecycle from "./practice/ComponentsLifecycle";
import TopicPage from "./TopicPage";

const TopicsList: React.FC = () => {
    const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

    const handleTopicClick = (id: string) => {
        setSelectedTopicId(id);
    };
    
    return (
        <div className="content-wrapper">
            <div className="left-panel">
                <h1 className="title">React Study</h1>
                <Helmet>
                    <title>React Study</title>
                    <meta name="description" content="soohyeon-won react study" />
                    <meta name="keywords" content="react, soohyeon-won, study" />
                </Helmet>
                <ul className="list">
                    {topics.map(topic => (
                        <li key={topic.id} className="list-item">
                            {topic.depth === 0 ? (
                                <h2>
                                    {topic.id}. {topic.title}
                                </h2>
                            ) : (
                                <Link to={`/topic/${topic.id}`}>- {topic.title}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            
            
            <div className="right-panel">
                <h1 className="title">Practice Area</h1>
                {/* 선택한 주제에 따른 컴포넌트 렌더링 */}
                <Routes>
                    <Route path="/topic/:id" element={<TopicPage />} />
                    <Route path="/components-lifecycle" element={<ComponentsLifecycle />} />
                </Routes>
                <p>This is where you can develop and view your practice implementations.</p>
            </div>
        </div>
    );
};

export default TopicsList;
