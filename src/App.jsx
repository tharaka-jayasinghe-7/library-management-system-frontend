import React from "react";
import "./index.css"; // Ensure this is correctly imported
import Dashboard from "./pages/Dashboard.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="root">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
