<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">  
    <div>
      {{gg}}
      </div>  
      <div class="center">
        <inputForm :onInput="onInp" :value="value"></inputForm>
      </div>
  </div>
</template>

<script lang="ts">
import inputForm from "../components/inputForm.vue"
import { defineComponent,ref } from 'vue';


export default defineComponent({
  name: 'Home',
  components:{
    inputForm
  },
  setup() {   
  const gg=ref('home')
    return {gg}
  }
  
});
</script>
<style>
div.center {
  display: flex;
  justify-content: center;
}
</style>