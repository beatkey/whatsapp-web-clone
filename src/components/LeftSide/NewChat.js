import {useSelector, useDispatch} from "react-redux";
import {setActiveMessage} from "stores/Message";

import {UserAvatar} from "components/Global"
import {useState} from "react";

const Input = ({filterText, setFilterText}) => {
    return (
       <div className="Search flex items-center px-3 py-2">
           <div className="InputWrapper bg-color2 w-full px-3 py-1.5 flex items-center rounded-lg mr-3">
               <div className="Icon relative cursor-pointer text-icon mr-7">
                   <div className={`transition-all ${(!filterText.length > 0 ? "rotate-0 opacity-100" : "rotate-[135deg] opacity-0")}`}>
                       <svg viewBox="0 0 24 24" width="24" height="24" className="">
                           <path fill="currentColor"
                                 d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                       </svg>
                   </div>
                   <div
                      onClick={() => setFilterText("")}
                      className={`absolute left-0 top-0 text-[#00a884] transition-all ${(!filterText.length > 0 ? "opacity-0 scale-[.8] rotate-[225deg]" : "scale-100 opacity-100 rotate-0")}`}>
                       <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                            version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                           <path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                       </svg>
                   </div>
               </div>
               <div className="Input w-full">
                   <input
                      onChange={e => setFilterText(e.target.value)}
                      value={filterText}
                      className="w-full bg-[transparent] outline-none placeholder:text-icon placeholder:text-[14px] text-[#d1d7db] text-[15px]"
                      type="text"
                      placeholder="Search or start new chat"/>
               </div>
           </div>
           <div className="cursor-pointer text-icon">
               <svg viewBox="0 0 24 24" width="20" height="20" preserveAspectRatio="xMidYMid meet"
                    className="">
                   <path fill="currentColor"
                         d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"></path>
               </svg>
           </div>
       </div>
    )
}

function NewChat({handleDrawerClose, drawerOpen}) {
    const dispatch = useDispatch()
    const [filterText, setFilterText] = useState("")
    const contacts = useSelector(state => {
        const all = state.contacts

        if (filterText.length > 0) {
            return all.filter(value => value.name.toLowerCase().includes(filterText.toLowerCase()))
        }

        return all
    })
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
                    <div>
                        <Input filterText={filterText} setFilterText={setFilterText} />
                    </div>
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
