import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   activeModal: null,
   deleteMessageData: {
      name: null,
      messageID: null
   }
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
      setDeleteMessageID: (state, action) => {
         state.deleteMessageData.name = action.payload.activeMessage
         state.deleteMessageData.messageID = action.payload.id
      }
   }
})

export const {
   openModal,
   closeModal,
   setDeleteMessageID
} = slice.actions
export default slice.reducer
