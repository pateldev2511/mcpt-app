
const axios = require('axios')

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const AxiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
    }
})

// Get Category List
const getCategoryList = () => AxiosClient.get('/doc-categories?populate=*')

// Get Treatment List
const getTreatmentList = () => AxiosClient.get('/categories?populate=*')

// Get Therapist List
const getTherapistList=()=>AxiosClient.get('/therapists?populate=*')

// Get Therapist by Category
const getTherapistByCategory = (category) => {
    return AxiosClient.get(`/therapists?filters[doc_category][Name][$in]=${category}&populate=*`);
  };

  // Get Therapist by ID
  const getTherapistById = (id) => AxiosClient.get('/therapists/'+id+'?populate=*');

  // Book Appointment
  const BookAppointment = (data) => AxiosClient.post('/appointments', data);

// Send Email
  const sendEmail = (data) => axios.post('/api/sendEmail', data);

  // Get Booking List

  const getUserBookingList = (UserEmail) => AxiosClient.get('/appointments?[filters][Email][$eq]='+UserEmail+
    '&populate[therapist][populate][Image][populate][0]=url&populate=*')

    // Delete Booking

    const deleteBooking = (id) => AxiosClient.delete('/appointments/'+id)

export default {
    getCategoryList,
    getTreatmentList,
    getTherapistList,
    getTherapistByCategory,
    getTherapistById,
    BookAppointment,
    sendEmail,
    getUserBookingList,
    deleteBooking
}