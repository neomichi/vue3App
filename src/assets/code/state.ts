


import store from "../../store/index"

import {ref, computed } from "vue";

export const getUserRole=()=>{
     computed(()=>{
        const u=ref(0)
        u.value= store.getters.userRole
        console.log(`computed ${store.getters.userRole}`)
        return u
     })   
    
}



