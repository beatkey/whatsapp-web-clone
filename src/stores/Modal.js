import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeModal: null,
}

const slice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.activeModal = action.payload
        },
        closeModal: (state, action) => {
            state.activeModal = null
        }
    }
})

export const {
    openModal,
    closeModal,
} = slice.actions
export default slice.reducer
