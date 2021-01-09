<template>
<footer  class="footer page-footer"> 
 
  <a class="footer_author"  href="#">nikolay © {{getYearNow}} </a>
<!-- <router-link :to="{name:'admin'}" tag="a" class="grey-text text-lighten-4 red admin-link" v-if='getRole==3'>admin</router-link> -->

</footer>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        const getYearNow=new Date().getFullYear()
    return {getYearNow} } }
 

</script>
<style lang="scss">
@import '../assets/scss/color.scss';
.page-footer {
  
    background-color: $header-footer-bg-color
}
.footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 48px;
    padding: 0 20px;
}
.footer_author{
  
  color: white;
}
</style>
