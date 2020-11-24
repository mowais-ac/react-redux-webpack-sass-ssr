import axios from 'axios'

process.env.NODE_ENV === 'development' ? (
    axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://applist.com/api'
) : (
    axios.defaults.baseURL = 'https://applist.com/api'
)

axios.defaults.headers.common['Authorization'] = "Basic " + window.btoa("mobileapi:Applist2019")
axios.defaults.headers['content-type'] = 'application/json'
axios.defaults.headers['withCredentials'] = true
axios.defaults.headers['crossorigin'] = true

axios.interceptors.response.use(
  response => response,
  error => {
    // if(error.response.status === 401){
    //     store.dispatch(logout());
    // }
    return Promise.reject(error)
  }
)

export default axios
