<template>
      <div class="input_container">
      <!-- <div class="columns">
        <div class="column is-6 is-offset-3"> -->
          <div class="field">
            <div class="control is-relative">
              <input   @input="onInput" :placeholder="placeholder" class="input ab-textinput" :type="type" required  />
              <label class="ab-label">{{title}}</label>
            </div>
          </div>
        <!-- </div>
      </div> -->
      </div>

</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';


export default defineComponent({
  props:{ 
    title:{type:String,default:"text"},
    id:{type:String,default:""},
    name:{type:String,default:""},
    value:{type:String},
    type:{type:String,default:"text"},
    placeholder:{type:String,default:" "}
  },
  setup() {
    function onInput() {
      console.log(1)
    }
    return {onInput}
  }
})
</script>
<style lang="scss">
@import '../../assets/scss/color.scss';
 

$white: #ffffff;
$input-gray: #f3f3f4;
$gray: #757575;
$black: #000000;

.input_container {
  display: flex;
  position: relative;
}


.ab-textinput {
  position: relative;
  background-color: $input-gray;
  font-size: 1rem;
  color: $black;
  padding: 18px 12px 6px;
  height: 50px;
  border: 2px solid rgba(117, 121, 231, 0);
  border-radius: 2px;
  box-shadow: none;
  outline: none;

  & + .ab-label {
    position: absolute;

    top: 50%;
    left: 12px;

    transform: translateY(-50%);

    font-size: 1rem;
    color: $gray;

 

    transition: all 0.15s ease;
  }

  &:hover {
    box-shadow: 0 0 0 3px rgba($color: $header-footer-bg-color, $alpha: 0.48);
    background-color: $white;
    transition: all 0.25s ease;
    border: 2px solid rgba(117, 121, 231, 0);

    & + .ab-label {
      color: $black;
    }
  }

  &:focus {
    border: 2px solid rgba(117, 121, 231, 1);
    background-color: $white;
    box-shadow: none;

    & + .ab-label {
      color: $header-footer-bg-color;
      font-weight: 600;
      font-size: 0.8rem;
      top: 5px;
      transform: unset;
    }
  }

  &:not(:placeholder-shown):not(:focus) {
    & + .ab-label {
      color: $gray;
      font-weight: 600;
      font-size: 0.8rem;
      top: 5px;
      transform: unset;
    }
  }
}
</style>
