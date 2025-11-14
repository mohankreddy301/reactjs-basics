import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./App.jsx";
import APIs from "./APIs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APIs />
  </StrictMode>
);
