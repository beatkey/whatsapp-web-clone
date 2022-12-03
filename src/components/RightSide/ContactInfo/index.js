import {useSelector} from "react-redux";
import {UserAvatar} from "../../Global";
import {GetContact} from "../../../helpers";

export default function ContactInfo() {
   const activeContactInfo = useSelector(state => state.general.contactInfo)
   const contact = GetContact(activeContactInfo)

   return (
      <div className="w-[75%] border-l bg-[#0b1317] border-[#8696a0]">
         <div className="Head flex items-center bg-[#202c33] p-5 py-4 text-[16px] text-[#d1d7db]">
            <div className="cursor-pointer mr-5">
               <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                    fill="#8696a0" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                  <path enableBackground="new"
                        d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"></path>
               </svg>
            </div>
            Contact Info
         </div>
         <div className="flex justify-center items-center py-10 bg-[#111b21]">
            <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
               <UserAvatar type={contact.image}/>
            </div>
         </div>
         <div className="About bg-[#111b21] my-3 py-3 px-7">
            <div className="text-[14px] text-[#8696a0]">About</div>
            <div className="text-[16px] text-[#E9EDEF] mt-1">{contact.about}</div>
         </div>
         <div className="bg-[#111b21] my-3 px-9">
            <div className="flex py-5 items-center text-[#e9edef] text-[16px]">
               <div className="mr-5 text-[#8697a0]">
                  <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" className="">
                     <path fill="currentColor"
                           d="m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"></path>
                  </svg>
               </div>
               <div>
                  Starred Messages
               </div>
               <div className="ml-auto text-[#8697a0]">
                  <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" className=""
                       version="1.1" x="0px" y="0px" enableBackground="new 0 0 10 21" xmlSpace="preserve">
                     <path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                  </svg>
               </div>
            </div>

            <div className="flex py-5 items-center text-[#e9edef] text-[16px]">
               <div className="mr-5 text-[#8697a0]">
                  <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" className="">
                     <path fill="currentColor"
                           d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path>
                  </svg>
               </div>
               <div>
                  Mute notifications
               </div>
               <div className="ml-auto text-[#8697a0]">
                  <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" className=""
                       version="1.1" x="0px" y="0px" enableBackground="new 0 0 10 21" xmlSpace="preserve">
                     <path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                  </svg>
               </div>
            </div>

            <div className="flex py-5 items-center text-[#e9edef] text-[16px]">
               <div className="mr-5 text-[#8697a0]">
                  <svg height="20" viewBox="0 0 36 36" fill="none" preserveAspectRatio="xMidYMid meet" className="">
                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                           d="M18 31.5c.09 0 .182 0 .272-.003a1.5 1.5 0 0 0-.06-3c-.07.002-.14.003-.212.003v3Zm0-24c.071 0 .142 0 .213.002a1.5 1.5 0 0 0 .06-3L18 4.5v3Zm6.515-1.326a1.5 1.5 0 0 0-1.45 2.626c.124.068.246.139.367.212a1.5 1.5 0 1 0 1.554-2.566 13.503 13.503 0 0 0-.47-.272Zm5.039 4.84a1.5 1.5 0 0 0-2.566 1.554c.073.12.144.243.212.366a1.5 1.5 0 0 0 2.626-1.45 13.535 13.535 0 0 0-.272-.47Zm1.943 6.714a1.5 1.5 0 0 0-3 .06 10.76 10.76 0 0 1 0 .425 1.5 1.5 0 0 0 3 .06 13.693 13.693 0 0 0 0-.545Zm-1.67 6.787a1.5 1.5 0 0 0-2.627-1.45c-.068.124-.139.246-.212.367a1.5 1.5 0 1 0 2.566 1.554c.094-.155.185-.312.272-.47Zm-4.841 5.039a1.5 1.5 0 0 0-1.554-2.566c-.12.073-.243.144-.366.212a1.5 1.5 0 0 0 1.45 2.626c.158-.087.315-.178.47-.272ZM18 4.5C10.544 4.5 4.5 10.544 4.5 18S10.544 31.5 18 31.5v-3c-5.8 0-10.5-4.701-10.5-10.5S12.2 7.5 18 7.5v-3Z"></path>
                     <path fill="currentColor"
                           d="M23.325 12.01a.865.865 0 0 1 1.21 1.21l-4.564 6.087a1.951 1.951 0 1 1-2.732-2.732l6.086-4.564Z"></path>
                  </svg>
               </div>
               <div>
                  Disappearing messages
               </div>
               <div className="ml-auto text-[#8697a0]">
                  <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" className=""
                       version="1.1" x="0px" y="0px" enableBackground="new 0 0 10 21" xmlSpace="preserve">
                     <path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                  </svg>
               </div>
            </div>

            <div className="flex py-5 items-center text-[#e9edef] text-[16px]">
               <div className="mr-5 text-[#8697a0]">
                  <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" className="">
                     <path fill="currentColor"
                           d="M17.3 7.6h-.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6 3.3 7.6 5.8v1.8h-.9c-1 0-1.8.8-1.8 1.8v8.9c0 1 .8 1.8 1.8 1.8h10.6c1 0 1.8-.8 1.8-1.8V9.4c0-1-.8-1.8-1.8-1.8zM12 15.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2.7-8.2H9.2V5.8c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v1.8h.1z"></path>
                  </svg>
               </div>
               <div>
                  Encryption
               </div>
               <div className="ml-auto text-[#8697a0]">
                  <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" className=""
                       version="1.1" x="0px" y="0px" enableBackground="new 0 0 10 21" xmlSpace="preserve">
                     <path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path>
                  </svg>
               </div>
            </div>
         </div>
      </div>
   )
}
