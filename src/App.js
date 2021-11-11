import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chat from "../../client/src/components/Chat/Chat";
import Join from "../../client/src/components/Join/Join";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* these are not components, 'ELEMENTS' */}
        <Route path="/" exact element={<Join/>} />
        <Route path="/chat"  element={<Chat/>} />
      </Routes>
    </Router>
  );
}
