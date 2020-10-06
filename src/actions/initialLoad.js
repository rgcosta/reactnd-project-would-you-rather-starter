import * as API from '../util/_DATA';
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthUser } from "./authUser";

const AUTH_USER = 'sarahedo'; //todo: replace it

export function handleInitialLoad() {
    return (dispatch) => {
        return Promise.all([
            API._getUsers(),
            API._getQuestions()
        ]).then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthUser(AUTH_USER));
        })
    }
}