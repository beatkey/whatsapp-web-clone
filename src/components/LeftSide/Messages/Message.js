import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {UserAvatar, Status} from "components/Global";

import {useDispatch} from "react-redux";
import {deleteMessage, archiveMessage} from "stores/Message";

import {GetContact} from "helpers";

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
        "Mute notifications",
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
                    <div id="basic-button"
                         aria-controls={open ? 'basic-menu' : undefined}
                         aria-haspopup="true"
                         aria-expanded={open ? 'true' : undefined}
                         onClick={handleClick}
                         className={"absolute right-[-50px] group-hover:right-0 transition-all duration-150 " + (open ? "right-0" : "")}>
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
    )
}
