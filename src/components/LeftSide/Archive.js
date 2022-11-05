import {useDispatch, useSelector} from "react-redux";

import {Status, UserAvatar} from "components/Global"
import {GetContact} from "helpers";
import {unarchiveMessage, deleteMessage, setActiveMessage} from "stores/Message";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

const menuItems = [
    "Unarchive Chat",
    "Mark As Unread",
    "Delete Chat",
]

function Contact({contact}) {
    const dispatch = useDispatch()

    const activeMessage = useSelector(state => state.message.activeMessage)
    const contactInfo = GetContact(contact.name)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (type, name) => {
        setAnchorEl(null);
        switch (type) {
            case 0: // unarchive chat
                dispatch(unarchiveMessage(name))
                break
            case 2: // delete chat
                dispatch(deleteMessage(name))
                break
        }
    };

    let messageDetail = null
    if (contact.messages.length > 0) {
        messageDetail = {
            message: contact.messages.at(-1).message,
            time: contact.messages.at(-1).time,
            status: contact.messages.at(-1).status
        }
    }

    return (
        <div onClick={() => dispatch(setActiveMessage(contact.name))}
             className={"Message group cursor-pointer flex items-center pl-3.5 " + (activeMessage === contact.name ? "bg-[#2a3942]" : "hover:bg-[#202c33]")}>
            <div className="Img mr-3">
                <div className="w-[49px] h-[49px] rounded-full overflow-hidden">
                    <UserAvatar type={contactInfo.image}/>
                </div>
            </div>
            <div
                className="w-full border-t border-[rgba(134,150,160,0.15)] group-hover:border-[transparent] py-3 pr-3.5">
                <div className="Top flex items-center justify-between text-[#e9edef] text-[17px]">
                    <div>
                        {contact.name}
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
                            menuItems.map((menuItem, index) =>
                                <MenuItem key={index}
                                          onClick={() => handleClose(index, contact.name)}>{menuItem}</MenuItem>)
                        }
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default function Archive({handleArchiveClose, drawerOpen}) {
    const contacts = useSelector(state => {
        return state.message.messages.filter(value => value.archived)
    })

    return (
        <div
            className={`NewChat absolute w-full h-full top-0 bg-[#111b21] ${drawerOpen ? "left-0" : "left-[-100%]"} grid-rows-[108px,calc(100%-108px)] grid transition-all duration-800`}>
            <div className="Head h-[108px] bg-[#202c33] flex items-end text-[#d9dee0] p-5">
                <div onClick={handleArchiveClose} className="mr-3 cursor-pointer">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                         version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                        <path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg>
                </div>
                Archived
            </div>
            <div className="List">
                <div className="Wrapper max-h-full overflow-y-auto overflow-x-hidden overflow scrollbar">
                    {
                        contacts.map((contact, index) => <Contact key={index} contact={contact}/>)
                    }
                </div>
            </div>
        </div>
    );
}
