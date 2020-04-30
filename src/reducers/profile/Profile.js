const profile = (state = {}, action) => {

    switch (action.type) {
        case 'init':
            return { email: '', password: '', error: false, msg: '', signupError: false, isManualLogout: false, signupMsg: '', isAuthenticated: false, userInfo: {}, isAuthSuccess: false, provider: {} }

        case 'getServiceProviderList':
            return { ...state, provider: action.data }

        default:
            return state

    }

}

export default profile;