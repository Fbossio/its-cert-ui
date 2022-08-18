import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  const [certData, setCertData] = useState({});
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
