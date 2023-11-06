import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

import { GlobalStyle } from "./GlobalStyles/global-styles";

import { AppointmentProvider } from "./Context/AppointmentContext";

import { UserProvider } from "./Context/UserContext";
import { LoginProvider } from "./Context/IsLoggedContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <LoginProvider>
    <UserProvider>
      <AppointmentProvider>
        <GlobalStyle />
        <App />
      </AppointmentProvider>
    </UserProvider>
  </LoginProvider>
  // {/* </React.StrictMode> */}
);
