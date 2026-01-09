import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import AddEmployee from "./pages/AddEmployee";
import Navigation from "./components/Navigation";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      
      <Navigation /> 
      
      <Routes>
        
        {!token ? (
          <Route path="*" element={<Login />} />
        ) : (
          <>
            <Route path="/" element={<DashBoard />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;