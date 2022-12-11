import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   contactInfo: null
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
      }
   }
})

export const {
   closeContactInfo,
   setContactInfo
} = slice.actions
export default slice.reducer
