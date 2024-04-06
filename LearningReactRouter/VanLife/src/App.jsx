import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanTile from "./pages/VanTile";

export default function App() {
  return (
    <BrowserRouter>
      <header className="head">
        <Link to={"/"}><h1>#VANLIFE</h1></Link>
        <nav>
          <Link to={"/about"}>About</Link>
          <Link to={"/vans"}>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanTile />} />
      </Routes>
    </BrowserRouter>
  );
}