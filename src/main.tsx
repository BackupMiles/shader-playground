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
import RayMarching from "./components/examples/ray-marching/ray-marching";
import WindyGrass from "./components/examples/windy-grass/windy-grass";
import Home from "./components/home";
import "./index.css";

const router = createBrowserRouter([
  // TODO: replace with some actual home component
  {
    path: "/shader-playground/",
    element: <Home />,
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
    path: "/shader-playground/windy-grass",
    element: <WindyGrass />
  },
  {
    path: "/shader-playground/ray-marching",
    element: <RayMarching />
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
