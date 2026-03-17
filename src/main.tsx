import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import App from "./App";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
