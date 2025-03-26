'use client';
import React from 'react';
import '../styles/TopicDetail.css';
import 'prismjs/themes/prism-tomorrow.css'; 
import SyntaxHighlighter from 'react-syntax-highlighter';

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

const TopicDetail = ({ title, sections }: TopicDetailProps) => {
  
  return (
    <div className="detail-container">
      <h1>{title}</h1>
      {sections.map((section, index) => (
        <section className="feature-section" key={index}>
          <h2>{section.title}</h2>
          {section.content.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          {section.code && (  // section.code가 있을 때만 렌더링
            <SyntaxHighlighter language="typescript">
              {section.code}
            </SyntaxHighlighter>
          )}
        </section>
      ))}
    </div>
  );
};

export default TopicDetail;
