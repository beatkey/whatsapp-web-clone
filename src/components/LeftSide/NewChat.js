import {useSelector, useDispatch} from "react-redux";
import {setActiveMessage} from "stores/Message";

import {UserAvatar} from "components/Global"

function NewChat({handleDrawerClose, drawerOpen}) {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const Alphabet = [...Array(26)].map((x, i) => String.fromCharCode(i + 65))

    const NewChatHandler = name => {
        dispatch(setActiveMessage(name))
        handleDrawerClose()
    }

    return (
        <div
            className={`NewChat absolute w-full h-full top-0 bg-[#111b21] ${drawerOpen ? "left-0" : "left-[-100%]"} grid-rows-[108px,calc(100%-108px)] grid transition-all duration-800`}>
            <div className="Head h-[108px] bg-[#202c33] flex items-end text-[#d9dee0] p-5">
                <div onClick={handleDrawerClose} className="mr-3 cursor-pointer">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                         version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                        <path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                    </svg>
                </div>
                New Chat
            </div>
            <div className="List">
                <div className="Wrapper max-h-full overflow-y-scroll overflow-x-hidden overflow scrollbar">
                    {
                        Alphabet.map((value, index) => {
                            if (contacts.find(contact => contact.name[0] === value)) {
                                return (
                                    <div key={index}>
                                        <div className="text-[#008069] py-4 px-8">
                                            {value}
                                        </div>
                                        {
                                            contacts.filter(contact => contact.name[0] === value).map((contact, contactIndex) =>
                                                <div key={contactIndex} onClick={() => NewChatHandler(contact.name)}
                                                    className={"Message group cursor-pointer flex items-center pl-3.5 hover:bg-[#202c33]"}>
                                                    <div className="Img mr-3">
                                                        <div className="w-[49px] h-[49px] rounded-full overflow-hidden">
                                                            <UserAvatar type={contact.image}/>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="w-full border-t border-[rgba(134,150,160,0.15)] group-hover:border-[transparent] py-3 pr-3.5">
                                                        <div
                                                            className="Top flex items-center justify-between text-[#e9edef] text-[17px]">
                                                            <div>
                                                                {contact.name}
                                                            </div>
                                                            <div className="Time text-[12px] text-[#8696a0]">

                                                            </div>
                                                        </div>
                                                        <div
                                                            className="Detail relative flex justify-between text-[#8696a0] text-[14px]">
                                                            <div className="flex items-center">
                                                                {contact.about}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default NewChat;
