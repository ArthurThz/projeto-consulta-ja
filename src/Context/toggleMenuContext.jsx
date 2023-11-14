import { createContext, useState } from "react";

export const ToggleMenuContext = createContext();

export const ToggleMenuProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <ToggleMenuContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
};
