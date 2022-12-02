import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   contactInfo: null
}

const slice = createSlice({
   name: "general",
   initialState,
   reducers: {
      setContactInfo: (state, action) => {
         state.contactInfo = action.payload
      }
   }
})

export const {
   setContactInfo
} = slice.actions
export default slice.reducer
