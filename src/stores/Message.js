import {createSlice, current} from "@reduxjs/toolkit";

let messages = [
    {
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
    }
];

if (localStorage.getItem("messages")) {
    messages = JSON.parse(localStorage.getItem("messages"))
} else {
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

            let messages = state.messages.find(value => {
                return value.name === state.activeMessage
            })

            if (messages === undefined) {
                state.messages.push({
                    name: state.activeMessage,
                    messages: [{
                        "message": action.payload,
                        "time": time,
                        "status": "sended"
                    }]
                })
            } else {
                state.messages.find(value => {
                    return value.name === state.activeMessage
                }).messages.push({
                    "message": action.payload,
                    "time": time,
                    "status": "sended"
                })
            }

            localStorage.setItem("messages", JSON.stringify(current(state.messages)))
        },
        deleteMessage: (state, action) => {
            let messages = state.messages.filter(message => message.name !== action.payload)
            state.messages = messages

            localStorage.setItem("messages", JSON.stringify(messages))
        },
        archiveMessage: (state, action) => {
            state.messages.find(value => {
                return value.name === state.activeMessage
            })["archived"] = true
            state.activeMessage = null
        },
        unarchiveMessage: (state, action) => {
            state.messages.find(value => {
                return value.name === state.activeMessage
            })["archived"] = false
        }
    }
})

export const {setActiveMessage, sendMessage, deleteMessage, archiveMessage, unarchiveMessage} = slice.actions
export default slice.reducer
