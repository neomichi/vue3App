<template>
  <footer class="footer" id="footer">
    <div class="footer__line" >
    <a class="footer_author" href="#">nikolay © {{ getYearNow }} </a>
     <router-link
      :to="{ name: 'admin' }"
      tag="a"
      class="footer_admin-link"
      v-if="role == 30"
      >admin</router-link> 
    </div>
  </footer>
</template>
<script lang="ts" >
import store from "./../store/index";
import { ref, computed } from "vue";
export default {
  setup() {
    const role=ref(store.getters.userRole)
 
    const getYearNow = new Date().getFullYear();
    return { getYearNow,role };
  },
};
</script>
<style lang="scss">
@import "../assets/scss/color.scss";

#footer {
   background-color: $header-footer-bg-color;
  display: flex;
  justify-content: center;
  flex-direction: column;
 
  height: 48px;
  padding: 0 20px;
 
}

.footer__line {
  display: flex;
  justify-content:space-between;
}

.footer_author {
   color: white;
}

.footer_admin-link {
  color: white;
  padding: 0 10px;
  background: red;
 
}
</style>
