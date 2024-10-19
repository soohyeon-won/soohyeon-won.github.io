// src/TopicDetail.js
import { useParams } from "react-router-dom";
import { topics } from "./data";

const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics.find((topic) => topic.id === parseInt(id));

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
    </div>
  );
};

export default TopicDetail;
