import { ADDITIONAL_INFORMATION_SUBMIT_REQUEST, ADDITIONAL_INFORMATION_SUBMIT_ERROR, ADDITIONAL_INFORMATION_SUBMIT_SUCCESS } from '../constants/additionalInformation-submit-constants'
const initialState = {
    processing: false,
    status: false,
    data: '',
}

export const additionalInformationSubmitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITIONAL_INFORMATION_SUBMIT_REQUEST:
            return {
                processing: true,
                status: false,
                data: '',
            }
        case ADDITIONAL_INFORMATION_SUBMIT_SUCCESS:
            return {
                processing: false,
                data: action.response.data,
                status: action.response.status,
            }
        case ADDITIONAL_INFORMATION_SUBMIT_ERROR:
            return {
                processing: false
            }
        default:
            return state
    }
}
