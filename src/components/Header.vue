<template>
  <nav class="nav">
    <div>
      <input type="checkbox" id="nav-check" />

      <label for="check" class="nav-checkbtn">
        <i class="nav-mobile_icon material-icons"> menu </i>
      </label>
    </div>
    <div class="nav__logo">
      <label class="nav-label_logo">DesignX</label>
    </div>
    <div class="nav__ul">
      <ul class="nav__routes">
        <li
          class="nav__route"
          v-for="(item, index) in menuRoutes"
          :key="index"
          :class="{ active: routeName === item.name }"
        >
          <router-link tag="a" class="nav-router-link" :to="{ name: item.name }"
            >{{ item.title }}
          </router-link>
        </li>     
        <div class="animation start-home"></div>
        <div class="nav__userlogo"></div>
      </ul>    
    </div>

  </nav>
</template>
<script lang="ts">
import routes from "../router/index"

import { RouteRecordNormalized } from 'vue-router'

import { defineComponent, ref ,computed} from "vue";
import { authStore } from '@/store/authStore';


export default defineComponent({
  setup() {
    const routeName = "";
    const userRole=computed(()=>authStore.getUserRole());

  
  
    const userImg = ref("user.png");  
    function isAllowRoute(route:RouteRecordNormalized):boolean { 
        return parseInt(route.meta.role)>=userRole.value
    }  
    function isDenyAuth(route:RouteRecordNormalized):boolean {
      const result= userRole.value>0

       const r2=(route.name=="register" || route.name=="login")
      console.log(`-${r2}---${result}`)
      return result&&r2?false:true;
    }
    const menuRoutes = routes      
      .getRoutes()      
      .filter((route)=>isAllowRoute(route))      
      .filter((route) => route.meta.showInMenu)
  
      
      .map((route) => {
         return {
          name: route.name,
          path: route.path,
          title: route.meta.title,
        };
      });
    return { menuRoutes, userRole, userImg, routeName };
  },
});



</script>

<style lang="scss">
@import "../assets/scss/color.scss";
//background-color: $header-footer-bg-color

.nav {
  background: #0082e6;
  height: 64px;
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(76, 0, 255, 0.1);
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  &__logo {
    display: inline-block;
    min-height: 100%;
  }
  &__ul {
    margin-left: auto;
  }
  &-label_logo {
    color: white;

    padding: 25% 10px;
    font-weight: bold;
    display: inline-block;
  }
  &__userlogo-img {
    width: 32px;
    height: 32px;
  }
  &__routes {
    display: block;
  }
  &__route {
    position: relative;
  }
  &-checkbtn {
    color: white;

    margin-left: 10px;
    margin-top: 5%;
    cursor: pointer;
    display: none;
  }
}

#nav-check {
  display: none;
}
</style>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

nav ul.nav__routes {
  margin-left: 10px;
}

nav ul.nav__routes li {
  display: inline-block;

  margin: 0 5px;
}

nav ul.nav__routes li a {
  color: white;

  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}
/* a.router-link-active,
a.nav-router-link:hover {
    background: #1b9bff;
    transition: 0.5s;
} */

/* a.nav-router-link */

@media (max-width: 952px) {
  .nav-label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul.nav__routes li a {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .nav-checkbtn {
    display: block;
  }
  ul.nav__routes {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  nav ul.nav__routes li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul.nav__routes li a {
    font-size: 20px;
  }
  a.router-link-active,
  a.nav-router-link:hover {
    background: none;
    color: #0082e6;
  }
  #nav-check:checked ~ ul.nav__routes {
    left: 0;
  }
}
section {
  /* background: url(bg1.jpg) no-repeat; */
  background-size: cover;
  height: calc(100vh - 80px);
}

nav .animation {
  position: absolute;
  min-height: 100%;
  top: 0;
  z-index: 0;
}
</style>
