import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name:'search',
    initialState:{

    },//we are storing inputs as objects thats why initial state is an empty object
    reducers: {
        cacheResults:(state,action) => {
            // state = Object.assign(state,action.payload) //this will merge two objects
            return { ...state, ...action.payload }; // Merge the state with payload using spread operator
        }

    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;