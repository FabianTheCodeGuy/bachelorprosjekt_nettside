import "./styles/constants.css";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/grid.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
