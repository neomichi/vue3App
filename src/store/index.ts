import { createStore } from "vuex";
import { Helper } from "../assets/code/helper";
import * as refresh from "../assets/code/refreshToken";
import axios from "axios";
import { ResponseToken } from "@/assets/code/types";
 import {Toast} from "../assets/code/toast"

export default createStore({
  state: {
    actionToken: "",
    user: {},
  },
  getters: {
    userRole: (state) => Helper.objectKeyValue(state.user, "role"),

    tokenIsEmpty: (state) => Helper.stringIsNullOrEmpty(state.actionToken),
    userIsEmpty: (state) => Helper.objectIsNullOrEmpty(state.user),
  },
  mutations: {
    setLoader(state, obj) {
      //state.showLoad = obj;
    },
    updateToken(state, obj:ResponseToken) {
      refresh.setToken(obj.refreshToken);
      state.actionToken = obj.accessToken as string;
    },
    setUser(state, obj) {
      state.user = obj;
    },
    logout(state) {
      refresh.setToken("");
      state.actionToken="";
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
        const newToken:ResponseToken = {
          accessToken: result.access_token,
          refreshToken: result.refresh_token,
          
        };
        console.log("addToken");
        commit("addToken", newToken);
        return true;
      } catch (error) {
        if (error.response == undefined) {
          Toast.error("проблемы с сетью")
        
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
          Toast.success("Вы вошли в аккаунт")          
        }
        return true;
      } catch (e) {
        console.log(e);
        if (obj.showToast) {
          Toast.error("Ошибка, войдите в аккаунт ");
        }
        return false;
      }
    },
    logout({ commit }, showToast) {
      console.log(`logut ${showToast}`);
      if (showToast) Toast.info("Вы вышли из аккаунта ");
      commit("logout");
    },
    async refresh({ commit }, obj) {
      const result = await axios({
        method: "post",
        url: "http://localhost:5000/api/token/refreshToken",
        data: obj,
      });
 
      console.log("store refresh");
      const ResponseToken = {
        accessToken: result.data.access_token,
        refreshToken: result.data.refresh_token,
      };
      commit("updateToken", ResponseToken);
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
