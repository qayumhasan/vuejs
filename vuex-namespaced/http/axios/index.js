// axios
import axios from 'axios'

const domain = ""
axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('userAccessToken');
export default axios.create({
    domain
    // You can add your headers here
})
