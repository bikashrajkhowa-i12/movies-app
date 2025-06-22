import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({ loading: false });
  const [loading, setLoading] = useState(false);
  
  return (
    <AppContext.Provider value={{ globalData, setGlobalData, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};
