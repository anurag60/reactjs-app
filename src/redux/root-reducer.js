import { combineReducers } from "redux";
import {usersReducer,rolesReducer} from "./reducer";

const rootReducer = combineReducers({
    data1: usersReducer,
    data: rolesReducer
});

export default rootReducer;