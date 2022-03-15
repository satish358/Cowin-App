import axios from 'axios';

const BASE_URL = 'http://localhost:3002';
export const getAPI = (endpoint: string) => {
    return axios.get(BASE_URL+endpoint);
}

export const postAPI = (endpoint: string, body: any) => {
    return axios.post(BASE_URL+endpoint, body);
}