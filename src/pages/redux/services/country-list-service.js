import { GET_COUNTRIES } from '../constants/api'
import Http from '../../utils/Http'


export const countryListService = {
    listCountries
}

function listCountries (params) {
    return Http.get(GET_COUNTRIES).then((response) => {
        const data = response.data
        localStorage.setItem('countries', JSON.stringify(data))
        return {
            data,
            params: params
        }
    })
}
