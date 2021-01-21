<template>
<div class="template">
  <Header class="header"></Header>
  <router-view class="main"/>
  <Footer class="footer"></Footer>
  </div>
</template>

<script lang="ts">

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { defineComponent,ref } from 'vue';
export default defineComponent({
components: {
  Header,Footer
}
})
</script>





<style lang="scss">
@import "./assets/scss/main.scss";
@import "toastr2/src/toastr";

</style>




