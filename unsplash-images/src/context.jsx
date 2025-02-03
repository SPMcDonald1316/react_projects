import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({ children }) => {
  const greeting = 'hello';
  return (
    <GlobalContext.Provider value={{ greeting }}>
      {children}
    </GlobalContext.Provider>
  );
};
