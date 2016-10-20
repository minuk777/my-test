import { combineReducers } from "redux"

import userReducer from "./userReducer"
import exReducer from "./exReducer"

export default combineReducers({
	user: userReducer,
	exinfo: exReducer,
})