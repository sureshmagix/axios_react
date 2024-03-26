import axios from "axios";;


export const instance = axios.create(
{
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
    header:{
    "Content-Type":"application/json",
    'Authorization':"Bearer auth_token" 

    }
    })