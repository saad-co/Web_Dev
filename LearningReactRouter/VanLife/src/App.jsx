import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./pages/server";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanTile from "./pages/VanTile";
import Layout from "./Components/Layout";
import LayoutHost from "./Components/LayoutHost";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostsVan from "./pages/Host/HostsVan";
import HostsVanDetail from "./pages/Host/HostVanDetail";
import Detail from "./pages/Host/Detail";
import Pricing from "./pages/Host/Pricing";
import Photos from "./pages/Host/Photos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanTile />} />
          <Route path="host" element={<LayoutHost />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostsVan />} />
            <Route path="vans/:id" element={<HostsVanDetail />} >
              <Route index element={<Detail />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}