import axios from 'axios'
const instance = axios.create({
    
    baseURL:'https://warm-castle-52971.herokuapp.com',
})
export default instance