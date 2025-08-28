import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css' 
import Quake from "./components/Quake.jsx";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quake />} />
      </Routes>
    </Router>
  )
}

export default App