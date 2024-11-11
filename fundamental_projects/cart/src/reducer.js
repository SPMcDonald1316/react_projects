import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  let newCart;
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
    case REMOVE:
      newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    case INCREASE:
      newCart = new Map(state.cart);
      newCart.get(action.payload.id).amount++;
      return { ...state, cart: newCart };
    case DECREASE:
      newCart = new Map(state.cart);

      newCart.get(action.payload.id).amount === 1
        ? newCart.delete(action.payload.id)
        : newCart.get(action.payload.id).amount--;

      return { ...state, cart: newCart };
    default:
      throw new Error(`no matching action type: ${action.type}`);
  }
};
export default reducer;
