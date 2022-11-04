import {createSlice} from "@reduxjs/toolkit";

const initialState = [
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

const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {

    }
})

export default slice.reducer
