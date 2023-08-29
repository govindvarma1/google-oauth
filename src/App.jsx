import React from "react";
import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="body">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Body />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
