import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";

const rootReducer=combineReducers({
 profileData: userDataReducer
})

export default rootReducer;