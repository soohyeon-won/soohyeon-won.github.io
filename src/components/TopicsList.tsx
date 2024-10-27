// src/TopicsList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { topics } from "./data"; // data.ts에서 topics 가져오기
import "../styles/TopicsList.css";
import { Helmet } from 'react-helmet';

const TopicsList: React.FC = () => {
    return (
        <div className="container">
            <h1 className="title">React Study</h1>
            <ul className="list">
                {topics.map((topic) => (
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
    );
};

export default TopicsList;
