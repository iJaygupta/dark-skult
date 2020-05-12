const profile = (state = {}, action) => {

    switch (action.type) {
        case 'init':
            return { userInfo: {} }

        case 'getUserDetails':
            return { ...state, userInfo: { userId : action.data.user_id , name : action.data.name } }

        default:
            return state

    }

}

export default profile;