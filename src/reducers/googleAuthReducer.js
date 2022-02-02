/* eslint-disable import/no-anonymous-default-export */
import {
    LOGIN,
    LOGOUT,
} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    nomeCompleto: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {...action.payload}
        case LOGOUT:
            return {isSignedIn: false}
        default:
            return state;
    }
}

