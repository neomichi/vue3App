import {Helper} from "./helper";


const  store = window.localStorage;
const key= "refreshToken"
  
export  class RefreshToken  {
 private static store = window.localStorage;
 private static key= "refreshToken"



 public static get=()=> {
  let result =store.getItem(key)

  if (Helper.stringIsNullOrEmpty(result)) {
    result="";
  } 
  return result
}

public static set=(value:string|undefined):void=> {   
  if (!Helper.stringIsNullOrEmpty(value)) store.setItem(key,value as string)
 
}

public static remove=()=>store.removeItem(key)

}
