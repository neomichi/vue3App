<template>
  <div class="center">
    <div class="userform__container">
      <form id="auth" class="userform" @submit.prevent="formResult">
        <div class="userform__header">{{ pageData.Title }}</div>
        <div class="userform__body">
          <div class="userform__input field">
            <div class="userform__input__icon">*</div>
            <label class="userform-label" for="email">email</label>
            <p class="control has-icons-left">
              <input
                type="email"
                v-model="userForm.email"
                name="email"
                id="email"
                class="input"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="userform__input field">
            <div class="userform__input__icon">*</div>
            <label class="userform-label" for="password">пароль</label>
            <input
              type="password"
              name="password"
              id="password"
              class="input"
              v-model="userForm.password"
            />
          </div>
          <div></div>
          <div v-if="!pageData.LoginPage" class="userform__input field">
            <div class="userform__input__icon">*</div>
            <label class="userform-label" for="repassword"
              >повторить пароль</label
            >
            <input
              type="password"
              name="repassword"
              id="repassword"
              class="input"
              v-model="userForm.repassword"
            />
          </div>
          <div class="userform__input field ">
            <div class="userform__checkbox__icon">*</div>
            <label class="checkbox">
              <input v-model="userForm.isAgree" type="checkbox" />
              Я соглашаюсь с <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <div class="userform__button">
          <div>
           
          </div>
          <matherialButton
            :title="pageData.SubmitTitle"
            :buttonClick="onSubmit"
          ></matherialButton>
        </div>
        <div class="userform__about">
          <p v-if="pageData.LoginPage">
            Ещё нет аккаунта?
            <router-link :to="{ name: 'register' }" tag="a">
              Зарегистрируйтесь</router-link
            >
          </p>
          <p v-if="!pageData.LoginPage">
            есть аккаунт?,
            <router-link :to="{ name: 'login' }" tag="a"> Войти </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import route from "../router/index";
import store from "../store/index";
import matherialButton from "@/components/form/matherialButton.vue";

import {
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  onUpdated,
  onBeforeUpdate,
} from "vue";

import { ILoginForm, IUserForm, IRegisterForm } from "../assets/code/types";
import { user } from "@/assets/code/user";
import { authStore } from "@/store/authStore";
import { extend } from "@vue/shared";

export default defineComponent({
  components: {
    matherialButton,
  },
  setup() {
    function onSubmit() {
      console.log("onSubmit");
      const LoginForm: ILoginForm ={
      email: userForm.email,
      password: userForm.password,
      saveToLong: userForm.saveToLong      
      }

      
    const RegisterForm: IRegisterForm={
      email: userForm.email,
      password: userForm.password,
      repassword: userForm.repassword,
      isAgree: userForm.isAgree
    }
///button close
      if (pageData.value.LoginPage) {
        var hh=user.LoginForm(LoginForm)
        console.log(hh)
      } else {
        user.RegisterForm(RegisterForm)
      }
///button close
      //dataValid()
      //if (routeName()==true)
    }

    onMounted(() => {
      console.log("auth Mounted");
    });

    let computedData = reactive(
      computed(() => {
        if (store.getters.userRole > 0) {
          user.RedirectToMainOrReturnUrl("");
        }
        console.log(`computed user ${store.getters.userRole}`);
        console.log(`route `);
        console.log(route.currentRoute.value.name);
      })
    );

    let pageData = reactive(
      computed(() => {
        let loginPage = route.currentRoute.value.name == "login" ? true : false;
        return {
          Title: loginPage ? "Войти" : "Регистрация",
          SubmitTitle: loginPage ? "Войти" : "Регистрация",
          LoginPage: loginPage,
        };
      })
    );

    const userForm: IUserForm = reactive({
      email: "admin@test.ru1",
      password: "LikeMe123!",
      saveToLong: true,
      repassword: "",
      isAgree: true,
    });

   


    const formResult = function() {
      return;
    };

    return { formResult, pageData, computedData, userForm, onSubmit };
  },
});
</script>

<style lang="scss">
.userform {
  padding: 20px 30px;

  -webkit-box-shadow: 0px 0px 29px 7px rgba(174, 174, 174, 0.5);
  -moz-box-shadow: 0px 0px 29px 7px rgba(174, 174, 174, 0.5);
  box-shadow: 0px 0px 29px 7px rgba(174, 174, 174, 0.5);
  border: 1px solid rgb(190, 190, 190);
  border-radius: 5px;
  &-label {
    color: #363636;
    display: block;
    font-size: 1rem;
  }
  &__about {
    &-p {
      margin-left: auto;
    }
  }
  &__body {
    padding: 10px 0;
  }
  &__input {
    padding-top: 5px;
    position: relative;
    &__icon {
      position: absolute;
      top: 10px;
      right: 0px;
      color: red;
    }
  }
  &__checkbox {
    position: relative;
    width: 0;
    &__icon {
      position: absolute;
      top: 2px;
      right: 0px;
      color: red;
    }
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
    border-bottom: 1px solid rgb(207, 204, 204);
  }
  &__button {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
