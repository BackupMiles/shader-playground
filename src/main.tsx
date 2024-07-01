import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import PerlinExample from "./components/examples/perlin-example";
import MouseExample from "./components/examples/mouse-example";
import "./index.css";

const router = createBrowserRouter([
  // TODO: replace with some actual home component
  {
    path: "/",
    element: <h1>Hello!</h1>
  },
  {
    path: "/perlin",
    element: <PerlinExample />
  },
  {
    path: "/mouse",
    element: <MouseExample />
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
