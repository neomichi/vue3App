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
import { RefreshToken} from "./assets/code/refreshToken";
import { ResponseToken } from "./assets/code/types";
import { RouteLocationNormalized } from "vue-router";

import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";
import { Helper } from "@/assets/code/helper";
import * as axios from "@/assets/code/axiosHelper";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {
    function CheckRefreshToke() {
      console.log("CheckAuthofication");
      const refresh =RefreshToken.get();
      if (!Helper.stringIsNullOrEmpty(refresh)) {
        const data = { refreshToken: refresh };
        axios.AxiosRepository.Post("/token/refreshToken", data, "").then(
          (response) => {
            var responseToken = (response as AxiosResponse<ResponseToken>).data;

            if (
              !Helper.stringIsNullOrEmpty(responseToken.accessToken) &&
              !Helper.stringIsNullOrEmpty(responseToken.refreshToken)
            ) {
              store.commit("updateToken", responseToken);
            }
          }
        );
      }
    }
    function UserRolePermissionCheck(to: RouteLocationNormalized) {
      const role = store.getters.userRole;
      if (to.meta.role > role) {
        Toast.warning("Нету прав")
        router.push({ name: "login", query: { returnUrl: to.fullPath } });
      }
    }

    onUpdated(() => {
      console.log("onUpdated");
    });
    onMounted(() => {
      // var a=store.state.accessToken;
      console.log("app Mounted");

      console.log(store.state.accessToken);
      CheckRefreshToke();
      router.beforeEach((to, from) => {
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
