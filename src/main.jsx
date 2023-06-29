import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AppointmentProvider } from "./Context/ConsultationContext";

import { UserProvider } from "./Context/UserContext";
import { LoginProvider } from "./Context/IsLoggedContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <UserProvider>
        <AppointmentProvider>
          <App />
        </AppointmentProvider>
      </UserProvider>
    </LoginProvider>
  </React.StrictMode>
);
