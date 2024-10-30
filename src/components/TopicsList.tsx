// src/TopicsList.tsx
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/TopicsList.css";
import { topics } from "./data";
import ComponentsLifecycle from "./practice/ComponentsLifecycle";

const TopicsList: React.FC = () => {
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
                {/* 리스트 형식으로 컴포넌트 추가 */}
                <div className="component-item">
                    <h2>1. Life Cycle</h2>
                    <ComponentsLifecycle />
                </div>
                <div className="component-item">
                    <div className="component-title">함수형 컴포넌트 vs 클래스 컴포넌트</div>
                    <div className="component-description">{/* 여기에 다른 컴포넌트 추가 */}</div>
                </div>
                <p>This is where you can develop and view your practice implementations.</p>
            </div>
        </div>
    );
};

export default TopicsList;
