// src/TopicsList.js
import { Link } from "react-router-dom";
import { topics } from "./data";

const TopicsList = () => {
  return (
    <div>
      <h1>React Study Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicsList;
