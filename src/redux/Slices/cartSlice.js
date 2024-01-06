import { createSlice } from "@reduxjs/toolkit";
//read react redux toolkit doc.

export const CartSlice = createSlice({
    name: "cart", //to accesss a parameter which we are sending in reducer function jaise ismain product main add main post ko bhej rhe hai usse access krne ke liye action.payload ka use krte hai. action.payload ki internal working , kya hota hai likhne se?
    initialState: [],
    reducers :{
        add: (state , action)=> {
            state.push(action.payload);
        },
        remove: (state , action)=> {    //ismain action.payload main element id hogi kyunki wahi pass kra hai parameter main product main
            return state.filter((item) => item.id !== action.payload); 
        },//read a  dvantages of redux over context , ek toh complex centralised data ko manage krna pde jismain data(with their functions) ko alag alag slices main divide krna pde udhr redux bdaya hai , use redux for large scale applications
    }
});

export const {add , remove} = CartSlice.actions;
export default CartSlice.reducer;