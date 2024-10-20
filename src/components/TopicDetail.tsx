// src/TopicDetail.tsx
import React from 'react';
import '../styles/TopicDetail.css';

// 섹션의 타입 정의
interface Section {
  title: string;
  content: string;
  code: string;
}

// props의 타입 정의
interface TopicDetailProps {
  title: string;
  sections: Section[];
}

const TopicDetail: React.FC<TopicDetailProps> = ({ title, sections }) => {
  return (
    <div className="detail-container">
      <h1>{title}</h1>
      {sections.map((section, index) => (
        <section className="feature-section" key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          <pre><code>{section.code}</code></pre>
        </section>
      ))}
    </div>
  );
};

export default TopicDetail;
