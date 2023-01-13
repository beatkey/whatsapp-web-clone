import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {UserAvatar, Status} from "components/Global";

import {useDispatch} from "react-redux";
import {deleteChat, archiveMessage} from "stores/Message";
import {openModal} from "stores/Modal";

import {pinContact, unMuteContact, unPinContact} from "../../../stores/Contacts";

export default function Message({value, activeMessageHandle, activeMessage}) {
   const dispatch = useDispatch()
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      event.preventDefault()
      setAnchorEl(event.currentTarget);
   };

   const handleClose = (type, name) => {
      setAnchorEl(null);
      switch (type) {
         case 0: // archive chat
            dispatch(archiveMessage(name))
            break
         case 1: // unmute
            if (value?.muted) {
               dispatch(unMuteContact(name))
            } else { // mute
               dispatch(openModal("muteContact"))
            }
            break
         case 3: // delete chat
            dispatch(deleteChat(name))
            break
         case 4: // unpin chat
            if (value?.pinned) {
               dispatch(unPinContact(name))
            } else { // pin chat
               dispatch(pinContact(name))
            }
            break
      }
   };

   let messageDetail = null
   if (value.messages.length > 0) {
      let time = new Date(value.messages.at(-1).time)
      time = time.getHours() + ":" + (time.getMinutes() <= 9 ? '0' + time.getMinutes() : time.getMinutes())

      messageDetail = {
         type: value.messages.at(-1)?.type,
         message: value.messages.at(-1).message,
         time,
         status: value.messages.at(-1).status,
         deleted: value.messages.at(-1)?.deleted,
      }
   }

   const menuItems = [
      "Archive Chat",
      value?.muted ? "Unmute Notifications" : "Mute Notifications",
      "Mark As Unread",
      "Delete Chat",
      value?.pinned ? "Unpin Chat" : "Pin Chat"
   ]

   return (
      <div onClick={() => activeMessageHandle(value.name)}
           className={"Message group cursor-pointer flex items-center pl-3.5 " + (activeMessage === value.name ? "bg-[#2a3942]" : "hover:bg-[#202c33]")}>
         <div className="Img mr-3">
            <div className="w-[49px] h-[49px] rounded-full overflow-hidden">
               <UserAvatar type={value.image}/>
            </div>
         </div>
         <div
            className="w-full border-t border-[rgba(134,150,160,0.15)] group-hover:border-[transparent] py-3 pr-3.5">
            <div className="Top flex items-center justify-between text-[#e9edef] text-[17px]">
               <div>
                  {value.name}
               </div>
               <div className="Time text-[12px] text-[#8696a0]">
                  {messageDetail && messageDetail.time}
               </div>
            </div>
            <div className="Detail relative flex justify-between text-[#8696a0] text-[14px]">
               <div className="flex items-center">
                  {
                     messageDetail ?
                        messageDetail?.deleted ?
                           <div className="flex items-center">
                              <div className="mr-1">
                                 You:
                              </div>
                              <div>
                                 <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet"
                                      className="" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M7.75897 6.43054C8.93584 5.533 10.4057 5 12 5C15.866 5 19 8.13401 19 12C19 13.5943 18.467 15.0642 17.5695 16.241L7.75897 6.43054ZM6.35707 7.85707C5.50399 9.01706 5 10.4497 5 12C5 15.866 8.13401 19 12 19C13.5503 19 14.9829 18.496 16.1429 17.6429L6.35707 7.85707ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                                          fill="currentColor"></path>
                                 </svg>
                              </div>
                              <div className="italic">
                                 You deleted this message
                              </div>
                           </div>
                           :
                           <>
                              <Status type={messageDetail.status}/>
                              {(() => {
                                 switch (messageDetail?.type) {
                                    case "video":
                                       return "Video"
                                    case "image":
                                       return "Image"
                                    default:
                                       return messageDetail.message
                                 }
                              })()}
                           </>
                        :
                        "Click and start a chat"
                  }
               </div>
               <div className="flex items-center gap-1">

                  {
                     value?.muted &&
                     <div className="mr-0.5">
                        <svg viewBox="0 0 16 18" height="18" width="16" preserveAspectRatio="xMidYMid meet"
                             version="1.1" x="0px" y="0px" enableBackground="new 0 0 16 18">
                           <path fill="currentColor"
                                 d="M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z"></path>
                        </svg>
                     </div>
                  }
                  {
                     value?.pinned &&
                     <div className="mr-0.5">
                        <svg height="15" width="15" preserveAspectRatio="xMidYMid meet" className="">
                           <path fill="currentColor"
                                 d="M12.074 4.21 8.7 8.232l.116 4.233a.4.4 0 0 1-.657.318L.43 6.297a.4.4 0 0 1 .199-.702l4.196-.622L8.196.957a.63.63 0 0 1 .887-.078l2.914 2.445a.63.63 0 0 1 .077.887ZM1.294 14.229a.713.713 0 0 1-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267Z"></path>
                        </svg>
                     </div>
                  }
                  <div>
                     <div id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          className={"relative overflow-hidden w-0 group-hover:w-auto " + (open ? "w-auto" : "")}>
                        <svg viewBox="0 0 19 20" width="19" height="20" className="">
                           <path fill="currentColor"
                                 d="m3.8 6.7 5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>
                        </svg>
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
                                                                        onClick={() => handleClose(index, value.name)}>{menuItem}</MenuItem>)
                        }
                     </Menu>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
