import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Index from "./pages";

const App = () => {
  return (
    <Router>
      <div
        style={{
          maxWidth: "1366px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Index />
      </div>
    </Router>
  );
};

export default App;
