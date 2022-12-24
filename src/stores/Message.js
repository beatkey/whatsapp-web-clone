import {createSlice, current} from "@reduxjs/toolkit";
import {UUID} from "../helpers";

let messages = [
   {
      "name": "Kawasaki",
      "messages": [
         {
            "id": UUID(),
            "message": "aaa",
            "time": 1668355783752,
            "status": "sended"
         },
         {
            "id": UUID(),
            "message": "aaa",
            "time": 1668355783752,
            "status": "received"
         },
         {
            "id": UUID(),
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
   activeReply: [],
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
         const activeReply = state.activeReply.find(value => value.name === state.activeMessage)
         const messagesExist = state.messages.find(value => {
            return value.name === state.activeMessage
         })

         const message = {
            "id": UUID(),
            "message": action.payload,
            time,
            "status": "sended",
            "reply": activeReply && activeReply
         }

         if (!messagesExist) {
            state.messages.push({
               name: state.activeMessage,
               messages: [{...message}]
            })
         } else {
            state.messages.find(value => {
               return value.name === state.activeMessage
            }).messages.push({
               ...message
            })
         }

         if(activeReply){
            state.activeReply = state.activeReply.filter(value => value.name !== state.activeMessage)
         }

         localStorage.setItem("messages", JSON.stringify(current(state.messages)))
      },
      deleteChat: (state, action) => {
         const messages = state.messages.filter(message => message.name !== action.payload)
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
      },
      setActiveReply: (state, action) => {
         const exist = state.activeReply.find(value => value.name === action.payload.activeMessage)

         if(exist){
            exist.message = action.payload.message
            exist.sender = action.payload.sender
         }else{
            state.activeReply = [
               {
                  name: action.payload.activeMessage,
                  message: action.payload.message,
                  sender: action.payload.sender
               },
               ...state.activeReply
            ]
         }
      },
      deleteActiveReply: (state, action) => {
         state.activeReply = state.activeReply.filter(value => value.name !== action.payload)
      },
      deleteMessage: (state, action) => {
         const contact =  state.messages.find(value => value.name === action.payload.name)
         switch (action.payload.type){
            case 0: // delete for me
               contact.messages = contact.messages.filter(message => message.id !== action.payload.messageID)
               break
            case 1: // delete for everyone
               contact.messages.find(message => message.id === action.payload.messageID)["deleted"] = true

               localStorage.setItem("messages", JSON.stringify(current(state.messages)))
         }
      }
   }
})

export const {
   setActiveMessage,
   sendMessage,
   deleteChat,
   archiveMessage,
   unArchiveMessage,
   sendFile,
   sendContact,
   setActiveReply,
   deleteActiveReply,
   deleteMessage
} = slice.actions
export default slice.reducer
