import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   activeModal: null,
   deleteMessageData: {
      name: null,
      messageID: null,
      sender: false
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
         state.deleteMessageData.sender = action.payload.sender || false
      }
   }
})

export const {
   openModal,
   closeModal,
   setDeleteMessageID
} = slice.actions
export default slice.reducer
