import { createContext, useState } from "react";

export const ConsultationContext = createContext();

export const ConsultationProvider = ({ children }) => {
  const [IdConsultation, setIdConsultation] = useState(0);

  return (
    <ConsultationContext.Provider value={{ IdConsultation, setIdConsultation }}>
      {children}
    </ConsultationContext.Provider>
  );
};
