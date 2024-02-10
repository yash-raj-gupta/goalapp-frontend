// for making http requests , sending the data back, setting any data in local storage authService is made

import axios from 'axios'

const API_URL = '/api/users/'

//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


//Logout user 
const logout = async () => {
    localStorage.removeItem('user')
}

//login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService ={
    register,logout,login,
}

export default authService