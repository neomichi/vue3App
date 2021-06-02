<template>
  <div>
    <h1>test</h1>
    <div>
        {{coinsData}}
    </div>

  </div>
</template>
<script lang="ts">
import { AxiosRepository } from "../assets/code/axiosHelper";
import { defineComponent, ref, onMounted } from "vue";
import { AxiosResponse } from "axios";

interface ICoins {
  data:ICoin[]
}
interface ICoin {
 name: ICoinData
}
interface  ICoinData {
  Id: string;
  ImageUrl: string;
  Symbol: string;
  FullName: string;
}


export default defineComponent({
  setup() {
    const url =
      "https://min-api.cryptocompare.com/data/all/coinlist?summary=true";

    const coinsData = ref({});
    onMounted(() => {
      AxiosRepository.Get(url).then((x:any) => {
        const response= x as AxiosResponse
        const raw=response.data;
        const coins=raw.Data

        
       
        const gg=JSON.parse(JSON.stringify(coins))
        console.log(gg);
      });
    });

    return { coinsData };
  },
});
</script>
