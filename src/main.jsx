import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyle } from "./GlobalStyles/global-styles";

import { AppointmentProvider } from "./Context/AppointmentContext";

import { UserProvider } from "./Context/UserContext";
import { LoginProvider } from "./Context/IsLoggedContext";
import { ToggleMenuProvider } from "./Context/toggleMenuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <LoginProvider>
    <ToggleMenuProvider>
      <UserProvider>
        <AppointmentProvider>
          <GlobalStyle />
          <App />
        </AppointmentProvider>
      </UserProvider>
    </ToggleMenuProvider>
  </LoginProvider>
  // {/* </React.StrictMode> */}
);
