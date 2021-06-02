<template>
    <button @click="buttonLoad"  class="load-button">
    <span>Send0</span>
    <svg class="hidden" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
      <rect x="0" y="13" width="4" height="5" fill="#333">
        <animate attributeName="height" attributeType="XML"
          values="5;21;5" 
          begin="0s" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" attributeType="XML"
          values="13; 5; 13"
          begin="0s" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="13" width="4" height="5" fill="#333">
        <animate attributeName="height" attributeType="XML"
          values="5;21;5" 
          begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" attributeType="XML"
          values="13; 5; 13"
          begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="20" y="13" width="4" height="5" fill="#333">
        <animate attributeName="height" attributeType="XML"
          values="5;21;5" 
          begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" attributeType="XML"
          values="13; 5; 13"
          begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      </rect>
    </svg>
  </button>

</template>
<script lang="ts">
import { defineComponent,  ref } from "vue"
export default defineComponent({
  
  
  setup( ) {

    function buttonLoad() {
     
     const btn=document.querySelector('.load-button') as Element
     if (! btn.classList.contains('loading-start')) {
     btn.classList.add('loading-start')
     
     }
     btn.setAttribute('disabled','true')
     setTimeout(function(){
         btn.classList.remove('loading-start')     
         btn.removeAttribute('disabled')
     },5000)
   
  }


  return {buttonLoad}  
  }
  

})


</script>
<style lang="scss">
$btn-bg-color: #004B97;
$btn-txt-color: #fff;

%button-default{
  color: $btn-txt-color;
  background-color: $btn-bg-color;
  padding: 10px;
  border:0px;
  font-size: 20px;
  width: 200px;
  height: 60px;
  outline: 0;
  display:block;
  margin:10px 0;
}

button.load-button{
  @extend %button-default;
  span{
    transition: all 1s;
    opacity:1;
  }
  svg{
    display:none; 
    margin:0 auto;
    transition: all 1s;
    path,rect{
      fill: $btn-txt-color;
    }
  }
}

button.loading-start{
  span{
    display: none;  
    opacity: 0;
  }
  svg{
    display: block; 
    opacity: 1;
  }
}

div.btn-content{
  float: left;
  margin: 0 20px;
}
</style>

