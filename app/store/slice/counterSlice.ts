import { createSlice } from '@reduxjs/toolkit';
//Initialisation du state par default du reduxer compter redux definition a voir.
const initialState = {
    value: 0 ,
}

//création du redux compteur 

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            //Fonction Incrementation
            console.log("cliqué")
            state.value +=1
        },

        decrement:(state)=>{
            //Fonction decrementation
            console.log("cliqué")
            state.value-=1
        },
        
        reset:(state)=>{
            //Fonction decrementation
            console.log("cliqué")
            state.value =0
        },
    }
})

export  const{increment,decrement,reset} = counterSlice.actions ;
export default counterSlice.reducer ;