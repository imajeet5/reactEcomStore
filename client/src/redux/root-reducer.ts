import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});

/**
 * Our full state in redux is just one big Json object. They key that represents the individual slices of the states, 
 * which are the actual reducers are the individual reducers that we have wrote
 * 
 */