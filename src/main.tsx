import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BobbyBlob from "./components/examples/bobby-blob";
import Bup from "./components/examples/bup/bup";
import Globe from "./components/examples/globe";
import HealthBar from "./components/examples/health-bar/health-bar";
import Perlin from "./components/examples/perlin";
import PlaneNoise from "./components/examples/plane-noise";
import RagingSea from "./components/examples/raging-sea/raging-sea";
import "./index.css";

const router = createBrowserRouter([
  // TODO: replace with some actual home component
  {
    path: "/",
    element: <h1>Hello!</h1>,
  },
  {
    path: "/shader-playground/blob",
    element: <BobbyBlob />
  },
  {
    path: "/shader-playground/bup",
    element: <Bup />
  },
  {
    path: "/shader-playground/globe",
    element: <Globe />
  },
  {
    path: "/shader-playground/plane-noise",
    element: <PlaneNoise />
  },
  {
    path: "/shader-playground/perlin",
    element: <Perlin />
  },
  {
    path: "/shader-playground/raging-sea",
    element: <RagingSea />
  },
  {
    path: "/shader-playground/health-bar",
    element: <HealthBar />
  },
  {
    path: "*",
    element: <Perlin />
  }
]);

const root = document.getElementById("root");
if (!root) {
  throw new Error("could not create app: missing component with id `root`");
}

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
