import {useEffect, useRef, useState} from "react";
import MessageWrapper from "./MessageWrapper";
import {useSelector} from "react-redux";

export default function Messages({messages = []}) {
   const messageListWrapper = useRef(null)
   const messageList = useRef(null)
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   const moveToMessage = useSelector(state => state.general.moveToMessage)

   useEffect(() => {
      if (moveToMessage !== null) {
         const messageListChildren = messageList.current.children
         for (const value of messageListChildren) {
            const ele = value.querySelector(`[data-id='${moveToMessage}']`)
            if (ele) {
               messageListWrapper.current.scrollTop = ele.offsetTop - 100
               ele.children[0].children[0].classList.add("bg-[#3e5764]")
               setTimeout(() => {
                  ele.children[0].children[0].classList.remove("bg-[#3e5764]")
               }, 500)
            }
         }
      }
   }, [moveToMessage])

   useEffect(() => {
      if (messageListWrapper.current) {
         messageListWrapper.current.scrollTop = messageList.current.clientHeight
      }
   })

   const filteredMessages = messages.messages?.reduce((acc, curr) => {
      const date = new Date(curr.time)
      let dateString = date.toLocaleDateString("en-GB", {day: 'numeric', month: 'numeric', year: 'numeric'})
      const inWeek = curr.time > new Date().getTime() - 604800000 // check in last week
      const inYesterday = curr.time > new Date().getTime() - 172800000 // check in yestarday
      const inToday = curr.time > new Date().getTime() - 86400000 // check in today

      if (inToday) {
         dateString = "TODAY"
      } else if (inYesterday) {
         dateString = "YESTERDAY"
      } else if (inWeek) {
         dateString = days[date.getDay()].toUpperCase()
      }

      if (!acc[dateString]) {
         acc[dateString] = []
      }
      acc[dateString].push(curr)

      return acc
   }, [])

   /*const timeTagStore = []
   const filteredMessages = messages.messages?.reduce((acc, curr) => {
       const date = new Date(curr.time)
       let dateString = date.toLocaleDateString("en-GB", {day: 'numeric', month: 'numeric', year: 'numeric'})
       const inWeek = curr.time > new Date().getTime() - 604800000 // check in last week

       if (inWeek){

       }

       if(!timeTagStore[dateString]){
           timeTagStore.push(dateString)
       }

       console.log(timeTagStore)

       const data = {
           timeTag: dateString,
           ...curr
       }
       acc.push(data)

       return acc
   }, [])*/

   function handleScroll(e) {
      //console.log(e.currentTarget.scrollTop)
      //console.log(e.currentTarget.offsetHeight)
   }

   return (
      <div className="Messages max-h-full w-full relative bg-[#0b141a] border-l border-[rgba(233,237,239,0.12)]">
         <div className="absolute w-full h-full bg-messagesBg bg-repeat bg-[#080a0a] opacity-[0.06]"></div>
         <div ref={messageListWrapper} className="relative w-full overflow-y-scroll max-h-full scrollbar"
              onScroll={handleScroll}>
            <div ref={messageList}
                 className="MessageList max-h-full flex flex-col justify-end h-full py-5 relative gap-y-0.5">
               {
                  Object.entries(filteredMessages).map(([date, messages], index) => {
                     return <div key={index}>
                        <div className="flex justify-center my-4">
                           <div className="bg-[#182229] rounded-[7.5px] px-3 py-1.5 text-[#8696a0] text-[12.5px]">
                              {date}
                           </div>
                        </div>
                        {
                           messages.map((value, index) => {
                              return <div data-id={value.id} key={index} className="my-0.5">
                                 <MessageWrapper {...value} />
                              </div>
                           })
                        }
                     </div>
                  })
               }
            </div>
         </div>
      </div>
   )
}
