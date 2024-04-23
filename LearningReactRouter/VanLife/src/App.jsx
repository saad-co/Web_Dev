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
import VanTile, { loader as VansTileLoader } from "./pages/VanTile";
import Layout from "./Components/Layout";
import LayoutHost from "./Components/LayoutHost";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostsVan, { loader as HostVansLoader } from "./pages/Host/HostsVan";
import HostsVanDetail, { loader as HostVansDetailLoader } from "./pages/Host/HostVanDetail";
import Detail from "./pages/Host/Detail";
import Pricing from "./pages/Host/Pricing";
import Photos from "./pages/Host/Photos";
import Page404 from "./Components/404";
import Login from "./Login";
import { requireAuth } from "./utils";


const router = createBrowserRouter(createRoutesFromElements(
  <Route
    path="/"
    element={<Layout />}
  >
    <Route
      index
      element={<Home />}
    />
    <Route
      path="about"
      element={<About />}
    />
    <Route
      path="login"
      element={<Login />}
    />
    <Route
      path="vans"
      element={<Vans />}
      loader={Fetchingg}
    />
    <Route
      path="vans/:id"
      element={<VanTile />}
      loader={VansTileLoader}
    />
    <Route
      path="host"
      element={<LayoutHost />}
      loader={async () => await requireAuth()}>
      <Route
        index
        element={<Dashboard />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="hostvans"
        element={<HostsVan />}
        loader={HostVansLoader}
      />
      <Route
        path="hostvans/:id"
        element={<HostsVanDetail />}
        loader={HostVansDetailLoader}
      >
        <Route
          index
          element={<Detail />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="pricing"
          element={<Pricing />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="photos"
          element={<Photos />}
          loader={async () => {
            return null
          }}
        />
      </Route>
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => {
          return null
        }}
      />
    </Route>
    <Route
      path="*"
      element={<Page404 />}
    />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}