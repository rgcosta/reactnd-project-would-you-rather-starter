import * as API from '../util/_DATA';
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading";
import {setAuthUser} from "./authUser";


export function handleInitialLoad() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([
            API._getUsers(),
            API._getQuestions()
        ]).then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthUser(localStorage.getItem('token')));
            dispatch(hideLoading());
        })
    }
}