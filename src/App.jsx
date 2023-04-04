import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Index from "./pages";
import RegisterUser from "./Components/registerUser/RegisterUser";

const App = () => {
  const [model, setModel] = useState(false);

  const modelHandler = () => {
    setModel(true);
    localStorage.setItem("modalOpened", "false");
  };

  const modelHandlerFunction = () => {
    setModel(false);
    localStorage.setItem("modalOpened", "true");
  };
  useEffect(() => {
    const modalOpened = localStorage.getItem("modalOpened");
    if (modalOpened) {
      setModel(false);
    } else {
      setTimeout(() => {
        setModel(true);
      }, 3000);
    }
  }, []);
  return (
    <Router>
      <div
        style={{
          maxWidth: "1366px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Index modelHandler={modelHandler}/>
        {model && <RegisterUser toggle={modelHandlerFunction} />}
      </div>
    </Router>
  );
};

export default App;
