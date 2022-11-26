import {createSlice, current} from "@reduxjs/toolkit";

let contacts = [
    {
        name: "Kawasaki",
        image: "svg-group",
        about: "H2R"
    },
    {
        name: "BMW",
        image: "https://productimages.hepsiburada.net/s/160/375/110000118595678.jpg",
        about: "S1000RR"
    },
    {
        name: "Benelli",
        image: "svg-solo",
        about: "TNT250"
    },
    {
        name: "Yamaha",
        image: "https://cdn03.ciceksepeti.com/cicek/kcm45176275-1/XL/yamaha-yzf-r6-model-oyuncak-motor-kcm45176275-1-1c070b43a6884f849ff1f4323a87e81d.jpg",
        about: "R6"
    },
    {
        name: "Ducati",
        image: "https://arabam-blog.mncdn.com/wp-content/uploads/2020/11/20201120031956_2020-Ducati-Panigale-V4-SP-front.jpg",
        about: "Panigale V4S"
    }
]

if (localStorage.getItem("contacts")) {
    contacts = JSON.parse(localStorage.getItem("contacts"))
} else {
    localStorage.setItem("contacts", JSON.stringify(contacts))
}

const slice = createSlice({
    name: "contacts",
    initialState: contacts,
    reducers: {
        muteContact: (state, action) => {
            state.find(value => value.name === action.payload)["muted"] = true

            localStorage.setItem("contacts", JSON.stringify(current(state)))
        },
        unMuteContact: (state, action) => {
            state.find(value => value.name === action.payload)["muted"] = false

            localStorage.setItem("contacts", JSON.stringify(current(state)))
        },
        pinContact: (state, action) => {
            state.find(value => value.name === action.payload)["pinned"] = true

            localStorage.setItem("contacts", JSON.stringify(current(state)))
        },
        unPinContact: (state, action) => {
            state.find(value => value.name === action.payload)["pinned"] = false

            localStorage.setItem("contacts", JSON.stringify(current(state)))
        },
    }
})

export const {
    muteContact,
    unMuteContact,
    pinContact,
    unPinContact,
} = slice.actions
export default slice.reducer
