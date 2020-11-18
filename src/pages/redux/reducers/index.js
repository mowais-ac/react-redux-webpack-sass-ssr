import { combineReducers } from 'redux'

import {additionalInformationSubmitReducer} from './additionalInformation-submit-reducer'

export const rootReducer = combineReducers({
    additionalInformationSubmitReducer: additionalInformationSubmitReducer,
})