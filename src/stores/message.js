import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeMessage: null
}

const slice = createSlice({
    name: "activeMessage",
    initialState,
    reducers: {
        setActiveMessage: (state, action) => {
            state.activeMessage = action.payload
        }
    }
})

export const {setActiveMessage} = slice.actions
export default slice.reducer
