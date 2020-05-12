import { combineReducers } from 'redux'

import auth from '../reducers/auth/Auth'
import profile from '../reducers/profile/Profile'
import chat from '../reducers/chat/Chat'




export const application = combineReducers({
    authData: auth,
    profileData: profile,
    chatData : chat
})

export const initialState = {

    authData: auth({}, { type: "init " }),
    profileData: profile({}, { type: "init " }),
    chatData: chat({}, { type: "init " }),


}
