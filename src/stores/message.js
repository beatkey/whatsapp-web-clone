import {createSlice} from "@reduxjs/toolkit";

const messages = [
    {
        "image": "svg-group",
        "name": "Kawasaki",
        "message": "Lorem ipsum dolor sit amet.",
        "time": "yesterday",
        "status": "read",
        "messages": [
            {
                "message": "aaa",
                "time": "9:03",
                "status": "sended"
            },
            {
                "message": "aaa",
                "time": "9:03",
                "status": "received"
            },
            {
                "message": "im ok",
                "time": "9:03",
                "status": "received"
            }
        ]
    },
    {
        "image": "svg-solo",
        "name": "BMW",
        "message": "S1000RR",
        "time": "12:30",
        "status": "photo",
        "messages": []
    }
];

const initialState = {
    activeMessage: null,
    messages
}

const slice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setActiveMessage: (state, action) => {
            state.activeMessage = action.payload
        },
        sendMessage: (state, action) => {
            const date = new Date()
            const time = date.getHours() + ":" + date.getMinutes()
            state.messages[state.activeMessage].messages.push({
                "message": action.payload,
                "time": time,
                "status": "sended"
            })
        }
    }
})

export const {setActiveMessage, sendMessage} = slice.actions
export default slice.reducer
