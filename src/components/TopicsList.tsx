import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/TopicsList.css";
import { topics } from "./data";
import TopicPage from "./TopicPage";

const TopicsList: React.FC = () => {
    const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

    // useState로 정의된 상태는 React가 그 변경을 감지하고, 변경될 때마다 컴포넌트를 다시 렌더링
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
                        <li key={topic.id} className={`list-item ${selectedTopicId === topic.id ? 'selected' : ''}`} onClick={() => handleTopicClick(topic.id)}>
                            {topic.depth === 0 ? (
                                <h2>
                                    {topic.id}. {topic.title}
                                </h2>
                            ) : (
                                <span>- {topic.title}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right-panel">
                <h1 className="title">Practice Area</h1>
                {selectedTopicId ? (
                    <div className="component-item">
                        <TopicPage topicId={selectedTopicId} />
                    </div>
                ) : (
                    <p>Select a topic to view its preview here.</p>
                )}
                <p>This is where you can develop and view your practice implementations.</p>
            </div>
        </div>
    );
};

export default TopicsList;
