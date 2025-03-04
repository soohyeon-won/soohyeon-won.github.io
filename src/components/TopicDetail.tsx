// src/TopicDetail.tsx
import React from 'react';
import '../styles/TopicDetail.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; // 원하는 테마로 변경 가능
import 'prismjs/themes/prism-tomorrow.css'; 

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
            <SyntaxHighlighter language="typescript" style={solarizedlight}>
              {section.code}
            </SyntaxHighlighter>
          )}
        </section>
      ))}
    </div>
  );
};

export default TopicDetail;
