import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ABout from "./views/ABout";
import Beats from "./views/Beats";
import Contact from "./views/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beats" element={<Beats />} />
        <Route path="/about" element={<ABout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
