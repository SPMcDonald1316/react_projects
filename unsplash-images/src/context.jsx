import { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };

  return (
    <GlobalContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
