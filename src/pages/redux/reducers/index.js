import { combineReducers } from 'redux'

import {countryListReducer} from './country-list-reducer'

export const rootReducer = combineReducers({
    countryListReducer: countryListReducer,
})