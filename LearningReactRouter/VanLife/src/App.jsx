import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./pages/server";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanTile from "./pages/VanTile";
import Layout from "./Components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanTile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}