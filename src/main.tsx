import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Perlin from "./components/examples/perlin";
import PlaneNoise from "./components/examples/plane-noise";
import "./index.css";
import BobbyBlob from "./components/examples/bobby-blob";

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
    path: "/plane-noise",
    element: <PlaneNoise />
  },
  {
    path: "/perlin",
    element: <Perlin />
  },
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
