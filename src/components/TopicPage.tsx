// src/components/TopicPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { topics } from "./data";
import TopicDetail from './TopicDetail';
import { Topic } from './data'; // Topic 타입을 가져옵니다.

const TopicPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URL에서 :id를 가져옴

  const topic = topics.find(t => t.id === id) as Topic | undefined; // 해당 id에 맞는 데이터를 찾음
  console.log("Found topic:", topic);

  // topic이 존재하고 sections이 있을 때만 전달
  return topic ? (
    <TopicDetail title={topic.title} sections={topic.sections || []} />
  ) : (
    <p>Topic not found.</p>
  );
};

export default TopicPage;
