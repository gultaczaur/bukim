import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: []
}

export const getProduct = createAsyncThunk(
    "getProduct", 
    async () => {
    const {data} = await axios.get("https://6784ff4d1ec630ca33a6b6cb.mockapi.io/data=")
    return data
}

)




export const productSlice = createSlice({
    name: 'product',
    initialState,
    // reducers: {
    //     getApi: async (state)=> {
    //      const res = await axios.get("https://6783b6388b6c7a1316f5510a.mockapi.io/product")
    //      state.data = res.data
    //     }
    // }
    extraReducers: (payload) => {
        payload.addCase(getProduct.fulfilled, (state, action) => (
        state.data = action.payload

        ))
    }
})
    export const {getApi} = productSlice.actions;

export default productSlice.reducer;