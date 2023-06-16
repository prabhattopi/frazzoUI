import axios from "axios";
import { API_URL } from "./config";
import { axiosInstance } from "../axiosurl/url";
axios.defaults.withCredentials=true
export const postAPI=async(url,post,token)=>{
    const res=await axiosInstance.post(`/api/${url}`,post,{
        headers:{Authorization:token}

    })

    return res;
}


export const getAPI=async(url,token)=>{
    const res=await axiosInstance.get(`/api/${url}`,{
        headers:{Authorization:token}

    })

    return res;
}
