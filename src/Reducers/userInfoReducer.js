import {LOADING_LOGIN_REQUEST, FAIL_LOGIN, SUCCESS_LOGIN} from '../Constants'

const initialState = {
    loading: false,
    username: null,
    token: null,
}

export default function UserInfoReducer(state = initialState, action) {
    switch (action.type) {
        case FAIL_LOGIN:
            return {
                ...state,
                loading:  false,
            };
        case FAIL_LOGIN:
            return {
                ...state,
                loading: true
            };
        case SUCCESS_LOGIN:
            return {
                ...state,
                loading:  false,
                username: action.Username,
                token: action.Token
            };
        default:
            return state
    }
}
