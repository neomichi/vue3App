
import { user  } from '../assets/code/user';
import { createStore } from "vuex";
import { helper } from "../assets/code/helper";
import {refreshToken} from "../assets/code/refreshToken";
import axios from "axios";
import { IResponseToken } from "@/assets/code/types";
import {toast} from "../assets/code/toast"

//  export const createStore = () => {
//   const state = reactive({ counter: 0 });
//   const increment = () => state.counter++;
//   return { increment, state: readonly(state) };
// }
import {  ref,reactive,computed } from "vue";

export default createStore({
  state:({
    accessToken: "",
    user: {}, 
  }),



  
  getters: {
    
    tokenIsEmpty: (state) => helper.stringIsNullOrEmpty(state.accessToken),
    userIsEmpty: (state) => helper.objectIsNullOrEmpty(state.user),
  },
  mutations: {
    setLoader(state, obj) {
      //state.showLoad = obj;
    },
    updateToken(state, obj:IResponseToken) {      
      refreshToken.set(obj.refreshToken);
      state.accessToken = obj.accessToken;      
    },
    setUser(state, obj) {
      console.log(obj)
      state.user = obj
    },
    logout(state) {
      refreshToken.set("")
      state.accessToken=""
      state.user = {};
    },
  },
  actions: {
    async updateToken({ commit }, authData) {
      try {
        const token = await axios({
          method: "post",
          url: "http://localhost:5000/api/token/",
          data: authData,
        });
        const result = await token.data;;;''
        const newToken:IResponseToken = {
          accessToken: result.access_token,
          refreshToken: result.refresh_token,
          
        };
        console.log("addToken");
        commit("addToken", newToken);
        return true;
      } catch (error) {
        if (error.response == undefined) {
          toast.error("проблемы с сетью")
        
        }
        console.log(`error ${error.response}`);
        return false;
      }
    },
    async updateUser({ commit }, obj) {
      try {
        console.log(`updateUser`);
        console.log(obj);
        const user = await axios.get("http://localhost:5000/api/account/", {
          headers: { Authorization: `Bearer ${obj.value}` },
        });
        commit("setUser", user.data);
        if (obj.showToast) {
          toast.success("Вы вошли в аккаунт")          
        }
        return true;
      } catch (e) {
        console.log(e);
        if (obj.showToast) {
          toast.error("Ошибка, войдите в аккаунт ");
        }
        return false;
      }
    },
    logout({ commit }, showToast) {
      console.log(`logut ${showToast}`);
      if (showToast) toast.info("Вы вышли из аккаунта ");
      commit("logout");
    },
 

    async SendFileToBack(aa, query) {
      try {
        const resp = await axios.post(query.url, {
          data: query.data,
        });
        return resp;
      } catch (e) {
        console.log("SendOurHelperData error");
      }
    },
    async LoaderEvent({ commit }, showOrhide) {
      commit("setLoader", showOrhide);
    },
  },
  modules: {},
  
});
