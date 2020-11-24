import { COUNTRY_LIST_REQUEST, COUNTRY_LIST_SUCCESS, COUNTRY_LIST_ERROR } from '../constants/country-list-constants'
import { countryListService } from '../services/country-list-service'
export const listCountries = (params) => {
    return dispatch => {
        dispatch(requestCountries(params))
        countryListService.listCountries(params)
            .then(response => {
                dispatch(listCountriesSuccess(response))
            })
            .catch(error => {
                dispatch(listCountriesError(error))
            })
    }

    function requestCountries (params) {
        return { type: COUNTRY_LIST_REQUEST, params }
    }

    function listCountriesSuccess (response) {
        return { type: COUNTRY_LIST_SUCCESS, response }
    }

    function listCountriesError (response) {
        return { type: COUNTRY_LIST_ERROR, response }
    }
}
