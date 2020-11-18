import { ADDITIONAL_INFORMATION_SUBMIT_REQUEST, ADDITIONAL_INFORMATION_SUBMIT_SUCCESS, ADDITIONAL_INFORMATION_SUBMIT_ERROR } from '../constants/additionalInformation-submit-constants'
import { additionalInformationSubmitService } from '../services/additionalInformation-submit-service'
export const submitAdditionalInformation = (params) => {
    return dispatch => {
        dispatch(requestAdditionalInformation(params))
        additionalInformationSubmitService.submitAdditionalInformation(params)
            .then(response => {
                dispatch(submitAdditionalInformationSuccess(response))
            })
            .catch(error => {
                dispatch(submitAdditionalInformationError(error))
            })
    }

    function requestAdditionalInformation (params) {
        return { type: ADDITIONAL_INFORMATION_SUBMIT_REQUEST, params }
    }

    function submitAdditionalInformationSuccess (response) {
        return { type: ADDITIONAL_INFORMATION_SUBMIT_SUCCESS, response }
    }

    function submitAdditionalInformationError (response) {
        return { type: ADDITIONAL_INFORMATION_SUBMIT_ERROR, response }
    }
}
