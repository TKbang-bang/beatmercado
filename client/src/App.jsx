import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Toaster } from "sonner";

import Home from "./views/Home";
import ABout from "./views/ABout";
import Beats from "./views/Beats";
import Contact from "./views/Contact";
import Header from "./components/Header";

axios.defaults.baseURL = `${import.meta.env.VITE_SERVER_URL}`;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/beats" element={<Beats />} /> */}
        <Route path="/about" element={<ABout />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Toaster position="top-center" richColors duration={2500} />
    </>
  );
}

export default App;
