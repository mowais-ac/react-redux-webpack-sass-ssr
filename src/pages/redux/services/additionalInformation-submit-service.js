import { SUBMIT_ADDITIONAL_INFO } from '../constants/api'
import Http from '../../utils/Http'
import { useHistory } from "react-router-dom";

export const additionalInformationSubmitService = {
    submitAdditionalInformation
}

function submitAdditionalInformation (params) {
    const applicationRef = params.applicationRef
    console.log('params: ', params)
    return Http.post(SUBMIT_ADDITIONAL_INFO + applicationRef, params).then((response) => {
        const data = response.data
        const status = response.status
        return {
            data,
            params: params,
            status: status
        }
    })
}
