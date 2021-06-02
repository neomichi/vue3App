<template>
  <div class="admin__base">
    <div class="admin">
      <div class="admin__header">header</div>
      <div class="admin__sidebar">sidebar</div>
      <div class="admin__main">body</div>
    </div>
  </div>
</template>



<style lang="scss">
.admin {
  display: grid;
  grid-template-columns: minmax(150px,300px ) 1fr;
  grid-template-areas: "admin__header admin__header"
                       "admin__sidebar admin__main"


                       admin__header{grid-area: admin__header;}
                       admin__sidebar{grid-area: admin__sidebar;}
                       admin__main{grid-area: admin__main;}



  &__header {
    border: 1px solid #000000;
  }
  &__sidebar {  
    border: 1px solid #000000;
  }
  &__main {    
    border: 1px solid #000000;
  }
  // &__base {

  // }
}
</style>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
