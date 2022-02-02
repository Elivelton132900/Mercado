import axios from 'axios'

export default axios.create({
    baseURL: 'https://mercado-backend-api.herokuapp.com'
})