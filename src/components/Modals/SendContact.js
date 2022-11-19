import {useState} from "react";

import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../stores/Modal";
import {UserAvatar} from "../Global";

export default function MuteContactModal() {
   const dispatch = useDispatch()
   const contacts = [
      ...useSelector(state => state.contacts),
      ...useSelector(state => state.contacts)
   ] //useSelector(state => state.contacts)
   const [selectedContacts, setSelectedContacts] = useState([])

   function closeModalHandle() {
      dispatch(closeModal())
   }

   function selectContactHandle(e) {
      const value = e.target.value

      if (selectedContacts.find(contact => contact === value)) {
         setSelectedContacts(selectedContacts => selectedContacts.filter(contact => contact !== value))
      } else {
         setSelectedContacts(selectedContacts => [
            ...selectedContacts,
            value
         ])
      }
   }

   return (
      <div className="w-full h-full py-20 absolute bg-[rgba(11,20,26,0.85)] z-10 flex items-center justify-center">
         <div
            className="Content max-h-full overflow-hidden grid grid-rows-[60px_60px_60px_calc(100%-180px)] relative w-[436px] rounded-[3px] bg-[#111b21] shadow-[0_17px_50px_0_rgba(11,20,26,.19),0_12px_15px_0_rgba(11,20,26,.24)] text-[#d1d7db]">
            <div className="Head flex items-center bg-[#202c33] p-5 py-4 text-[20px]">
               <div onClick={closeModalHandle} className="cursor-pointer mr-5">
                  <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                       fill="currentColor" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                     <path enableBackground="new"
                           d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"></path>
                  </svg>
               </div>
               Send Contacts
            </div>
            <div className="Search flex items-center px-3 py-2">
               <div className="InputWrapper bg-color2 w-full px-3 py-1.5 flex items-center rounded-lg">
                  <div className="Icon cursor-pointer text-icon mr-7">
                     <svg viewBox="0 0 24 24" width="24" height="24" className="">
                        <path fill="currentColor"
                              d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path>
                     </svg>
                  </div>
                  <input
                     //onChange={e => setFilterText(e.target.value)}
                     className="w-full bg-[transparent] outline-none placeholder:text-icon placeholder:text-[14px] text-[#d1d7db] text-[15px]"
                     type="text"
                     placeholder="Search..."/>
               </div>
            </div>
            <div className="text-[#008069] text-[16px] py-4 px-8">
               CONTACTS
            </div>
            <div className={(selectedContacts.length > 0 ? "pb-[60px]" : "") + " "}>
               <div className="max-h-full overflow-y-scroll overflow-x-hidden overflow scrollbar">
                  {
                     contacts.map((contact, contactIndex) =>
                        <label key={contactIndex}
                               className={"Message group cursor-pointer flex items-center pl-3.5 hover:bg-[#202c33]"}>
                           <div className="w-16 flex items-center justify-center">
                              <input onChange={selectContactHandle} value={contact.name} name="contacts[]"
                                     type="checkbox"/>
                           </div>
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
                        </label>
                     )
                  }
               </div>
            </div>
            <div
               className={"Bottom flex items-center px-7 absolute bottom-0 left-0 w-full bg-[#1f2c33] transition-all duration-300 " + (selectedContacts.length > 0 ? "h-[60px]" : "h-0")}>
               {
                  selectedContacts.map((value, index) => value + (index + 1 === selectedContacts.length ? "" : ", "))
               }
               <button
                  className={"absolute right-8 top-0 -translate-y-1/2 transition-all duration-300 w-[60px] h-[60px] " + (selectedContacts.length > 0 ? "scale-100" : "scale-0") + " bg-[#00a884] rounded-full flex justify-center items-center"}>
                  <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                       version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                     <path fill="currentColor"
                           d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   )
}
