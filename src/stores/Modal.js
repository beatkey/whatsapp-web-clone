import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeModal: null,
    currentContact: null
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
        },
        setCurrentContact: (state, action) => {
            state.currentContact = action.payload
        }
    }
})

export const {
    openModal,
    closeModal,
    setCurrentContact
} = slice.actions
export default slice.reducer
