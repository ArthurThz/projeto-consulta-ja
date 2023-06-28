import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ConsultationProvider } from "./Context/ConsultationContext";

import { UserProvider } from "./Context/UserContext";
import { LoginProvider } from "./Context/IsLoggedContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <UserProvider>
        <ConsultationProvider>
          <App />
        </ConsultationProvider>
      </UserProvider>
    </LoginProvider>
  </React.StrictMode>
);
