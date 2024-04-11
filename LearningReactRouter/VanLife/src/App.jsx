import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./pages/server";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as Fetchingg } from "./pages/Vans";
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
import Page404 from "./Components/404";
import Login from "./Login";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route path="vans" element={<Vans />} loader={Fetchingg} />
    <Route path="vans/:id" element={<VanTile />} />
    <Route path="host" element={<LayoutHost />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="hostvans" element={<HostsVan />} />
      <Route path="hostvans/:id" element={<HostsVanDetail />} >
        <Route index element={<Detail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="photos" element={<Photos />} />
      </Route>
      <Route path="reviews" element={<Reviews />} />
    </Route>
    <Route path="*" element={<Page404 />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}