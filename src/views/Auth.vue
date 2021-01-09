<template>
    <div>
        <h2>auth</h2>
    </div>
</template>
<script lang="ts">

import { defineComponent,ref } from 'vue';
export default defineComponent({ 
  setup() {
    function onInput(ev:any) {
      console.log(`${ev.target.value}`)
    }
    return {onInput}

  }
})

</script>

