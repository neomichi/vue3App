
import { ref } from 'vue';
import { Helper } from './../assets/code/helper';

import {  UserRole } from './../assets/code/user';
import { RefreshToken } from "@/assets/code/refreshToken";
import { IResponseToken } from "@/assets/code/types";
import { Store } from "./MyStore";

interface Auth extends Object {
  accessToken: string;
  user: {};
}

class AuthStore extends Store<Auth> {
  protected data(): Auth {
    return {
      accessToken: "",
      user: {},
    };
  }

  updateToken(obj: IResponseToken) {
    RefreshToken.set(obj.refreshToken);
    this.state.accessToken = obj.accessToken;
  }
  setUser(obj: any) {
    console.log(obj);
    this.state.user = obj;    
  }

  logout() {    
    RefreshToken.remove();
    this.state.accessToken = "";
    this.state.user = {};
  }
  getUserRole() {
    let result=ref(0);

    if (this.state===undefined ) return result        
    
    const rawRole=Helper.objectKeyValue(this.state.user,"roles")
    const role = UserRole[rawRole as keyof typeof UserRole] as number;
    return role===undefined?result.value=0:result.value=role;   

  }

}

export const authStore: AuthStore = new AuthStore();
