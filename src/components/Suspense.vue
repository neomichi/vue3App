<template>
  <div v-if="error">
    {{ error }}
  </div>
  <Suspense v-else>
    <template #default>
      <UserProfile />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
<script lang="ts">
import * as axiosHelper from "../assets/code/axiosHelper"
import { defineComponent, onErrorCaptured, ref } from "vue";
import  {refValue} from "../assets/code/types"

export default defineComponent({
  setup() {
    const error:refValue = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });
    return { error };
  },
});
</script>
