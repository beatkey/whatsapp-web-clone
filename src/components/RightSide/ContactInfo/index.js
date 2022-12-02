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
      </div>
   )
}
