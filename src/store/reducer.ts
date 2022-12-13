import { createSlice } from "@reduxjs/toolkit";
export const storeSlice=createSlice({
    name:'todos',
    initialState:{
        todos:{
            id: '',
            title: '',
            completed: false,
          }
        },
    reducers:{
        addTodo:(state, action)=>{
            state.todos = action.payload;
        }
    }

})
export const {addTodo}=storeSlice.actions;
export default storeSlice.reducer;