import api from '../../lib/request';
import apiPaths from '../../lib/api';



const auth = {
    authenticate: function () {
        return {
            type: 'authenticate',
            error: false,
            msg: '',
            isAuthenticate: '',
            isAuthSuccess: true
        }
    },
    login: function (mobile, password, rememberMe, callback) {
        return dispatch => {
            api.setMethod('POST').sendRequest(apiPaths.logIn, { mobile: mobile, password: password }, false, function (response) {
                dispatch({
                    type: 'login',
                    error: response.data.error,
                    msg: response.data.msg,
                    token: response.data.token,
                    userInfo: response.data.data
                });
                callback({ token: response.data.token, userInfo: response.data.data, error: response.data.error, code: response.data.code, msg: response.data.msg });
            }, dispatch)
        }
    },
    signUp: function (userDetail, callback) {
        return dispatch => {
            api.setMethod('POST').sendRequest(apiPaths.signUp, userDetail, false, function (response) {
                console.log(response);
                callback(response);
            }, dispatch)
        }
    },
    socialLogin: function (socialToken, callback) {
        let payload = {
            "socialToken": `${socialToken}`
        }
        return dispatch => {
            api.setMethod('POST').sendRequest(apiPaths.socialLogin, payload, false, function (response) {
                dispatch({
                    type: 'socialLogin',
                    error: response.data.error,
                    msg: response.data.msg,
                    token: response.data.token,
                    userInfo: response.data.data
                });
                callback(response.data);
            }, dispatch)
        }
    }
}

export default auth;

