import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://frazowebsiteprabhatsinghnamtosunahoga.onrender.com', // Replace with your backend server URL
});