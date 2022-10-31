import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Kawasaki",
        image: "svg-group",
    },
    {
        name: "BMW",
        image: "https://productimages.hepsiburada.net/s/160/375/110000118595678.jpg"
    },
    {
        name: "Benelli",
        image: "svg-solo"
    }
]

const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {

    }
})

export default slice.reducer
