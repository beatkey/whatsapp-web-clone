import {useEffect, useRef} from "react";
import MessageWrapper from "./MessageWrapper";

export default function Messages({messages = []}) {
   const messageListWrapper = useRef(null)
   const messageList = useRef(null)

   useEffect(() => {
      if (messageListWrapper.current) {
         messageListWrapper.current.scrollTop = messageList.current.clientHeight
      }
   })



   return (
      <div className="Messages max-h-full w-full relative bg-[#0b141a] border-l border-[rgba(233,237,239,0.12)]">
         <div className="absolute w-full h-full bg-messagesBg bg-repeat bg-[#080a0a] opacity-[0.06]"></div>
         <div ref={messageListWrapper} className="w-full overflow-y-scroll max-h-full scrollbar">
            <div ref={messageList}
                 className="MessageList max-h-full flex flex-col justify-end h-full py-5 relative gap-y-0.5">
               {
                  messages.messages?.map((value, index) =>
                     <MessageWrapper key={index} {...value} />
                  )
               }
            </div>
         </div>
      </div>
   )
}
