import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const defaultState = {};

  const [state, dispatch] = useReducer(reducer, defaultState);

  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default AppProvider;
