import { COUNTRY_LIST_REQUEST, COUNTRY_LIST_ERROR, COUNTRY_LIST_SUCCESS } from '../constants/country-list-constants'
const initialState = {
    searching: true
}

export const countryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTRY_LIST_REQUEST:
            return {
                searching: true
            }
        case COUNTRY_LIST_SUCCESS:
            return {
                searching: false,
                data: action.response.data
            }
        case COUNTRY_LIST_ERROR:
            return {
                searching: false
            }
        default:
            return state
    }
}
