<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <div>
      <button class="button is-outlined" @click="showToast()"></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",

  setup() {
    function showToast() {
      console.log("123");
    }

    return { showToast };
  }
})
</script>
<style>
div.center {
  display: flex;
  justify-content: center;
}
</style>
