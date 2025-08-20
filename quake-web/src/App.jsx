import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css' 
import QuakeArena from "./components/Hero.jsx";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuakeArena />} />
      </Routes>
    </Router>
  )
}

export default App