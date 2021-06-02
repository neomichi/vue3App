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
import { AxiosResponse } from "axios";
import { toast } from "./assets/code/toast";
import { refreshToken } from "./assets/code/refreshToken";
import { IResponseToken } from "./assets/code/types";
import { RouteLocationNormalized } from "vue-router";
import { user } from "./assets/code/user";

import { defineComponent, ref, onMounted } from "vue";
import { helper } from "@/assets/code/helper";
import { AxiosRepository } from "@/assets/code/axiosHelper";
import {authStore} from "./store/authStore"

export default defineComponent({
  
  components: {
    Header,
    Footer,
  },
  setup() {
    
 

    function CheckRefreshToken() {
      console.log("CheckRefreshToken");
      const refresh = refreshToken.get();
      if (!helper.stringIsNullOrEmpty(refresh)) {
        const data = { refreshToken: refresh };
        AxiosRepository.Post("/token/refreshToken", data, "").then(
          (response) => {
            let responseToken = (response as AxiosResponse<IResponseToken>).data;
             
            if (
              !helper.stringIsNullOrEmpty(responseToken.accessToken) &&
              !helper.stringIsNullOrEmpty(responseToken.refreshToken)
            ) {
          
              user.GetUserFromToken(responseToken.accessToken);
              //store.commit("updateToken", responseToken);
              authStore.updateToken(responseToken)
              
            }
          }
        );
      }
    }
    function CheckingUserRole(to: RouteLocationNormalized) {
   
      const role=authStore.getUserRole()
      console.log('CheckingUserRole')
      console.log(role)
      if (to.meta.role > role) {
        toast.warning("Недостаточно прав");
        router.push({ name: "login", query: { returnUrl: to.fullPath } });
      }
    }   
    onMounted(() => {
      console.log("app Mounted");
      CheckRefreshToken();
      router.beforeEach((to, from) => {
        CheckingUserRole(to);
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
