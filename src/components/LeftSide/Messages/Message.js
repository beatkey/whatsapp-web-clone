import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import UserAvatar from "components/Global/UserAvatar";

import {useDispatch} from "react-redux";
import {deleteMessage} from "stores/message";

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
        switch (type){
            case 3: // delete chat
                dispatch(deleteMessage(name))
                break
        }
    };

    const Status = ({type}) => {
        switch (type) {
            case "read":
                return (
                    <div className="mr-0.5">
                        <svg viewBox="0 0 14 18" width="14" height="18" className="">
                            <path fill="currentColor"
                                  d="m12.502 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path>
                        </svg>
                    </div>
                )
            case "photo":
                return (
                    <div className="mr-1">
                        <svg viewBox="0 0 16 20" width="16" height="20" className="">
                            <path fill="currentColor"
                                  d="M13.822 4.668H7.14l-1.068-1.09a1.068 1.068 0 0 0-.663-.278H3.531c-.214 0-.51.128-.656.285L1.276 5.296c-.146.157-.266.46-.266.675v1.06l-.001.003v6.983c0 .646.524 1.17 1.17 1.17h11.643a1.17 1.17 0 0 0 1.17-1.17v-8.18a1.17 1.17 0 0 0-1.17-1.169zm-5.982 8.63a3.395 3.395 0 1 1 0-6.79 3.395 3.395 0 0 1 0 6.79zm0-5.787a2.392 2.392 0 1 0 0 4.784 2.392 2.392 0 0 0 0-4.784z"></path>
                        </svg>
                    </div>
                )
            case "sended":
                return (
                    <div className="mr-1">
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="">
                            <path
                                d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.146.47.47 0 0 0-.343.146l-.311.31a.445.445 0 0 0-.14.337c0 .136.047.25.14.343l2.996 2.996a.724.724 0 0 0 .501.203.697.697 0 0 0 .546-.266l6.646-8.417a.497.497 0 0 0 .108-.299.441.441 0 0 0-.19-.374L11.07.653Zm-2.45 7.674a15.31 15.31 0 0 1-.546-.355.43.43 0 0 0-.317-.12.46.46 0 0 0-.362.158l-.292.33a.482.482 0 0 0 .013.666l1.079 1.073c.135.135.3.203.495.203a.699.699 0 0 0 .552-.267l6.62-8.391a.446.446 0 0 0 .109-.298.487.487 0 0 0-.178-.375l-.355-.273a.487.487 0 0 0-.673.076L8.62 8.327Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                )
        }
    }

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
                            menuItems.map((menuItem, index) => <MenuItem key={index} onClick={() => handleClose(index, value.name)}>{menuItem}</MenuItem>)
                        }
                    </Menu>
                </div>
            </div>
        </div>
    )
}
