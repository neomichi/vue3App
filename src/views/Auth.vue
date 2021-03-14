<template>
  <div class="center">

    <div class="userform__container">
      <form  id="auth" class="userform" @submit.prevent="formResult">

        
        <div class="userform__header">{{ formTitle }}</div>
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
          <div v-if="routeName == 'register'" class="userform__input field">
            <div class="userform__input__icon">*</div>
            <label class="userform-label" for="repassword">повторить пароль</label>
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
            
         {{routeNameUpdate()}}
          <button v-if="isLoginPage"  class="button is-active">
            войти  
          </button>
          <button v-if="!isLoginPage" class="button is-active">
            регистрация
          </button>
          <i class="fa fa-sign-in" aria-hidden="true"></i>
        </div>
        <div class="userform__about">
         <p v-if="isLoginPage">У вас нет аккаунта,  <router-link :to="{name:'register'}"  tag="a"> регистрация</router-link> </p>
          <p v-if="!isLoginPage">У вас есть аккаунт,  <router-link :to="{name:'login'}"  tag="a"> войти </router-link> </p> 
        </div>
     
      </form>
    </div>

  </div>
</template>
<script lang="ts">
import route from "../router/index"
import store from "../store/index"

import { defineComponent, ref, reactive, computed,onMounted } from "vue";
import { Toast } from "../assets/code/toast";
import { AxiosRepository } from "@/assets/code/axiosHelper";
import { AxiosResponse } from "axios";
import { IUserForm, IResponseToken } from "../assets/code/types";
import { Helper } from "@/assets/code/helper";
import { User} from '@/assets/code/user'



export default defineComponent({
  setup() {
     onMounted(() => {      
      console.log("auth Mounted");
    })
    computed(()=>{
       store.getters.userRole.roles
       console.log(`computed user ${store.getters.userRole}`)
    })
     const isLoginPage=ref(false)

     let routeName = ref(route.currentRoute.value.name)
    
     function routeNameUpdate() {
       if(route.currentRoute.value.name === "login") isLoginPage.value=true;
       if(route.currentRoute.value.name === "register") isLoginPage.value=false;
        routeName.value=route.currentRoute.value.name; ///костыль 
     }
     const formTitle=ref(computed(() => isLoginPage.value?"Войти":"Регистрация"))
    
    const userForm:IUserForm = reactive({
      email: "admin@test.ru1",
      password: "LikeMe123!",
      saveToLong: true,
      repassword: "",
      isAgree: true,
    });  

    function formResult() {
        if (isLoginPage.value) User.LoginResult(userForm);
         else User.RegisterResult(userForm)
    }
   

    // const RegisterResult=()=> {
    //   AxiosRepository.Post("/account", userForm, "")
    //     .then((response) => {
    //       const state = response as AxiosResponse;
    //       try {
    //         const accessToken:string = state.data.accessToken;
    //         const refreshToken:string= state.data.refreshToken;
    //         const responseToken=state.data as ResponseToken
    //         if (
    //           !Helper.stringIsNullOrEmpty(accessToken) &&
    //           !Helper.stringIsNullOrEmpty(refreshToken)
    //         ) {       
                
    //           store.commit("updateToken", { accessToken, refreshToken });
    //           User.GetUserFromToken(accessToken,true)
    //         } else throw new Error('Something bad create');
    //       } catch {
            
    //         Toast.warning("Вы yказали неверный данные");
            
    //       }
    //     })
    //     .catch(() => Toast.error("Ошибка")); 
    // }
  
    // const LoginResult = () => {
    //   AxiosRepository.Post("/token", userForm, "")
    //     .then((response) => {
    //       const axiosResponse = response as AxiosResponse;
    //       try {
    //         const accessToken:string = axiosResponse.data.accessToken;
    //         const refreshToken:string= axiosResponse.data.refreshToken;
       
    //         if (
    //           !Helper.stringIsNullOrEmpty(accessToken) &&
    //           !Helper.stringIsNullOrEmpty(refreshToken)
    //         ) {       
                    
    //           store.commit("updateToken", { accessToken, refreshToken });
              
    //           User.GetUserFromToken(accessToken,true)
    //         } else throw new Error('Something went wrong :(')
    //       } catch {
            
    //         Toast.warning("Вы yказали неверный данные");
    //       }
    //     })
    //     .catch(() => Toast.error("Ошибка"));      
    // };
 


    return {formResult, formTitle, routeName,userForm,routeNameUpdate,isLoginPage };
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
