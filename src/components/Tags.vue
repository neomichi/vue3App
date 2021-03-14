<template>
    <div>
        <h1>tags</h1>
        <div></div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';


export default defineComponent({

    setup() { 
        const gg=ref('test')
 function checkName(el:any)
 {
   const tags=[
     "SELECT", 
     "FROM" ,
    "WHERE" ,
    "LIKE" ,
    "BETWEEN" ,
    "NOT LIKE" ,
    "FALSE" ,
    "NULL" ,
   "TRUE" ,
    "NOT IN"
      ]  
        
    }
    function onInput(el:any) {
       
       let text= el.target.value
        
      
        var tag=""
        let tt=text.search(tag)
          if (tt>-1) {
            console.log('change')
            text=text.replace(tag, "dsadsa@asdsd.ru");
            gg.value=text
          }
        
        
    }
    return {gg,onInput} 
}})

</script>
