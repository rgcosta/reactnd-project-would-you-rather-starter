import { SET_AUTH_USER, UNSET_AUTH_USER } from "../actions/authUser";

export default function authUser(state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.id;
        case UNSET_AUTH_USER:
            return null;
        default:
            return state;
    }
}