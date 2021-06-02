<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <div>
      <button class="button is-outlined" @click="showToast()"></button>
    </div>
  
    <div>
      <buttonLoad></buttonLoad>
    </div>
    <div
    ><button @click="showToast">test</button>
    
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent,  ref } from "vue"

import { authStore } from "@/store/authStore"
import buttonLoad from "@/components/form/buttonLoad.vue"


export default defineComponent({
  name: "Home",
  components:{
    buttonLoad
  },
  setup() {
    
    function showToast() {
      authStore.logout();
  
      console.log("logout");
    }    
    return { showToast,defineComponent };
  }
})
</script>
<style>
div.center {
  display: flex;
  justify-content: center;
}
</style>
