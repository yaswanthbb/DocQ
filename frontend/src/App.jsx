import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DoctorProfile from "./components/DoctorProfile";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
