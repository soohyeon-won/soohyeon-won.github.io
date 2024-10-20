// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopicsList from "./components/TopicsList";
import TopicPage from "./components/TopicPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopicsList />} />
        <Route path="/topic/:id" element={<TopicPage />} />
      </Routes>
    </Router>
  );
};

export default App;
