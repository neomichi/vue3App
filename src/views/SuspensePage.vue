<template>
  <div>
    <Suspense>
      <Suspensetest />
    </Suspense>


  <Suspense>
    <template #default>
      <div>
        <h1>test Suspense</h1>
        <div>
          <Suspensetest />
        </div>
      </div>
    </template>
    <template #fallback>
      <span>Loading......</span>
    </template>
  </Suspense>
</div>
</template>

<script lang="ts">
import Suspensetest from "../components/SuspenseTest.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Suspensetest,
  },
  setup() {
    return {};
  },
});
</script>
