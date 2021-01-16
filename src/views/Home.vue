<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">  
    <div>
      <button @click="showToast()">{{gg}}</button>
      </div>  
   
  </div>
</template>

<script lang="ts">

import { defineComponent,ref } from 'vue';
import {Toast} from "../assets/code/toast"

export default defineComponent({
  name: 'Home', 
  setup() {   
  const gg=ref('home')
   function showToast() {
      Toast.info("asd")
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