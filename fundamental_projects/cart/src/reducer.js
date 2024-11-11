import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  let amount;
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
    case REMOVE:
      state.cart.delete(action.id);
      return { ...state };
    case INCREASE:
      state.cart.get(action.id).amount++;
      return { ...state };
    case DECREASE:
      state.cart.get(action.id).amount--;
      amount = state.cart.get(action.id).amount;
      if (amount === 0) state.cart.delete(action.id);
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
