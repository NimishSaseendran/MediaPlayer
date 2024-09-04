import axios from 'axios'

const baseUrl = "https://media-player-server-0alu.onrender.com"

export const addVideos =async (data) =>{
    return await axios.post(`${baseUrl}/video`,data)
}

export const getVideos = async () =>{
    return await axios.get(`${baseUrl}/video`)
}

export const deleteVideos = async (id) =>{
    return await axios.delete(`${baseUrl}/video/${id}`)
}
export const addCategory = async (data) =>{
    return await axios.post(`${baseUrl}/category/`, data)
}

export const getCategories = async() =>{
    return await axios.get(`${baseUrl}/category/`)
}

export const deleteCategories = async(id) =>{
    return await axios.delete(`${baseUrl}/category/${id}`)
}

export const addHistory = async (data) =>{
    return await axios.post(`${baseUrl}/history/`, data)
}

export const getHistory = async () =>{
    return await axios.get(`${baseUrl}/history/`)
}

export const deleteHistory = async(id) =>{
    return await axios.delete(`${baseUrl}/history/${id}`)
}

export const updateCategory = async(id, data) => {
    return await axios.put(`${baseUrl}/category/${id}`, data)
}

export const CheckEmail =async (email) =>{
    return await axios.get(`${baseUrl}/users?email=${email}`)
}

export const registerUser = async(data)=>{
    return await axios.post(`${baseUrl}/users`, data)
}

export const userLogin = async(email,password)=>{
    return await axios.get(`${baseUrl}/users?email=${email}&password=${password}`)
}