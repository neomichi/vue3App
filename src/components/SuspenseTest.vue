<template>
  <div class="suspense">

  <div class="suspense__settimeout">
      <h4>set time out</h4>
      {{cryptoHandTable}}
  </div>
  <div  class="suspense__load">
     <h4>suspense</h4>
     {{cryptoTable}}
  </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref,onMounted } from "vue";
import { refValue } from '@/assets/code/types';

export default defineComponent({
   async setup() {
    const url =
      "https://min-api.cryptocompare.com/data/all/coinlist?summary=true";

    const cryptoHandTable = ref("Loading timeout 2000 ...");
    const cryptoTable:refValue = ref("Loading Suspense...");

    function loadData(url:string) {
      return  fetchData(url)  
    }

    
    cryptoTable.value = await loadData(url)   
    
    onMounted(()=> {         
       setTimeout(() =>{  cryptoHandTable.value='image'}, 2000);  
    })

    
    return {cryptoTable,cryptoHandTable}
   
  },
});

// Utils
async function fetchData(url:string) {  
    return new Promise(async (resolve) => {
        const res = await fetch(url);
        setTimeout(async () => resolve(await res.json()), 2000);
    });
}
</script>
<style lang="scss">
.suspense {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

