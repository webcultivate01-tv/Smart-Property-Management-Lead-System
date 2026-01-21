import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

/* Pages */
import Home from "./pages/user/Home";
import AdminDashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
