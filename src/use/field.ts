import {ref} from  'vue'
export function useField(field:HTMLFormElement) {
const valid=ref(true);
const value=ref(field.value) 
console.log(field)

return {value,valid}
}