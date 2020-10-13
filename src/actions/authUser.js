export const SET_AUTH_USER = 'SET_AUTH_USER';
export const UNSET_AUTH_USER = 'UNSET_AUTH_USER';

export function setAuthUser(id) {
    return {
        type: SET_AUTH_USER,
        id
    }
}

export function unsetAuthUser() {
    return {
        type: UNSET_AUTH_USER
    }
}