import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
import cartItems from './data';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const defaultState = {
    loading: false,
    cart: new Map(cartItems.map((item) => [item.id, item])),
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE, id });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE, id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
