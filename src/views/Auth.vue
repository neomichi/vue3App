<template>
    <div>
        <h2>auth</h2>
        <div>
          <form action="" class="userform">
            <div class="userform__header">{{formTitle}}</div>
            <div class="userform__body"></div>
            <div class="userform__button"></div>
          </form>
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent,ref } from 'vue';
export default defineComponent({ 
  setup() {
    const formTitle=ref("Войти")
    function onInput(ev:any) {
      console.log(`${ev.target.value}`)
    }
    return {onInput,formTitle}

  }
})

</script>

