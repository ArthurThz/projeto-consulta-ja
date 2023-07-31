import { useState, createContext } from "react";

export const isLoggedContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(null);

  return (
    <isLoggedContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </isLoggedContext.Provider>
  );
};
