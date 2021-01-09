<template>
<nav class="nav">

    <input type="checkbox" id="nav-check" />
   
    <label for="check" class="nav-checkbtn">
      <i class="nav-mobile_icon material-icons"
        > menu </i>
    </label>
    <div class="nav__logo">
    <label class="nav-label_logo">DesignX</label>
    </div>
    <ul class="nav__routes">
        <li class="nav__route" v-for="item in menuRoutes" :key="item.key" :class="{ active: routeName === item.name }">
            <router-link tag="a" class="nav-router-link" :to="{ name: item.name }">{{ item.title }}
            </router-link>
        </li>
        <div class="animation start-home">

        </div>
   </ul>
</nav>
</template>
<script lang="ts">
import routes from "./../router/index";

import { defineComponent,ref } from 'vue'

export default defineComponent({
    setup() {
        const isAuth = ref(false);
        const menuRoutes = routes
            .getRoutes()
            .filter((route) => route.meta.showInMenu)
            .map((route) => {
                return {
                    name: route.name,
                    path: route.path,
                    title: route.meta.title,
                };
            });
        return { menuRoutes, isAuth };
    },
})
</script>

<style lang="scss">
@import '../assets/scss/color.scss';
 //background-color: $header-footer-bg-color

.nav {
  background: #0082e6;
  height: 64px;
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(76, 0, 255, 0.1);
 &__logo {
    display: inline-block;
    min-height: 100%;
 }
    
  &-label_logo {
    color: white;
   
    padding: 25% 10px;
    font-weight: bold; 
    display: inline-block;

  }

  &__routes {
         display: inline-block;
         min-height: 100%;  
         display: flex;   
         align-items: center;
  }
  &__route {
      
      position: relative;
  
    
  }
  &-checkbtn {
    color: white;
    
    float: right;
     
    margin-right: 40px;
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
    float: right;
    margin-right: 20px;
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

@media (max-width: 858px) {
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
    a.nav-router-link:hover  {
        background: none;
        color: #0082e6;
    }
    #nav-check:checked~ul.nav__routes {
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
z-index: 0;;

}




</style>
