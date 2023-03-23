import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Status} from "../../Global";
import {setMoveToMessage} from "../../../stores/General";

const Input = ({filterText, setFilterText}) => {
   const input = useCallback(inputElement => {
      inputElement && inputElement.focus()
   })

   return (
      <div className="Search flex items-center px-3 py-2">
         <div className="InputWrapper bg-color2 w-full px-3 py-1.5 flex items-center rounded-lg">
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
                  ref={input}
                  onChange={e => setFilterText(e.target.value)}
                  value={filterText}
                  className="w-full bg-[transparent] outline-none placeholder:text-icon placeholder:text-[14px] text-[#d1d7db] text-[15px]"
                  type="text"
                  placeholder="Search or start new chat"/>
            </div>
         </div>
      </div>
   )
}

export default function SearchChat({setRightSide}) {
   const dispatch = useDispatch()
   const activeMessage = useSelector(state => state.message.activeMessage)
   const messages = useSelector(state => {
      return state.message.messages.find(value => value.name === activeMessage).messages.filter(value => value.type !== "photo")
   })
   const [filterText, setFilterText] = useState("")
   const [searchMessages, setSearchMessages] = useState(null)

   useEffect(() => {
      if (filterText.length > 0){
         setSearchMessages(messages.filter(value => value.message.search(new RegExp(filterText, "i")) > -1))
      }
   }, [filterText])

   const SearchMessagesWrapper = () => {
      if(filterText.length === 0){
         return "";
      }

      return searchMessages == null || searchMessages.length === 0 ?
         <div className="text-center mt-10 text-[#667781] text-sm">
            No messages found
         </div>
         :
         searchMessages.map((value, index) => (
            <div onClick={() => dispatch(setMoveToMessage(value.id))} key={index} className="cursor-pointer hover:bg-[#202c33] flex flex-col p-3 h-[72px] border-b border-[rgba(134,150,160,0.15)] text-[#8696a0]">
               <div className="text-xs mb-1">{new Date(value.time).toLocaleDateString("en-GB", {day: 'numeric', month: 'numeric', year: 'numeric'})}</div>
               <div className="TextLineClamp1 text-sm flex items-center">
                  <div className="inline-block">
                     <Status type="sended" />
                  </div>
                  {value.message}
               </div>
            </div>
         ))
   }

   return (
      <div className="w-[75%] grid grid-rows-[60px_60px_calc(100%-120px)] border-l bg-[#111b21] border-[#111b21]">
         <div className="Head flex items-center bg-[#202c33] p-5 py-4 text-[16px] text-[#d1d7db]">
            <div onClick={() => setRightSide(false)} className="cursor-pointer mr-5">
               <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                    fill="#8696a0" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                  <path enableBackground="new"
                        d="M19.1,17.2l-5.3-5.3l5.3-5.3l-1.8-1.8L12,10.2L6.7,4.9L4.9,6.6 l5.3,5.3l-5.3,5.3L6.7,19l5.3-5.3l5.3,5.3L19.1,17.2z"></path>
               </svg>
            </div>
            Search Messages
         </div>
         <div>
            <Input filterText={filterText} setFilterText={setFilterText} />
         </div>
         <div className="overflow-y-scroll overflow-x-hidden overflow scrollbar">
            <SearchMessagesWrapper />
            {/*<div className="cursor-pointer hover:bg-[#202c33] flex flex-col p-3 h-[72px] border-b border-[rgba(134,150,160,0.15)] text-[#8696a0]">
               <div className="text-xs mb-1">Friday</div>
               <div className="TextLineClamp1 text-sm flex items-center">
                  <div className="inline-block">
                     <Status type="sended" />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti earum eius esse, facere nemo sit veniam! Debitis dolorem inventore nobis non odit. Ad facere quas quis quos. Quidem, repudiandae?
               </div>
            </div>*/}
            <div className="text-center py-16 text-[#667781] text-sm">
               Search for messages with {activeMessage}
            </div>
         </div>
      </div>
   )
}
