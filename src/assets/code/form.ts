import * as v from "ts-form-validation"
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

