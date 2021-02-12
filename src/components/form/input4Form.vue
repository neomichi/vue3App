<template>
  <div class="inputWithIcon">
    <input @input="onInput" :value="value" :type="type" :class="classValue"  placeholder="Email"   />
    <i ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17" height="17" viewBox="0 0 17 17">
<g>
</g>
	<path d="M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z" fill="#000000" />
</svg>
</i>
  </div>
</template>
<style lang="scss">
input {
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

input:required {
  border-color: rgb(228, 17, 17);
  box-shadow: 0 0 8px 0 rgb(228, 17, 17);
}
input:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}
.inputWithIcon input {
  padding-left: 40px;
}

.inputWithIcon {
  position: relative;
}

.inputWithIcon i {
  position: absolute;
  left: 0;
  top: 8px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
}

.inputWithIcon input:focus + i {
  color: dodgerBlue;
}

.inputWithIcon.inputIconBg i {
  background-color: #aaa;
  color: #fff;
  padding: 9px 4px;
  border-radius: 4px 0 0 4px;
}

.inputWithIcon.inputIconBg input[type="text"]:focus + i {
  color: #fff;
  background-color: dodgerBlue;
}

</style>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: { type: String, default: "text" },
    id: { type: String, default: "" },
    name: { type: String, default: "" },
    value: { type: String },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: " " },
    class: { type: String, default: "" },
  },
  setup() {
    
    return {};
  },
});
</script>
