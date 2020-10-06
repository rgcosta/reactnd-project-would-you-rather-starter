import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authUser from "./authUser";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    authUser,
    users,
    questions,
    loading: loadingBarReducer
})