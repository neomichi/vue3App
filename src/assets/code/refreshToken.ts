import {helper} from "./helper";


const  store = window.localStorage;
const key= "refreshToken"
  
  class RefreshToken  {
 private readonly  store = window.localStorage;
 private readonly  key= "refreshToken"


 public  get=()=> {
  let result =store.getItem(key)

  if (helper.stringIsNullOrEmpty(result)) {
    result="";
  } 
  return result
}

public  set=(value:string|undefined):void=> {   

  if (!helper.stringIsNullOrEmpty(value)) store.setItem(key,value as string)
 
}

public  remove=()=>store.removeItem(key)

}

export const refreshToken=new RefreshToken();
