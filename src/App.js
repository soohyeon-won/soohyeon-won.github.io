// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopicsList from "./TopicsList";
import TopicDetail from "./TopicDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopicsList />} />
        <Route path="/topic/:id" element={<TopicDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
