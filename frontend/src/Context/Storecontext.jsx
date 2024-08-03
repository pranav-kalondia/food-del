import { createContext } from "react";
import { food_list } from "../assets/assets";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // Define the context value
  const contextValue = {
    food_list,
  };

  // Return the provider component with the value and children props
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;