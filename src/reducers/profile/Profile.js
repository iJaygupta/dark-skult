const profile = (state = {}, action) => {

    switch (action.type) {
        case 'init':
            return { userInfo: {} }

        case 'getUserDetails':
            return { ...state, userInfo: { userId : action.data.user_id , name : action.data.name } }

        case 'getUserDetails':
            return { ...state, email: '', password: '', error: action.error, msg: action.msg, token: action.token, userInfo: action.userInfo }


        default:
            return state

    }

}

export default profile;