import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ConsultationProvider } from "./Context/ConsultationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConsultationProvider>
      <App />
    </ConsultationProvider>
  </React.StrictMode>
);
