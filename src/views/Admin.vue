<template>
  <div class="admin__base">
    <div class="admin">
      <div class="admin__sidebar">asdads</div>
      <div class="admin__body">vvvvvvvvv</div>
    </div>
  </div>
</template>
<style lang="scss">
.admin {
  display: flex;
  justify-content: flex-start;
  height:100%;
  min-width:100%;
     border: 1px solid #000000;

  &__sidebar {
    height: 100%;
    width: 220px;
    border: 1px solid #000000;
  }
  &__body {
    
    height: 100%;
  }
  &__base {
    width: 100%;
    min-height: 100%;
  }
}
</style>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
