<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">  
    <div>
      <button @click="showToast()">{{gg}}</button>
      </div>  
      <div class="center">
        <inputForm :onInput="onInp" :value="value"></inputForm>
      </div>
  </div>
</template>

<script lang="ts">
import inputForm from "../components/form/inputForm.vue"
import { defineComponent,ref } from 'vue';


export default defineComponent({
  name: 'Home',
  components:{
    inputForm
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