import {LOADING_LOGIN_REQUEST, FAIL_LOGIN, SUCCESS_LOGIN} from '../Constants'
import axios from 'axios';

export function tryLogin(loginInfo) {

    dispatch(loading())
    const header = {
      headers: {
        "Content-Type": "application/json"
        }
    }
    const body = {loginInfo}

    axios
        .post("http://localhost:8082/token", body, header)
        .then(response => {
            dispatch(success(response))
        })
        .catch(err => {
            dispatch(failure());
        })
};

function loading() {
    return { type: LOADING_LOGIN_REQUEST}
}

function success(response) {
    return { type: SUCCESS_LOGIN, userInfo: response.data}
}

function failure() {
    return { type: FAIL_LOGIN}
}
