import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  
  const currency = "$"

  const value = { doctors, currency };

  return (
    <AppContext.Provider value={value}>
      {children} {/* Ensure children is correctly rendered */}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
