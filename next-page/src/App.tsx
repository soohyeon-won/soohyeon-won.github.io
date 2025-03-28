// src/App.tsx
import React, { useMemo, useState } from "react";
import "./styles/App.css";
import { NavigationTabView } from "./components/base/NavigationTabView";

const App = () => {
  return (
    <div className="app-container">
      <NavigationTabView />
    </div>
  );
};

const RootApp = () => {
  return (
    <App />
  );
};

export default RootApp;