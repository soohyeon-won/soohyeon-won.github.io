// src/TopicsList.js
import { Link } from "react-router-dom";
import { topics } from "./data";
import "../styles/TopicsList.css";

const TopicsList = () => {
    return (
        <div className="container">
            <h1 className="title">React Study</h1>
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
    );
};

export default TopicsList;
