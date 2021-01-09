import {Helper} from "./helper";


const  store = window.localStorage;
const key= "refreshToken"
  
export const getToken=()=> {
  let result =store.getItem(key)

  if (Helper.stringIsNullOrEmpty(result)) {
    result="";
  } 
  return result
}

export const setToken=(value:string):void=> {
    
  if (!Helper.stringIsNullOrEmpty(value)) store.setItem(key,value)
 
}

export const removeToken=()=>store.removeItem(key)


