
import {ref, reactive, HtmlHTMLAttributes } from "vue"



import { ValidationRule } from "../assets/code/types"
import {useField} from "./field"
interface RegisterForm {
    displayName: string;
    email: string;
    photoURL?: string;
    password1: string;
    password2: string;
  }

  interface LoginForm {    
    email: string;    
    password: string;  
  }

// export function useForm(init: {} ) {
//   const form=reactive({}) 
//   for (const [key,value] of Object.entries(init)) {

//     console.log(key,value)
    
//     form[key as HTMLBaseFontElement]=useField(value)
//   }  
//   return {form}
// }

export const required=(val:string)=>!!val

export const minLength=(num:number)=> (num:number,val:string)=> val.length<num 

export const maxLength=(num:number)=> (num:number,val:string)=> val.length>num  

export const email= (num:string)=>num.indexOf("@")>-1 && num.indexOf('@')>1 && num.indexOf("@")<num.length-1


