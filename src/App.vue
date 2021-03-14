<template>
  <div class="template">
    <Header class="header"></Header>
    <router-view class="main" />
    <Footer class="footer"></Footer>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import router from "./router/index";
import store from "./store/index";
import { AxiosResponse } from "axios";
import { Toast } from "./assets/code/toast";
import { RefreshToken } from "./assets/code/refreshToken";
import { IResponseToken } from "./assets/code/types";
import { RouteLocationNormalized } from "vue-router";
import { User } from "./assets/code/user";

import { defineComponent, ref, onMounted } from "vue";
import { Helper } from "@/assets/code/helper";
import { AxiosRepository } from "@/assets/code/axiosHelper";
import axios from "axios";
import Toastr from "toastr2";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {
    function CheckRefreshToken() {
      console.log("CheckRefreshToken");
      const refresh = RefreshToken.get();
      if (!Helper.stringIsNullOrEmpty(refresh)) {
        const data = { refreshToken: refresh };
        AxiosRepository.Post("/token/refreshToken", data, "").then(
          (response) => {
            let responseToken = (response as AxiosResponse<IResponseToken>).data;
             
            if (
              !Helper.stringIsNullOrEmpty(responseToken.accessToken) &&
              !Helper.stringIsNullOrEmpty(responseToken.refreshToken)
            ) {
              User.GetUserFromToken(responseToken.accessToken);
              store.commit("updateToken", responseToken);
            }
          }
        );
      }
    }
    function UserRolePermissionCheck(to: RouteLocationNormalized) {
      const role =ref(store.getters.userRole)
      if (to.meta.role > role) {
        Toast.warning("Недостаточно прав");
        router.push({ name: "login", query: { returnUrl: to.fullPath } });
      }
    }
     function UpdateUserFromToken(isShow:boolean=false) {
       const accessToken= store.state.accessToken
            console.log(accessToken)
       if (!Helper.stringIsNullOrEmpty(accessToken)) {

        AxiosRepository.Get("http://localhost:5000/api/account/",accessToken)
        .then((response)=> {
           const state = response as AxiosResponse;
           if (!Helper.stringIsNullOrEmpty(state.data)) {
              store.commit('setUser',state.data)
                if (isShow)  Toast.success("Успешно")
           }

        })
      }
    }
    onMounted(() => {
      console.log("app Mounted");
      CheckRefreshToken();

      const guard = router.beforeEach((to, from) => {
        UserRolePermissionCheck(to);
      });

      console.log("end Mounted");
    });

    return {};
  },
});
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
@import "toastr2/src/toastr";
</style>
