import { RouteRecordRaw } from 'vue-router';
interface LoginRegisterPage{
  key: string;
  value: string|number|boolean;
}

export interface IRole {
  roles: string | undefined | null;
}


export interface IUserForm extends ILoginForm,IRegisterForm {
  email: string,
  password: string,
  saveToLong: boolean,
  repassword: string,
  isAgree: boolean,
}

export interface ILoginForm {
  email: string,
  password: string,
  saveToLong: boolean
}

export interface IRegisterForm {
  email: string,
  password: string,
  repassword: string,
  isAgree: boolean
}

export interface IResponseToken {
  accessToken:string 
  refreshToken:string 
}
// export interface ResponseTokenRaw {
// refresh_token:string|undefined 
// access_token:string|undefined 
// }
//для типов ref
export interface refValue {
  value:any
}

export type validationField =  {  
   value:string,    
}

export  enum PageType {
  login=10,
  register=20,
  user=30
}




export interface IloginForm {
  email: "",
  password: "",

}
export interface RouteParam {
  meta:RouteMeta,
  name:string | symbol | null | undefined
}

export interface RouteMeta {
  role: number,
  title:string,
  showInMenu:boolean
}

export interface Validation {
  email: ValidationField;
  password: ValidationField;
  isAgree:boolean
}

export interface ValidationField {
  value: string;
  validation: ValidationRule[];
}

export interface ValidationRule {
    val:boolean
}