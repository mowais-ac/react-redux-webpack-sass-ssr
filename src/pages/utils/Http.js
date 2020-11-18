import axios from 'axios'

process.env.NODE_ENV === 'development' ? (
    axios.defaults.baseURL = 'http://localhost:7070/v1'
) : (
    axios.defaults.baseURL = 'https://proteus.bankonus.com/v1'
)

// axios.defaults.headers.common['Authorization'] = "Basic " + window.btoa("mobileapi:Applist2019")
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
