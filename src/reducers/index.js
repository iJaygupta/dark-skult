import { combineReducers } from 'redux'

import auth from '../reducers/auth/Auth'
import profile from '../reducers/profile/Profile'



export const application = combineReducers({
    authData: auth,
    profileData: profile
})

export const initialState = {

    auth: auth({}, { type: "init " }),
    profile: profile({}, { type: "init " }),

}
