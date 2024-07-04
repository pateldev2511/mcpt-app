
const axios = require('axios')

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const AxiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
    }
})

const getCategoryList = () => AxiosClient.get('/doc-categories?populate=*')

const getTreatmentList = () => AxiosClient.get('/categories?populate=*')

const getTherapistList=()=>AxiosClient.get('/therapists?populate=*')

export default {
    getCategoryList,
    getTreatmentList,
    getTherapistList
}