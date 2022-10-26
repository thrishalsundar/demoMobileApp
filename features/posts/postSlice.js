import { createSlice } from "@reduxjs/toolkit";


const postSlice=createSlice({
    name:'posts',
    initialState:[],
    reducers:{
        addPost: (state,action)=>{
           return [action.payload,...state];
        },
        addPosts:(state,action)=>{
            return [...state].concat(action.payload);
        },
        deletePost:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
    }
})



export const {addPost,addPosts,deletePost}=postSlice.actions;
export default postSlice.reducer;
