import {createSlice, current} from "@reduxjs/toolkit";

let messages = [
    {
        "name": "Kawasaki",
        "messages": [
            {
                "message": "aaa",
                "time": 1668355783752,
                "status": "sended"
            },
            {
                "message": "aaa",
                "time": 1668355783752,
                "status": "received"
            },
            {
                "message": "im okkk",
                "time": 1668355783752,
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
            const time = new Date().getTime()

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
            state.activeMessage = null

            localStorage.setItem("messages", JSON.stringify(messages))
        },
        archiveMessage: (state, action) => {
            state.messages.find(value => {
                return value.name === state.activeMessage
            })["archived"] = true
            state.activeMessage = null

            localStorage.setItem("messages", JSON.stringify(current(state.messages)))
        },
        unArchiveMessage: (state, action) => {
            state.messages.find(value => {
                return value.name === state.activeMessage
            })["archived"] = false
            state.activeMessage = null

            localStorage.setItem("messages", JSON.stringify(current(state.messages)))
        },
        sendFile: (state, action) => {
            const time = new Date().getTime()

            let messages = state.messages.find(value => {
                return value.name === state.activeMessage
            })

            const fileType = action.payload.fileType
            const fileUrl = action.payload.fileUrl

            if (messages === undefined) {
                state.messages.push({
                    name: state.activeMessage,
                    messages: [{
                        "type": fileType,
                        "message": fileUrl,
                        "time": time,
                        "status": "sended"
                    }]
                })
            } else {
                state.messages.find(value => {
                    return value.name === state.activeMessage
                }).messages.push({
                    "type": fileType,
                    "message": fileUrl,
                    "time": time,
                    "status": "sended"
                })
            }

            localStorage.setItem("messages", JSON.stringify(current(state.messages)))
        },
        sendContact: (state, action) => {
            const time = new Date().getTime()

            let messages = state.messages.find(value => {
                return value.name === state.activeMessage
            })

            if (messages === undefined) {
                state.messages.push({
                    name: state.activeMessage,
                    messages: [{
                        "type": "contact",
                        "message": action.payload,
                        "time": time,
                        "status": "sended"
                    }]
                })
            } else {
                state.messages.find(value => {
                    return value.name === state.activeMessage
                }).messages.push({
                    "type": "contact",
                    "message": action.payload,
                    "time": time,
                    "status": "sended"
                })
            }

            localStorage.setItem("messages", JSON.stringify(current(state.messages)))
        }
    }
})

export const {setActiveMessage, sendMessage, deleteMessage, archiveMessage, unArchiveMessage, sendFile, sendContact} = slice.actions
export default slice.reducer
