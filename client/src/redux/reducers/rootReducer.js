import { combineReducers } from 'redux'

import authReducer from './authReducer'
import chatReducer from './chartReducer'

export default combineReducers({
    authReducer: authReducer,
    chatReducer: chatReducer
})