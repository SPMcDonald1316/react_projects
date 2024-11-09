import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const defaultState = {
    loading: false,
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
