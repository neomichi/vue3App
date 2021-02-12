<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">  
    <div>
      <button class="button is-outlined" @click="showToast()">{{gg}}</button>
      </div>  
       
  </div>
</template>

<script lang="ts">

import { defineComponent,ref } from 'vue';
import ffff from "../components/form/input3Form.vue"

export default defineComponent({
  name: 'Home', 
  components: {
      ffff
  },
  setup() {   
  const gg=ref('home')
   function showToast() {

      console.log("123")
    }
  
    
    return {gg,showToast}
  }


});
</script>
<style>
div.center {
  display: flex;
  justify-content: center;
}
</style>