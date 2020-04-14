import { combineReducers } from 'redux'

import auth from '../reducers/auth/auth'


export const application = combineReducers({
    authData:  auth,
})

export const initialState = {

    auth: auth({}, { type: "init " }),
}
 