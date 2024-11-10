import React from 'react';
import { topics } from "./data";
import TopicDetail from './TopicDetail';
import { Topic } from './data';
import { Helmet } from 'react-helmet';

interface TopicPageProps {
  topicId: string;
}

const TopicPage = ({ topicId }: TopicPageProps) => {
  const topic = topics.find(t => t.id === topicId) as Topic | undefined;
  console.log("Found topic:", topic);

  return (
    <>
      {topic ? (
        <>
          <Helmet>
            <title>{topic.title} - React Study</title>
            <meta name="description" content={`${topic.title}`} />
            <meta name="keywords" content={`React, ${topic.title}`} />
          </Helmet>
          <TopicDetail title={topic.title} sections={topic.sections || []} />
        </>
      ) : (
        <p>Topic not found.</p>
      )}
    </>
  );
};

export default TopicPage;
