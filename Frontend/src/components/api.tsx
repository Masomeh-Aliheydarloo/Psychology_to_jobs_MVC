
import axios from 'axios';
    
const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}`,
  timeout: 10000,
  headers: {
            Accept: "application/json",
            'Content-Type': "application/json;charset=UTF-8"
           
            
        },
});

//export const get = (url: string) => api.get(url);
//export const post = (url: string, data: any) => api.post(url, data);
   
export const post = (url: string, data: any) => {
//  const fullUrl = `${import.meta.env.VITE_APP_URL}${url}`;
 // console.log(`Making POST request to: ${fullUrl}`);
  //console.log("data",data);
  return api.post(url, data);
};

export const get = (url: string) => {
 // const fullUrl = `${import.meta.env.VITE_APP_URL}${url}`;
 // console.log(`Making GET request to: ${fullUrl}`);
  return api.get(url);
};