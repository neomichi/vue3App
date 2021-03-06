import { Toast } from './toast';

import { Helper } from "./helper";
import axios from "axios";
import {  AxiosRequestConfig, Method,AxiosError } from "axios";


// const apiClient = axios.create({
//     baseURL: "http://localhost:5000/api",
// });

export class AxiosRepository {
    private  static apiClient = axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {'Content-Type': 'application/json'}
        
    });

    constructor() { }

    private static async  Query (
        actionMethod: Method,
        url: string,
        data: any,
        AccessToken:string=""
    ) {
        
        const config: AxiosRequestConfig = {
            method: actionMethod,
            headers:  {'Content-Type': 'application/json'},
            data: data,
        };

      

        if (!Helper.stringIsNullOrEmpty(AccessToken)) {
            // {'Authorization': `Bearer ${AccessToken}`};
            config.headers['Authorization']=`Bearer ${AccessToken}`          
           
        }
   
        return new Promise((resolve, reject)=> {

            AxiosRepository.apiClient(url, config)
                //.get(url,cfg(AccessToken))
                .then((response) => resolve(response))
                .catch((error:AxiosError) => reject(error)); 
        });
    }
    public static Get(url:string,accessToken="") {
     
      const method:Method="get"
     
      return this.Query(method,url,"",accessToken);       
    }

    public static Post(url:string,data:any,accessToken:string) {
      const method:Method="post"

      return this.Query(method,url,data,accessToken);       
    }

    public static Put(url:string,data:any,accessToken:string) {
      const method:Method="put"

      return this.Query(method,url,data,accessToken);       
    }
}

//  onDownloadProgress: function (progressEvent) {
// Do whatever you want with the native progress event
///  },

// responseType: 'json',
// headers: {
//   'Content-Type': 'application/json'
// }
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
// res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//header("Access-Control-Allow-Origin: *");


