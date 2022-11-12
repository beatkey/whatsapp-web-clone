import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {UserAvatar, Status} from "components/Global";

import {useDispatch, useSelector} from "react-redux";
import {deleteMessage, archiveMessage} from "stores/Message";
import {openModal, setCurrentContact} from "stores/Modal";

import {GetContact} from "helpers";
import {unMuteContact} from "../../../stores/Contacts";

export default function Message({value, activeMessageHandle, activeMessage}) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const contact = GetContact(value.name);

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
                if(contact?.muted){
                    dispatch(unMuteContact(name))
                }else{ // mute
                    dispatch(setCurrentContact(name))
                    dispatch(openModal("muteContact"))
                }
                break
            case 3: // delete chat
                dispatch(deleteMessage(name))
                break
        }
    };

    let messageDetail = null
    if (value.messages.length > 0) {
        messageDetail = {
            message: value.messages.at(-1).message,
            time: value.messages.at(-1).time,
            status: value.messages.at(-1).status
        }
    }

    const menuItems = [
        "Archive Chat",
        contact?.muted ? "Unmute notifications" : "Mute notifications",
        "Mark As Unread",
        "Delete Chat",
        "Pin Chat"
    ]

    return (
        <div onClick={() => activeMessageHandle(value.name)}
             className={"Message group cursor-pointer flex items-center pl-3.5 " + (activeMessage === value.name ? "bg-[#2a3942]" : "hover:bg-[#202c33]")}>
            <div className="Img mr-3">
                <div className="w-[49px] h-[49px] rounded-full overflow-hidden">
                    <UserAvatar type={contact.image}/>
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
                                <>
                                    <Status type={messageDetail.status}/>
                                    {messageDetail.message}
                                </>
                                :
                                "Click and start a chat"
                        }
                    </div>
                    <div className="flex items-center gap-1">
                        <div>
                            {
                                contact?.muted &&
                                <svg viewBox="0 0 16 18" height="18" width="16" preserveAspectRatio="xMidYMid meet"
                                     version="1.1" x="0px" y="0px" enableBackground="new 0 0 16 18"><path fill="currentColor" d="M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z"></path>
                                </svg>
                            }
                        </div>
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
