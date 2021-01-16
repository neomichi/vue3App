<template>
  <div>
    <h2>auth</h2>
    <div>
      <form action="" class="userform">
        <div class="userform__header">{{ formTitle }}</div>
        <div class="userform__body">
          <div class="userform__input">
            <inputForm
              :onInput="onInput1"
              title="email"
     
            ></inputForm>
          </div>
          <div class="userform__input">
            <inputForm
              :onInput="onInput2"
              title="пароль"
              type="password"
              
            ></inputForm>
          </div>
        </div>
        <div class="userform__button"></div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import inputForm from "../components/form/input2Form.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    inputForm,
  },
  setup() {
    const formTitle = ref("Войти");
    function onInput1(ev: any) {
      console.log(`${ev.target.value}`);
    }
     function onInput2(ev: any) {
      console.log(`${ev.target.value}`);
    }
    
    return { onInput1,onInput2, formTitle };
  },
});
</script>
<style lang="scss">
.userform {
  padding:20px 0;
  &__body {
    padding: 10px 0
  }
  &__input {
    padding: 10px 0
  }
}


</style>
