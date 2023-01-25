import {useEffect, useRef, useState} from "react";
import MessageWrapper from "./MessageWrapper";

export default function Messages({messages = []}) {
   const messageListWrapper = useRef(null)
   const messageList = useRef(null)
   const [lastMessageTime, setLastMessageTime] = useState(null)

   useEffect(() => {
      if (messageListWrapper.current) {
         messageListWrapper.current.scrollTop = messageList.current.clientHeight
      }
   })

   useEffect(() => {
      messages.messages?.map((value, index) => {
         console.log(value)
      })
   }, [])

   const MessageTime = ({time}) => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let date = new Date(time)
      setLastMessageTime(time)

      //console.log(time, date.getDate() + "-" + date.getHours() + ":" + date.getMinutes())
      //console.log(days[date.getDay()].toUpperCase() + " - " + time + " - " + lastMessageTime)

      return (
         <div className="flex justify-center">
            <div className="bg-[#182229] rounded-[7.5px] px-3 py-1.5 text-[#8696a0] text-[12.5px]">
               {days[date.getDay()].toUpperCase()} {time}
            </div>
         </div>
      )
   }

   function handleScroll(e) {
      //console.log(e.currentTarget.scrollTop)
      //console.log(e.currentTarget.offsetHeight)
   }

   return (
      <div className="Messages max-h-full w-full relative bg-[#0b141a] border-l border-[rgba(233,237,239,0.12)]">
         <div className="absolute w-full h-full bg-messagesBg bg-repeat bg-[#080a0a] opacity-[0.06]"></div>
         <div ref={messageListWrapper} className="relative w-full overflow-y-scroll max-h-full scrollbar"
              onScroll={handleScroll}>
            <div className="sticky top-5 left-0 flex justify-center hidden">
               <div className="bg-[#182229] rounded-[7.5px] px-3 py-1.5 text-[#8696a0] text-[12.5px]">
                  TODAY
               </div>
            </div>
            <div ref={messageList}
                 className="MessageList max-h-full flex flex-col justify-end h-full py-5 relative gap-y-0.5">
               {
                  messages.messages?.map((value, index) => {
                     return <div key={index}>
                        <MessageTime time={value.time} index={index} />
                        <MessageWrapper {...value} />
                     </div>
                  })
               }
            </div>
         </div>
      </div>
   )
}
