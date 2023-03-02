import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   contactInfo: null,
   moveToMessage: null
}

const slice = createSlice({
   name: "general",
   initialState,
   reducers: {
      closeContactInfo: (state, action) => {
         state.contactInfo = null
      },
      setContactInfo: (state, action) => {
         state.contactInfo = action.payload
      },
      setMoveToMessage: (state, action) => {
         state.moveToMessage = action.payload
      }
   }
})

export const {
   closeContactInfo,
   setContactInfo,
   setMoveToMessage
} = slice.actions
export default slice.reducer
