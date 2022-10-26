import {createSlice, current} from "@reduxjs/toolkit";

let messages = [
    {
        "image": "svg-group",
        "name": "Kawasaki",
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
                "message": "im okkk",
                "time": "9:03",
                "status": "received"
            }
        ]
    },
    {
        "image": "https://productimages.hepsiburada.net/s/160/375/110000118595678.jpg",
        "name": "BMW",
        "messages": []
    },
    {
        "image": "svg-solo",
        "name": "Yamaha",
        "messages": []
    }
];

if(localStorage.getItem("messages")){
    messages = JSON.parse(localStorage.getItem("messages"))
}else{
    localStorage.setItem("messages", JSON.stringify(messages))
}

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
            const minutes = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes();
            const time = date.getHours() + ":" + minutes

            state.messages.find(value => {
                return value.name === state.activeMessage
            }).messages.push({
                "message": action.payload,
                "time": time,
                "status": "sended"
            })

            // local storage actions
            const messages = JSON.parse(localStorage.getItem("messages"))
            messages.find(value => {
                return value.name === state.activeMessage
            }).messages.push({
                "message": action.payload,
                "time": time,
                "status": "sended"
            })
            localStorage.setItem("messages", JSON.stringify(messages))
        },
        deleteMessage: (state, action) => {
            console.log(state.messages.filter(message => message.name !== action.payload))
            //state.messages = state.messages.filter(message => message.name !== action.payload)
            //state.messages.splice(0,1)

            //const messages = JSON.parse(localStorage.getItem("messages"))
            //messages.splice(0,1)
            //localStorage.setItem("messages", JSON.stringify(messages))
        }
    }
})

export const {setActiveMessage, sendMessage, deleteMessage} = slice.actions
export default slice.reducer
