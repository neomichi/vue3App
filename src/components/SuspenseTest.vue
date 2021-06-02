<template>
  <div class="data"> 

    {{cryptoTable}}
  
  </div>
</template>
<script lang="ts">
import { defineComponent,  ref} from "vue";
import { refValue } from '@/assets/code/types';

export default defineComponent({
   async setup() {
    const url =
      "https://min-api.cryptocompare.com/data/all/coinlist?summary=true";
 
    const cryptoTable:refValue = ref("Loading Suspense...");
   
    function loadData(url:string) {
      return fetchData(url)  
    }
    cryptoTable.value = await loadData(url)

    return {cryptoTable}   
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

