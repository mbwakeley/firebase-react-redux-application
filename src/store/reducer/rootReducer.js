import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

//combines the two reducers into a root reducers with 2 properties.
const rootReducer = combineReducers({
  auth: authReducer,
  projectReducer: projectReducer
});

export default rootReducer;
