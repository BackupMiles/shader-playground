import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BobbyBlob from "./components/examples/bobby-blob";
import Globe from "./components/examples/globe";
import Perlin from "./components/examples/perlin";
import PlaneNoise from "./components/examples/plane-noise";
import RagingSea from "./components/examples/raging-sea/raging-sea";
import "./index.css";

const router = createBrowserRouter([
  // TODO: replace with some actual home component
  {
    path: "/",
    element: <h1>Hello!</h1>
  },
  {
    path: "/blob",
    element: <BobbyBlob />
  },
  {
    path: "/globe",
    element: <Globe />
  },
  {
    path: "/plane-noise",
    element: <PlaneNoise />
  },
  {
    path: "/perlin",
    element: <Perlin />
  },
  {
    path: "/raging-sea",
    element: <RagingSea />
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
