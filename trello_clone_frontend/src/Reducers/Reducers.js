import { combineReducers } from "redux";
import { routeReducer } from "react-router-redux";
import session from './Session';

export default combineReducers({
  routing: routeReducer,
  session: session,
});