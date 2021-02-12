import { RouteRecordRaw } from 'vue-router';
//токет с бек
export interface ResponseToken {
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



export interface loginForm {
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