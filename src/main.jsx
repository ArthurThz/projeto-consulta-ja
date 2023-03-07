import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ConsultationProvider } from "./Context/ConsultationContext";

import { UserProvider } from "./Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ConsultationProvider>
        <App />
      </ConsultationProvider>
    </UserProvider>
  </React.StrictMode>
);
