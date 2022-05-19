import { combineReducers } from 'redux'
import { filesReducer } from './filesReducer'
import { optionsReducer } from './optionsReducer'


export const rootReducer = combineReducers({
    files: filesReducer,
    options: optionsReducer,
})