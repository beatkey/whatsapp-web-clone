import {useState} from "react";

import {GetContact} from "helpers"
import {UserAvatar} from "../../Global";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from "react";
import {setActiveReply} from "../../../stores/Message";
import {useDispatch, useSelector} from "react-redux";
import {openModal, setDeleteMessageID} from "../../../stores/Modal";

const menuItems = [
   "Message info",
   "Reply",
   "React to message",
   "Forward to message",
   "Star message",
   "Delete message",
]

const Image = ({base64, time}) => {
   return (
      <div className="MessageWrapper flex justify-end pl-[9%] pr-[9%]">
         <div
            className="Message relative bg-[#005c4b] text-[#e9edef] text-[14px] inline-block rounded-md flex items-end">
            <div className="px-1 py-1">
               <img src={base64} className="rounded max-w-[240px]" alt=""/>
            </div>
            <div className="absolute right-2.5 bottom-1 flex items-center py-0.5 text-[rgba(233,237,239,.9)]">
               <div className="mr-1 text-[12px]">
                  {time}
               </div>
               <div>
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="">
                     <path
                        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
            </div>
         </div>
      </div>
   )
}

const LeftText = ({id, message, time}) => {
   const dispatch = useDispatch()
   const activeMessage = useSelector(state => state.message.activeMessage)
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = (type) => {
      setAnchorEl(null);
      switch (type){
         case 0: // message info
         case 1: // reply
            dispatch(setActiveReply({activeMessage, message, sender: activeMessage}))
            break
         case 2: // react to message
            break
         case 3: // forward to message
            break
         case 4: // star message
            break
         case 5: // delete message
            dispatch(setDeleteMessageID({activeMessage, id, sender: true}))
            dispatch(openModal("deleteMessage"))
      }
   };

   return (
      <div className="MessageWrapper flex justify-start pl-[9%] pr-[9%]">
         <div
            className="group transition-all duration-200 Message relative overflow-hidden bg-[#202c33] text-[#e9edef] text-[14px] inline-block rounded-md px-1.5 flex items-end">
            <div className="mr-1 px-1 py-1.5">
               {message}
            </div>
            <div className="flex items-center py-0.5 text-[hsla(0,0%,100%,0.6)]">
               <div className="mr-1 text-[12px]">
                  {time}
               </div>
            </div>
            <div onClick={handleClick} className={"w-0 group-hover:w-auto overflow-hidden cursor-pointer MessageActionsLeft absolute right-0 top-0 text-[hsla(0,0%,100%,0.5)] " + (open ? "w-auto" : "")}>
               <div className="p-2">
                  <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className=""
                       version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18" xmlSpace="preserve"><path fill="currentColor" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
               </div>
            </div>
            <Menu
               id="basic-menu"
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
            >
               {
                  menuItems.map((menuItem, index) => <MenuItem key={index}
                                                               onClick={() => handleClose(index)}>{menuItem}</MenuItem>)
               }
            </Menu>
         </div>
      </div>
   )
}

const RightText = ({id, message, time, reply}) => {
   const dispatch = useDispatch()
   const activeMessage = useSelector(state => state.message.activeMessage)
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = (type) => {
      setAnchorEl(null);
      switch (type){
         case 0: // message info
            break
         case 1: // reply
            dispatch(setActiveReply({activeMessage, message, sender: "You"}))
            break
         case 2: // react to message
            break
         case 3: // forward to message
            break
         case 4: // star message
            break
         case 5: // delete message
            dispatch(setDeleteMessageID({activeMessage, id}))
            dispatch(openModal("deleteMessage"))
            break
      }
   };

   const Reply = ({message, sender}) => {
      return (
         <div className="w-full flex items-center pt-1.5">
            <div className="flex w-full h-full rounded overflow-hidden h-[54px] bg-[#025144]">
               <div className="w-1 h-full bg-[#06cf9c]"></div>
               <div className="ml-3 my-2 text-[12.6px]">
                  <div className="text-[#06cf9c]">{sender}</div>
                  <div className="text-[hsla(0,0%,100%,0.6)]">{message}</div>
               </div>
            </div>
         </div>
      )
   }

   return (
      <div onDoubleClick={() => handleClose(1)} className="MessageWrapper flex justify-end pl-[9%] pr-[9%]">
         <div
            className="group Message relative bg-[#005c4b] text-[#e9edef] text-[14px] inline-block rounded-md overflow-hidden px-1.5">
            {
               (reply && <Reply {...reply} />)
            }
            <div className="flex items-end">
               <div className="mr-1 px-1 py-1.5">
                  {message}
               </div>
               <div className="flex items-center py-0.5 text-[hsla(0,0%,100%,0.6)]">
                  <div className="mr-1 text-[12px]">
                     {time}
                  </div>
                  <div>
                     <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="">
                        <path
                           d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z"
                           fill="currentColor"></path>
                     </svg>
                  </div>
               </div>
               <div onClick={handleClick} className={"w-0 group-hover:w-auto overflow-hidden cursor-pointer MessageActions absolute right-0 top-0 text-[hsla(0,0%,100%,0.5)] " + (open ? "w-auto" : "")}>
                  <div className="p-2">
                     <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className=""
                          version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18" xmlSpace="preserve"><path fill="currentColor" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
                  </div>
               </div>
               <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
               >
                  {
                     menuItems.map((menuItem, index) => <MenuItem key={index}
                                                                  onClick={() => handleClose(index)}>{menuItem}</MenuItem>)
                  }
               </Menu>
            </div>
         </div>
      </div>
   )
}

const Contact = ({message, time}) => {
   const Avatar = ({contactName, index}) => {
      const contact = GetContact(contactName)
      return (
         <div className={"overflow-hidden w-10 h-10 -ml-7 rounded-full z-[" + index + "]"}>
            <UserAvatar type={contact.image}/>
         </div>
      )
   }

   const messageText = (message.length > 1 ? `${message[0]} and ${message.length -1} other contact` : message[0])
   return (
      <div className="MessageWrapper flex justify-end pl-[9%] pr-[9%]">
         <div
            className="Message bg-[#005c4b] text-[#e9edef] text-[14px] inline-block rounded-md px-1.5 flex items-end">
            <div className="mr-1 px-1 py-3">
               <div className="flex items-center pl-7">
                  {
                     message.map((contact, index) => <Avatar key={index} index={index} contactName={contact}/>)
                  }
                  <div className="ml-4 font-bold">
                     {messageText}
                  </div>
               </div>
            </div>
            <div className="flex items-center py-0.5 text-[hsla(0,0%,100%,0.6)]">
               <div className="mr-1 text-[12px]">
                  {time}
               </div>
               <div>
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="">
                     <path
                        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z"
                        fill="currentColor"></path>
                  </svg>
               </div>
            </div>
         </div>
      </div>
   )
}

const DeletedMessage = ({time}) => {
   return (
      <div className="MessageWrapper flex justify-end pl-[9%] pr-[9%]">
         <div
            className="group Message relative bg-[#005c4b] text-[#667781] text-[14px] inline-block rounded-md overflow-hidden px-1.5">
            <div className="flex items-end">
               <div className="flex items-center mr-1 px-1 py-1.5">
                  <div className="mr-1.5">
                     <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                          fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.75897 6.43054C8.93584 5.533 10.4057 5 12 5C15.866 5 19 8.13401 19 12C19 13.5943 18.467 15.0642 17.5695 16.241L7.75897 6.43054ZM6.35707 7.85707C5.50399 9.01706 5 10.4497 5 12C5 15.866 8.13401 19 12 19C13.5503 19 14.9829 18.496 16.1429 17.6429L6.35707 7.85707ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                              fill="currentColor"></path>
                     </svg>
                  </div>

                  <div className="italic">
                     You deleted this message
                  </div>
               </div>
               <div className="flex items-center py-0.5 text-[hsla(0,0%,100%,0.6)]">
                  <div className="mr-1 text-[12px]">
                     {time}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default function MessageWrapper(value) {
   let time = new Date(value.time)
   time = time.getHours() + ":" + (time.getMinutes() <= 9 ? '0' + time.getMinutes() : time.getMinutes())

   if(value?.deleted) {
      return <DeletedMessage time={time} />
   }

   switch (value.type) {
      case "video":
         return
      case "photo":
         return <Image base64={value.message} time={time}/>
      case "contact":
         return <Contact message={value.message} time={time}/>
      default:
         return value.status !== "received"
            ?
            <RightText id={value.id} message={value.message} time={time} reply={value?.reply}/>
            :
            <LeftText id={value.id} message={value.message} time={time}/>
   }
}
