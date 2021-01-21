<template>
  <div class="center">
    <div class="userform__container">
      <form action="" id="auth" class="userform" @submit.prevent="FormResult">
        <div class="userform__header">{{ formTitle }}</div>
        <div class="userform__body">
          <div class="userform__input field">
            <label class="label" for="email">email</label>
            <input type="email" name="email" id="email" class="input" />
          </div>
          <div class="userform__input field">
            <label class="label" for="password">пароль</label>
            <input type="password" name="password" id="password" class="input" />
          </div>
        
        </div>
        <div class="userform__button">
          <button class="button is-active">войти</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import inputForm from "../components/form/input4Form.vue";
import route from "../router/index";
import store from "../store/index";

import { defineComponent, ref, reactive, computed } from "vue";
import { LoginAuth } from "@/assets/code/types";
import { useForm } from "../assets/code/formValidator/form";
import * as gg from "ts-form-validation";
export default defineComponent({
  components: {
    inputForm,
  },
  setup() {
    const routeName = route.currentRoute.value.name;
    function onYourEvent(e: any, ev: any) {
      console.log(e);
      console.log(ev);
    }

    const formTitle = computed(() => {
      if (routeName === "login") return "Войти";
      if (routeName === "register") return "Регистрация";
    });
    const resultValues = ref({
      email: "",
      password: "",
    });
    function udpdate(ef: any) {
      console.log(ef);
    }
    const FormResult = (ef: any) => {};

    return { formTitle, FormResult, resultValues, udpdate };
  },
});
</script>
<style lang="scss">
.userform {
  padding: 20px 30px;
  width: 400px;
 -webkit-box-shadow: 0px 0px 29px 7px rgba(174, 174, 174, 0.5);
-moz-box-shadow: 0px 0px 29px 7px rgba(174, 174, 174, 0.5);
box-shadow: 0px 0px 29px 7px rgba(174, 174, 174, 0.5);
  border: 1px solid rgb(190, 190, 190);
  border-radius: 5px;
  &__body {
    padding: 10px 0;
  }
  &__input {
    padding: 5px 0;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
   

    
  }
  &__header {
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid rgb(207, 204, 204)
  }
 
}
</style>
