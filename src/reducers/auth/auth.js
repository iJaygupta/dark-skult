const auth = (state = {}, action) => {

    switch (action.type) {
        case 'init':
            return { email: '', password: '', error: false, msg: '', signupError: false, isManualLogout: false, signupMsg: '', isAuthenticated: false, userInfo: {}, isAuthSuccess: false }

        case 'login':
            return { ...state, email: '', password: '', error: action.error, msg: action.msg, token: action.token, userInfo: action.userInfo }

        case 'signup':
            return { ...state, signupError: action.error, signupMsg: action.msg }

        default:
            return state

    }

}

export default auth;