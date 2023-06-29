import { createContext, useState } from "react";

export const appointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [IdAppointment, setIdAppointment] = useState(0);

  return (
    <appointmentContext.Provider value={{ IdAppointment, setIdAppointment }}>
      {children}
    </appointmentContext.Provider>
  );
};
