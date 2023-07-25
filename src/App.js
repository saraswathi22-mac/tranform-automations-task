import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Main from "./components/Main/Main";
import Resource from "./components/Resource/Resource";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/resources" element={<Main />} />
          <Route path="/resource/:id" element={<Resource />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
